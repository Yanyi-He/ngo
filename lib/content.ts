export { communityPosts } from "./mock-data/community-posts";
export { events } from "./mock-data/events";
export { featuredResources, resources } from "./mock-data/resources";
export {
  menteeProfiles,
  mentorProfiles,
  volunteerProfiles,
} from "./mock-data/volunteers";

export const organization = {
  acronym: "COAN",
  name: "Canadian Observers and Activists Network",
  email: "hello@coan-canada.org",
  volunteerEmail: "volunteer@coan-canada.org",
  location: "Toronto, Ontario | Serving Chinese-speaking communities across Canada",
  mission:
    "Help Chinese-speaking newcomers understand Canadian society, public services, community rules, public policy, and civic participation.",
  footerSummary:
    "Canadian Observers and Activists Network helps Chinese-speaking newcomers understand daily life, public services, community rules, public policy, and meaningful ways to participate in Canadian civic life.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/community", label: "Community" },
  { href: "/chatbot", label: "AI Chatbot" },
];

export const footerSections = [
  {
    title: "Mission",
    links: [
      { href: "/about", label: "About COAN" },
      { href: "/resources", label: "Resource Library" },
      { href: "/events", label: "Learning Events" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { href: "/volunteer", label: "Volunteer" },
      { href: "/community", label: "Community Posts" },
      { href: "mailto:volunteer@coan-canada.org", label: "Contact Volunteer Team" },
    ],
  },
  {
    title: "Policies",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/accessibility", label: "Accessibility" },
      { href: "/community-guidelines", label: "Community Guidelines" },
      { href: "/ai-disclaimer", label: "AI Disclaimer" },
      { href: "mailto:hello@coan-canada.org", label: "Contact" },
    ],
  },
];

export const coreTopics = [
  "Housing",
  "Healthcare",
  "Tax and benefits",
  "Community life",
  "Public policy",
  "Civic engagement",
  "Student support",
];

export const resourceCategories = [
  "Housing",
  "Healthcare",
  "Tax and benefits",
  "Community life",
  "Public policy",
  "Civic engagement",
  "Student support",
];

export const resourceCollections = [
  {
    title: "First month in Canada",
    description:
      "A practical reading path for newcomers setting up housing, health coverage, banking, transit, school, and local services.",
    label: "7 essential guides",
  },
  {
    title: "Understand your rights and responsibilities",
    description:
      "Plain-language articles on tenant responsibilities, workplace basics, public service rules, and respectful community participation.",
    label: "6 rights-focused explainers",
  },
  {
    title: "Student life and settlement",
    description:
      "Resources for international students navigating campus services, housing searches, healthcare access, work limits, and community safety.",
    label: "5 student support articles",
  },
];

export const postCategories = [
  "Housing",
  "Healthcare",
  "Tax and benefits",
  "Campus life",
  "Community support",
  "Public policy",
  "Civic engagement",
  "Events",
  "General discussion",
];

export const services = [
  {
    title: "Newcomer Resource Library",
    description:
      "Clear, bilingual-ready articles that explain housing, healthcare, tax and benefits, public policy, community life, and student support.",
    href: "/resources",
  },
  {
    title: "Volunteer and Mentor Support",
    description:
      "A community matching program connecting newcomers with trained volunteers who can share lived experience and practical next steps.",
    href: "/volunteer",
  },
  {
    title: "Workshops and Events",
    description:
      "Online and local sessions that help newcomers understand public services, community rules, and participation in Canadian society.",
    href: "/events",
  },
  {
    title: "AI Information Assistant",
    description:
      "A careful information desk for general questions, designed to point users toward official sources and community resources.",
    href: "/chatbot",
  },
  {
    title: "Civic Learning",
    description:
      "Plain-language guidance on public policy, municipal services, consultations, and respectful ways to participate in local decision-making.",
    href: "/resources",
  },
  {
    title: "Moderated Community",
    description:
      "A responsible discussion space where newcomers and volunteers can share practical experiences, questions, and resource pathways.",
    href: "/community",
  },
];

export const homeSections = {
  hero:
    "A professional, community-focused nonprofit platform helping Chinese-speaking newcomers understand Canadian society, access public services, follow community rules, and participate confidently in civic life.",
  mission:
    "COAN turns complex public information into accessible guidance for newcomers. We explain how Canadian systems work, connect people with community resources, and create opportunities for volunteers, students, and residents to learn from one another.",
  trustSignals: [
    "General information with clear disclaimers",
    "Bilingual-ready content for Chinese-speaking communities",
    "Moderated community discussion",
    "Volunteer support grounded in consent and respect",
  ],
  communityIntro:
    "COAN’s community space is designed for constructive questions, responsible resource sharing, and peer support that complements official information.",
};

export const impactMetrics = [
  {
    value: "20+",
    label: "Newcomer resource topics prepared",
    note: "Platform content coverage",
  },
  {
    value: "7",
    label: "Volunteer role pathways",
    note: "Design, translation, mentoring, outreach, and technology",
  },
  {
    value: "5",
    label: "Core service areas",
    note: "Resources, events, volunteer support, community, and AI guidance",
  },
  {
    value: "1",
    label: "Community support platform",
    note: "A shared home for learning and participation",
  },
];

export const howCoanHelps = [
  {
    title: "Ask practical questions",
    description:
      "Start with everyday issues such as renting, healthcare, tax documents, campus life, public services, or community rules.",
  },
  {
    title: "Find clear information",
    description:
      "Use plain-language resources that explain what matters, what to check, and where official information usually lives.",
  },
  {
    title: "Join events or discussions",
    description:
      "Attend workshops, ask moderated community questions, and learn from volunteers with local experience.",
  },
  {
    title: "Connect with support",
    description:
      "Apply for mentor matching or volunteer with COAN to help build a clearer path for newcomers in Canada.",
  },
];

