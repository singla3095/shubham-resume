"""Generate Shubham Singla's two-page, ATS-safe Staff Engineer resume."""

from pathlib import Path

import reportlab
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Shubham-Singla-Staff-Engineer-Resume-2026.pdf"
REPORTLAB_FONTS = Path(reportlab.__file__).resolve().parent / "fonts"

# Bitstream Vera ships with ReportLab, so these fonts are available wherever
# the generator runs and are embedded into the PDF instead of being substituted.
pdfmetrics.registerFont(TTFont("ResumeSans", str(REPORTLAB_FONTS / "Vera.ttf")))
pdfmetrics.registerFont(TTFont("ResumeSansBold", str(REPORTLAB_FONTS / "VeraBd.ttf")))
pdfmetrics.registerFont(TTFont("ResumeSansItalic", str(REPORTLAB_FONTS / "VeraIt.ttf")))
pdfmetrics.registerFontFamily(
    "ResumeSans",
    normal="ResumeSans",
    bold="ResumeSansBold",
    italic="ResumeSansItalic",
    boldItalic="ResumeSansBold",
)

INK = colors.HexColor("#172033")
TEXT = colors.HexColor("#344054")
MUTED = colors.HexColor("#667085")
BLUE = colors.HexColor("#2457E6")
BLUE_DARK = colors.HexColor("#173DA8")
LINE = colors.HexColor("#D9E0EA")
SOFT = colors.HexColor("#EEF3FF")

base = getSampleStyleSheet()

NAME = ParagraphStyle(
    "Name",
    parent=base["Title"],
    fontName="ResumeSansBold",
    fontSize=27,
    leading=31,
    textColor=INK,
    alignment=TA_CENTER,
    spaceAfter=4,
)
TITLE = ParagraphStyle(
    "Title",
    parent=base["Normal"],
    fontName="ResumeSansBold",
    fontSize=11,
    leading=14,
    textColor=BLUE,
    alignment=TA_CENTER,
    spaceAfter=7,
)
CONTACT = ParagraphStyle(
    "Contact",
    parent=base["Normal"],
    fontName="ResumeSans",
    fontSize=8.2,
    leading=11,
    textColor=MUTED,
    alignment=TA_CENTER,
)
SECTION = ParagraphStyle(
    "Section",
    parent=base["Heading2"],
    fontName="ResumeSansBold",
    fontSize=10.2,
    leading=13,
    textColor=BLUE_DARK,
    spaceBefore=13,
    spaceAfter=6,
)
SUMMARY = ParagraphStyle(
    "Summary",
    parent=base["BodyText"],
    fontName="ResumeSans",
    fontSize=9.25,
    leading=13.6,
    textColor=TEXT,
)
KEYWORDS = ParagraphStyle(
    "Keywords",
    parent=base["BodyText"],
    fontName="ResumeSans",
    fontSize=8.55,
    leading=12,
    textColor=TEXT,
    backColor=SOFT,
    borderPadding=(7, 9, 7, 9),
    spaceBefore=2,
)
JOB_TITLE = ParagraphStyle(
    "JobTitle",
    parent=base["Heading3"],
    fontName="ResumeSansBold",
    fontSize=10.8,
    leading=13,
    textColor=INK,
    spaceAfter=2,
)
JOB_META = ParagraphStyle(
    "JobMeta",
    parent=base["Normal"],
    fontName="ResumeSansBold",
    fontSize=8.1,
    leading=10.5,
    textColor=BLUE,
    spaceAfter=4,
)
BODY = ParagraphStyle(
    "Body",
    parent=base["BodyText"],
    fontName="ResumeSans",
    fontSize=8.85,
    leading=12.25,
    textColor=TEXT,
)
BULLET = ParagraphStyle(
    "Bullet",
    parent=BODY,
    leftIndent=12,
    firstLineIndent=-8,
    bulletIndent=0,
    bulletFontName="ResumeSans",
    bulletFontSize=8.85,
    spaceBefore=1.4,
)
SKILLS = ParagraphStyle(
    "Skills",
    parent=BODY,
    fontSize=8.65,
    leading=12.5,
    spaceAfter=4,
)
PROJECT_TITLE = ParagraphStyle(
    "ProjectTitle",
    parent=JOB_TITLE,
    fontSize=10,
    leading=12.5,
)
SMALL = ParagraphStyle(
    "Small",
    parent=BODY,
    fontSize=8.25,
    leading=11.2,
)
PAGE_HEADER = ParagraphStyle(
    "PageHeader",
    parent=base["Normal"],
    fontName="ResumeSansBold",
    fontSize=7.2,
    leading=9,
    textColor=MUTED,
)
PAGE_NUMBER = ParagraphStyle(
    "PageNumber",
    parent=PAGE_HEADER,
    alignment=TA_RIGHT,
)


