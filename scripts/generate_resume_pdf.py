from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Shubham-Singla-Resume.pdf"

INK = colors.HexColor("#111612")
STEEL = colors.HexColor("#59645C")
COBALT = colors.HexColor("#2F5BFF")
ORANGE = colors.HexColor("#FF5A36")
RULE = colors.HexColor("#D8DFDA")
PAPER = colors.HexColor("#F7F9F7")

styles = getSampleStyleSheet()
name_style = ParagraphStyle(
    "Name",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=25,
    leading=27,
    textColor=INK,
    spaceAfter=5,
)
role_style = ParagraphStyle(
    "Role",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9.2,
    leading=12,
    textColor=COBALT,
    textTransform="uppercase",
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.5,
    leading=11,
    textColor=STEEL,
    alignment=TA_RIGHT,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=8,
    leading=10,
    textColor=ORANGE,
    spaceBefore=12,
    spaceAfter=7,
    textTransform="uppercase",
)
summary_style = ParagraphStyle(
    "Summary",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=13,
    textColor=INK,
)
job_title_style = ParagraphStyle(
    "JobTitle",
    parent=styles["Heading3"],
    fontName="Helvetica-Bold",
    fontSize=10.5,
    leading=13,
    textColor=INK,
    spaceAfter=2,
)
job_meta_style = ParagraphStyle(
    "JobMeta",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=7.2,
    leading=10,
    textColor=COBALT,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=7.8,
    leading=11.6,
    textColor=STEEL,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=10,
    firstLineIndent=-7,
    bulletIndent=0,
    spaceBefore=1.5,
)
small_title_style = ParagraphStyle(
    "SmallTitle",
    parent=styles["Heading3"],
    fontName="Helvetica-Bold",
    fontSize=9,
    leading=11,
    textColor=INK,
    spaceAfter=3,
)
small_style = ParagraphStyle(
    "Small",
    parent=body_style,
    fontSize=7.3,
    leading=10.5,
)


def header_footer(canvas, doc):
    canvas.saveState()
    width, height = LETTER
    canvas.setFillColor(PAPER)
    canvas.rect(0, height - 0.18 * inch, width, 0.18 * inch, stroke=0, fill=1)
    canvas.setStrokeColor(RULE)
    canvas.line(0.58 * inch, 0.43 * inch, width - 0.58 * inch, 0.43 * inch)
    canvas.setFont("Helvetica", 6.5)
    canvas.setFillColor(STEEL)
    canvas.drawString(0.58 * inch, 0.25 * inch, "SHUBHAM SINGLA  /  BACKEND - AI - ENGINEERING LEADERSHIP")
    canvas.drawRightString(width - 0.58 * inch, 0.25 * inch, f"PAGE {doc.page}")
    canvas.restoreState()


doc = BaseDocTemplate(
    str(OUTPUT),
    pagesize=LETTER,
    rightMargin=0.58 * inch,
    leftMargin=0.58 * inch,
    topMargin=0.48 * inch,
    bottomMargin=0.56 * inch,
    title="Shubham Singla - Backend and AI Engineer",
    author="Shubham Singla",
    subject="Engineering resume",
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=header_footer)])


def job(company, role, location, period, intro, bullets, stack):
    return KeepTogether([
        Table(
            [[Paragraph(f"{company}  /  {role}", job_title_style), Paragraph(period, contact_style)]],
            colWidths=[doc.width * 0.76, doc.width * 0.24],
            style=TableStyle([
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]),
        ),
        Paragraph(location, job_meta_style),
        Spacer(1, 3),
        Paragraph(intro, body_style),
        *[Paragraph(item, bullet_style, bulletText="-") for item in bullets],
        Spacer(1, 3),
        Paragraph(f"<b>Stack / focus:</b> {stack}", small_style),
        Spacer(1, 10),
    ])


