import {
  Testimonial,
  KeynoteTopic,
  AdvisoryOffering,
  CoachingPillar,
  SectorExperience,
  AssessmentQuestion
} from '../types';

export const SITE_CONTACT = {
  name: "Kim Nicole Thomas",
  role: "Executive Leadership & Wellbeing Coach | Strategic Advisor | Keynote Speaker",
  experienceYears: "30+",
  phone: "647-618-6311",
  phoneFormatted: "647-618-6311",
  email: "kimnthomas@gmail.com",
  location: "Toronto, Ontario",
  serviceScope: "Serving C-Suite Leaders, Founders, & Visionary Creatives Globally and Across North America",
  tagline: "Leading at the Top Shouldn't Cost Your Wellbeing—or Your Edge.",
  heroSubheadline: "Whether you're steering a boardroom, scaling the company you built from the ground up, shaping culture as a thought leader, or bringing bold creative vision to life—you carry the weight of high-stakes decisions, constant visibility, and the pressure to keep performing at your peak. Having a dedicated, highly confidential partner who understands organizational systems, strategic execution, and human performance makes the difference between burning out and scaling your impact.",
  founderRole: "Founder of KimNicole Inc.",
  agencyRole: "Director of Strategy, Partnerships & Innovation at GEM Agency",
  education: "Degrees from Queen’s University",
  specializations: "Leadership Coaching, Conflict Resolution, & Trauma-Informed Practices"
};

export const CORE_METRICS = [
  { value: "30+", label: "Years Guiding Senior Leaders", description: "Cross-sector executive advisory & leadership coaching" },
  { value: "4", label: "Anchor Sectors", description: "Healthcare, Technology, Education, & Institutional Governance" },
  { value: "TEDx", label: "Inaugural Director & Coach", description: "Launching TEDx initiatives & coaching global platform speakers" },
  { value: "100%", label: "Confidential Counsel", description: "Discreet strategic sounding board for C-Suite, Founders & Boards" },
];

export const CORE_AREAS_OF_SUPPORT = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory & Decision-Making",
    tagline: "A Seasoned, Impartial Sounding Board",
    description: "A seasoned, impartial sounding board to pressure-test ideas, evaluate risk, and navigate complex stakeholder landscapes—whether that's a boardroom, a founding team, or your own next big move.",
    iconName: "ShieldCheck",
    keyFocus: ["Pressure-testing high-risk decisions", "Navigating complex stakeholder dynamics", "Boardroom & founder team alignment", "Evaluating strategic blind spots"]
  },
  {
    id: "sustainable-wellbeing",
    title: "Sustainable High Performance & Wellbeing",
    tagline: "Sustained Vitality Without Depletion",
    description: "Evidence-based resilience practices that let you sustain focus, presence, and energy at the top, without sacrificing your health or personal life.",
    iconName: "BatteryCharging",
    keyFocus: ["Cognitive load & nervous system resilience", "Preventing executive burnout & fatigue", "Sustainable energy calibration", "Preserving clarity under chronic pressure"]
  },
  {
    id: "presentations-prep",
    title: "High-Stakes Presentations & Keynote Prep",
    tagline: "Presence, Delivery, and Audience Impact",
    description: "Comprehensive preparation for high-visibility moments—board meetings, TED/TEDx talks, investor pitches, keynotes—focused on presence, delivery, and audience impact.",
    iconName: "Mic2",
    keyFocus: ["TED / TEDx speaker coaching", "Board meeting & investor pitch delivery", "High-visibility stage presence & gravitas", "Storytelling & executive narrative structure"]
  },
  {
    id: "thought-leadership",
    title: "Ghostwriting & Thought Leadership",
    tagline: "Elevating Your Voice and Brand",
    description: "Polished communications, opinion pieces, keynote speeches, and digital/print assets that elevate your personal brand and voice.",
    iconName: "BookOpen",
    keyFocus: ["Executive op-eds & thought leadership", "Keynote speechwriting & briefings", "Strategic positioning & brand voice", "Polished digital and print communications"]
  },
  {
    id: "conflict-mediation",
    title: "Conflict Mediation & Confidential Sounding Board",
    tagline: "A Private Space for Complex Dynamics",
    description: "A private space to process complex dynamics, strategic pivots, and sensitive communication challenges before you take them to your board, team, or the public.",
    iconName: "HeartHandshake",
    keyFocus: ["Confidential crisis deconstruction", "Executive & board conflict mediation", "Trauma-informed communication practices", "Navigating high-stakes sensitive transitions"]
  }
];

