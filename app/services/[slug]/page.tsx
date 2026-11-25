import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHeading,
  FadeUp,
  StaggerParent,
  StaggerChild,
  CtaBanner,
} from "@/components/PageAnimations";

/* ─────────────────────────── SERVICE DATA ─────────────────────────── */

interface ServiceStep {
  title: string;
  description: string;
}

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

interface ServiceData {
  title: string;
  description: string;
  heroEyebrow: string;
  whatWeOffer: ServiceCard[];
  process: ServiceStep[];
  whyChooseUs: ServiceCard[];
  ctaTitle: string;
  ctaDescription: string;
}

const services: Record<string, ServiceData> = {
  "market-research": {
    title: "Market Research",
    description:
      "Understand your market landscape through quantitative & qualitative research, competitor analysis, and consumer behavior studies that drive strategic decisions.",
    heroEyebrow: "Insights That Matter",
    whatWeOffer: [
      {
        icon: "📊",
        title: "Quantitative Research",
        description:
          "Large-scale surveys and statistical analysis to quantify market trends, customer preferences, and brand perception.",
      },
      {
        icon: "🎯",
        title: "Qualitative Research",
        description:
          "In-depth interviews, focus groups, and ethnographic studies that uncover the 'why' behind consumer behavior.",
      },
      {
        icon: "🔍",
        title: "Competitor Analysis",
        description:
          "Comprehensive competitive landscape mapping including SWOT analysis, positioning, and market share tracking.",
      },
      {
        icon: "📈",
        title: "Market Sizing & Forecasting",
        description:
          "TAM/SAM/SOM analysis and predictive modeling to identify growth opportunities in your target markets.",
      },
      {
        icon: "🧠",
        title: "Consumer Behavior Studies",
        description:
          "Deep dives into purchase journeys, decision-making patterns, and psychographic segmentation.",
      },
      {
        icon: "🌍",
        title: "Global Research Panels",
        description:
          "Access to millions of respondents across 100+ countries for multi-market research programs.",
      },
    ],
    process: [
      {
        title: "Discovery & Scoping",
        description:
          "Define research objectives, target audiences, and methodology best suited for your business questions.",
      },
      {
        title: "Design & Fieldwork",
        description:
          "Craft research instruments, recruit participants, and collect data with rigorous quality controls.",
      },
      {
        title: "Analysis & Insights",
        description:
          "Apply advanced analytics, cross-tabulations, and statistical tests to uncover actionable insights.",
      },
      {
        title: "Reporting & Activation",
        description:
          "Deliver compelling presentations and strategic recommendations to fuel business decisions.",
      },
    ],
    whyChooseUs: [
      {
        icon: "⚡",
        title: "Speed to Insight",
        description:
          "Our streamlined processes deliver reliable findings 40% faster than traditional research timelines.",
      },
      {
        icon: "🏆",
        title: "Domain Expertise",
        description:
          "Seasoned researchers with deep experience across FMCG, healthcare, technology, and financial services.",
      },
      {
        icon: "🔒",
        title: "Data Quality Guarantee",
        description:
          "Multi-layer quality checks including trap questions, speeder removal, and consistency validation.",
      },
    ],
    ctaTitle: "Unlock market insights that drive growth",
    ctaDescription:
      "Partner with us to make data-driven decisions with confidence.",
  },

  "business-consulting": {
    title: "Business Consulting",
    description:
      "Strategic advisory services for growth, operations optimization, market entry strategy, and organizational transformation that deliver measurable results.",
    heroEyebrow: "Strategic Partners",
    whatWeOffer: [
      {
        icon: "🚀",
        title: "Growth Strategy",
        description:
          "Revenue acceleration frameworks, market expansion roadmaps, and go-to-market strategies for sustainable growth.",
      },
      {
        icon: "⚙️",
        title: "Operations Optimization",
        description:
          "Process re-engineering, lean management, and supply chain optimization to boost efficiency and cut costs.",
      },
      {
        icon: "🌏",
        title: "Market Entry Strategy",
        description:
          "Feasibility studies, local partner identification, and regulatory navigation for new market expansion.",
      },
      {
        icon: "🔄",
        title: "Organizational Transformation",
        description:
          "Change management, culture alignment, and digital transformation to future-proof your organization.",
      },
      {
        icon: "💰",
        title: "Financial Advisory",
        description:
          "Business valuation, investment readiness, fundraising support, and financial restructuring.",
      },
      {
        icon: "📋",
        title: "Risk & Compliance",
        description:
          "Enterprise risk frameworks, regulatory compliance programs, and crisis management planning.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "Conduct a 360° business health check to identify challenges, opportunities, and quick wins.",
      },
      {
        title: "Strategy Design",
        description:
          "Co-create actionable strategies with clear KPIs, milestones, and accountability structures.",
      },
      {
        title: "Implementation",
        description:
          "Embed alongside your team to drive execution, remove blockers, and ensure momentum.",
      },
      {
        title: "Sustain & Scale",
        description:
          "Establish governance frameworks and capability building to sustain improvements long-term.",
      },
    ],
    whyChooseUs: [
      {
        icon: "🤝",
        title: "Partnership Approach",
        description:
          "We don't just advise — we roll up our sleeves and work alongside your team to deliver results.",
      },
      {
        icon: "📊",
        title: "Data-Driven Decisions",
        description:
          "Every recommendation is backed by rigorous analysis, benchmarking, and evidence-based frameworks.",
      },
      {
        icon: "🎯",
        title: "Measurable Impact",
        description:
          "Our clients see an average 25% improvement in targeted operational metrics within 6 months.",
      },
    ],
    ctaTitle: "Transform your business with expert guidance",
    ctaDescription:
      "Let's chart the path to your next phase of growth together.",
  },

  seo: {
    title: "Search Engine Optimization",
    description:
      "Technical SEO, on-page optimization, link building, local SEO, and keyword strategy designed to drive sustainable organic growth and dominate search rankings.",
    heroEyebrow: "Organic Growth Engine",
    whatWeOffer: [
      {
        icon: "🔧",
        title: "Technical SEO",
        description:
          "Site speed optimization, crawlability fixes, structured data, Core Web Vitals, and architecture improvements.",
      },
      {
        icon: "📝",
        title: "On-Page Optimization",
        description:
          "Content optimization, meta tags, internal linking strategy, and semantic markup for maximum relevance.",
      },
      {
        icon: "🔗",
        title: "Link Building",
        description:
          "White-hat outreach, digital PR, guest posting, and authority-building campaigns that earn quality backlinks.",
      },
      {
        icon: "📍",
        title: "Local SEO",
        description:
          "Google Business Profile optimization, citation management, and local content strategies for geo-targeted visibility.",
      },
      {
        icon: "🗝️",
        title: "Keyword Strategy",
        description:
          "Intent-based keyword research, topic clustering, and content gap analysis to capture high-value search traffic.",
      },
    ],
    process: [
      {
        title: "SEO Audit",
        description:
          "Comprehensive site audit covering technical health, content quality, backlink profile, and competitive gaps.",
      },
      {
        title: "Strategy & Roadmap",
        description:
          "Prioritized action plan targeting quick wins and long-term authority building across your domain.",
      },
      {
        title: "Execution & Content",
        description:
          "Implement technical fixes, optimize existing pages, and create new content aligned with search intent.",
      },
      {
        title: "Monitor & Iterate",
        description:
          "Track rankings, traffic, and conversions with monthly reporting and continuous strategy refinement.",
      },
    ],
    whyChooseUs: [
      {
        icon: "📈",
        title: "Proven Results",
        description:
          "Average 180% increase in organic traffic within 12 months for our clients across industries.",
      },
      {
        icon: "🤖",
        title: "AI-Augmented SEO",
        description:
          "Leverage AI tools for content optimization, trend prediction, and large-scale on-page improvements.",
      },
      {
        icon: "🔍",
        title: "Transparent Reporting",
        description:
          "Real-time dashboards and detailed monthly reports showing rankings, traffic, and ROI metrics.",
      },
    ],
    ctaTitle: "Dominate search and drive organic growth",
    ctaDescription:
      "Let us build an SEO strategy that puts you ahead of the competition.",
  },

  "software-development": {
    title: "Software Development",
    description:
      "Custom software solutions, enterprise applications, API development, and cloud-native architectures built to scale with your business.",
    heroEyebrow: "Engineered for Scale",
    whatWeOffer: [
      {
        icon: "💻",
        title: "Custom Software",
        description:
          "Bespoke applications designed around your unique workflows, from ideation through deployment and support.",
      },
      {
        icon: "🏢",
        title: "Enterprise Applications",
        description:
          "Robust, scalable platforms for ERP, CRM, HRMS, and industry-specific business process management.",
      },
      {
        icon: "🔌",
        title: "API Development",
        description:
          "RESTful and GraphQL APIs, third-party integrations, and microservices architecture for seamless connectivity.",
      },
      {
        icon: "☁️",
        title: "Cloud-Native Solutions",
        description:
          "AWS, Azure, and GCP architectures using containers, serverless, and infrastructure-as-code best practices.",
      },
      {
        icon: "🛡️",
        title: "Quality Assurance",
        description:
          "Automated testing, CI/CD pipelines, performance testing, and security audits for production-grade software.",
      },
    ],
    process: [
      {
        title: "Requirements & Design",
        description:
          "Deep-dive discovery sessions, system architecture design, and detailed technical specifications.",
      },
      {
        title: "Agile Development",
        description:
          "Two-week sprint cycles with daily standups, demo sessions, and continuous stakeholder collaboration.",
      },
      {
        title: "Testing & QA",
        description:
          "Comprehensive testing including unit, integration, performance, and user acceptance testing.",
      },
      {
        title: "Deployment & Support",
        description:
          "Zero-downtime deployments, monitoring setup, and ongoing maintenance with SLA-backed support.",
      },
    ],
    whyChooseUs: [
      {
        icon: "⚡",
        title: "Rapid Delivery",
        description:
          "Agile methodology and reusable component libraries accelerate time-to-market without compromising quality.",
      },
      {
        icon: "🔐",
        title: "Security-First",
        description:
          "OWASP-compliant code practices, encryption at rest and in transit, and regular penetration testing.",
      },
      {
        icon: "📐",
        title: "Scalable Architecture",
        description:
          "Systems designed to handle 10x growth with horizontally scalable, cloud-native infrastructure.",
      },
    ],
    ctaTitle: "Build software that scales with your ambition",
    ctaDescription:
      "From concept to production — let's bring your vision to life.",
  },

  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "User research, wireframing, prototyping, interaction design, design systems, and usability testing that create delightful digital experiences.",
    heroEyebrow: "Design That Connects",
    whatWeOffer: [
      {
        icon: "🔬",
        title: "User Research",
        description:
          "Personas, journey mapping, contextual inquiry, and usability studies to deeply understand your users.",
      },
      {
        icon: "✏️",
        title: "Wireframing & Prototyping",
        description:
          "Low to high-fidelity prototypes in Figma that validate concepts before a single line of code is written.",
      },
      {
        icon: "🎨",
        title: "Visual Design",
        description:
          "Pixel-perfect interfaces with thoughtful typography, color systems, and micro-interactions.",
      },
      {
        icon: "🧩",
        title: "Design Systems",
        description:
          "Component libraries, pattern documentation, and design tokens for consistent, scalable design at speed.",
      },
      {
        icon: "🖱️",
        title: "Interaction Design",
        description:
          "Motion design, gesture-based interfaces, and delightful animations that elevate the user experience.",
      },
      {
        icon: "🧪",
        title: "Usability Testing",
        description:
          "Moderated and unmoderated testing, A/B experiments, and heuristic evaluations to validate design decisions.",
      },
    ],
    process: [
      {
        title: "Research & Discover",
        description:
          "Stakeholder interviews, user research, and competitive audits to build empathy and define opportunities.",
      },
      {
        title: "Ideate & Wireframe",
        description:
          "Explore concepts through sketching, information architecture, and interactive wireframes.",
      },
      {
        title: "Design & Prototype",
        description:
          "Create high-fidelity designs with interactive prototypes for testing and stakeholder review.",
      },
      {
        title: "Test & Refine",
        description:
          "Validate with real users, iterate based on feedback, and deliver production-ready design assets.",
      },
    ],
    whyChooseUs: [
      {
        icon: "👥",
        title: "User-Centered Process",
        description:
          "Every design decision is validated with real user data — no assumptions, just evidence.",
      },
      {
        icon: "🎖️",
        title: "Award-Winning Designers",
        description:
          "Our design team brings experience from top agencies with expertise across B2B, B2C, and enterprise.",
      },
      {
        icon: "🤝",
        title: "Dev-Ready Handoff",
        description:
          "Pixel-perfect specs, component libraries, and design tokens that make developer handoff seamless.",
      },
    ],
    ctaTitle: "Create experiences your users will love",
    ctaDescription:
      "Let's design products that are both beautiful and deeply functional.",
  },

  "survey-programming": {
    title: "Survey Programming",
    description:
      "Complex survey scripting, multi-language surveys, advanced logic & piping, and data processing & tabulation for world-class research programs.",
    heroEyebrow: "Precision Scripting",
    whatWeOffer: [
      {
        icon: "⌨️",
        title: "Complex Survey Scripting",
        description:
          "Expert programming across Decipher, Confirmit, Qualtrics, and SPSS Dimensions for any survey complexity.",
      },
      {
        icon: "🌐",
        title: "Multi-Language Surveys",
        description:
          "Unicode-compatible surveys in 50+ languages with RTL support, cultural adaptation, and back-translation QC.",
      },
      {
        icon: "🔀",
        title: "Advanced Logic & Piping",
        description:
          "Conjoint, MaxDiff, shelf tests, complex quota management, and dynamic text piping for sophisticated studies.",
      },
      {
        icon: "📑",
        title: "Data Processing",
        description:
          "Cleaning, coding, weighting, and cross-tabulation with comprehensive banner tables and data deliverables.",
      },
      {
        icon: "🖥️",
        title: "Dashboard Creation",
        description:
          "Interactive online reporting portals with real-time data updates, filtering, and export capabilities.",
      },
    ],
    process: [
      {
        title: "Spec Review",
        description:
          "Thoroughly review questionnaire specs, identify logic complexities, and clarify requirements.",
      },
      {
        title: "Programming",
        description:
          "Script the survey with clean code, responsive design, and all required logic and piping.",
      },
      {
        title: "Testing & QC",
        description:
          "Multi-device testing, logic path verification, and client-facing test links for approval.",
      },
      {
        title: "Launch & Deliver",
        description:
          "Go live with monitoring, mid-field adjustments, and delivery of clean datasets with documentation.",
      },
    ],
    whyChooseUs: [
      {
        icon: "⏱️",
        title: "Fast Turnaround",
        description:
          "24-48 hour programming turnaround for standard surveys — rush delivery available for urgent projects.",
      },
      {
        icon: "✅",
        title: "Zero-Error Guarantee",
        description:
          "Our 5-step QC process catches issues before launch, ensuring data integrity from the first response.",
      },
      {
        icon: "🔧",
        title: "Platform Agnostic",
        description:
          "Expertise across all major survey platforms means you get the best tool for every project.",
      },
    ],
    ctaTitle: "Get flawless survey programming, fast",
    ctaDescription:
      "From simple trackers to complex conjoint studies — we've got you covered.",
  },

  analytics: {
    title: "Analytics & Business Intelligence",
    description:
      "Data visualization, dashboard development, predictive analytics, and reporting automation that transform raw data into competitive advantage.",
    heroEyebrow: "Data-Driven Decisions",
    whatWeOffer: [
      {
        icon: "📊",
        title: "Data Visualization",
        description:
          "Beautiful, insightful dashboards using Tableau, Power BI, and Looker that make complex data accessible.",
      },
      {
        icon: "🖥️",
        title: "Dashboard Development",
        description:
          "Custom interactive dashboards with real-time data connections, drill-downs, and role-based access.",
      },
      {
        icon: "🔮",
        title: "Predictive Analytics",
        description:
          "Machine learning models for demand forecasting, churn prediction, and customer lifetime value analysis.",
      },
      {
        icon: "🤖",
        title: "Reporting Automation",
        description:
          "Scheduled reports, automated alerts, and self-service analytics that eliminate manual data crunching.",
      },
      {
        icon: "🗄️",
        title: "Data Warehouse Design",
        description:
          "Modern data stack implementation with cloud warehouses, ETL pipelines, and data governance frameworks.",
      },
    ],
    process: [
      {
        title: "Data Assessment",
        description:
          "Audit existing data sources, quality, and infrastructure to establish a solid analytics foundation.",
      },
      {
        title: "Architecture & Design",
        description:
          "Design data models, select tools, and plan integration pipelines tailored to your needs.",
      },
      {
        title: "Build & Integrate",
        description:
          "Develop dashboards, connect data sources, build automated pipelines, and train ML models.",
      },
      {
        title: "Empower & Evolve",
        description:
          "Train your team, establish data governance, and continuously refine insights as your business grows.",
      },
    ],
    whyChooseUs: [
      {
        icon: "💡",
        title: "Insight-First Approach",
        description:
          "We focus on answering business questions first — the technology serves the insight, not the other way around.",
      },
      {
        icon: "🏗️",
        title: "Scalable Infrastructure",
        description:
          "Cloud-native data architectures that grow with your data volume and analytical complexity.",
      },
      {
        icon: "🎓",
        title: "Knowledge Transfer",
        description:
          "We don't just build dashboards — we train your team to be self-sufficient data practitioners.",
      },
    ],
    ctaTitle: "Turn your data into your greatest asset",
    ctaDescription:
      "Let us build the analytics foundation your business deserves.",
  },

  "performance-marketing": {
    title: "Performance Marketing",
    description:
      "PPC campaigns, social media ads, conversion optimization, and ROI-driven marketing strategies that deliver measurable results at scale.",
    heroEyebrow: "Results That Scale",
    whatWeOffer: [
      {
        icon: "🎯",
        title: "PPC Campaign Management",
        description:
          "Google Ads, Bing Ads, and programmatic campaigns optimized for maximum ROAS and lead quality.",
      },
      {
        icon: "📱",
        title: "Social Media Advertising",
        description:
          "Meta, LinkedIn, TikTok, and X campaigns with precision audience targeting and creative optimization.",
      },
      {
        icon: "🔄",
        title: "Conversion Rate Optimization",
        description:
          "A/B testing, landing page optimization, and funnel analysis to maximize every click's value.",
      },
      {
        icon: "📊",
        title: "Attribution & Analytics",
        description:
          "Multi-touch attribution models, GA4 setup, and custom reporting to track true marketing ROI.",
      },
      {
        icon: "🛒",
        title: "E-commerce Advertising",
        description:
          "Shopping campaigns, marketplace ads, and dynamic retargeting that drive online revenue growth.",
      },
    ],
    process: [
      {
        title: "Audit & Strategy",
        description:
          "Analyze current campaigns, define KPIs, and build a channel strategy aligned with your goals.",
      },
      {
        title: "Launch & Test",
        description:
          "Launch campaigns with structured A/B tests across audiences, creatives, and landing pages.",
      },
      {
        title: "Optimize & Scale",
        description:
          "Use real-time data to optimize bids, budgets, and targeting — then scale what works.",
      },
      {
        title: "Report & Refine",
        description:
          "Weekly performance reports with actionable insights and continuous strategy refinement.",
      },
    ],
    whyChooseUs: [
      {
        icon: "💰",
        title: "ROI-Obsessed",
        description:
          "Every dollar is tracked and optimized — our clients average 3.5x ROAS across campaigns.",
      },
      {
        icon: "🧪",
        title: "Test-Driven Culture",
        description:
          "Structured experimentation framework that continuously discovers new growth levers.",
      },
      {
        icon: "🔍",
        title: "Full-Funnel Visibility",
        description:
          "From impression to conversion, we track the entire journey to optimize every touchpoint.",
      },
    ],
    ctaTitle: "Maximize your marketing ROI",
    ctaDescription:
      "Let's build campaigns that drive real revenue, not just clicks.",
  },

  "mobile-apps": {
    title: "Mobile App Development",
    description:
      "iOS & Android development, cross-platform apps, app strategy, and ongoing maintenance & optimization for mobile-first businesses.",
    heroEyebrow: "Mobile-First Innovation",
    whatWeOffer: [
      {
        icon: "🍎",
        title: "iOS Development",
        description:
          "Native Swift and SwiftUI applications optimized for the entire Apple ecosystem with App Store compliance.",
      },
      {
        icon: "🤖",
        title: "Android Development",
        description:
          "Kotlin-first Android apps with Material Design, optimized for the full range of device configurations.",
      },
      {
        icon: "🔄",
        title: "Cross-Platform Apps",
        description:
          "React Native and Flutter solutions that deliver near-native performance with shared codebases.",
      },
      {
        icon: "📐",
        title: "App Strategy & Design",
        description:
          "Market research, feature prioritization, and UX design tailored for mobile interaction patterns.",
      },
      {
        icon: "🔧",
        title: "Maintenance & Optimization",
        description:
          "Performance monitoring, crash analytics, OS updates, and continuous feature enhancements.",
      },
    ],
    process: [
      {
        title: "Strategy & Prototype",
        description:
          "Define app vision, create clickable prototypes, and validate concepts with target users.",
      },
      {
        title: "Design & Develop",
        description:
          "Craft pixel-perfect UI and build feature-complete apps with iterative sprint-based development.",
      },
      {
        title: "Test & Launch",
        description:
          "Rigorous QA across devices, beta testing programs, and app store submission management.",
      },
      {
        title: "Grow & Optimize",
        description:
          "Post-launch analytics, ASO, user feedback loops, and regular updates to drive engagement.",
      },
    ],
    whyChooseUs: [
      {
        icon: "📱",
        title: "Platform Expertise",
        description:
          "Deep native expertise on both iOS and Android ensures your app feels right on every platform.",
      },
      {
        icon: "🚀",
        title: "Launch-Ready Quality",
        description:
          "98% first-submission approval rate for both App Store and Google Play.",
      },
      {
        icon: "📈",
        title: "Growth Engineering",
        description:
          "In-app analytics, push notification strategy, and engagement optimization built into every app.",
      },
    ],
    ctaTitle: "Build the app your users can't put down",
    ctaDescription:
      "From idea to app store — we handle the entire mobile journey.",
  },

  "ai-automation": {
    title: "AI & Business Automation",
    description:
      "Machine learning solutions, process automation, chatbots, and intelligent document processing that supercharge productivity and unlock new capabilities.",
    heroEyebrow: "Intelligent Automation",
    whatWeOffer: [
      {
        icon: "🧠",
        title: "Machine Learning Solutions",
        description:
          "Custom ML models for prediction, classification, NLP, and computer vision tailored to your domain.",
      },
      {
        icon: "⚙️",
        title: "Process Automation (RPA)",
        description:
          "End-to-end workflow automation using UiPath, Power Automate, and custom bots that eliminate manual tasks.",
      },
      {
        icon: "💬",
        title: "AI Chatbots & Assistants",
        description:
          "Conversational AI powered by LLMs for customer support, internal help desks, and knowledge management.",
      },
      {
        icon: "📄",
        title: "Intelligent Document Processing",
        description:
          "OCR, entity extraction, and document classification that automate data entry and compliance checks.",
      },
      {
        icon: "🔗",
        title: "AI Integration Services",
        description:
          "Embed AI capabilities into existing systems — from recommendation engines to anomaly detection.",
      },
    ],
    process: [
      {
        title: "Opportunity Assessment",
        description:
          "Identify high-impact automation opportunities and build a prioritized AI/automation roadmap.",
      },
      {
        title: "Proof of Concept",
        description:
          "Rapid POC development to validate feasibility, accuracy, and business value before full investment.",
      },
      {
        title: "Production Build",
        description:
          "Engineer robust, scalable solutions with monitoring, fallback logic, and human-in-the-loop safeguards.",
      },
      {
        title: "Scale & Optimize",
        description:
          "Continuous model retraining, performance monitoring, and expansion to new use cases across the org.",
      },
    ],
    whyChooseUs: [
      {
        icon: "🎯",
        title: "Practical AI",
        description:
          "We focus on AI that delivers measurable ROI — not science projects. Average 60% task time reduction.",
      },
      {
        icon: "🛡️",
        title: "Responsible AI",
        description:
          "Built-in bias detection, explainability, and governance frameworks for trustworthy AI deployment.",
      },
      {
        icon: "🔄",
        title: "Seamless Integration",
        description:
          "Our solutions plug into your existing tech stack with APIs, webhooks, and enterprise connectors.",
      },
    ],
    ctaTitle: "Automate smarter, not harder",
    ctaDescription:
      "Let's identify the AI and automation opportunities that will transform your business.",
  },

  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "Content marketing, email marketing, social media management, and brand awareness campaigns that build lasting connections with your audience.",
    heroEyebrow: "Amplify Your Brand",
    whatWeOffer: [
      {
        icon: "✍️",
        title: "Content Marketing",
        description:
          "Blog strategy, thought leadership, whitepapers, and video content that educates, engages, and converts.",
      },
      {
        icon: "📧",
        title: "Email Marketing",
        description:
          "Automated drip campaigns, newsletter programs, and lifecycle emails that nurture and retain customers.",
      },
      {
        icon: "📱",
        title: "Social Media Management",
        description:
          "Platform strategy, content calendars, community management, and influencer partnerships across channels.",
      },
      {
        icon: "📢",
        title: "Brand Awareness Campaigns",
        description:
          "Integrated multi-channel campaigns that build brand equity and drive top-of-funnel engagement.",
      },
      {
        icon: "🎥",
        title: "Video & Multimedia",
        description:
          "Explainer videos, social reels, webinar production, and podcast management that capture attention.",
      },
    ],
    process: [
      {
        title: "Strategy & Planning",
        description:
          "Define your brand voice, target personas, channel mix, and content themes for maximum impact.",
      },
      {
        title: "Content Creation",
        description:
          "Produce high-quality content across formats — written, visual, and video — aligned with your strategy.",
      },
      {
        title: "Distribution & Promotion",
        description:
          "Publish and amplify content across organic and paid channels to reach the right audiences.",
      },
      {
        title: "Measure & Optimize",
        description:
          "Track engagement, leads, and brand sentiment to continuously refine your marketing mix.",
      },
    ],
    whyChooseUs: [
      {
        icon: "🎨",
        title: "Creative Excellence",
        description:
          "Our content team combines storytelling craft with data insights to create content that resonates.",
      },
      {
        icon: "📈",
        title: "Full-Funnel Strategy",
        description:
          "From awareness to advocacy — we build integrated campaigns that drive results across the funnel.",
      },
      {
        icon: "🔄",
        title: "Agile Execution",
        description:
          "Monthly content sprints with rapid iteration based on performance data and market trends.",
      },
    ],
    ctaTitle: "Build a brand that people remember",
    ctaDescription:
      "Let's create a digital marketing strategy that drives real business growth.",
  },

  "web-development": {
    title: "Website Design & Development",
    description:
      "Responsive websites, e-commerce platforms, CMS development, and progressive web apps that deliver exceptional digital experiences.",
    heroEyebrow: "Digital Experiences",
    whatWeOffer: [
      {
        icon: "🌐",
        title: "Responsive Websites",
        description:
          "Fast, accessible, and beautifully designed websites built with modern frameworks like Next.js and Astro.",
      },
      {
        icon: "🛍️",
        title: "E-Commerce Platforms",
        description:
          "Shopify, WooCommerce, and custom storefronts with payment integration, inventory, and order management.",
      },
      {
        icon: "📝",
        title: "CMS Development",
        description:
          "WordPress, Strapi, Sanity, and headless CMS solutions that give your team full content control.",
      },
      {
        icon: "📲",
        title: "Progressive Web Apps",
        description:
          "Installable, offline-capable web apps with push notifications and native-like performance.",
      },
      {
        icon: "⚡",
        title: "Performance Optimization",
        description:
          "Core Web Vitals optimization, image compression, CDN setup, and lazy loading for blazing-fast sites.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        description:
          "Understand your goals, audience, and content strategy to define the perfect web solution.",
      },
      {
        title: "Design & Prototype",
        description:
          "Create stunning responsive designs in Figma with interactive prototypes for stakeholder approval.",
      },
      {
        title: "Develop & Test",
        description:
          "Build with clean, semantic code, integrate CMS and APIs, and test across browsers and devices.",
      },
      {
        title: "Launch & Support",
        description:
          "Deploy with monitoring, provide training, and offer ongoing maintenance and feature updates.",
      },
    ],
    whyChooseUs: [
      {
        icon: "⚡",
        title: "Blazing Performance",
        description:
          "Our sites score 90+ on Lighthouse across performance, accessibility, and SEO metrics.",
      },
      {
        icon: "🎨",
        title: "Design-Led Development",
        description:
          "Designers and developers collaborate from day one for pixel-perfect, functional results.",
      },
      {
        icon: "🔧",
        title: "Future-Proof Stack",
        description:
          "Modern frameworks and architectures that are easy to maintain and extend as your business grows.",
      },
    ],
    ctaTitle: "Launch a website that works as hard as you do",
    ctaDescription:
      "Let's build a digital presence that drives conversions and delights users.",
  },

  branding: {
    title: "Brand Strategy & Creative Design",
    description:
      "Brand identity, logo design, brand guidelines, creative campaigns, and visual storytelling that make your brand unforgettable.",
    heroEyebrow: "Unforgettable Brands",
    whatWeOffer: [
      {
        icon: "💎",
        title: "Brand Identity",
        description:
          "Brand positioning, personality definition, naming, and messaging frameworks that differentiate you.",
      },
      {
        icon: "🎨",
        title: "Logo Design",
        description:
          "Distinctive, versatile logos with full mark systems — primary, secondary, favicon, and responsive variants.",
      },
      {
        icon: "📖",
        title: "Brand Guidelines",
        description:
          "Comprehensive style guides covering typography, color, imagery, voice, and application rules.",
      },
      {
        icon: "🎬",
        title: "Creative Campaigns",
        description:
          "Concept-driven campaigns across digital, print, and experiential channels that spark conversations.",
      },
      {
        icon: "📸",
        title: "Visual Storytelling",
        description:
          "Photography direction, illustration, motion graphics, and branded content that communicates your story.",
      },
    ],
    process: [
      {
        title: "Brand Discovery",
        description:
          "Workshops and research to uncover your brand's essence, audience, and competitive positioning.",
      },
      {
        title: "Concept Development",
        description:
          "Explore creative directions with mood boards, typography studies, and conceptual design options.",
      },
      {
        title: "Design & Refine",
        description:
          "Develop the chosen direction into a complete brand system with iterative feedback and refinement.",
      },
      {
        title: "Launch & Activate",
        description:
          "Roll out your new brand across all touchpoints with guidelines, templates, and team training.",
      },
    ],
    whyChooseUs: [
      {
        icon: "🏆",
        title: "Strategic Foundation",
        description:
          "Our brands are built on research and strategy — not just aesthetics. Every choice has purpose.",
      },
      {
        icon: "🎨",
        title: "Creative Range",
        description:
          "From bold and disruptive to refined and premium — we adapt our creative style to your brand's personality.",
      },
      {
        icon: "📐",
        title: "System Thinking",
        description:
          "We design flexible brand systems that work consistently across digital, print, and physical touchpoints.",
      },
    ],
    ctaTitle: "Build a brand that stands out and stands for something",
    ctaDescription:
      "Let's create a brand identity that captures hearts and drives growth.",
  },
};

