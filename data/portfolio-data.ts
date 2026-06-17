// SoftVibe Services — portfolio content
// Single source of truth for every section. Edit copy/data here only.

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const techStack = [
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Flutter",
  "Move / Aptos",
  "Firebase",
  "Tailwind CSS",
  "Supabase",
];

export const values = [
  { title: "High-Quality Development", description: "Built right the first time, not patched together later." },
  { title: "Clean & Maintainable Code", description: "Code your future team won't dread inheriting." },
  { title: "Fast Delivery", description: "Real momentum, without skipping the parts that matter." },
  { title: "Transparent Communication", description: "You always know exactly where the project stands." },
  { title: "Scalable Architecture", description: "Built to handle ten users or ten thousand." },
  { title: "User-Centered Design", description: "Software designed around how people actually work." },
  { title: "Long-Term Support", description: "We stay on after launch, not just through it." },
];

export const processSteps = [
  { title: "Requirement Discussion", description: "Understanding your business before writing a single line of code." },
  { title: "Planning & Architecture", description: "Mapping the system, the stack, and the timeline upfront." },
  { title: "UI/UX Design", description: "Designing the experience before the engineering begins." },
  { title: "Development", description: "Building in focused, reviewable stages — not one long sprint." },
  { title: "Testing", description: "Catching issues before your users ever do." },
  { title: "Deployment", description: "Shipping to production with zero-downtime releases." },
  { title: "Maintenance & Support", description: "Staying on to fix, improve, and extend after launch." },
];

export const industries = [
  "Startups",
  "Hospitality",
  "Restaurants & Food Businesses",
  "Retail",
  "Small Businesses",
  "Enterprise Clients",
];

export const services = [
  { title: "Custom Website Development", description: "Marketing sites and brand websites built for speed, conversion, and real design craft." },
  { title: "Full Stack Web Applications", description: "End-to-end platforms — frontend, backend, database, and everything connecting them." },
  { title: "SaaS Product Development", description: "Multi-tenant products built to onboard real, paying customers from day one." },
  { title: "UI/UX Design", description: "Interfaces people actually want to use, not just ones that technically work." },
  { title: "API Development & Integration", description: "Clean REST APIs, third-party integrations, and the logic that powers mobile apps." },
  { title: "Cloud Deployment", description: "Zero-downtime deployments on infrastructure that scales with you." },
  { title: "Database Design", description: "Schemas built for your actual data, not retrofitted after the bugs show up." },
  { title: "Business Automation Solutions", description: "Replacing spreadsheets, WhatsApp groups, and paper logs with real systems." },
  { title: "Software Consulting", description: "Architecture reviews, stack decisions, and a second opinion before you build." },
  { title: "Maintenance & Support", description: "We don't disappear after launch. Long-term support, built in." },
  { title: "SEO Implementation", description: "Technical SEO that gets your site found, not just built." },
];

export type ProjectStatus = "live" | "production" | "demo" | "testnet";

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  industry: string;
  description: string;
  price: string;
  status: ProjectStatus;
  statusLabel: string;
  suiteNote?: string;
  tech: string[];
  features: string[];
  liveLink?: string;
  demoVideo?: string;
  codeLink?: string;
}