export const SECTORS_DATA: SectorExperience[] = [
  {
    sector: "Healthcare & Life Sciences",
    iconName: "Activity",
    headline: "Guiding Clinical & Administrative Executives Under Unrelenting System Pressure",
    description: "Healthcare systems face unprecedented operational bottlenecks, staffing strain, and regulatory transformation. Kim partners with Hospital CEOs, Chief Medical Officers, and regional health authorities to restore leadership coherence and safeguard practitioner wellbeing.",
    typicalMandates: [
      "Hospital amalgamation & executive restructuring",
      "Physician executive leadership & burnout mitigation",
      "Board governance during public scrutiny & crisis",
      "Balancing fiscal sustainability with patient-centered care"
    ],
    representativeImpact: "Strengthened executive cohesion across 14 hospital networks, reducing leadership turnover by 35% during critical health system reorganizations."
  },
  {
    sector: "Technology & High Growth",
    iconName: "Cpu",
    headline: "Sustaining High Performance & Strategic Agility in Fast-Paced Markets",
    description: "Rapid scaling, AI disruption, and shifting valuations place severe cognitive demands on tech founders and enterprise VPs. Kim provides strategic perspective to align executive teams, temper urgency with clarity, and cultivate sustainable culture.",
    typicalMandates: [
      "Founder-to-CEO scaling transitions",
      "Executive alignment following M&A integration",
      "Combating hyper-speed exhaustion in engineering leadership",
      "Cross-functional communication across product, sales, and board"
    ],
    representativeImpact: "Mentored 40+ C-level technology leaders through successful funding rounds, strategic acquisitions, and organizational restructuring."
  },
  {
    sector: "Higher Education & Academia",
    iconName: "GraduationCap",
    headline: "Navigating Institutional Transformation & Multi-Stakeholder Complexity",
    description: "University presidents, provosts, and deans operate in high-friction environments with vocal stakeholders, changing demographics, and complex funding models. Kim helps academic leaders make courageous decisions with institutional grace.",
    typicalMandates: [
      "Academic senate & administrative board alignment",
      "Leadership development for newly appointed Deans & Chairs",
      "Crisis management and campus stakeholder dialogues",
      "Long-term institutional vision amid financial headwinds"
    ],
    representativeImpact: "Advised university leadership teams through campus-wide strategic revamps and leadership succession planning across 6 major academic institutions."
  },
  {
    sector: "Institutions & Public Governance",
    iconName: "Landmark",
    headline: "Discreet Strategic Counsel for Board Chairs & Public Agency Executives",
    description: "Public agencies, Crown corporations, and NGOs must navigate public accountability, media attention, and intricate policy demands. Kim acts as a trusted strategic advisor to navigate competing interests with integrity.",
    typicalMandates: [
      "Board oversight & executive mandate clarification",
      "Navigating high-visibility public crises and audits",
      "Transition management for incoming Deputy Ministers & CEOs",
      "Fostering psychological safety in high-stakes public environments"
    ],
    representativeImpact: "Guided senior public sector executives and board directors through multi-year modernization and public governance overhauls."
  }
];

