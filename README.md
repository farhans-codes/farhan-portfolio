# Farhan — Portfolio

Muhammed Farhan Sadique Mahi-এর পোর্টফোলিও। সম্পূর্ণ **HTML ও CSS**; React, TypeScript, JavaScript বা npm প্রয়োজন নেই।

## সাইট দেখুন

`index.html` ডাবলক্লিক করে ব্রাউজারে খুলুন। ছবি, ফন্ট, ডিজাইন ও CV একই ফোল্ডারের `assets/` থেকে লোড হয়। বাইরের ওয়েবসাইটের লিংক খুলতে ইন্টারনেট লাগবে।

চাইলে লোকাল সার্ভারেও চালাতে পারেন:

```sh
python3 -m http.server 3000 --bind 127.0.0.1
```

তারপর [localhost:3000](http://localhost:3000) খুলুন। লেখা বা ডিজাইন বদলে ব্রাউজার রিফ্রেশ করুন।

## কোন ফাইলে কী বদলাবেন

- `index.html` — নাম, পরিচিতি, প্রজেক্ট, অভিজ্ঞতা, গবেষণা, যোগাযোগ, পেজ টাইটেল ও শেয়ার মেটাডেটা।
- `styles.css` — রং, ফন্ট, স্পেসিং, লেআউট ও মোবাইলের ডিজাইন। ফাইলের শুরুতে `:root`-এ সাধারণ ডিজাইন টোকেন আছে।
- `assets/images/farhan-portrait.webp` — ওয়েবসাইটের অপ্টিমাইজ করা ছবি।
- `assets/images/farhan-portrait.png` — ছবির পূর্ণ রেজোলিউশনের কপি।
- `assets/images/ai-limit-status.png` — প্রজেক্টের স্ক্রিনশট।
- `assets/farhan-mahi-cv.pdf` — ডাউনলোডযোগ্য CV। নতুন PDF দিয়ে এটি প্রতিস্থাপন করতে পারেন।
- `assets/favicon.svg` — ব্রাউজার ট্যাবের আইকন।
- `scripts/create_cv.py` — ঐচ্ছিক CV তৈরির স্ক্রিপ্ট; শুধু এটি চালানোর জন্য ReportLab ও pypdf লাগে।

`index.html`, `styles.css` ও `assets/` একসঙ্গে রাখুন। কোনো build ছাড়াই সাইট চলে।

## হোস্টিংয়ের ফাইল

হোস্টিংয়ের জন্য শুধু প্রয়োজনীয় ফাইলগুলো `dist/`-এ কপি করতে:

```sh
sh scripts/build.sh
```

`dist/`-এর ভেতরের ফাইলগুলো স্ট্যাটিক হোস্টে আপলোড করুন, অথবা `outputs/portfolio-static.zip` আনজিপ করে ব্যবহার করুন। সাইটের সব asset path relative, তাই GitHub Pages-এর repository subfolder-এও আলাদা base-path বদলাতে হয় না।

`netlify.toml`-এ এই কপি কমান্ড ও `dist` প্রকাশের সেটিং দেওয়া আছে। `.openai/hosting.json`-ও একই ফোল্ডার ব্যবহার করে। এই স্ক্রিপ্টগুলো নিজে থেকে Git commit, push বা deployment করে না।

## ঐচ্ছিক যাচাই

Python থাকলে কোনো অতিরিক্ত প্যাকেজ ইনস্টল না করেই যাচাই করা যায়:

```sh
python3 scripts/check_site.py
sh scripts/build.sh
python3 scripts/check_site.py dist
```

এতে সেকশন লিংক, লোকাল ফাইল, ছবির বিকল্প লেখা, মেটাডেটা ও ব্যক্তিগত প্রজেক্টের সীমা যাচাই হয়। এটি ব্রাউজারে দৃশ্যমান ডিজাইন পরীক্ষার বিকল্প নয়।

## Content sources

Facts were checked on 6 September 2026 against the supplied two-page CV, connected GitHub profile, repository source and publication records.

- [GitHub profile](https://github.com/farhans-codes)
- [AI Limit Status](https://github.com/farhans-codes/ai_limit_status): featured **personal** open-source project. Real screenshot from `docs/screenshots/macos-usage-popover.png` in that repository. Independent project, not endorsed by OpenAI or Anthropic.
- [Task Manager](https://github.com/farhans-codes/task_manager): Flutter source verifies REST integration, authentication and task status views.
- [Brain tumour classification prototype](https://github.com/farhans-codes/brain_tumor_webapp): Python/Flask/TensorFlow academic project; no patient images or reports are copied into this site.
- [One Ummah](https://ummah.one/): appears **only in employment experience**, as an IRD Foundation project.
- [DeepMedScan](https://doi.org/10.1504/IJAIH.2026.154457): co-authored journal article, 2026.
- [DragonFruitQualityNet](https://arxiv.org/abs/2508.07306): co-authored preprint. The supplied CV says 2026; the authoritative arXiv record says 10 August 2025, so the portfolio and downloadable CV use 2025.

The downloadable CV is newly typeset from the supplied CV and verified public projects; it is not a byte-for-byte copy of the attached images.

## Portrait edit

The current portrait was edited with built-in ImageGen on 8 September 2026 from the newly supplied `IMG_20260908_144033288_HDR.jpg`. The room background was replaced with a dark charcoal studio backdrop and the T-shirt with a dark collared overshirt. The edit prioritised the original facial features, hair, full beard and neutral expression; generated lighting and fine texture are not pixel-identical to the source.

The PNG master is `assets/images/farhan-portrait.png`; the website uses `assets/images/farhan-portrait.webp` at the returned native 1122 × 1402 resolution, encoded with WebP quality 95 and sharp YUV conversion. The image has not been enlarged.

Final prompt:

```text
Use case: identity-preserve
Asset type: developer portfolio photographic portrait, 4:5 vertical
Input images: Image 1 is the sole edit target and sole identity reference, the supplied original selfie.
Primary request: Edit this exact photograph, preserving this exact person. Change only the room background to a seamless dark charcoal studio backdrop (approximately #101113 with very subtle tonal variation), and the T-shirt to a clean dark charcoal/navy collared overshirt. Tasteful, understated developer portfolio presentation.
Composition/framing: Centered frontal head-and-shoulders portrait, 4:5 vertical. Preserve the same frontal head angle, gaze, neutral expression and body proportions. Include all natural hair with modest headroom and chest/shoulders visible.
Lighting: Natural soft photographic lighting, preserving skin tone and realistic skin texture.
Identity constraints: Preserve the exact face geometry, eyes, nose, lips, cheeks, forehead, eyebrows, ears, skin marks and texture. Preserve the natural voluminous hair and long full beard exactly in shape and character. Keep the face unchanged; do not reconstruct or reinterpret it. No beautification, face slimming, age change, skin smoothing, beard trimming or hair restyling.
Avoid: harsh rim lighting, painterly textures, illustrated or synthetic appearance, exaggerated retouching, accessories, props, logos, text, watermark.
```

## Asset licenses

The self-hosted Geist and Geist Mono fonts use the SIL Open Font License (`assets/fonts/OFL.txt`). The inline SVG icons retain the Lucide/Feather notices in `assets/icons-LICENSE.txt`. The technology marquee uses locally stored Devicon original SVG logos in `assets/icons/`; their MIT notice and pinned source are included in the same license file. GitHub's monochrome mark is displayed in white for the dark theme.