/* ─────────────────────── STATIC PARAMS & METADATA ─────────────────── */

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — ShreejeeNexus`,
    description: service.description,
  };
}

/* ──────────────────────────── PAGE ────────────────────────────────── */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.title}
        description={service.description}
      />

      {/* ── What We Offer ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we offer"
            description="A comprehensive suite of capabilities designed to deliver measurable results for your business."
            center
          />

          <StaggerParent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.whatWeOffer.map((item) => (
              <StaggerChild key={item.title}>
                <div className="group rounded-2xl border border-peacock/10 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-peacock/5 text-2xl transition group-hover:bg-marigold/20">
                    {item.icon}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-bold text-peacock">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-peacock/65">
                    {item.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="bg-gradient-to-b from-mist to-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="How We Work"
            title="Our process"
            description="A proven, transparent methodology that keeps you informed and involved at every stage."
            center
          />

          <StaggerParent className="relative grid gap-8 md:grid-cols-4">
            {/* Connecting line (desktop) */}
            <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-peacock/10 via-peacock/25 to-peacock/10 md:block" />

            {service.process.map((step, i) => (
              <StaggerChild key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <span className="relative z-10 mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-peacock text-2xl font-extrabold text-mist shadow-lg shadow-peacock/20 ring-4 ring-white font-display">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-bold text-peacock">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-peacock/65">
                    {step.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Our Advantage"
            title="Why choose us"
            description="What sets ShreejeeNexus apart when it comes to delivering exceptional results."
            center
          />

          <StaggerParent className="grid gap-8 md:grid-cols-3">
            {service.whyChooseUs.map((item) => (
              <StaggerChild key={item.title}>
                <div className="group relative overflow-hidden rounded-2xl border border-peacock/10 bg-white/70 p-10 text-center backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  {/* Accent top border */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-marigold to-peacock opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-marigold/15 text-3xl">
                    {item.icon}
                  </span>
                  <h3 className="mb-3 font-display text-xl font-bold text-peacock">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-peacock/65">
                    {item.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner
        title={service.ctaTitle}
        description={service.ctaDescription}
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