export const ADVISORY_OFFERINGS: AdvisoryOffering[] = [
  {
    id: "strategic-transition",
    title: "High-Stakes Organizational Transformation",
    subtitle: "Strategic Navigation When the Cost of Missteps Is Severe",
    description: "When organizations undergo mergers, restructurings, or profound strategic pivots, executive friction and ambiguity quickly derail momentum. Kim steps in as an objective strategic counsel to align executive leadership, clarify strategic priorities, and maintain operational stability.",
    challengesAddressed: [
      "Executive team fragmentation during major restructuring",
      "Loss of key leadership talent during uncertainty",
      "Decision paralysis caused by competing internal factions",
      "Stalled transformation initiatives under stakeholder scrutiny"
    ],
    strategicOutcomes: [
      "Unified executive leadership cadence and shared narrative",
      "Clear prioritization matrix eliminating strategic drift",
      "Preservation of institutional trust and stakeholder credibility",
      "Accelerated transformation execution with reduced friction"
    ],
    engagementModel: "Retained strategic counsel (6 to 12 months) or rapid 90-day stabilization intervention."
  },
  {
    id: "confidential-csuite",
    title: "Confidential C-Suite & CEO Sounding Board",
    subtitle: "An Unfiltered, Strategic Thinking Partner at the Very Top",
    description: "Leadership at the apex is inherently isolated. CEOs and executive directors cannot always test raw ideas or voice vulnerabilities with their boards or subordinates. Kim provides an intellectually rigorous, completely confidential space to deconstruct complex choices.",
    challengesAddressed: [
      "Isolation at the top of the organization",
      "Evaluating sensitive personnel or governance decisions",
      "Navigating contentious board dynamics and activist stakeholders",
      "Balancing immediate operational pressures with long-term legacy"
    ],
    strategicOutcomes: [
      "Sharpened strategic clarity before critical board presentations",
      "Unbiased, cross-sector perspective on high-risk decisions",
      "Enhanced executive calm and presence during organizational storm",
      "Sound decision-making free from internal political bias"
    ],
    engagementModel: "Executive advisory retainer with dedicated on-call access and bi-weekly strategic sessions."
  },
  {
    id: "board-governance",
    title: "Executive Alignment & Governance Diagnostics",
    subtitle: "Bridging the Gap Between Board Intent & Operational Reality",
    description: "Friction between governing boards and executive leadership teams often leads to misaligned expectations and stalled mandates. Kim conducts discreet diagnostics and facilitates high-trust alignment sessions that restore mutual confidence and strategic cadence.",
    challengesAddressed: [
      "Misalignment between board mandates and executive capacity",
      "Ineffective executive committee dynamics and siloed leadership",
      "High executive turnover or succession ambiguity",
      "Unaddressed interpersonal friction at the leadership table"
    ],
    strategicOutcomes: [
      "Clear, agreed-upon boundaries of governance vs. operational execution",
      "Elevated trust and transparency between CEO and Board of Directors",
      "Optimized executive meeting rhythms focused on high-leverage outcomes",
      "Robust leadership succession and retention roadmap"
    ],
    engagementModel: "Custom governance alignment workshop and 6-month post-alignment advisory check-ins."
  }
];

