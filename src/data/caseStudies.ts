// src/data/caseStudies.ts

export interface CaseStudy {
  id: number;
  overview: {
    summary: string;
    demoUrl: string;
    repoOwner: string;
    features: string[];
    capabilities: string[];
    techStack: {
      frontend: string[];
      backend: string[];
    };
    repoStructure: string;
    docs: { title: string; url: string }[];
    license: string;
    community?: string;
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
  {
    id: 2,
    overview: {
      summary:
        "The AI Dev Federation Dashboard is a full end-to-end system demonstrating a multi-agent orchestration layer for AI-assisted development. It mirrors a software org with agents – General Manager (CIAN), Architects, Security, and DevBot (engineer) – working together to plan, validate, and execute. This includes both the frontend dashboard (React + Tailwind) and backend services (FastAPI + GitHub integrations + LLM) that power live demos and execution flows.",
      demoUrl: "https://aidevfederationdashboard.netlify.app/",
      repoOwner: "https://github.com/AlexSeisler/AI-Dev-Federation-Dashboard",
      features: [
        "CIAN (GM Agent) → Strategic anchor, validates inputs, routes execution.",
        "System Architect → Generates DAGs, decomposes tasks, ensures security-first milestones.",
        "Security Architect → Plans integration of security marked tasks.",
        "DevBot → Execution layer, performs repo file changes + patch lifecycle.",
        "Trifecta Community → Connected builder community showing adoption + execution."
      ],
      capabilities: [
        "Demonstrates a company-in-a-box model (strategy → planning → security → execution → production).",
        "Enables live repo navigation + patch application via DevBot.",
        "Connects with a growing builder community (AI Dev: Trifecta).",
        "Structured as a full solution for showcasing integrated AI development."
      ],
      techStack: {
        frontend: [
          "React 19 + Vite 6.3",
          "Tailwind CSS + Framer Motion",
          "shadcn/ui components + Lucide icons"
        ],
        backend: [
          "FastAPI (Python)",
          "Hugging Face Router API → completions",
          "GitHub REST API → repo tree, file content, patching",
          "SQLAlchemy + SQLite → persistence (users, tasks, logs, memory)"
        ]
      },
      repoStructure: `AI-Dev-Federation-Dashboard/
├── public/                     # Static assets (logos, banners, screenshots)
├── src/                        # React frontend
│   ├── components/             # UI components (views, widgets)
│   └── App.tsx                 # App entrypoint + routing
│
├── server/                     # FastAPI backend
│   ├── main.py                 # FastAPI app + middleware
│   ├── tasks.py                # In-memory task runner + Hugging Face integration
│   ├── hf_client.py            # Hugging Face API wrapper
│   ├── github_service.py       # GitHub API service + routes
│   ├── models.py               # SQLAlchemy ORM models
│   └── security.py             # Middleware (allowlist, rate limiting, audit)
│
├── docs/                       # Documentation (architecture, integrations, security)
├── package.json
├── requirements.txt
└── README.md`,
      docs: [
        { title: "ARCHITECTURE.md", url: "./ARCHITECTURE.md" },
        { title: "INTEGRATIONS.md", url: "./INTEGRATIONS.md" },
        { title: "SECURITY.md", url: "./SECURITY.md" }
      ],
      license: "MIT — Open for educational and portfolio use.",
      community: "AI Dev: Trifecta Community"
    },
    integrations: [
        {
            name: "Hugging Face (AI Completions)",
            items: [
            {
                name: "Purpose",
                purpose: "Provide AI reasoning and completions for planning + file reviews"
            },
            {
                name: "Integration",
                purpose: "`hf_client.py` → wraps Hugging Face Router API, using HF_API_KEY, HF_MODEL, and HF_MAX_TOKENS from .env"
            },
            {
                name: "Features",
                purpose: "Streaming responses with retry + exponential backoff; unified debug logging for requests + responses"
            },
            {
                name: "Risks",
                purpose: "API keys must remain secret; latency/availability tied to external API uptime"
            }
            ]
        },
        {
            name: "GitHub (Repository Access)",
            items: [
            {
                name: "Purpose",
                purpose: "Live repo navigation + file retrieval for DevBot execution"
            },
            {
                name: "Integration",
                purpose: "`github_service.py` → REST API wrapper for tree + file content, supports fine-grained/classic tokens"
            },
            {
                name: "Features",
                purpose: "Branch/SHA resolution, file decoding with truncation for large content"
            },
            {
                name: "Risks",
                purpose: "Token exposure risk (must remain in .env); API rate limits may impact frequent requests"
            }
            ]
        },
        {
            name: "SQLAlchemy + SQLite (Persistence)",
            items: [
            {
                name: "Purpose",
                purpose: "Store users, tasks, logs, and memory for orchestration"
            },
            {
                name: "Integration",
                purpose: "`models.py` → ORM models (User, Task, AuditLog, Memory); `database.py` → session management"
            },
            {
                name: "Features",
                purpose: "Tracks execution history + audit logs; stores per-user conversation memory"
            },
            {
                name: "Risks",
                purpose: "SQLite is local-only; migrate to PostgreSQL for scale; protect PII (emails, auth)"
            }
            ]
        },
        {
            name: "Middleware (Security & Logging)",
            items: [
            {
                name: "Purpose",
                purpose: "Enforce allowlist, rate limiting, and audit logging"
            },
            {
                name: "Integration",
                purpose: "`security.py` → FastAPI middleware; config-driven endpoint allowlist; guest users limited to 5 tasks/min"
            },
            {
                name: "Features",
                purpose: "Unified audit logs (AuditLog table); guest fallback with NULL user_id"
            },
            {
                name: "Risks",
                purpose: "Misconfigured allowlist could expose endpoints; guest task abuse without rate limiting"
            }
            ]
        }
        ],

    security: [
        {
            title: "API Keys & Secrets",
            description: "Protects Hugging Face and GitHub API keys from leaks and abuse.",
            implementations: [
            ".env ignored in git, secrets never committed",
            "Keys only loaded at runtime via dotenv",
            "Debug logs redact all secrets"
            ]
        },
        {
            title: "Repository Access (GitHub API)",
            description: "Ensures safe repo tree + file retrieval with scoped tokens.",
            implementations: [
            "Branch/SHA resolution for deterministic requests",
            "Fallback to unauthenticated (read-only) requests",
            "Tokens only used when strictly required"
            ]
        },
        {
            title: "AI Completions (Hugging Face API)",
            description: "Controls repo context passed into external LLM completions.",
            implementations: [
            "Truncate large file content before sending",
            "Only relevant repo slices included",
            "Backoff/retry logic for reliability"
            ]
        },
        {
            title: "Persistence & Memory",
            description: "Secures user + task data with audit trails and minimal PII.",
            implementations: [
            "SQLite is local-only, not exposed externally",
            "Easy migration path to PostgreSQL with encryption",
            "Audit log tracks all requests (role, endpoint, timestamp)"
            ]
        },
        {
            title: "Guest Rate Limiting",
            description: "Prevents guest overload with middleware enforcement.",
            implementations: [
            "Middleware enforces 5 tasks/minute per guest",
            "Audit logging for abnormal behavior"
            ]
        }
        ],

    architecture: {
        purpose: `The AI-Dev-Federation-Dashboard was built as a multi-agent orchestration platform demonstrating how an engineering org can be mirrored in AI. 
        It provides an end-to-end execution layer where agents collaborate to plan, validate, and implement code changes inside a real GitHub repository.`,

        frontend: [
            "React 19 + Vite 6.3",
            "Tailwind CSS + Framer Motion",
            "shadcn/ui components + Lucide icons",
            "Views: /cian, /architect, /security, /devbot, /community"
        ],

        backend: [
            "FastAPI orchestration layer",
            "main.py → Entrypoint + middleware",
            "tasks.py → Task runner, SSE streaming, Hugging Face integration",
            "hf_client.py → Hugging Face Router completions (Llama-3.1 model)",
            "github_service.py → Repo tree + file retrieval",
            "security.py → Middleware (allowlist, rate limiting, audit logging)",
            "models.py → SQLAlchemy ORM (users, tasks, logs, memories)"
        ],

        storage: [
            "SQLite + SQLAlchemy → users, tasks, audit logs, memory",
            "GitHub API → live repo tree + file content",
            "Hugging Face API → AI reasoning + completions",
            "In-memory queues → real-time SSE streaming"
        ],

        dataFlow: `flowchart TD
            A[User Input] --> B[Frontend React Dashboard]
            B --> C[FastAPI Backend]

            C -->|Validation| D[CIAN Agent]
            C -->|Community View| L[Trifecta Community Showcase]

            D -->|Planning| E[System Architect]
            E -->|Decomposition| F[Task Queue]

            F -->|Execution Task| G[DevBot Engine]
            F -->|Security Tickets| K[Security Architect]

            G -->|File Retrieval| H[GitHub API]
            G -->|Reasoning| I[Hugging Face API]
            G -->|Patch Proposal| J[GitHub PR Flow]

            %% Center styling
            classDef center fill:#1e293b,stroke:#60a5fa,color:#e5e7eb;
            class A,B,C,D,E,F,G,H,I,J,K,L center;
        `,




        subsystems: [
            { name: "frontend_ui", impl: "React + Vite + Tailwind", purpose: "Dashboard views for agents + community" },
            { name: "orchestration", impl: "FastAPI", purpose: "Routes, SSE, middleware, task execution" },
            { name: "ai_completion", impl: "Hugging Face API", purpose: "LLM completions for planning + file reviews" },
            { name: "repo_service", impl: "GitHub REST API", purpose: "Repo tree, file content, patch flow" },
            { name: "database", impl: "SQLite + SQLAlchemy", purpose: "Users, tasks, logs, memory persistence" },
            { name: "security", impl: "Middleware + Audit Log", purpose: "Endpoint allowlist + guest rate limiting" },
            { name: "community_layer", impl: "Static Assets + Links", purpose: "Connects to AI Dev: Trifecta builder community" }
        ],

        strengths: [
            "End-to-end orchestration → Strategy → Planning → Security → Execution → Production",
            "Real-world integrations → GitHub + Hugging Face + SQLAlchemy persistence",
            "Agent discipline → Clear boundaries between roles (CIAN, Architect, DevBot, Security)",
            "Scalable design → Extendable with new agents or external integrations",
            "Community layer → Proof of adoption + real builders executing inside the system"
        ]
      }
  },
  {
  id: 12,
  overview: {
    summary:
      "ColumbiaPA300 was a civic engagement platform built for the Borough of Columbia’s 300th Anniversary. It enabled residents, students, and civic organizers to participate in a digital hub that supported logo submissions, structured voting, community donations, media uploads, and civic storytelling. Over 100+ residents engaged through student logo contests, fundraising, and community media archiving.",
    demoUrl: "https://columbiapa300.netlify.app/",
    repoOwner: "https://github.com/AlexSeisler",
    features: [
      "Civic Organizers → Logo Contest System with 100+ student submissions and 18 voting rounds",
      "Finance Layer → Donations via Stripe Checkout (~$1.5k raised)",
      "Community Layer → Media uploads stored in Google Drive",
      "Elections Board → Secure Airtable-based voting system",
      "Slack Ops → Real-time alerts for new submissions and uploads",
      "Historical Archive → Civic storytelling with timelines and event pages"
    ],
    capabilities: [
      "100+ active residents, students, and organizers engaged",
      "100+ logo submissions collected",
      "150+ structured votes cast",
      "$1,500+ in donations processed via Stripe Checkout",
      "Dozens of civic media uploads archived",
      "Campaign content reached 5.8K views / 2.1K reach via Meta analytics"
    ],
    techStack: {
      frontend: [
        "React 19 + Vite 6.3",
        "Tailwind CSS + Framer Motion (planned migration)",
        "React Router DOM for routing"
      ],
      backend: [
        "Netlify Functions",
        "Stripe API → donations",
        "Airtable API → submissions + votes",
        "Google Drive API → file storage",
        "Slack Webhooks → notifications"
      ]
    },
    repoStructure: `ColumbiaPA300/
├── public/                 # Static assets (logos, civic branding, screenshots)
├── src/                    # React frontend
│   ├── components/         # UI components (Header, Footer, Forms, Timeline)
│   ├── pages/              # Route-level pages (Home, Vote, Donate, Media)
│   └── styles/             # CSS modules (per section/page)
│
├── netlify/functions/      # Serverless backend functions
│   ├── create-checkout-session.js   # Stripe donations
│   ├── submit-vote.js               # Airtable voting
│   ├── submitForm.js                # Logo submissions
│   └── mediaUpload.js               # File uploads (Drive + Slack)
│
├── docs/                   # Documentation (architecture, security, metrics)
├── package.json
├── vite.config.js
└── README.md`,
    docs: [
      { title: "ARCHITECTURE.md", url: "./ARCHITECTURE.md" },
      { title: "INTEGRATIONS.md", url: "./INTEGRATIONS.md" },
      { title: "SECURITY.md", url: "./SECURITY.md" }
    ],
    license: "MIT — Open for educational and referenced use.",
    community: "Civic Residents & Organizers"
  },

  integrations: [
    {
      name: "Airtable (Database)",
      items: [
        {
          name: "Purpose",
          purpose: "Store logo submissions and votes"
        },
        {
          name: "Integration",
          purpose: "Netlify Functions (`submitForm.js`, `submit-vote.js`), API key + base IDs from .env"
        },
        {
          name: "Features",
          purpose: "Stores name, email, school, grade, file ref for submissions; voter info + logo selections"
        },
        {
          name: "Risks",
          purpose: "Vendor lock-in; contains PII that must be protected"
        }
      ]
    },
    {
      name: "Google Drive (File Storage)",
      items: [
        {
          name: "Purpose",
          purpose: "Store uploaded files (logos, media, documents)"
        },
        {
          name: "Integration",
          purpose: "Service account creds in .env; used in submitForm.js, mediaUpload.js, createResumableUpload.js"
        },
        {
          name: "Features",
          purpose: "Direct uploads (<10MB), resumable uploads (>10MB), separated Drive folders"
        },
        {
          name: "Risks",
          purpose: "Arbitrary file upload risk; folder IDs must remain secret"
        }
      ]
    },
    {
      name: "Stripe (Payments)",
      items: [
        {
          name: "Purpose",
          purpose: "Enable one-time and recurring donations"
        },
        {
          name: "Integration",
          purpose: "Netlify Function create-checkout-session.js; Stripe secret + publishable keys in .env"
        },
        {
          name: "Features",
          purpose: "Donation tiers ($25-$500), recurring billing, sponsor messaging, success redirect"
        },
        {
          name: "Risks",
          purpose: "PCI compliance handled by Stripe Checkout; keys must not leak"
        }
      ]
    },
    {
      name: "Slack (Notifications)",
      items: [
        {
          name: "Purpose",
          purpose: "Real-time alerts for submissions and uploads"
        },
        {
          name: "Integration",
          purpose: "Webhook URL in .env; functions: submitForm.js, notifySlackResumable.js"
        },
        {
          name: "Features",
          purpose: "Alerts for new logo submissions and media uploads"
        },
        {
          name: "Risks",
          purpose: "Webhook URL is sensitive and must not be exposed"
        }
      ]
    }
  ],

  security: [
    {
      title: "Personally Identifiable Information (PII)",
      description:
        "Handles names, emails, phone numbers, schools, and grades for submissions/votes stored in Airtable.",
      implementations: [
        "No secrets committed (managed via .env + netlify.toml)",
        "Minimal PII stored (only required fields)",
        "Access limited to civic admins"
      ]
    },
    {
      title: "File Uploads",
      description: "Community uploads (logos, media) stored in Google Drive.",
      implementations: [
        "File size limit enforced (500MB max)",
        "Separate Drive folders per category",
        "Civic admins manually review before publishing",
        "Slack alerts sent for every upload"
      ]
    },
    {
      title: "Payments (Stripe Checkout)",
      description: "Donations processed via Stripe Checkout, not stored locally.",
      implementations: [
        "All payment data handled by Stripe Checkout",
        "Stripe keys stored securely in .env only",
        "Pre-configured donation tiers validated against Stripe price IDs"
      ]
    },
    {
      title: "Environment Variables & Secrets",
      description: "Airtable, Stripe, Google, and Slack API keys.",
      implementations: [
        ".gitignore includes .env (never committed)",
        "Netlify runtime loads secrets at build/deploy",
        "Keys rotated and revoked post-project"
      ]
    },
    {
      title: "Security-by-Design Principles",
      description: "Lightweight but real-world security practices.",
      implementations: [
        "Least privilege: only necessary data collected",
        "Zero secrets in repo: all sensitive data externalized",
        "Externalized risk: Stripe, Drive, Airtable handle sensitive operations",
        "Transparency: admins notified via Slack alerts"
      ]
    }
  ],

  architecture: {
    purpose:
      "ColumbiaPA300 was built as a civic engagement platform for the Borough of Columbia’s 300th Anniversary. It served as an end-to-end hub for logo submissions, voting, donations, media uploads, and civic storytelling.",
    frontend: [
      "React 19 + Vite 6.3",
      "React Router DOM for navigation",
      "Pages: Home, Vote, Media, Donate, Contact, Thank You, Privacy, 404 fallback",
      "CSS modules (planned migration to Tailwind)"
    ],
    backend: [
      "Netlify Functions for API surface",
      "create-checkout-session.js → Stripe donations",
      "submit-vote.js → Airtable voting persistence",
      "submitForm.js → Logo submissions → Airtable + Drive + Slack",
      "mediaUpload.js + createResumableUpload.js → Drive uploads",
      "notifySlackResumable.js → Slack notifications"
    ],
    storage: [
      "Airtable → submissions and votes",
      "Google Drive → logos and media",
      "Stripe → donation records",
      "Slack Webhooks → notifications"
    ],
    dataFlow: `flowchart TD
      A[Resident or Student] --> B[Frontend React]
      B --> C[Netlify Hosting]

      C -->|Logo Submission| D[Netlify Function: submitForm]
      D --> E[Airtable Submissions]
      D --> F[Google Drive Logos]
      D --> G[Slack Notification]

      C -->|Vote Submission| H[Netlify Function: submit-vote]
      H --> I[Airtable Votes]

      C -->|Donation| J[Netlify Function: create-checkout-session]
      J --> K[Stripe Checkout]
      K --> L[Donation Records]

      C -->|Media Upload| M[Netlify Function: mediaUpload or createResumableUpload]
      M --> N[Google Drive Media]
      M --> G[Slack Notification]`,
    subsystems: [
      { name: "frontend_ui", impl: "React + Vite", purpose: "Public site for submissions, voting, donations, uploads" },
      { name: "api_gateway", impl: "Netlify Functions", purpose: "Serverless API layer for submissions, votes, donations, uploads" },
      { name: "database", impl: "Airtable", purpose: "Stores submissions and votes" },
      { name: "storage", impl: "Google Drive", purpose: "File storage (logos, media uploads)" },
      { name: "payments", impl: "Stripe Checkout", purpose: "Donation handling" },
      { name: "notifications", impl: "Slack Webhooks", purpose: "Alerts for uploads and submissions" },
      { name: "observability", impl: "Screenshots (manual)", purpose: "Proof of adoption; no live monitoring stack" },
      { name: "auth", impl: "Lightweight form validation", purpose: "No login; collects name/email/phone" }
    ],
    strengths: [
      "Real-world integrations: Stripe, Airtable, Google Drive, Slack",
      "Civic trust: designed for a real public borough campaign",
      "Scalable hosting: Netlify static frontend + serverless backend",
      "End-to-end system: submissions → voting → donations → archival"
    ]
  }
},
{
  id: 6,
  overview: {
    summary:
      "ACSResultsAI (AI Automation Agency) is a SaaS-style showcase platform built to demonstrate modern frontend design, automation service hooks, and professional deployment practices. It provides a clean UI, integration stubs for automation APIs, and a production-ready CI/CD pipeline. The system was used to present AI-powered agency services for small-to-medium businesses.",
    demoUrl: "https://acsresultsai-aaa.netlify.app",
    repoOwner: "https://github.com/AlexSeisler",
    features: [
      "Frontend Layer → React + Vite for high-performance static site delivery",
      "UI/UX → TailwindCSS + Shadcn UI + Framer Motion animations",
      "Pages → Home, Services, About, Contact with modular sections",
      "Database Hooks → Supabase stubs with CRM schema for leads/contact",
      "Integration Hooks → Voiceflow, Vapi, Make.com, Instantly.ai (prepared extensions)",
      "Deployment Layer → Netlify auto-deploy pipeline with HTTPS and previews",
      "Tooling → ESLint + Prettier ensure consistent, maintainable code"
    ],
    capabilities: [
      "Delivered a SaaS-style automation agency showcase",
      "Provided a fast, typed, and modular frontend architecture",
      "Enabled hooks for backend integrations via Supabase + APIs",
      "Deployed continuously via Netlify CI/CD with rollback support",
      "Extensible to real SMB-facing automation systems"
    ],
    techStack: {
      frontend: [
        "React (TypeScript, Vite)",
        "TailwindCSS + Shadcn UI",
        "Framer Motion"
      ],
      backend: [
        "Supabase (stub/demo mode)",
        "Integration hooks for Voiceflow, Vapi, Make.com, Instantly.ai"
      ]
    },
    repoStructure: `ACSResultsAI/
├── public/                 # Static assets (favicon, branding, images)
│   ├── about/              # About page team images
│   ├── favicon.png         # Favicon
│   └── preview.png         # Social preview
│
├── src/
│   ├── components/         # Modular UI components
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Home, Services, About
│   │   └── ui/             # Shadcn UI primitives
│   │
│   ├── pages/              # Route-level pages
│   ├── lib/                # Supabase stubs / demo libs
│   ├── supabase/           # SQL migrations (schema)
│   ├── App.tsx             # App shell + routes
│   └── main.tsx            # React hydration
│
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── ARCHITECTURE.md
├── INTEGRATIONS.md
├── SECURITY.md
└── README.md`,
    docs: [
      { title: "ARCHITECTURE.md", url: "./ARCHITECTURE.md" },
      { title: "INTEGRATIONS.md", url: "./INTEGRATIONS.md" },
      { title: "SECURITY.md", url: "./SECURITY.md" }
    ],
    license: "MIT — fork, adapt, extend freely.",
    community: "Agency founders + SMB clients"
  },

  integrations: [
    {
      name: "Supabase (Demo Database)",
      items: [
        { name: "Purpose", purpose: "Stub backend with CRM schema for leads and contact submissions" },
        { name: "Integration", purpose: "SQL migrations in /supabase folder; demo endpoints in lib/" },
        { name: "Features", purpose: "Provides placeholder persistence layer for frontend testing" },
        { name: "Risks", purpose: "Demo-only; not production-hardened" }
      ]
    },
    {
      name: "Voiceflow (Conversational AI)",
      items: [
        { name: "Purpose", purpose: "Enable guided conversational workflows via chatbots and voice assistants" },
        { name: "Integration", purpose: "Integration hooks in frontend for service demos" },
        { name: "Features", purpose: "Customizable conversation flows integrated with site UX" },
        { name: "Risks", purpose: "Service dependency and usage costs" }
      ]
    },
    {
      name: "Vapi (Voice Agents)",
      items: [
        { name: "Purpose", purpose: "Enable AI-powered voice/agent calling experiences" },
        { name: "Integration", purpose: "API endpoints can be triggered by frontend interactions" },
        { name: "Features", purpose: "Real-time AI voice agent demos" },
        { name: "Risks", purpose: "External uptime and API reliability" }
      ]
    },
    {
      name: "Make.com (Workflow Automation)",
      items: [
        { name: "Purpose", purpose: "Connect multiple APIs into orchestrated workflows" },
        { name: "Integration", purpose: "Triggered by form submissions or service requests" },
        { name: "Features", purpose: "Automates tasks across services" },
        { name: "Risks", purpose: "Vendor lock-in and external reliability" }
      ]
    },
    {
      name: "Instantly.ai (Email Outreach)",
      items: [
        { name: "Purpose", purpose: "Automated AI email outreach and CRM integration" },
        { name: "Integration", purpose: "Hooks into contact/services pages" },
        { name: "Features", purpose: "Lead nurturing, outbound campaign automation" },
        { name: "Risks", purpose: "Cold email compliance/deliverability risks" }
      ]
    },
    {
      name: "Netlify (Deployment)",
      items: [
        { name: "Purpose", purpose: "Static hosting and CI/CD pipeline" },
        { name: "Integration", purpose: "Auto-deploys from GitHub main; injects environment variables securely" },
        { name: "Features", purpose: "Deploy previews for PRs; rollback support; HTTPS global CDN" },
        { name: "Risks", purpose: "Downtime risk if provider outage occurs" }
      ]
    }
  ],

  security: [
    {
      title: "Application Security",
      description: "Static frontend with sanitized input and no secrets committed.",
      implementations: [
        "No API keys or tokens in repo",
        "Dynamic logic externalized via APIs",
        "Forms sanitized and validated at frontend",
        "Demo endpoints are stubs only"
      ]
    },
    {
      title: "Deployment Security",
      description: "Netlify hosting with secure HTTPS, CI/CD, and access control.",
      implementations: [
        "Auto-HTTPS enabled",
        "GitHub main branch triggers Netlify builds",
        "Static artifacts deployed from /dist",
        "Access limited to project owners and contributors"
      ]
    },
    {
      title: "Database & Integrations",
      description: "Supabase stubs and third-party APIs are non-functional by default.",
      implementations: [
        "No live data stored in Supabase",
        "Future integrations require secure API tokens",
        "Environment variables injected by Netlify"
      ]
    },
    {
      title: "Best Practices",
      description: "Professional coding and hosting standards followed.",
      implementations: [
        "TypeScript for type safety and reduced injection risk",
        "Accessibility compliance (ARIA, alt text)",
        "Netlify handles HTTPS, caching, and edge security"
      ]
    }
  ],

  architecture: {
    purpose:
      "ACSResultsAI was built as a SaaS frontend shell with pre-defined integration points for automation tools. It demonstrates separation of concerns, extensibility, and production-grade CI/CD practices.",
    frontend: [
      "React (TypeScript + Vite)",
      "TailwindCSS + Shadcn UI components",
      "Framer Motion animations",
      "Pages: Home, Services, About, Contact"
    ],
    backend: [
      "Supabase stubs with demo CRM schema",
      "Integration hooks for Voiceflow, Vapi, Make.com, Instantly.ai"
    ],
    storage: [
      "Supabase mock database (no live data)",
      "Netlify deployment layer for static assets",
      "Environment variable injection for future API tokens"
    ],
    dataFlow: `flowchart TD
  A[Visitor] --> B[Frontend React]
  B --> C[Supabase Stubs]
  C --> D[CRM Schema]
  B --> E[Voiceflow]
  B --> F[Vapi]
  B --> G[Make.com]
  B --> H[Instantly.ai]
  B --> I[Deployment Layer]
  I --> J[Netlify CI/CD]
  J --> K[Global CDN]`,
    subsystems: [
      { name: "frontend_ui", impl: "React + Vite + Tailwind", purpose: "Pages and animations for SaaS showcase" },
      { name: "integration_layer", impl: "Supabase stubs + hooks", purpose: "Backend simulation + integration points" },
      { name: "crm_schema", impl: "SQL migrations", purpose: "Demo CRM (leads + contacts)" },
      { name: "deployment_layer", impl: "Netlify CI/CD", purpose: "Builds, deploys, previews, rollbacks" },
      { name: "ci_cd_pipeline", impl: "Netlify GitHub hook", purpose: "Automated deploy pipeline with rollbacks and previews" }
    ],
    strengths: [
      "Modular separation between frontend, integrations, and deployment",
      "Extensible hooks for future automation APIs",
      "Performance-first architecture with Vite and TypeScript",
      "Maintainable codebase with linting and accessibility",
      "Production-ready CI/CD pipeline with Netlify"
    ]
  }

},
{
  id: 10,
  overview: {
    summary:
      "ACS Results was my first entrepreneurial project, built to give vocational and trade students a professional digital presence. The platform delivered personalized portfolio websites showcasing certifications, projects, and skills — bridging the gap between resumes and real-world showcases. It also served as my first business funnel, leading to paid client work (RougeStoryBookWorld).",
    demoUrl: "https://acsresults.netlify.app",
    repoOwner: "https://github.com/AlexSeisler",
    features: [
      "Students → Personalized portfolios with certifications, projects, and skills",
      "Visual Showcase → Before/after project demos for welding and fabrication",
      "Design Layer → Custom templates with baseline + student-specific builds",
      "Lead Capture → Voiceflow assistant for service inquiries and intake",
      "Business Funnel → Pricing tiers from $45 single-page sites to $1000 full sites",
      "Marketing Layer → QR codes distributed on posters for campus campaigns"
    ],
    capabilities: [
      "Dozens of trade student portfolios deployed",
      "Live showcase of welding and fabrication projects",
      "On-campus QR code campaign funneled recruiter traffic",
      "First external client secured (RougeStoryBookWorld)"
    ],
    techStack: {
      frontend: [
        "React 18 + TypeScript",
        "Vite build system",
        "TailwindCSS + shadcn/ui",
        "lucide-react (icons)"
      ],
      backend: [
        "Stubbed form handler (Supabase removed)",
        "Google Forms intake (initial flow)",
        "Netlify hosting pipeline"
      ]
    },
    repoStructure: `ACS-Results/
├── public/                   # Static assets
├── src/
│   ├── components/
│   │   ├── Testimonials/     # Recruiter-facing validation
│   │   ├── Pricing/          # Pricing + purchase flow
│   │   ├── StudentPortfolios/# Student portfolio cards
│   │   └── Onboarding/       # Stubbed form flow
│   ├── lib/                  # Utilities (form.ts stubbed)
│   ├── types/                # Shared TypeScript types
│   └── App.tsx               # Root component
├── netlify.toml              # Netlify build config
├── package.json
├── ARCHITECTURE.md
└── README.md`,
    docs: [
      { title: "ARCHITECTURE.md", url: "./ARCHITECTURE.md" },
      { title: "BUSINESS_PLAN", url: "./BUSINESS_PLAN/" },
      { title: "ARTIFACTS", url: "./ARTIFACTS/" }
    ],
    license: "MIT — Open for educational and referenced use.",
    community: "Thaddeus Stevens trade students + SMB clients"
  },

  integrations: [
    {
      name: "Google Forms (Student Intake)",
      items: [
        { name: "Purpose", purpose: "Capture resumes, certifications, and project photos" },
        { name: "Integration", purpose: "Used as initial intake system before portfolio builds" },
        { name: "Features", purpose: "Structured fields, supports file attachments" },
        { name: "Risks", purpose: "Manual process; reliance on Google service availability" }
      ]
    },
    {
      name: "Manual Builder (Template Engine)",
      items: [
        { name: "Purpose", purpose: "Build customized student websites from main template" },
        { name: "Integration", purpose: "Student submissions translated into HTML/CSS portfolios" },
        { name: "Features", purpose: "Before/after demos, certifications, timelines" },
        { name: "Risks", purpose: "Manual bottleneck; limited scalability" }
      ]
    },
    {
      name: "Netlify (Hosting & Distribution)",
      items: [
        { name: "Purpose", purpose: "Host landing page + student portfolios" },
        { name: "Integration", purpose: "Deployed via GitHub → Netlify CI/CD pipeline" },
        { name: "Features", purpose: "Global CDN, HTTPS, QR-code links to portfolio sites" },
        { name: "Risks", purpose: "Single hosting provider dependency" }
      ]
    },
    {
      name: "Voiceflow (Lead Capture Assistant)",
      items: [
        { name: "Purpose", purpose: "Conversational AI to capture service inquiries" },
        { name: "Integration", purpose: "Embedded assistant for prospective client intake" },
        { name: "Features", purpose: "Conversational funnel, lead capture" },
        { name: "Risks", purpose: "Reliance on external SaaS; not critical path" }
      ]
    },
    {
      name: "Business Model (Pricing & Tiers)",
      items: [
        { name: "Purpose", purpose: "Monetization of student portfolio services" },
        { name: "Integration", purpose: "Integrated directly into landing page pricing components" },
        { name: "Features", purpose: "Flat fee $45 site, $200 multipage, $1000 full site; updates $10/mo" },
        { name: "Risks", purpose: "Manual fulfillment process; automation required for scaling" }
      ]
    }
  ],

  security: [
    {
      title: "Data Minimization",
      description: "ACS Results avoided storing sensitive student data in the repo.",
      implementations: [
        "Portfolio builds used only student resumes/certifications from Google Forms",
        "No personal data included in recruiter-facing repo",
        "All demo data anonymized"
      ]
    },
    {
      title: "Hosting & Deployment",
      description: "Static sites deployed via Netlify CI/CD with secure defaults.",
      implementations: [
        "Netlify builds from GitHub main branch",
        "Automatic HTTPS enabled",
        "Global CDN delivery ensures resilience"
      ]
    },
    {
      title: "Repository Hygiene",
      description: "Repo sanitized for recruiter presentation.",
      implementations: [
        "Supabase integration removed",
        "Stubbed form.ts utility replaces live backend",
        "No secrets or .env files committed"
      ]
    },
    {
      title: "Future Improvements",
      description: "Scaling to SaaS platform would require stronger controls.",
      implementations: [
        "Automated portfolio generation to replace manual builds",
        "Formal authentication for student intake",
        "Secure handling of recurring subscription payments"
      ]
    }
  ],

  architecture: {
    purpose:
      "ACS Results proved the concept of student portfolio websites for trades and technology majors. It replaced resumes with live portfolio sites, supported by a simple intake process, manual template builds, and Netlify hosting.",
    frontend: [
      "React SPA (Vite + TypeScript)",
      "TailwindCSS + shadcn/ui",
      "Landing page with testimonials, pricing, portfolio demos",
      "Onboarding form (stubbed)"
    ],
    backend: [
      "Manual template builds from Google Form submissions",
      "Stubbed form.ts utility (Supabase removed)"
    ],
    storage: [
      "Google Form submissions (historical intake)",
      "Netlify hosting for static portfolios",
      "Public assets in /public (logos, posters, screenshots)"
    ],
    dataFlow: `flowchart TD
A[Student Resume & Media Upload] --> B[Google Form Intake]
B --> C[Manual Portfolio Build]
C --> D[Student Portfolio Website]
D --> E[Netlify Hosting]
E --> F[QR Code Distribution]
F --> G[Recruiter Access]`,
    subsystems: [
      { name: "frontend_ui", impl: "React SPA", purpose: "Landing page and recruiter-facing showcase" },
      { name: "form_intake", impl: "Google Forms (historical)", purpose: "Collect resumes, certifications, media" },
      { name: "manual_builder", impl: "Template engine (HTML/CSS)", purpose: "Generate personalized portfolios" },
      { name: "hosting", impl: "Netlify CI/CD", purpose: "Deploy and serve static sites" },
      { name: "distribution", impl: "QR Codes", purpose: "Drive recruiter traffic from posters/resumes" }
    ],
    strengths: [
      "Lightweight proof-of-concept that delivered real value to students",
      "Validated business model with live clients",
      "Recruiter-focused cleanup and sanitization",
      "Foundation for future SaaS platform (ACS Results AI)"
    ]
  }
},
{
  id: 13,
  overview: {
    summary:
      "RougeStoryWorld is a professional landing page built for an independent audiobook creator. It functions as a marketing/eCommerce frontend — showcasing books, author bio, trailers, and testimonials — while driving conversions through Amazon’s storefront.",
    demoUrl: "https://rougestorybookworld.netlify.app",
    repoOwner: "https://github.com/AlexSeisler",
    features: [
      "Design Layer → Animated hero section with logo and branding",
      "Book Showcase → Featured books with ratings and direct Amazon links",
      "Media Layer → YouTube embeds for story trailers",
      "About Section → Author bio with trust badges and acknowledgements",
      "Testimonials → Verified reader reviews",
      "Email Capture → Lightweight popup (mocked flow)",
      "Responsive UI → Optimized for desktop and mobile"
    ],
    capabilities: [
      "Delivered to a paying client (independent audiobook creator)",
      "Designed to drive conversions via Amazon without custom checkout"
    ],
    techStack: {
      frontend: [
        "React 19 + Vite",
        "TailwindCSS + Framer Motion",
        "React Router DOM"
      ],
      backend: [
        "No backend required — all payments handled via Amazon",
        "Mock email capture flow"
      ]
    },
    repoStructure: `RougeStoryWorld/
├── public/                 # Static assets (logos, images, favicon)
├── src/                    # React frontend
│   ├── components/         # UI components (Hero, Books, Video, About, Testimonials, Email, Footer)
│   ├── pages/              # Route-level pages (Home, Collection)
│   ├── lib/                # Utility libs (mock email flow)
│   └── index.css           # Tailwind styles
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md`,
    docs: [
      { title: "ARCHITECTURE.md", url: "./ARCHITECTURE.md" }
    ],
    license: "MIT — Open for educational and referenced use.",
    community: "Independent audiobook readers and Amazon buyers"
  },

  integrations: [
    {
      name: "Amazon Storefront",
      items: [
        { name: "Purpose", purpose: "Redirect purchases to Amazon’s checkout" },
        { name: "Integration", purpose: "Book CTAs link to author’s Amazon page" },
        { name: "Features", purpose: "No PCI exposure, leverages Amazon’s trusted eCommerce" },
        { name: "Risks", purpose: "Full reliance on Amazon for conversion tracking" }
      ]
    },
    {
      name: "YouTube",
      items: [
        { name: "Purpose", purpose: "Host and embed promotional story trailers" },
        { name: "Integration", purpose: "React components embed YouTube videos" },
        { name: "Features", purpose: "Scalable video hosting with player controls" },
        { name: "Risks", purpose: "External dependency; video removal breaks embeds" }
      ]
    },
    {
      name: "Email Capture (Mocked)",
      items: [
        { name: "Purpose", purpose: "Simulate user interest collection" },
        { name: "Integration", purpose: "Local state flow, no backend storage" },
        { name: "Features", purpose: "Lightweight popup with success confirmation" },
        { name: "Risks", purpose: "Not production-ready, requires backend for real use" }
      ]
    },
    {
      name: "Netlify Hosting",
      items: [
        { name: "Purpose", purpose: "Deploy and serve the static React app" },
        { name: "Integration", purpose: "CI/CD from GitHub main branch" },
        { name: "Features", purpose: "Global CDN, auto-HTTPS, instant rollbacks" },
        { name: "Risks", purpose: "Single hosting provider dependency" }
      ]
    }
  ],

  security: [
    {
      title: "Minimal Attack Surface",
      description: "Static frontend app with no backend means very limited risk exposure.",
      implementations: [
        "No payment processing or PII collected locally",
        "Amazon handles all checkout and transactions",
        "YouTube embeds sandboxed via iframe"
      ]
    },
    {
      title: "Hosting & Deployment",
      description: "Netlify CI/CD pipeline ensures safe deployments.",
      implementations: [
        "Builds only from GitHub main branch",
        "Automatic HTTPS and CDN delivery",
        "Instant rollback capability"
      ]
    },
    {
      title: "Email Capture Simulation",
      description: "Email signup flow was mocked for demo purposes only.",
      implementations: [
        "No emails persisted or transmitted",
        "Local state success message for UX demonstration",
        "Future backend integration would require secure API"
      ]
    },
    {
      title: "Future Hardening",
      description: "Could be extended with secure email marketing or analytics.",
      implementations: [
        "Add API-based email provider (Mailchimp, Brevo)",
        "Track Amazon conversions via affiliate links",
        "Harden CSP headers in Netlify for iframe/video security"
      ]
    }
  ],

  architecture: {
    purpose:
      "RougeStoryWorld was designed as a marketing-first landing page for an independent audiobook creator, focusing on conversions through Amazon while delivering professional polish.",
    frontend: [
      "React 19 + Vite SPA",
      "TailwindCSS + Framer Motion for styling and animations",
      "React Router DOM for navigation"
    ],
    backend: [
      "No backend logic required",
      "Mock email capture only"
    ],
    storage: [
      "Static assets under /public",
      "External media via YouTube embeds",
      "External commerce via Amazon storefront"
    ],
    dataFlow: `flowchart TD
A[Visitor] --> B[Frontend React App]
B --> C[Netlify Hosting]
B -->|Click CTA| D[Amazon Storefront]
B -->|Watch Video| E[YouTube Embed]
B -->|Join Email| F[Email Modal]
F --> G[Mock Success Message]`,
    subsystems: [
      { name: "frontend_ui", impl: "React + Vite + Tailwind", purpose: "Landing page with books, videos, testimonials" },
      { name: "routing", impl: "React Router DOM", purpose: "Navigate between home and collection pages" },
      { name: "styling", impl: "TailwindCSS + Framer Motion", purpose: "Responsive UI with animations" },
      { name: "email_capture", impl: "Local state only", purpose: "Simulated signup flow" },
      { name: "integrations", impl: "Amazon + YouTube", purpose: "Redirect checkout and host promotional videos" },
      { name: "hosting", impl: "Netlify", purpose: "Deploy static frontend via CI/CD" }
    ],
    strengths: [
      "Simplicity: No backend maintenance required",
      "Scalable static hosting on Netlify",
      "Conversion-first design driving Amazon sales",
      "Polished UI suitable for client delivery and recruiter review"
    ]
  }
}


]