export const projects: Project[] = [
  {
    id: "library-management-system",
    title: "Library Management System",
    client: "StackUp",
    location: "Remote",
    industry: "EdTech / Library Software",
    description:
      "A complete library operating system. Admin manages everything, librarians handle day-to-day checkouts, and users can browse and request books — all in one clean web interface.",
    price: "$90",
    status: "demo",
    statusLabel: "Demo Available",
    tech: ["Next.js", "TypeScript", "MongoDB", "Gemini AI", "Supabase", "NextAuth"],
    features: [
      "Three role system — Admin, Librarian, User with full route protection",
      "AI auto-generates book descriptions using Google Gemini",
      "Borrow and return system with automatic fine calculation",
      "Admin analytics dashboard — active borrows, overdue list, user count",
    ],
    demoVideo: "https://youtu.be/_1GYteabksM?feature=shared",
    codeLink: "https://github.com/Nitrajsinh-Solanki/library-inventory-system",
  },
  {
    id: "biomap-scientific-explorer",
    title: "BioMap — Scientific Explorer Platform",
    client: "StackUp",
    location: "Remote",
    industry: "Science / EdTech",
    description:
      "Six scientific domains unified into one platform. Complex multi-API architecture delivered as a single clean interface — biodiversity, chemistry, space, environment, taxonomy, and education all from one login.",
    price: "$70",
    status: "live",
    statusLabel: "Live",
    tech: ["Next.js 14", "TypeScript", "MongoDB", "Leaflet", "NASA API", "GBIF API", "PubChem API"],
    features: [
      "Interactive biodiversity map with global species occurrence data",
      "Chemistry database with molecular structures via PubChem",
      "NASA space media gallery — images and videos",
      "Species database with taxonomy and conservation status",
    ],
    liveLink: "https://biomap-nitrajsinh-solankis-projects.vercel.app",
    demoVideo: "https://youtu.be/df_NNqL2DzA?feature=shared",
  },
  {
    id: "nft-marketplace-aptos",
    title: "NFT Marketplace — Aptos Blockchain",
    client: "StackUp",
    location: "Remote",
    industry: "Web3 / Blockchain",
    description:
      "A complete NFT marketplace from smart contract to frontend — no shortcuts. Every auction, royalty, and offer runs fully on-chain across the entire Web3 stack, from Move contracts to React UI.",
    price: "$60",
    status: "testnet",
    statusLabel: "Testnet Deployment",
    tech: ["Aptos", "Move", "React", "Petra Wallet", "Web3"],
    features: [
      "On-chain auction system with custom start price and time-based expiry",
      "Royalty enforcement on every secondary sale — 5% default, 15% max",
      "Batch NFT transfers — multiple NFTs in one transaction",
      "Offer and counter-offer system on listed NFTs",
    ],
    demoVideo: "https://youtu.be/ktyZZIuZpNY?feature=shared",
  },
  {
    id: "floris-restaurant-patan",
    title: "Floris Restaurant & Banquet",
    client: "Floris Restaurant & Banquet",
    location: "Patan, Gujarat, India",
    industry: "Food & Hospitality",
    description:
      "A conversion-focused website that positions Floris as a premium dining destination. The dark fire palette, glow effects, and gallery are all designed to make visitors want to walk in or book a table.",
    price: "₹12,000",
    status: "live",
    statusLabel: "Live",
    tech: ["React 19", "Vite", "Tailwind CSS", "Vercel"],
    features: [
      "Custom fire brand design — deep black with orange and amber theme",
      "Smooth scroll single-page app with animated section transitions",
      "Active section tracking in navbar using IntersectionObserver",
      "Full gallery section for food and venue photography",
    ],
    liveLink: "https://floris-restaurant.vercel.app",
  },
  {
    id: "ice-saathi-platform",
    title: "Ice Saathi — Business Management Platform",
    client: "Aman Sales (Shreeji Ice Creams)",
    location: "Gandhidham, Gujarat, India",
    industry: "Wholesale Distribution / FMCG",
    description:
      "Aman Sales was running their entire wholesale ice distribution on paper and WhatsApp calls. We replaced all of it — every customer, subscription, delivery, and payment is now tracked digitally in real time.",
    price: "₹40,000",
    status: "production",
    statusLabel: "Live in Production",
    tech: ["Next.js", "TypeScript", "MongoDB", "Firebase FCM", "REST API", "JWT"],
    features: [
      "Customer onboarding and subscription management",
      "Live GPS tracking of all delivery partners on admin map",
      "FCM push notifications to delivery partners on new order assignment",
      "Full REST API backend consumed by the companion Flutter mobile app",
    ],
    liveLink: "https://www.icesaathi.co.in",
  },
  {
    id: "aman-sales-delivery-app",
    title: "Aman Sales — Delivery Partner App",
    client: "Aman Sales",
    location: "Gandhidham, Gujarat, India",
    industry: "Wholesale Distribution / Logistics",
    description:
      "Every delivery partner has the full job in their pocket. New order comes in — they get a push notification instantly, navigate, deliver, and mark it done while the admin sees it all live.",
    price: "₹30,000",
    status: "production",
    statusLabel: "In Production",
    suiteNote: "Companion to Ice Saathi",
    tech: ["Flutter", "Dart", "Firebase FCM", "Provider", "Dio"],
    features: [
      "OTP login with pending approval state for new partner onboarding",
      "Background GPS location service — continuously updates admin dashboard",
      "FCM push notifications the moment a new order is assigned",
      "Go-To search — find any registered customer by name instantly",
    ],
  },
  {
    id: "hourbit-productivity-suite",
    title: "HourBit — Employee Productivity Suite",
    client: "HourBit",
    location: "India",
    industry: "HR Tech / SaaS / Employee Tools",
    description:
      "Five tools that most companies buy five separate SaaS subscriptions for — built into one fast, secure, well-designed web app, with full ownership of the data and no recurring third-party costs.",
    price: "₹50,000",
    status: "live",
    statusLabel: "Live",
    tech: ["Next.js 16", "TypeScript", "MongoDB", "Recharts", "jsPDF"],
    features: [
      "Work Hours Tracker — clock in/out, break deduction, smart leave prediction",
      "Brain Quiz — categories, difficulty levels, XP rewards, global leaderboard",
      "Personal Diary — rich journaling, search, CSV and PDF export",
      "Expense Tracker — wallet balance, categorized transactions, spending analytics",
    ],
    liveLink: "https://hourbit-web.vercel.app",
  },
];