export const COACHING_PILLARS: CoachingPillar[] = [
  {
    id: "sustainable-capacity",
    title: "Sustainable Executive Capacity & Energy",
    coreFocus: "High Performance Without Depletion",
    description: "True executive longevity is not about endurance or 70-hour workweeks—it is about managing cognitive load, nervous system resilience, and strategic energy. Kim equips leaders to sustain peak performance without sacrificing their health, family, or vitality.",
    benefits: [
      "Decisive mitigation of chronic cognitive fatigue and overwhelm",
      "Intentional recovery protocols integrated into relentless executive schedules",
      "Restoration of sustained mental clarity for high-consequence decisions",
      "Protection of physical and emotional wellbeing as a strategic asset"
    ],
    iconName: "BatteryCharging"
  },
  {
    id: "navigating-pressure",
    title: "Navigating High-Stakes Pressure & Crisis",
    coreFocus: "Maintaining Composure and Grounded Gravitas",
    description: "When crisis hits, a leader's emotional temperature dictates the entire organization's response. Kim works with executives to cultivate deep internal calm, enabling them to lead through ambiguity with courage and steady presence.",
    benefits: [
      "Mastery over stress-induced reactivity and decision fatigue",
      "Communication strategies that project authority and calm to panic-prone teams",
      "Frameworks for processing ambiguity with structured confidence",
      "Elevated executive presence in boardroom and media environments"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "strategic-clarity",
    title: "Clarity of Vision & Relentless Focus",
    coreFocus: "Cutting Through Noise to What Truly Matters",
    description: "Modern senior leaders are inundated with low-signal noise, urgent fire drills, and competing agendas. Kim guides executives to fiercely protect their strategic bandwidth and focus exclusively on high-leverage institutional priorities.",
    benefits: [
      "Pruning non-essential commitments and mastering strategic refusal",
      "Elevating perspective from reactive firefighting to visionary steering",
      "Strengthening delegation and leadership team empowerment",
      "Cultivating decisive courage for necessary but difficult decisions"
    ],
    iconName: "Compass"
  },
  {
    id: "human-leadership",
    title: "The Human Dimension of Leadership",
    coreFocus: "Empathy, Candor, and High-Trust Culture",
    description: "Authoritarian command-and-control is obsolete. Kim helps leaders build genuine human connection, foster psychological safety, and deliver radical candor that inspires loyalty and unleashes extraordinary organizational performance.",
    benefits: [
      "Balancing profound empathy with uncompromising accountability",
      "Navigating difficult interpersonal conversations with dignity and firmness",
      "Building resilient cultures that attract and retain top-tier executive talent",
      "Fostering generational bridge-building across diverse teams"
    ],
    iconName: "HeartHandshake"
  }
];

export const KEYNOTE_TOPICS: KeynoteTopic[] = [
  {
    id: "leading-through-complexity",
    title: "Leading Through Complexity: Clarity When the Stakes Are Highest",
    tagline: "How world-class leaders make decisive, courageous choices in turbulent environments.",
    description: "In an era marked by rapid market disruption, regulatory shifts, and compounding crises, traditional strategic playbooks fail. Kim delivers a masterclass on how senior executives can cut through paralysis, establish strategic focus, and guide their organizations with unshakeable poise.",
    outcomes: [
      "Understand the difference between complicated vs. complex problems and how to lead each",
      "Master the 3-part framework for rapid executive decision-making under uncertainty",
      "Learn how to communicate strategic direction with reassuring clarity to anxious workforces",
      "Develop organizational agility without sacrificing operational discipline"
    ],
    targetAudience: "C-Suite, Senior Executives, Board Directors, Industry Conferences, Annual Leadership Summits",
    durationOptions: ["45–60 min Keynote", "90 min Keynote + Interactive Q&A", "Half-Day Executive Masterclass"],
    themeCategory: "Complexity & Strategy"
  },
  {
    id: "resilience-high-stakes",
    title: "Resilience in High-Stakes Environments: Sustaining Human Capacity Under Pressure",
    tagline: "Why personal wellbeing is the ultimate competitive advantage for high-performing leaders.",
    description: "High performance is useless if it culminates in burnout and executive turnover. Kim challenges the outdated myth of sacrificial leadership, demonstrating that sustained organizational excellence requires intentional executive resilience, psychological safety, and cognitive preservation.",
    outcomes: [
      "Discover the neurobiology of executive stress and practical tools to down-regulate reactivity",
      "Create personalized 'micro-recovery' rituals that fit into demanding executive schedules",
      "Recognize the early institutional indicators of executive burnout before critical failures occur",
      "Cultivate an organizational climate where high expectations coexist with deep human care"
    ],
    targetAudience: "Healthcare Leadership, Technology Summits, Executive Retreats, Corporate Conferences",
    durationOptions: ["45–60 min Keynote", "90 min Keynote + Executive Workshop"],
    themeCategory: "Resilience & Wellbeing"
  },
  {
    id: "human-side-leadership",
    title: "The Human Side of Leadership: Courage, Candor, and Connection",
    tagline: "Bridging the gap between rigorous board expectations and authentic human understanding.",
    description: "Drawing from over 30 years of cross-sector leadership guidance, Kim explores how the most enduring institutions are built by leaders who combine sharp strategic intelligence with profound emotional maturity and courageous empathy.",
    outcomes: [
      "Learn how to deliver difficult organizational truths while preserving human dignity",
      "Build high-trust executive teams that embrace constructive dissent and radical candor",
      "Overcome the fear of vulnerability to forge deeper stakeholder and employee alignment",
      "Inspire discretionary effort and loyalty across multi-generational organizations"
    ],
    targetAudience: "Global Summits, Higher Education Leadership, Public Governance Forums, Enterprise All-Hands",
    durationOptions: ["45–60 min Keynote", "60 min Keynote + Panel Moderation"],
    themeCategory: "Human-Centered Leadership"
  },
  {
    id: "leading-through-change",
    title: "Leading Through Change and Uncertainty: Anchoring Organizations in Transformation",
    tagline: "Navigating massive organizational pivots without losing institutional soul.",
    description: "Whether navigating mergers, sudden regulatory shifts, or technological disruptions, leaders must anchor their people in core purpose while evolving business operations. Kim provides a roadmap for leading sustained, humane transformation.",
    outcomes: [
      "Overcome change fatigue and cynical resistance across organizational tiers",
      "Create transparent communication loops that reduce rumor mills and anxiety",
      "Align executive champions to drive cross-functional adoption of new mandates",
      "Celebrate incremental progress to build lasting transformation momentum"
    ],
    targetAudience: "Transformation Summits, M&A Leadership Retreats, Public Agency Conventions",
    durationOptions: ["45–60 min Keynote", "Half-Day Strategic Alignment Seminar"],
    themeCategory: "Organizational Transformation"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Kim's counsel during our regional health system restructuring was nothing short of transformative. She brought a rare synthesis of board-level strategic acuity and deep emotional intelligence that kept our executive committee unified through immense public pressure. She is the advisor you want by your side when the stakes cannot be higher.",
    author: "Dr. Catherine M., MD, FRCPC",
    title: "Chief Executive Officer & Former Chief Medical Officer",
    organization: "Regional Health Sciences Network (Ontario)",
    sector: "Healthcare",
    location: "Toronto & GTA",
    highlight: "Essential counsel during high-stakes hospital restructuring"
  },
  {
    id: "test-2",
    quote: "As a tech founder scaling past 500 employees, the sheer volume of competing priorities and board expectations was leading me straight to cognitive exhaustion. Working with Kim gave me my sanity and strategic focus back. She taught me that sustainable executive wellbeing isn't a perk—it is the prerequisite for clear thinking and billion-dollar decisions.",
    author: "Marcus V.",
    title: "Co-Founder & Executive Chairman",
    organization: "Enterprise AI & Cloud Infrastructure Group",
    sector: "Technology",
    location: "Waterloo / Silicon Valley",
    highlight: "Sustained executive clarity through rapid scaling & M&A"
  },
  {
    id: "test-3",
    quote: "Kim delivered our keynote at the Global Higher Education Leadership Summit and received a standing ovation from 600 university presidents and provosts. Her ability to articulate the intense pressures modern leaders face—while offering practical, uplifting, human-centered pathways forward—is unmatched. Organizers: book her immediately.",
    author: "Prof. Eleanor Vance, Ph.D.",
    title: "Provost & Vice-President Academic",
    organization: "International Academic Governance Consortium",
    sector: "Education",
    location: "Montreal / Boston",
    highlight: "Standing ovation keynote at international summit"
  },
  {
    id: "test-4",
    quote: "In public governance, scrutiny is relentless and the room for error is zero. Kim served as an invaluable sounding board for our board executive committee. Her 30+ years of wisdom allowed us to deconstruct high-friction governance disputes with clarity, grace, and total confidentiality.",
    author: "Hon. Robert J. Sterling",
    title: "Board Chair & Former Deputy Minister",
    organization: "Public Infrastructure & Crown Agency Board",
    sector: "Institutional Governance",
    location: "Ottawa / Toronto",
    highlight: "Trusted strategic advisor for complex public governance"
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    category: "Clarity",
    question: "When facing competing executive priorities or conflicting stakeholder demands, how readily can you filter out noise to isolate the 1–2 high-leverage strategic imperatives?",
    options: [
      { label: "High Friction", score: 1, description: "I frequently feel pulled into reactive firefighting; low-signal emergencies consume most of my day." },
      { label: "Moderate Control", score: 2, description: "I know our core goals, but daily organizational friction and noise frequently delay strategic progress." },
      { label: "Decisive Clarity", score: 3, description: "I ruthlessly protect my strategic bandwidth and have clear criteria to decline non-essential distractions." }
    ]
  },
  {
    id: 2,
    category: "Energy",
    question: "How would you describe your personal energy, cognitive stamina, and recovery rhythms during demanding organizational quarters?",
    options: [
      { label: "Depleted / High Burnout Risk", score: 1, description: "I am operating largely on adrenaline, sacrifice sleep, and feel persistent mental fatigue." },
      { label: "Cyclical Depletion", score: 2, description: "I push hard through intense sprints and crash on weekends; recovery is inconsistent." },
      { label: "Sustainable Vitality", score: 3, description: "I have disciplined recovery rituals and maintain consistent cognitive clarity even during heavy pressure." }
    ]
  },
  {
    id: 3,
    category: "Resilience",
    question: "When unprecedented crises or high-stakes controversies emerge, how does your executive team experience your leadership presence?",
    options: [
      { label: "Anxious / Reactive", score: 1, description: "Tension and urgency spill over into team dynamics, creating anxiety and second-guessing." },
      { label: "Guarded / Masked", score: 2, description: "I project outward confidence, but internal doubt and pressure weigh heavily without an outlet." },
      { label: "Grounded & Calming", score: 3, description: "I project steady, reassuring gravitas while providing transparent, courageous direction." }
    ]
  },
  {
    id: 4,
    category: "Governance",
    question: "How confidential, safe, and intellectually rigorous is the sounding board you currently have for your highest-stakes, most sensitive dilemmas?",
    options: [
      { label: "Isolated", score: 1, description: "I have virtually no one inside or outside the organization with whom I can speak completely unguardedly." },
      { label: "Informal Peer Advice", score: 2, description: "I occasionally consult industry peers, but lack structured, objective senior executive counsel." },
      { label: "Trusted Strategic Advisor", score: 3, description: "I maintain an objective, high-trust executive advisor who challenges and sharpens my thinking." }
    ]
  },
  {
    id: 5,
    category: "Clarity",
    question: "How effectively does your current leadership culture balance uncompromising high standards with genuine human compassion and psychological safety?",
    options: [
      { label: "Fear-Driven / Siloed", score: 1, description: "Fear of failure stifles innovation; mistakes are concealed or blamed on departments." },
      { label: "Polite but Superficial", score: 2, description: "We are collegial, but avoid necessary difficult conversations and radical candor." },
      { label: "High Trust & Accountability", score: 3, description: "Teams address tough issues openly with mutual respect, deep loyalty, and shared ownership." }
    ]
  }
];

export const SPEAKER_KIT_DETAILS = {
  speakerName: "Kim Nicole Thomas",
  title: "Executive Leadership & Wellbeing Coach | Strategic Advisor | Keynote Speaker",
  baseLocation: "Toronto, Ontario, Canada",
  experienceSummary: "Over 30 years guiding senior executives, C-suite leaders, founders, and institutional boards across healthcare, technology, education, and institutional sectors. Degrees from Queen’s University, inaugural TEDx Director & speaker coach.",
  travelScope: "Available for in-person keynotes globally & high-impact virtual executive broadcasts.",
  avRequirements: [
    "Wireless lavalier or headset microphone (shure / sennheiser preferred)",
    "HDMI connection for presentation slide deck with audio output",
    "Confidence monitor with elapsed presentation timer",
    "Comfortable stage stool and water",
    "Recording permission: Keynotes may be recorded for internal enterprise archives upon prior agreement"
  ],
  standardOfferings: [
    "Signature Opening/Closing Keynote (45–60 mins)",
    "Executive Fireside Chat & Moderated Q&A (45–60 mins)",
    "Senior Leadership Strategy Retreat Facilitation (Half-Day / Full-Day)",
    "Pre-Conference C-Suite Masterclass & VIP Breakfast Briefing"
  ]
};
