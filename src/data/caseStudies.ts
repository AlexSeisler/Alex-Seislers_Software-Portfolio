// src/data/caseStudies.ts

export interface CaseStudy {
  id: number;
  overview: {
    duration: string;
    category: string;
    date: string;
    skills: string[];
    challenges: string[];
    outcomes: string[];
  };
  integrations: {
    name: string;
    items: { name: string; purpose: string }[];
  }[];
  security: {
    title: string;
    description: string;
    implementations: string[];
  }[];
  architecture: {
    overview: string;
    components: {
      name: string;
      description: string;
      responsibilities: string[];
    }[];
  };
}

export const caseStudies: CaseStudy[] = [
  /* -------------------------
     1. AI Dev Federation Dashboard
  -------------------------- */
  {
    id: 2,
    overview: {
      duration: "MVP Complete",
      category: "ACS Results AI: Trifecta",
      date: "2025",
      skills: ["FastAPI", "Postgres", "React + Vite", "Tailwind", "Framer Motion", "Netlify", "Render"],
      challenges: [
        "Auth & RBAC",
        "Cold Starts",
        "Cross-service Integration"
      ],
      outcomes: [
        "Live Multi-Agent Demo",
        "Recruiter-Friendly Console",
        "Production-Ready Deployment"
      ]
    },
    integrations: [
      {
        name: "Frontend",
        items: [
          { name: "React 19 + Vite", purpose: "UI Framework + Bundler" },
          { name: "Tailwind CSS", purpose: "Styling & Theming" },
          { name: "Framer Motion", purpose: "Animations & Transitions" },
          { name: "shadcn/ui", purpose: "UI Components" }
        ]
      },
      {
        name: "Backend",
        items: [
          { name: "FastAPI", purpose: "REST API & Backend Services" },
          { name: "SQLAlchemy + SQLite", purpose: "Persistence Layer" }
        ]
      },
      {
        name: "AI & Data",
        items: [
          { name: "Hugging Face API", purpose: "LLM Completions & Routing" },
          { name: "GitHub API", purpose: "Repo Tree, File Patching" }
        ]
      }
    ],
    security: [
      {
        title: "Authentication & Authorization",
        description: "Multi-role collaboration with secure identity boundaries.",
        implementations: [
          "Role-based access control (RBAC)",
          "JWT token authentication",
          "Session isolation per agent"
        ]
      },
      {
        title: "Middleware Protections",
        description: "Prevent misuse of APIs & maintain audit trails.",
        implementations: [
          "Rate limiting & throttling",
          "Audit logging of agent activity",
          "Allowlist for safe routes"
        ]
      },
      {
        title: "Data Protection",
        description: "Secure handling of repo content & credentials.",
        implementations: [
          "Environment variable management",
          "Encrypted communication",
          "API key isolation"
        ]
      }
    ],
    architecture: {
      overview: "Multi-agent orchestration platform with frontend dashboard, backend services, and external integrations. Agents mirror a real org: GM (CIAN), Architect, Security, and DevBot executing tasks.",
      components: [
        {
          name: "Frontend Dashboard",
          description: "Recruiter-facing UI to interact with agents and view demos.",
          responsibilities: [
            "User interface rendering",
            "Task orchestration control",
            "Displaying repo context & outputs"
          ]
        },
        {
          name: "Backend API",
          description: "FastAPI server coordinating requests, persistence, and LLM calls.",
          responsibilities: [
            "Agent lifecycle orchestration",
            "Database operations",
            "LLM query routing"
          ]
        },
        {
          name: "Agent Orchestration Layer",
          description: "Implements role-based agents (GM, Architect, Security, DevBot).",
          responsibilities: [
            "Planning & task decomposition",
            "Security-first validation",
            "Execution with repo patching"
          ]
        },
        {
          name: "Memory & Persistence",
          description: "Database-backed memory for session continuity.",
          responsibilities: [
            "Task state persistence",
            "Conversation history",
            "Audit logging"
          ]
        }
      ]
    }
  },

  /* -------------------------
     2. ColumbiaPA300
     (Placeholder — populate with README/ARCH/SECURITY/INTEGRATIONS content)
  -------------------------- */
  {
    id: 12,
    overview: {
      duration: "TBD",
      category: "City Celebration",
      date: "2025",
      skills: ["React", "Tailwind", "Backend TBD"],
      challenges: ["Scale for high traffic", "Timeline interactivity"],
      outcomes: ["Interactive event timeline", "Engaged local community"]
    },
    integrations: [],
    security: [],
    architecture: {
      overview: "Architecture TBD",
      components: []
    }
  },

  /* -------------------------
     3. AI Automation Agency
  -------------------------- */
  {
    id: 6,
    overview: {
      duration: "Ongoing",
      category: "SMB Automation",
      date: "2024",
      skills: ["Next.js", "Supabase", "OpenAI API"],
      challenges: ["CRM data sync", "Automated outreach"],
      outcomes: ["CRM-integrated AI workflows", "Revenue uplift for SMBs"]
    },
    integrations: [],
    security: [],
    architecture: {
      overview: "Architecture TBD",
      components: []
    }
  },

  /* -------------------------
     4. ACS Results Portfolio Builder
  -------------------------- */
  {
    id: 10,
    overview: {
      duration: "Legacy Rebuild",
      category: "Education / SMB",
      date: "2023",
      skills: ["PHP", "React", "Legacy migration"],
      challenges: ["Legacy integration", "User customization"],
      outcomes: ["Modernized portfolio builder", "Improved accessibility"]
    },
    integrations: [],
    security: [],
    architecture: {
      overview: "Architecture TBD",
      components: []
    }
  },

  /* -------------------------
     5. RougeStorybook
  -------------------------- */
  {
    id: 13,
    overview: {
      duration: "MVP Complete",
      category: "Ecommerce + Storytelling",
      date: "2024",
      skills: ["React", "Stripe", "Tailwind"],
      challenges: ["Digital rights management", "Audio streaming"],
      outcomes: ["Creative audio-book storefront", "Seamless checkout"]
    },
    integrations: [],
    security: [],
    architecture: {
      overview: "Architecture TBD",
      components: []
    }
  }
];
