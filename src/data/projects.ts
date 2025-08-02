import { ProjectType } from '../types/project';

export const projectsData: ProjectType[] = [
  // === ACS Results AI: Trifecta ===
  {
  id: 1,
  title: "DevBot - Demo",
  description: "Autonomous backend execution agent preforms semantic anchored full codebase analysis + pinpointed patch generation via OpenAPI to build through upstream task queues.",
  category: "ACS Results AI: Trifecta",
  date: "2025",
  imageUrl: "/images/DevBot.png",
  images: ["/images/DevBot.png"],
  tags: ["AI Agents", "OpenAPI", "Code Automation"],
  duration: "Ongoing",
  skills: [
    "Backend Automation",
    "Semantic Parsing via AST",
    "GitHub Patch Proposals"
  ],
  challenges: [
    "Ensuring mutation safety at scale",
    "Executing autonomous changes without human oversight"
  ],
  outcomes: [
    "Fully autonomous DevOps agent",
    "Rapid backend delivery via safe patch cycles"
  ],
  liveUrl: "https://chatgpt.com/g/g-687adb918ce88191977866be9e2153c7-devbot",
  githubUrl: "https://github.com/AlexSeisler/DevbotKernelBackend"
},
  {
    id: 2,
    title: "CIAN - Demo",
    description: "Central Intelligence Automation Network (CIAN) – a second brain OS for AI agents, managing memory, task queues, and semantic intent routing.",
    category: "ACS Results AI: Trifecta",
    date: "2025",
    imageUrl: "/images/CIAN.png",
    images: ["/images/CIAN.png"],
    tags: ["AI OS", "Memory Systems", "Task Routing"],
    duration: "Ongoing",
    skills: ["Data Layer Design", "API Orchestration", "Execution Queues"],
    challenges: ["Memory Cohesion", "Multi-agent Sync"],
    outcomes: ["Operational Clarity", "Modular Architecture"],
    liveUrl: "https://chatgpt.com/g/g-6882d194246c8191a7b8974df4419c8d-cian-v0",
    githubUrl: "https://github.com/AlexSeisler/DevbotKernelBackend"
  },
  {
    id: 3,
    title: "SMMAA",
    description: "Social Media Marketing Automation Agent powering resellable content systems, client pipelines, and cross-channel visibility.",
    category: "ACS Results AI: Trifecta",
    date: "2025",
    imageUrl: "/images/SMMAA.png",
    images: ["/images/SMMAA.png"],
    tags: ["Marketing Automation", "Content AI", "Client Systems"],
    duration: "Ongoing",
    skills: ["GPT Content Systems", "Multi-Client Orchestration"],
    challenges: ["Multi-client Scaling", "GTM Strategy"],
    outcomes: ["Inbound Systems", "Client Resell Stack"]
  },
  {
    id: 4,
    title: "Systems Architect",
    description: "Software Engineer agent, upstream of DevBot. Decomposes goals, manages upgrade queues, and handles repo mapping + phased development.",
    category: "ACS Results AI: Trifecta",
    date: "2025",
    imageUrl: "/images/Architect.png",
    images: ["/images/Architect.png"],
    tags: ["Architecture", "Strategic AI", "Planner Agent"],
    duration: "Ongoing",
    skills: ["Upstream Planning", "Queue Management", "AI Decomposition"],
    challenges: ["Repo Complexity", "Execution Drift"],
    outcomes: ["Queue Coordination", "Risk-Aware Upgrades"]
  },
  {
  id: 5,
  title: "AAO (Alignment + Opportunities Agent)",
  description: "Intelligent automation system that matches resumes, skills, and goals to live job and scholarship opportunities. Also serves as a full-stack SaaS stress test for scalable AI tooling.",
  category: "ACS Results AI: Trifecta",
  date: "2025",
  imageUrl: "/images/AAO.png",
  images: ["/images/AAO.png"],
  tags: ["SaaS Agent", "Resume Matching", "Career Automation", "Full-Stack AI"],
  duration: "Ongoing",
  skills: [
    "FastAPI & Supabase Architecture",
    "OAuth & Role-Based Access",
    "AI Resume Parsing & Opportunity Matching",
    "Application Memory Graph Design",
    "Frontend Dashboards (Tailwind + React)"
  ],
  challenges: [
    "Scaling secure user data and auth logic",
    "Building a reusable application memory layer",
    "Auto-tailoring resumes to job flows via GPT"
  ],
  outcomes: [
    "Personal career navigation system",
    "Resume builder + tailoring AI loop",
    "Stress-tested SaaS infra for agent deployment"
  ],
  liveUrl: "",
  githubUrl: ""
}
,

  // === AI Automation Agency ===
  {
    id: 6,
    title: "AI Automation Agency",
    description: "AI-powered agency systems for CRM integration, automated outreach, call/chat bots, and internal optimization for SMBs.",
    category: "AI Automation Agency",
    date: "2024 - Present",
    imageUrl: "/images/ACSResultsAI.png",
    images: ["/images/ACSResultsAI.png"],
    tags: ["AI", "CRM", "Automation", "API"],
    duration: "Ongoing",
    skills: ["AI Development", "CRM Integration", "Automation Engineering"],
    challenges: ["System Personalization", "Tool Compatibility"],
    outcomes: ["Efficiency Gains", "Owner Offload"],
    liveUrl: "https://acs-results-ai.netlify.app/",
  },
  {
    id: 7,
    title: "Automated Lead Generation",
    description: "Built systems to automate lead generation, sending tailored emails daily using Instantly.ai, Make.com, and various APIs to create efficient workflows and improve lead conversion rates.",
    category: "AI Automation Agency",
    date: "2024",
    imageUrl: "/images/AutoLeadGen1.png",
    images: ["/images/AutoLeadGen1.png", "/images/AutoLeadGen2.png", "/images/AutoLeadGen3.png"],
    tags: ["Email Automation", "Lead Gen", "Make.com"],
    duration: "3 months",
    skills: ["Workflow Automation", "API Sequencing"],
    challenges: ["Deliverability", "Inbox Scaling"],
    outcomes: ["Daily Pipeline", "Cold Email at Scale"]
  },
  {
    id: 8,
    title: "AI Chat Bots",
    description: "Voiceflow and Voiceglow-powered chatbots for personalized customer interaction pipelines and brand engagement.",
    category: "AI Automation Agency",
    date: "2024",
    imageUrl: "/images/ChatBot1.png",
    images: ["/images/ChatBot1.png", "/images/ChatBot2.png", "/images/ChatBot3.png"],
    tags: ["Chatbots", "Voiceflow", "NLP"],
    duration: "3 months",
    skills: ["Conversation Design", "AI UX", "Bot Deployment"],
    challenges: ["Complex Flows", "UX Variation"],
    outcomes: ["24/7 Support", "Lowered Ops Cost"]
  },
  {
    id: 9,
    title: "AI Call Bots",
    description: "Voice AI bots using Bland.ai and Vapi for appointment booking and qualification in home services and other lead-gen markets.",
    category: "AI Automation Agency",
    date: "2024",
    imageUrl: "/images/CallBot1.png",
    images: ["/images/CallBot1.png", "/images/CallBot2.png", "/images/CallBot3.png"],
    tags: ["Voice AI", "Call Bots", "Lead Qualifying"],
    duration: "4 months",
    skills: ["Call Flow", "Voice AI Design"],
    challenges: ["Synthesis Delay", "Data Sync"],
    outcomes: ["Booked Appointments", "Hands-free Pipeline"]
  },

  // === ACS Results Legacy (incl. Client Work) ===
  {
    id: 10,
    title: "ACS Results Portfolio Builder",
    description: "Legacy ACS Results website building services niche: College students and small businesses.",
    category: "ACS Results Legacy",
    date: "2024",
    imageUrl: "/images/ACS-Results.png",
    images: ["/images/ACS-Results.png"],
    tags: ["Web Dev", "UI/UX", "No-Code"],
    duration: "2 months",
    skills: ["Frontend", "Tailwind", "UI Systems"],
    challenges: ["User Customization", "Deployment Flow"],
    outcomes: ["Launched Websites", "UX Simplicity"],
    liveUrl: "https://acs-results.netlify.app/"
  },
  {
    id: 11,
    title: "Student Portfolio",
    description: "Portfolio template system for students to showcase skills and projects with clean UX and backend integration.",
    category: "ACS Results Legacy",
    date: "2024",
    imageUrl: "/images/Christian.png",
    images: ["/images/Christian.png"],
    tags: ["Portfolio", "React", "Tailwind"],
    duration: "2 months",
    skills: ["UI Dev", "Backend Hooks"],
    challenges: ["UX Flow", "Scalability"],
    outcomes: ["Student Visibility", "Simple Deploy"],
    liveUrl: "https://christian-castellano.netlify.app/",
  },
  {
    id: 12,
    title: "ColumbiaPA300",
    description: "Civic project for Columbia Borough's 300th anniversary. Live interactive event website with hundreds in traffic, automated processes and payment processing.",
    category: "ACS Results Legacy",
    date: "2024",
    imageUrl: "/images/ColumbiaPA300.png",
    images: ["/images/ColumbiaPA300.png"],
    tags: ["Civic Tech", "AI Content", "Timeline Voting"],
    duration: "2 months",
    skills: ["Web Systems", "Civic Design"],
    challenges: ["Historic Accuracy", "Community UX"],
    outcomes: ["Public Engagement", "Historic Timeline"]
  },
  {
    id: 13,
    title: "RougeStorybook",
    description: "Ecommerce front end for Rouge Storybook World, a creative audio book authors housing.",
    category: "ACS Results Legacy",
    date: "2023",
    imageUrl: "/images/RougeStorybook.png",
    images: ["/images/RougeStorybook.png"],
    tags: ["Storytelling", "Ecom", "Frontend"],
    duration: "2 months",
    skills: ["Frontend Dev", "OpenAI APIs"],
    challenges: ["Voice UX", "Narrative Design"],
    outcomes: ["Creative Engagement", "Educational Value"],
    liveUrl: "https://rouge-storybook-world.netlify.app/",
  },

  // === Extra Projects ===
  {
    id: 14,
    title: "Python Projects",
    description: "A collection of Python-based tools and automations covering data scraping, CLI tools, and lightweight analysis projects.",
    category: "Extra Projects",
    date: "2022 - Present",
    imageUrl: "/images/PythonProjects.png",
    images: ["/images/PythonProjects.png"],
    tags: ["Python", "Automation", "Data"],
    duration: "Multi-phase",
    skills: ["Python Basics", "Data Parsing", "Script Dev"],
    challenges: ["Package Management", "CLI Design"],
    outcomes: ["Reusable Scripts", "Learning Outcomes"]
  },
  {
    id: 15,
    title: "Java Projects",
    description: "Introductory Java builds created during academic year including data tools and desktop apps.",
    category: "Extra Projects",
    date: "2022 - 2023",
    imageUrl: "/images/JavaProjects.png",
    images: ["/images/JavaProjects.png"],
    tags: ["Java", "OOP", "Desktop"],
    duration: "4 months",
    skills: ["OOP", "Data Handling"],
    challenges: ["Syntax Flow", "UI Simplicity"],
    outcomes: ["Functional Apps", "Practice Base"]
  }
];
