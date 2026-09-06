"""Check the static portfolio using only Python's standard library."""
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.ids = []
        self.references = []
        self.headings = 0
        self.stack = []
        self.feed(html)
        assert not self.stack, f"Unclosed elements: {self.stack}"

    def handle_starttag(self, tag, attrs):
        if tag not in ("meta", "link", "img", "br", "hr", "input", "source", "wbr"):
            self.stack.append(tag)
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        for key in ("src", "href"):
            if key in attrs:
                self.references.append(attrs[key])
        self.headings += tag == "h1"
        if tag == "img":
            assert attrs.get("alt"), "Images need descriptive alternative text"
        assert tag != "script", "This portfolio should work without JavaScript"

    def handle_endtag(self, tag):
        assert self.stack and self.stack.pop() == tag, f"Unbalanced element: {tag}"


if __name__ == "__main__":
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1]
    html = (root / "index.html").read_text()
    css = (root / "styles.css").read_text()
    page = Page(html)
    assert page.headings == 1, "One main heading expected"
    assert len(page.ids) == len(set(page.ids)), "Duplicate section IDs"
    assert "<title>Farhan — Flutter Developer</title>" in html
    assert 'href="assets/farhan-mahi-cv.pdf" download' in " ".join(html.split())
    assert "mailto:sadiquefarhan038@gmail.com" in html
    assert not re.search(r"className|fetchPriority|_next/|@import|@theme", html + css)
    work = re.search(r'<section\b[^>]*id="work".*?</section>', html, re.S)
    assert work and "AI Limit Status" in work[0] and "One Ummah" not in work[0]
    references = page.references + re.findall(r'url\(["\']?([^"\')]+)', css)
    for reference in references:
        url = urlsplit(reference)
        if url.scheme or url.netloc:
            continue
        assert not url.path.startswith("/"), f"Use a relative path: {reference}"
        if url.path:
            assert (root / unquote(url.path)).is_file(), f"Missing file: {reference}"
        elif url.fragment:
            assert url.fragment in page.ids, f"Missing section: {reference}"
    print(f"Verified {len(references)} links/assets, metadata, image labels and personal-project scope.")
