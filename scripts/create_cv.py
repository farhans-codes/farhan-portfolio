"""Rebuild the portfolio CV with ReportLab and validate its two pages."""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, PageBreak, HRFlowable
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public/farhan-mahi-cv.pdf'
INK = colors.HexColor('#182231')
MUTED = colors.HexColor('#526071')
BLUE = colors.HexColor('#235baa')
STYLES = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=23, leading=28, textColor=INK, spaceAfter=8),
    'title': ParagraphStyle('title', fontName='Helvetica', fontSize=12, leading=17, textColor=BLUE, spaceAfter=10),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=11, leading=15, textColor=BLUE, spaceBefore=18, spaceAfter=8),
    'heading': ParagraphStyle('heading', fontName='Helvetica-Bold', fontSize=11, leading=15, textColor=INK, spaceBefore=7, spaceAfter=4),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10, leading=15, textColor=INK, spaceAfter=7),
    'meta': ParagraphStyle('meta', fontName='Helvetica', fontSize=9, leading=13, textColor=MUTED, spaceAfter=6),
}
story = []
def p(text, style='body'):
    story.append(Paragraph(text, STYLES[style]))
def section(text):
    p(text.upper(), 'section')
def bullet(text):
    p('&#8226; ' + text)

p('Muhammed Farhan<br/>Sadique Mahi', 'name')
p('Flutter Developer | Mobile &amp; Desktop Applications', 'title')
p('Dhaka, Bangladesh &nbsp; | &nbsp; +8801881960259', 'meta')
p('<link href="mailto:sadiquefarhan038@gmail.com">sadiquefarhan038@gmail.com</link> &nbsp; | &nbsp; <link href="https://github.com/farhans-codes">github.com/farhans-codes</link>', 'meta')
story.append(HRFlowable(width='100%', thickness=0.7, color=BLUE, spaceBefore=7))
section('Profile')
p('Flutter developer with experience delivering mobile interfaces, desktop utilities and applied AI projects. Focused on feature-first Clean Architecture, maintainable code and practical problem-solving. Uses AI coding assistants while retaining ownership of code security, correctness and architecture.')
section('Professional experience')
p('Junior Flutter Developer | IRD Foundation', 'heading')
p('December 2025 - Present', 'meta')
bullet('Contribute to One Ummah, an IRD Foundation app available on Android and iOS; translate Figma designs into functional Flutter interfaces.')
bullet('Develop core features including a dynamic Qibla compass and a YouTube live-streaming module for Makkah and Madinah feeds.')
bullet('Maintain the application, resolve bugs and deliver feature updates. Review AI-assisted code for correctness and alignment with feature-first Clean Architecture.')
p('Intern Flutter Developer | IRD Foundation', 'heading')
p('September 2025 - December 2025', 'meta')
bullet('Collaborated with senior engineers to turn UI requirements into modular, reusable components.')
bullet('Gained hands-on experience with the software development lifecycle and Git/GitHub version control.')
section('Selected personal projects')
p('AI Limit Status | Flutter desktop application', 'heading')
p('Open-source utility that displays Codex and Claude usage limits in the macOS menu bar and Windows taskbar. Includes automatic refresh, usage notifications and release downloads. Independent community project, MIT licensed.')
p('Task Manager | Flutter application', 'heading')
p('Task management application with REST API integration, authentication, task status views and profile management.')
p('Brain Tumour Classification | Academic web prototype', 'heading')
p('Python, Flask and TensorFlow image-classification prototype with image upload, model inference and PDF report generation. Academic research software.')

story.append(PageBreak())
p('Muhammed Farhan Sadique Mahi', 'heading')
p('Flutter Developer | Skills, research &amp; education', 'meta')
story.append(HRFlowable(width='100%', thickness=0.7, color=BLUE, spaceBefore=7))
section('Technical skills')
p('<b>Primary:</b> Flutter, Dart, Material UI widgets, feature-first Clean Architecture')
p('<b>Languages:</b> Python, C; basic Java and Kotlin')
p('<b>Data &amp; AI:</b> SQL, REST API integration, TensorFlow Lite, image classification')
p('<b>Tools:</b> Android Studio, VS Code, Git, GitHub')
p('<b>AI coding tools:</b> Cursor, Claude Code, Codex, Antigravity')
section('Research & publications')
p('DeepMedScan: a CNN-driven brain tumour detection system with web-based clinical decision support', 'heading')
p('Co-author. International Journal of Artificial Intelligence in Healthcare, Vol. 1, No. 2, 2026, pp. 148-159.', 'meta')
p('<link href="https://doi.org/10.1504/IJAIH.2026.154457">doi.org/10.1504/IJAIH.2026.154457</link>', 'meta')
p('DragonFruitQualityNet: A Lightweight Convolutional Neural Network for Real-Time Dragon Fruit Quality Inspection on Mobile Devices', 'heading')
p('Co-author. arXiv preprint, submitted August 2025. Lightweight CNN for on-device fruit quality classification.', 'meta')
p('<link href="https://arxiv.org/abs/2508.07306">arxiv.org/abs/2508.07306</link>', 'meta')
section('Education')
p('BSc in Computer Science &amp; Engineering | 2021-2025', 'heading')
p('Manarat International University, Dhaka | CGPA: 3.37 / 4.00')
p('Higher Secondary School Certificate | 2018-2020', 'heading')
p('Ideal College, Dhaka | GPA: 4.58 / 5.00')
p('Secondary School Certificate | 2017-2018', 'heading')
p('Cambrian School &amp; College, Dhaka | GPA: 4.44 / 5.00')
section('Training & leadership')
p('Flutter App Development Course - Ostad, 2025')
p('President, MIU CSE Club - 2024<br/>Campus Ambassador, Robomen BD - 2023')
p('Participated in the AUST Rover Challenge and MIU CSE Programming Contest.')

def footer(canvas, doc):
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(20 * mm, 12 * mm, 'Muhammed Farhan Sadique Mahi | Curriculum Vitae')
    canvas.drawRightString(190 * mm, 12 * mm, str(doc.page))

SimpleDocTemplate(str(OUTPUT), pagesize=(210 * mm, 297 * mm), rightMargin=20 * mm, leftMargin=20 * mm, topMargin=18 * mm, bottomMargin=22 * mm, title='Muhammed Farhan Sadique Mahi - Curriculum Vitae', author='Muhammed Farhan Sadique Mahi').build(story, onFirstPage=footer, onLaterPages=footer)
reader = PdfReader(OUTPUT)
assert len(reader.pages) == 2, 'CV must remain two pages'
assert all(page.extract_text().strip() for page in reader.pages), 'CV text must be selectable'
print('CV validated: 2 pages, selectable text.')