def section(title):
    return [
        Paragraph(title.upper(), SECTION),
        HRFlowable(width="100%", thickness=0.7, color=LINE, spaceBefore=0, spaceAfter=7),
    ]


def role(company, title, location, period, bullets):
    return KeepTogether(
        [
            Paragraph(f"{title} | {company}", JOB_TITLE),
            Paragraph(f"{location} | {period}", JOB_META),
            *[Paragraph(item, BULLET, bulletText="-") for item in bullets],
            Spacer(1, 10),
        ]
    )


def project(name, description, url, technologies):
    return KeepTogether(
        [
            Paragraph(name, PROJECT_TITLE),
            Paragraph(
                f"{description}<br/><font color='#667085'><b>Technologies:</b> {technologies} | "
                f"<a href='{url}' color='#2457E6'>{url.replace('https://', '')}</a></font>",
                BODY,
            ),
            Spacer(1, 9),
        ]
    )


def draw_page(canvas, doc):
    canvas.saveState()
    width, height = A4

    if doc.page > 1:
        canvas.setFont("ResumeSansBold", 7.2)
        canvas.setFillColor(MUTED)
        canvas.drawString(doc.leftMargin, height - 0.36 * inch, "SHUBHAM SINGLA")
        canvas.drawRightString(width - doc.rightMargin, height - 0.36 * inch, "STAFF SOFTWARE ENGINEER")
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.6)
        canvas.line(doc.leftMargin, height - 0.44 * inch, width - doc.rightMargin, height - 0.44 * inch)

    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.6)
    canvas.line(doc.leftMargin, 0.43 * inch, width - doc.rightMargin, 0.43 * inch)
    canvas.setFont("ResumeSans", 6.8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.25 * inch, "SHUBHAM SINGLA | STAFF SOFTWARE ENGINEER")
    canvas.drawRightString(width - doc.rightMargin, 0.25 * inch, f"PAGE {doc.page} OF 2")
    canvas.restoreState()


doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    leftMargin=0.65 * inch,
    rightMargin=0.65 * inch,
    topMargin=0.62 * inch,
    bottomMargin=0.58 * inch,
    title="Shubham Singla - Staff Software Engineer",
    author="Shubham Singla",
    subject="Staff Software Engineer resume - AI systems, distributed platforms, and engineering leadership",
    keywords="Staff Software Engineer, AI Agents, LangGraph, LLM, Distributed Systems, Java, Go, Python, AWS, Payments",
    initialFontName="ResumeSans",
    initialFontSize=12,
    initialLeading=14.4,
)