export interface Testimonial {
  displayName: string;
  title: string;
  location: string;
  quote: string;
  rating: number;
  avatarInitials: string;
  avatarColor: string;
}

export const testimonials: Testimonial[] = [
  {
    displayName: "Aman Sales",
    title: "Owner",
    location: "Gandhidham, Gujarat",
    quote:
      "Before this system, everything was on paper — customer lists, delivery records, payments. I had to call each delivery partner separately to know where they were. Now I open the dashboard and see every order, every customer, and every delivery partner live on the map. It has completely changed how we run the business.",
    rating: 5,
    avatarInitials: "VV",
    avatarColor: "#1B4332",
  },
  {
    displayName: "Owner, Floris Restaurant & Banquet",
    title: "Owner",
    location: "Patan, Gujarat",
    quote:
      "We wanted something that felt as premium as our banquet hall — not a basic website. They understood that immediately. The design, the gallery, the way the menu section looks on mobile — all of it is exactly what we wanted. We have had customers tell us they came in because of the website. That says everything.",
    rating: 5,
    avatarInitials: "KT",
    avatarColor: "#7C3B1E",
  },
  {
    displayName: "Arjun Mehta",
    title: "Co-Founder, HourBit",
    location: "India",
    quote:
      "We came to them with a complex requirement — five different tools, one unified app, admin controls, clean UI. They asked the right questions, planned it properly, and delivered without cutting corners. It is exactly what we described, built better than we imagined.",
    rating: 5,
    avatarInitials: "AM",
    avatarColor: "#185FA5",
  },
];

export interface TeamMember {
  name: string;
  initials: string;
  roles: string[];
  skills: string[];
  email?: string;
  portfolio?: string;
}

export const team: TeamMember[] = [
  {
    name: "Amar Tiwari",
    initials: "AT",
    roles: ["Co-Founder", "Tech Consultant", "Full Stack Developer"],
    skills: ["Full Stack Development", "Software Architecture", "Client Consulting"],
    email: "amar.tiwari.8355@gmail.com",
  },
  {
    name: "Nitraj Solanki",
    initials: "NS",
    roles: ["Co-Founder", "Full Stack Developer"],
    skills: ["Frontend Development", "Backend Development", "Modern Web Applications"],
    email: "nrsolanki2005@gmail.com",
    portfolio: "https://nitrajsinh-solanki.vercel.app/",
  },
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A focused marketing website usually takes 1–2 weeks. A full platform like a business management system or SaaS product typically takes 4–8 weeks, start to deployment. We give you a clear timeline after the requirement discussion — before any work begins.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Every quote covers planning, design, development, testing, and deployment. There are no hidden charges added after the fact. If a feature is discussed and agreed in scope, it's included.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Maintenance and support is one of our core services, not an afterthought. We offer ongoing support plans so your software keeps running smoothly, gets bug fixes promptly, and can grow with new features over time.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Primarily Next.js, TypeScript, React, and MongoDB for web platforms, Flutter for mobile apps, and modern cloud infrastructure for deployment. We also work with specialized stacks when a project calls for it — we've shipped on-chain products with Move and Aptos, for example.",
  },
  {
    question: "Can you work with our existing codebase or team?",
    answer:
      "Yes. We regularly join projects mid-flight — auditing an existing codebase, fixing performance or architecture issues, or building new features alongside an in-house team.",
  },
  {
    question: "How does payment work?",
    answer:
      "We typically work with a milestone-based structure — an upfront deposit to begin, with remaining payments tied to agreed milestones or final delivery. Exact terms are confirmed during the planning stage so there are no surprises.",
  },
  {
    question: "I don't have technical requirements written down yet — can you still help?",
    answer:
      "That's exactly what the requirement discussion stage is for. Most clients come to us with a business problem, not a technical spec. We'll help translate what you need into an actual plan and architecture.",
  },
];

export const contact = {
  email: "softvibeservices@gmail.com",
  altEmail: "amar.tiwari.8355@gmail.com",
};
