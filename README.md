# 🚨 Suraksha Saathi: Disaster Management Training

Suraksha Saathi is India’s premier, real-time disaster management training and monitoring platform, crafted for the National Disaster Management Authority (NDMA). It redefines how institutions organize, log, and analyze disaster training initiatives, unlocking robust reporting and collaborative preparedness at scale.

---

## ✨ Key Features

- **Live Monitoring Dashboard** — Track disaster readiness activities and visualize training coverage across locations in real time.
- **Training Data Entry** — Submit details of drills or exercises using streamlined, validated forms.
- **Comprehensive Analytics** — Built-in charts provide insights into progress, participation, and gaps.
- **Role-Specific Access** — Secure login with customized access levels for trainers, trainees, and admins.
- **Mobile & Desktop Ready** — Progressive Web App (PWA) design for offline/field use.
- **Rich, Responsive UI** — Built with React, Radix UI, Tailwind CSS, and shadcn/UI.
- **Notifications** — Real-time feedback, alerts, and status updates for critical workflows.
- **Advanced Form Validation** — Robust submission handling via react-hook-form.

---

## 🗂️ Project Structure

```
SIH-SurakshaSaathi-DisasterMgmt-Training/
│
├── frontend/            # Frontend application (Vite + React + TypeScript)
│   ├── src/             # Core application source
│   │   ├── components/  # Reusable UI elements
│   │   ├── pages/       # App pages (Dashboard, Trainings, Users...)
│   │   ├── assets/      # Icons, images, and logos
│   │   └── styles/      # TailwindCSS and overrides
│   ├── public/          # Static assets and manifest
│   └── package.json     # Frontend scripts & dependencies
│
├── README.md            # Project overview and instructions
# � Suraksha Saathi: Disaster Management Training

Suraksha Saathi is India’s premier, real-time disaster management training and monitoring platform, crafted for the National Disaster Management Authority (NDMA). It redefines how institutions organize, log, and analyze disaster training initiatives, unlocking robust reporting and collaborative preparedness at scale.

---

## ✨ Key Features

- **Live Monitoring Dashboard** — Track disaster readiness activities and visualize training coverage across locations in real time.
- **Training Data Entry** — Submit details of drills or exercises using streamlined, validated forms.
- **Comprehensive Analytics** — Built-in charts provide insights into progress, participation, and gaps.
- **Role-Specific Access** — Secure login with customized access levels for trainers, trainees, and admins.
- **Mobile & Desktop Ready** — Progressive Web App (PWA) design for offline/field use.
- **Rich, Responsive UI** — Built with React, Radix UI, Tailwind CSS, and shadcn/UI.
- **Notifications** — Real-time feedback, alerts, and status updates for critical workflows.
- **Advanced Form Validation** — Robust submission handling via react-hook-form.

---

## 🗂️ Project Structure

SurakshaSaathi-DisasterMgmt/
│
├── frontend/
│   ├── public/                   # Static files, manifest, icons
│   ├── src/
│   │   ├── assets/               # Images, SVGs, logos
│   │   ├── components/           # Reusable UI components (cards, modals, inputs)
│   │   ├── modules/              # Feature modules (dashboard, training, analytics, users)
│   │   │    ├── Dashboard/
│   │   │    │    ├── index.tsx   # Main dashboard UI
│   │   │    │    ├── widgets/    # Stats, charts, maps
│   │   │    │    └── api.ts      # Dashboard data API interactions
│   │   │    ├── Training/
│   │   │    │    ├── Form.tsx    # Add/edit training event
│   │   │    │    └── api.ts      # Training CRUD via Supabase
│   │   │    ├── Analytics/
│   │   │    │    ├── Charts.tsx  # Data visualizations
│   │   │    │    └── api.ts      # Analytics queries
│   │   │    ├── User/
│   │   │    │    ├── Login.tsx   # Auth UI (Supabase)
│   │   │    │    ├── Register.tsx
│   │   │    │    └── Profile.tsx
│   │   │    │    └── api.ts      # User/profile endpoints
│   │   ├── hooks/                # Custom React hooks (useAuth, useDashboard)
│   │   ├── utils/                # Helpers (validators, formatters)
│   │   ├── styles/               # Tailwind, CSS, custom styles
│   │   ├── App.tsx               # Root React component
│   │   ├── main.tsx              # Entrypoint
│   │   └── supabaseClient.ts     # Supabase client configuration
│   ├── package.json
│   └── tsconfig.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/          # REST API controllers (Express/Node)
│   │   │   ├── authController.ts # Supabase JWT/user management integration
│   │   │   ├── trainingController.ts
│   │   │   ├── dashboardController.ts
│   │   │   └── analyticsController.ts
│   │   ├── models/               # Schemas/types (zod or TypeORM)
│   │   ├── routes/               # Express routes (modular)
│   │   ├── services/             # Business logic, service layer
│   │   ├── utils/                # Helpers (logging, error handling)
│   │   ├── index.ts              # API server entrypoint
│   │   └── supabase.ts           # Supabase server-side integration
│   ├── package.json
│   └── tsconfig.json
│
├── database/
│   ├── migrations/               # SQL migration scripts
│   ├── schema.sql                # Database schema
│   └── seed.sql                  # Seed data for initial setup
│
├── .render.yaml                  # Render deployment configuration
├── docker-compose.yaml           # Local development setup
├── README.md
└── .env                          # Environment variables (Supabase keys, etc)

---

## 🔗 Feature-Backend Mapping

- **Authentication**: Supabase handles secure user login/registration (frontend via `@supabase/supabase-js`, backend via JWT/session validation).

- **Dashboard Analytics**: Data fetched using React Query, backed by Supabase tables/REST endpoints.

- **Training Module**: CRUD operations via Supabase from both client and backend, providing validation and access control in Node.

- **Interactive Forms, Alerts, and Charts**: React (with Recharts, Radix UI); Supabase provides real-time data and triggers notifications if needed.

- **Role Management**: Table in Supabase for users/roles. Middleware on backend for authorization.

- **Advanced Reporting**: Backend aggregates data for dashboards, exports CSV/PDF via Node services.

---

## 🌐 Deployment

- **Frontend**: Vite/React app hosted on Render or Vercel static site (deploy the `frontend` directory).

- **Backend/API**: Node.js Express/TypeScript microservice deployed on Render (autoscaling).

- **Database**: Supabase cloud instance with tables for trainings, users, analytics, and logs.

---

## 📝 How Data Flows

1. UI triggers an event (form submit, dashboard load, chart refresh).
2. React hooks query/submit via `supabaseClient`; real-time updates stream via Supabase subscriptions.
3. For sensitive operations, frontend talks to backend REST API (deployed on Render), which verifies JWT, applies business logic, and talks to Supabase server SDK.
4. Analytics and dashboard data come from Supabase queries; advanced server-side joins, filters, and aggregations are executed in backend services.

This structure delivers UX speed (React), scalability (modular backend on Render), and secure, instant data flow (Supabase) for a disaster training platform.

---

If you'd like, I can also add a `frontend/README.md` with developer-focused instructions (common workflows, environment variables, and debugging tips).