story = [
    Paragraph("Shubham Singla", NAME),
    Paragraph("STAFF SOFTWARE ENGINEER | AI SYSTEMS | DISTRIBUTED PLATFORMS", TITLE),
    Paragraph(
        "Bengaluru, India &nbsp;|&nbsp; "
        "<a href='mailto:shubham101203095@gmail.com' color='#667085'>shubham101203095@gmail.com</a> &nbsp;|&nbsp; "
        "<a href='https://www.linkedin.com/in/shubham-singla-864a55106/' color='#667085'>LinkedIn</a> &nbsp;|&nbsp; "
        "<a href='https://github.com/singla3095' color='#667085'>GitHub</a> &nbsp;|&nbsp; "
        "<a href='https://singla3095.github.io/shubham-resume/' color='#667085'>Portfolio</a>",
        CONTACT,
    ),
    Spacer(1, 8),
    HRFlowable(width="100%", thickness=1.5, color=BLUE, spaceBefore=0, spaceAfter=3),
    *section("Professional summary"),
    Paragraph(
        "Staff Software Engineer with 10+ years of experience building agentic AI products, "
        "low-latency payment systems, cloud platforms, and enterprise software across India and Singapore. "
        "Experienced in turning ambiguous product problems into production architecture, leading technical "
        "delivery, and mentoring engineers through design, implementation, and operational ownership.",
        SUMMARY,
    ),
    Spacer(1, 6),
    Paragraph(
        "<b>Core expertise:</b> Agentic AI | LLM orchestration | LangGraph | Multi-agent systems | "
        "Distributed systems | Recommender systems | Payments | Cloud architecture | Technical leadership",
        KEYWORDS,
    ),
    *section("Professional experience"),
    role(
        "Indeed",
        "Staff Software Engineer",
        "Bengaluru, India",
        "Jun 2025 - Present",
        [
            "Architect and ship intelligent-agent and multi-agent systems with LangGraph, enabling autonomous components to collaborate on complex hiring workflows.",
            "Integrate and optimize multiple LLM APIs through custom tooling, creating a reliable orchestration layer for agent communication and product integration.",
            "Develop an AI-powered hiring agent for intelligent candidate sourcing and automation of early talent-acquisition workflows.",
            "Build a context-aware recommendation platform that evaluates user, employer, and job signals to recommend next-best actions and improve decision-making.",
        ],
    ),
    role(
        "Indeed",
        "Senior Software Engineer",
        "Bengaluru, India",
        "Sep 2022 - Jun 2025",
        [
            "Led delivery of high-impact backend initiatives across product domains, balancing platform performance, user engagement, reliability, and business goals.",
            "Mentored engineers through system design, code reviews, production ownership, and pragmatic technical trade-offs.",
            "Partnered with product and engineering stakeholders to turn ambiguous requirements into scalable services and durable product improvements.",
        ],
    ),
    role(
        "Grab",
        "Senior Backend Engineer",
        "Singapore",
        "Jun 2019 - Sep 2022",
        [
            "Built the GrabPay debit-card platform from the ground up as one of the project's first engineers.",
            "Designed scalable, high-volume, low-latency services across Grab's payments ecosystem.",
            "Led a team of three engineers across business requirements, system design, implementation, code reviews, and delivery quality.",
            "Contributed to architecture and operational decisions for payment services where reliability, latency, and correctness were critical.",
        ],
    ),
    PageBreak(),
    *section("Earlier experience"),
    role(
        "Works Applications",
        "Senior Software Engineer",
        "Singapore",
        "Jun 2018 - Jun 2019",
        [
            "Designed serverless architecture for an on-premise to AWS migration using Lambda, DynamoDB, S3, and Elasticsearch.",
            "Created Spark batch-processing workflows on AWS Batch for large-scale file processing.",
            "Helped modernize enterprise commerce and inventory systems for a Japanese ERP platform.",
        ],
    ),
    role(
        "Works Applications",
        "Software Developer",
        "Singapore",
        "Oct 2016 - Jun 2018",
        [
            "Built customer-facing commerce and inventory capabilities from requirements through production delivery.",
            "Translated customer needs into maintainable application workflows and user-facing product improvements.",
        ],
    ),
    role(
        "Walmart eCommerce",
        "Software Developer",
        "Bengaluru, India",
        "Jan 2016 - Jul 2016",
        [
            "Built a reusable tooltip system for ASDA's e-commerce customer-satisfaction team and shipped production-facing experience improvements.",
        ],
    ),
    *section("Selected projects"),
    project(
        "NIFTY50 Trader Pro",
        "Built a market-intelligence dashboard for reading market structure, momentum, technical signals, and portfolio state in one focused workflow.",
        "https://singla3095.github.io/stock-trading/",
        "React, market data, technical analysis",
    ),
    project(
        "Digital Bio Maker",
        "Built a no-code portfolio tool that turns a professional profile into a clean, shareable digital presence.",
        "https://singla3095.github.io/digital-bio-maker/",
        "React, design systems, creator tooling",
    ),
    *section("Technical skills"),
    Paragraph("<b>Languages:</b> Java, Go, Python, SQL", SKILLS),
    Paragraph(
        "<b>AI and machine learning:</b> LangGraph, LLM APIs, Generative AI, AI Agents, "
        "Multi-Agent Systems, Recommender Systems, NLP",
        SKILLS,
    ),
    Paragraph(
        "<b>Backend and data:</b> Distributed Systems, Kafka, Redis, Elasticsearch, REST APIs, "
        "MySQL, MongoDB, DynamoDB",
        SKILLS,
    ),
    Paragraph(
        "<b>Cloud and platform:</b> AWS, Lambda, AWS Batch, S3, Kubernetes, Terraform, "
        "Serverless Architecture, Spark",
        SKILLS,
    ),
    Paragraph(
        "<b>Leadership:</b> System Design, Technical Strategy, Mentoring, Code Review, "
        "Cross-Functional Delivery, Production Ownership",
        SKILLS,
    ),
    *section("Education and credentials"),
    Paragraph(
        "<b>Bachelor's degree, Computer Science</b><br/>"
        "Thapar Institute of Engineering &amp; Technology | 2012 - 2016",
        BODY,
    ),
    Spacer(1, 6),
    Paragraph(
        "<b>MongoDB with Java Spring Boot</b> | Udemy | Issued Jun 2023<br/>"
        "<b>Languages:</b> English, Hindi",
        SMALL,
    ),
]

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc.build(
    story,
    onFirstPage=draw_page,
    onLaterPages=draw_page,
)
print(OUTPUT)
