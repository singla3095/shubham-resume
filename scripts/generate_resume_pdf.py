"""Generate Shubham Singla's one-page, ATS-friendly resume."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Shubham-Singla-Staff-Software-Engineer-Resume.pdf"

INK = colors.HexColor("#182033")
MUTED = colors.HexColor("#4D596C")
BLUE = colors.HexColor("#2457E6")
LINE = colors.HexColor("#D9DFE8")

base = getSampleStyleSheet()

NAME = ParagraphStyle(
    "Name", parent=base["Title"], fontName="Helvetica-Bold", fontSize=22,
    leading=26, textColor=INK, spaceAfter=3, alignment=1,
)
ROLE = ParagraphStyle(
    "Role", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10,
    leading=12, textColor=BLUE, spaceAfter=6, alignment=1,
)
CONTACT = ParagraphStyle(
    "Contact", parent=base["Normal"], fontName="Helvetica", fontSize=8,
    leading=10, textColor=MUTED, alignment=1,
)
SUMMARY = ParagraphStyle(
    "Summary", parent=base["BodyText"], fontName="Helvetica", fontSize=8.7,
    leading=12, textColor=INK,
)
SECTION = ParagraphStyle(
    "Section", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=9,
    leading=11, textColor=BLUE, spaceBefore=11, spaceAfter=6,
)
JOB_TITLE = ParagraphStyle(
    "JobTitle", parent=base["Heading3"], fontName="Helvetica-Bold", fontSize=9.5,
    leading=11.5, textColor=INK,
)
JOB_DATE = ParagraphStyle(
    "JobDate", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=7.8,
    leading=10, textColor=MUTED, alignment=2,
)
JOB_META = ParagraphStyle(
    "JobMeta", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=7.8,
    leading=9.5, textColor=BLUE, spaceAfter=2.5,
)
BODY = ParagraphStyle(
    "Body", parent=base["BodyText"], fontName="Helvetica", fontSize=8.1,
    leading=10.8, textColor=MUTED,
)
BULLET = ParagraphStyle(
    "Bullet", parent=BODY, leftIndent=9, firstLineIndent=-6.5,
    bulletIndent=0, spaceBefore=1,
)
COMPACT = ParagraphStyle(
    "Compact", parent=BODY, fontSize=7.8, leading=10.5,
)
FOOTER = ParagraphStyle(
    "Footer", parent=base["Normal"], fontName="Helvetica", fontSize=6.3,
    leading=8, textColor=MUTED, alignment=1,
)


def job(company, role, location, period, bullets, focus):
    heading = Table(
        [[Paragraph(f"{role} | {company}", JOB_TITLE), Paragraph(period, JOB_DATE)]],
        colWidths=[5.45 * inch, 1.55 * inch],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]),
    )
    return KeepTogether([
        heading,
        Paragraph(location, JOB_META),
        *[Paragraph(item, BULLET, bulletText="-") for item in bullets],
        Paragraph(f"<b>Focus:</b> {focus}", COMPACT),
        Spacer(1, 6),
    ])


def draw_page(canvas, doc):
    canvas.saveState()
    width, _ = LETTER
    canvas.setStrokeColor(LINE)
    canvas.line(doc.leftMargin, 0.38 * inch, width - doc.rightMargin, 0.38 * inch)
    canvas.setFont("Helvetica", 6.1)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.23 * inch, "SHUBHAM SINGLA - STAFF SOFTWARE ENGINEER")
    canvas.drawRightString(width - doc.rightMargin, 0.23 * inch, "RESUME")
    canvas.restoreState()


doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=LETTER,
    leftMargin=0.44 * inch,
    rightMargin=0.44 * inch,
    topMargin=0.38 * inch,
    bottomMargin=0.46 * inch,
    title="Shubham Singla - Staff Software Engineer",
    author="Shubham Singla",
    subject="Professional resume",
)

story = [
    Paragraph("Shubham Singla", NAME),
    Paragraph("STAFF SOFTWARE ENGINEER | AI AGENTS | BACKEND SYSTEMS", ROLE),
    Paragraph(
        "Bengaluru, India  |  "
        "<a href='mailto:shubham101203095@gmail.com' color='#4D596C'>shubham101203095@gmail.com</a>  |  "
        "<a href='https://www.linkedin.com/in/shubham-singla-864a55106/' color='#4D596C'>linkedin.com/in/shubham-singla-864a55106</a>  |  "
        "<a href='https://github.com/singla3095' color='#4D596C'>github.com/singla3095</a>",
        CONTACT,
    ),
    Spacer(1, 6),
    Table([[""]], colWidths=[doc.width], rowHeights=[1], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), BLUE)])),
    Paragraph("SUMMARY", SECTION),
    Paragraph(
        "Staff Software Engineer at Indeed with 10+ years of experience building AI agents, payment systems, cloud platforms, and enterprise products across India and Singapore. Combines hands-on architecture with team leadership and pragmatic production delivery.",
        SUMMARY,
    ),
    Paragraph("EXPERIENCE", SECTION),
    job(
        "Indeed", "Staff Software Engineer", "Bengaluru, India", "Jun 2025 - Present",
        [
            "Develop and deploy intelligent agents and multi-agent architectures with LangGraph.",
            "Integrate and optimize multiple LLM APIs through custom tooling for efficient agent communication.",
            "Build an AI-powered hiring agent for candidate sourcing and a context-aware recommendation platform for employers.",
        ],
        "AI agents, LangGraph, LLMs, generative AI, Python, recommender systems, NLP",
    ),
    job(
        "Indeed", "Senior Software Engineer", "Bengaluru, India", "Sep 2022 - Jun 2025",
        [
            "Built and improved production software for Indeed before promotion to Staff Software Engineer.",
        ],
        "Backend systems, platform engineering, product delivery",
    ),
    job(
        "Grab", "Senior Backend Engineer", "Singapore", "Jun 2019 - Sep 2022",
        [
            "Built the GrabPay debit-card platform from the ground up as one of the project's first engineers.",
            "Designed scalable, high-volume, low-latency services across Grab's payments ecosystem.",
            "Led a team of three engineers across system design, requirements, delivery quality, and code reviews.",
        ],
        "Go, payments, low-latency architecture, high-throughput services",
    ),
    job(
        "Works Applications", "Senior Software Engineer / Software Developer", "Singapore", "Oct 2016 - Jun 2019",
        [
            "Designed serverless architecture for an on-premise to AWS migration using Lambda, DynamoDB, S3, and Elasticsearch.",
            "Created Spark batch-processing systems on AWS Batch for large-scale file workflows.",
            "Built customer-facing commerce and inventory capabilities for a Japanese ERP platform.",
        ],
        "AWS, Lambda, DynamoDB, S3, Elasticsearch, Spark, AWS Batch",
    ),
    job(
        "Walmart eCommerce", "Software Developer", "Bengaluru, India", "Jan 2016 - Jul 2016",
        ["Built a reusable tooltip system for ASDA's e-commerce customer-satisfaction team."],
        "E-commerce, customer experience, frontend systems",
    ),
    Paragraph("TECHNICAL SKILLS", SECTION),
    Paragraph(
        "<b>Languages:</b> Java, Go, SQL  |  <b>Systems:</b> Kafka, Redis, Elasticsearch, Kubernetes  |  "
        "<b>Cloud:</b> AWS, Terraform, Lambda, AWS Batch  |  <b>Data:</b> MySQL, MongoDB, DynamoDB",
        COMPACT,
    ),
    Paragraph("EDUCATION, PROJECTS AND CREDENTIALS", SECTION),
    Paragraph(
        "<b>Bachelor's degree, Computer Science</b> - Thapar Institute, 2012 - 2016<br/>"
        "<b>Projects:</b> NIFTY50 Trader Pro - market intelligence dashboard; Digital Bio Maker - no-code portfolio builder<br/>"
        "<b>Languages:</b> English, Hindi<br/>"
        "<b>Credential:</b> MongoDB with Java Spring Boot (issued Jun 2023)",
        COMPACT,
    ),
]

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
print(OUTPUT)