export const trustSafetyItems = [
  {
    title: "General information only",
    description:
      "COAN resources and chatbot responses help users understand topics, but do not replace legal, medical, financial, tax, or immigration advice.",
  },
  {
    title: "Official-source orientation",
    description:
      "Content is written to guide users toward federal, provincial, municipal, campus, and community sources they can verify.",
  },
  {
    title: "Respectful moderation",
    description:
      "Community spaces are designed for constructive discussion, privacy awareness, and responsible peer support.",
  },
  {
    title: "Consent-based matching",
    description:
      "Volunteer and mentee information is reviewed carefully, with consent and clear expectations before matching.",
  },
  {
    title: "Privacy-aware design",
    description:
      "Sensitive newcomer information is minimized, and chatbot logs are stored only when users consent.",
  },
];

export const departments = [
  {
    title: "Board of Directors",
    description:
      "Provides governance, strategic oversight, risk management, and accountability so COAN can operate as a trustworthy public-interest organization.",
  },
  {
    title: "Technical Department",
    description:
      "Builds and maintains the website, chatbot infrastructure, data workflows, security practices, and accessibility standards for COAN’s digital services.",
  },
  {
    title: "Campus Partnership Department",
    description:
      "Works with student groups, campus offices, and youth volunteers to support international students and newcomer families connected to post-secondary communities.",
  },
  {
    title: "Volunteer Management Department",
    description:
      "Recruits, screens, trains, and coordinates volunteers while maintaining matching records, consent practices, and respectful service expectations.",
  },
  {
    title: "Content Production Department",
    description:
      "Creates resource articles, translated explainers, short videos, social content, and workshop materials on Canadian society and public services.",
  },
];

export const values = [
  "Accuracy, transparency, and source awareness",
  "Inclusive support for Chinese-speaking newcomers",
  "Respect for privacy, consent, and lived experience",
  "Accessible language and practical next steps",
  "Civic participation and community responsibility",
];

export const volunteerPositions = [
  {
    title: "Visual Designer",
    description:
      "Create clear visual layouts, accessible graphics, event posters, and social media templates that make public information easier to understand.",
    commitment: "3-5 hours per week",
  },
  {
    title: "Content Translator",
    description:
      "Translate and adapt English public-service information into natural Chinese while preserving accuracy, tone, and cultural context.",
    commitment: "2-4 hours per week",
  },
  {
    title: "Video Editor / Producer",
    description:
      "Produce short explainers, workshop recordings, volunteer stories, and newcomer-friendly videos for web and social platforms.",
    commitment: "Project-based",
  },
  {
    title: "Social Media Operator",
    description:
      "Plan and publish posts, respond to routine inquiries, promote events, and help COAN maintain a calm and reliable public presence.",
    commitment: "2-3 hours per week",
  },
  {
    title: "Web Designer / Developer",
    description:
      "Improve the website experience, build accessible interfaces, support CMS workflows, and help prepare the platform for secure integrations.",
    commitment: "Flexible technical projects",
  },
  {
    title: "Mentor",
    description:
      "Support newcomers with practical orientation, resource navigation, campus life questions, and confidence-building conversations.",
    commitment: "1-2 mentee sessions per month",
  },
  {
    title: "Community Volunteer",
    description:
      "Help with event operations, community outreach, note-taking, resource collection, and welcoming participants during programs.",
    commitment: "Event-based",
  },
];

export const volunteerStatuses = [
  {
    status: "Submitted",
    description:
      "Your application is received with consent and enough contact information for the volunteer team to review.",
  },
  {
    status: "Under review",
    description:
      "COAN reviews role fit, language capacity, availability, and whether training or follow-up questions are needed.",
  },
  {
    status: "Approved",
    description:
      "You are cleared for a volunteer role, event team, content project, or mentor pool based on your interests and experience.",
  },
  {
    status: "Matched",
    description:
      "Mentors and mentees are matched manually based on support needs, city, language, schedule, and boundaries.",
  },
  {
    status: "Inactive",
    description:
      "You are not currently assigned to active work, but may return when your availability or program needs change.",
  },
];

export const chatbotContent = {
  topics: [
    "Housing",
    "Healthcare",
    "Tax and benefits",
    "Community life",
    "Public policy",
    "Civic engagement",
    "Student support",
  ],
  suggestedQuestions: [
    "What should I check before signing a rental agreement?",
    "How do I find healthcare options if I do not yet have a family doctor?",
    "What documents should I keep before filing taxes in Canada?",
    "How can I learn about local bylaws and community rules in my city?",
    "What are respectful ways to participate in public consultations?",
  ],
  exampleAnswer:
    "Before signing a rental agreement, review the rent, term, included utilities, deposit rules, maintenance responsibilities, guest and roommate expectations, and move-in condition. Keep copies of documents and receipts. For rules that affect your rights, check the tenant information page for your province or territory, or contact a community legal clinic.",
  answerSources: [
    "Provincial or territorial tenant information pages",
    "Municipal service and bylaw pages",
    "COAN curated resource articles",
    "Community legal clinic or settlement agency directories",
  ],
};

export const communityGuidelines = [
  "Share practical experiences without presenting them as legal, medical, financial, tax, or immigration advice.",
  "Use respectful language toward newcomers, volunteers, students, families, and public-service workers.",
  "Do not post private identity, health, immigration, financial, or address details.",
  "When possible, link to official public sources or explain where information came from.",
  "Moderators may hide unsafe, discriminatory, spam, or misleading content.",
];