story = []
header = Table(
    [[
        [Paragraph("Shubham Singla", name_style), Paragraph("BACKEND &amp; AI ENGINEER  /  ENGINEERING LEAD", role_style)],
        Paragraph(
            "Bengaluru, India<br/>"
            "<a href='mailto:shubham101203095@gmail.com' color='#59645C'>shubham101203095@gmail.com</a><br/>"
            "<a href='https://www.linkedin.com/in/shubham-singla-864a55106/' color='#59645C'>LinkedIn</a>  /  "
            "<a href='https://github.com/singla3095' color='#59645C'>GitHub</a>",
            contact_style,
        ),
    ]],
    colWidths=[doc.width * 0.66, doc.width * 0.34],
    style=TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("LINEBELOW", (0, 0), (-1, -1), 1.2, COBALT),
    ]),
)
story.extend([header, Spacer(1, 12), Paragraph("PROFILE", section_style)])
story.append(Paragraph(
    "Engineering leader with 10+ years of experience building backend platforms, payment systems, enterprise products, and applied AI capabilities across India and Singapore. Strong in turning ambiguous product needs into scalable architecture, mentoring engineers, and shipping reliable systems with clear business impact.",
    summary_style,
))
story.append(Paragraph("EXPERIENCE", section_style))
story.extend([
    job(
        "Indeed", "Software Engineer II", "Bengaluru, India", "Sep 2022 - Present",
        "Lead backend and AI-focused work where product judgment, system reliability, and team execution meet.",
        [
            "Lead a team delivering high-impact projects across multiple domains, including an AI initiative applying advanced machine learning models to product capabilities.",
            "Mentor junior engineers through design reviews, ownership growth, and practical production decision-making.",
            "Drive platform performance and user-engagement improvements while aligning execution with strategic goals.",
        ],
        "Java, applied AI, distributed systems, technical leadership",
    ),
    job(
        "Grab", "Senior Backend Engineer", "Singapore", "Jun 2019 - Sep 2022",
        "Built core payment infrastructure for one of Southeast Asia's largest superapps.",
        [
            "Built the GrabPay debit-card platform from the ground up as one of the project's first engineers.",
            "Designed scalable, high-volume, low-latency architecture and services across Grab's payment ecosystem.",
            "Led a team of three engineers and owned system design, requirements, engineering quality, and code reviews.",
        ],
        "Go, payments, low latency, high throughput",
    ),
    job(
        "Works Applications", "Senior Software Engineer", "Singapore", "Jun 2018 - Sep 2019",
        "Modernized enterprise systems during an on-premise to AWS migration.",
        [
            "Designed serverless architecture using Lambda, DynamoDB, S3, and Elasticsearch.",
            "Created Spark batch-processing systems on AWS Batch for large-scale file workflows.",
        ],
        "AWS, Lambda, DynamoDB, S3, Elasticsearch, Spark, AWS Batch",
    ),
])

story.append(Paragraph("EARLIER EXPERIENCE", section_style))
story.extend([
    job(
        "Works Applications", "Software Engineer", "Singapore", "Oct 2016 - Jun 2018",
        "Built enterprise commerce and inventory capabilities for a Japanese ERP platform.",
        [
            "Translated customer requirements into user-facing e-commerce workflows.",
            "Developed inventory-management capabilities as part of the commerce ERP platform.",
        ],
        "Enterprise systems, e-commerce, inventory management",
    ),
    job(
        "Walmart Labs", "Software Engineering Intern", "Bengaluru, India", "Jan 2016 - Jul 2016",
        "Started in customer-facing commerce systems for ASDA's e-commerce platform.",
        [
            "Built a reusable tooltip system as part of the customer-satisfaction engineering team.",
            "Shipped production-facing user experience improvements inside a large retail engineering environment.",
        ],
        "E-commerce, customer experience, frontend systems",
    ),
])

story.append(Paragraph("TECHNICAL RANGE", section_style))
skills_table = Table(
    [
        [Paragraph("Languages", small_title_style), Paragraph("Java, Go, SQL", small_style)],
        [Paragraph("Distributed systems", small_title_style), Paragraph("Kafka, Redis, Elasticsearch, Kubernetes", small_style)],
        [Paragraph("Cloud and delivery", small_title_style), Paragraph("AWS, Terraform, Lambda, AWS Batch", small_style)],
        [Paragraph("Data stores", small_title_style), Paragraph("MySQL, MongoDB, DynamoDB", small_style)],
    ],
    colWidths=[1.65 * inch, doc.width - 1.65 * inch],
    style=TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LINEBELOW", (0, 0), (-1, -2), 0.5, RULE),
    ]),
)
story.append(skills_table)

story.append(Paragraph("EDUCATION &amp; CREDENTIALS", section_style))
education_table = Table(
    [[
        [Paragraph("Computer Engineering", small_title_style), Paragraph("Thapar Institute of Engineering &amp; Technology<br/>Class of 2016", small_style)],
        [Paragraph("AWS Solutions Architect - Associate", small_title_style), Paragraph("Issued 2020<br/><br/><b>MongoDB with Java Spring Boot</b><br/>Issued 2023", small_style)],
    ]],
    colWidths=[doc.width / 2, doc.width / 2],
    style=TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (0, 0), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 18),
        ("LEFTPADDING", (1, 0), (1, 0), 18),
        ("RIGHTPADDING", (1, 0), (1, 0), 0),
        ("LINEBEFORE", (1, 0), (1, 0), 0.5, RULE),
    ]),
)
story.append(education_table)

story.append(Paragraph("SELECTED PROJECTS", section_style))
story.append(Paragraph(
    "<b>NIFTY50 Trader Pro</b> - Market intelligence dashboard for technical signals and portfolio state. "
    "<a href='https://singla3095.github.io/stock-trading/' color='#2F5BFF'>Live demo</a>  /  "
    "<a href='https://github.com/singla3095/stock-trading' color='#2F5BFF'>Source</a><br/>"
    "<b>Digital Bio Maker</b> - No-code portfolio builder for creating a clean, shareable professional presence. "
    "<a href='https://singla3095.github.io/digital-bio-maker/' color='#2F5BFF'>Live demo</a>  /  "
    "<a href='https://github.com/singla3095/digital-bio-maker' color='#2F5BFF'>Source</a>",
    small_style,
))

doc.build(story)
print(OUTPUT)
