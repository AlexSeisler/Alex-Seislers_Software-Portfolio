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

  }
];
