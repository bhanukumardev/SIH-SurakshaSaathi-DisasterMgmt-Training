# 🚨 Suraksha Saathi: Disaster Management Training

Suraksha Saathi is India’s premier, real-time disaster management training and monitoring platform, crafted for the National Disaster Management Authority (NDMA). It redefines how institutions organize, log, and analyze disaster training initiatives, unlocking robust reporting and collaborative preparedness at scale.

---

## ✨ Key Features

- **Live Monitoring Dashboard** — Track disaster readiness activities and visualize training coverage across locations in real time.
- **Training Data Entry** — Submit details of drills or exercises using streamlined, validated forms.
- **Comprehensive Analytics** — Built-in charts provide insights into progress, participation, and gaps.
- **Role-Specific Access** — Secure login with customized access levels for trainers, trainees, and admins.
- **Mobile & Desktop Ready** — Progressive Web App (PWA) design for offline/field use.


## ✨ Features

Suraksha Saathi is a real-time, multi-user platform for disaster management training and monitoring. Key capabilities:

- Live monitoring dashboard with geospatial visualization and thematic analytics.
- Fast, validated training data entry and incident logging for SDMAs, ATIs, NGOs, and other stakeholders.
- Role-based authentication and access control (supports demo credentials for testing).
- Automated reporting, push notifications, and exportable analytics for rapid assessment.
- Integrated chatbot for onboarding and on-demand support.
- Gamified drills and leaderboards to increase participation and retention.
- Mobile-first PWA with bilingual (English/Hindi) UI and add-to-home support.
- Indian-themed branding and compatibility with NDMA / state systems for easier integration and scale.
- Privacy and data-security controls aligned with government standards.

### Additional Capabilities

- Community training modules (CPR, first aid), awareness sessions, and event-specific protocols.
- User-driven incident reporting and performance evaluation tools.
- Extensible architecture for future integrations and custom modules.

These consolidated features reflect the platform’s focus on real-time operations, accessibility, and integration with existing disaster management workflows.

## Try the Live Demo

Want to try the app right now? Open the live deployments in your browser:

- Production (live): [https://suraksha-saathi.vercel.app](https://suraksha-saathi.vercel.app)

The Production link is the primary live site. The Preview link points to the latest frontend preview deployment where you can explore changes before they reach production.

The Production link is the primary live site. The Preview link points to the latest frontend preview deployment where you can explore changes before they reach production.

---

## 🗂️ Full Project Structure

The Suraksha Saathi project is a modern web/mobile application built with Vite, React and TypeScript, designed to integrate disaster-management monitoring features and scale for NDMA and partner organizations.

1. Frontend (Web + Mobile)

Tech stack: Vite, React, TypeScript, Tailwind CSS, shadcn/UI

Major folders and purpose:

- /src — Main application source
- components/ — Reusable UI elements (forms, dashboards, modals, maps)
- pages/ — Page-level React components (login, dashboard, reports, GIS map, settings)
- routes/ — Application routing and navigation
- services/ — API clients and data-fetching logic
- contexts/ — Global state (auth, notifications, settings)
- assets/ — Images, icons and branding
- utils/ — Helpers (validation, formatting, analytics)
- /public — Static files, manifest, icons
- /locales — Multilingual content (English / Hindi JSON files)
- /styles — Global and theme stylesheets

2. Backend / API

Tech stack: Node.js (Express) or Python (FastAPI), PostgreSQL / Supabase

API modules:

- auth/ — Role-based access (admin, SDMA, ATI, NGO, community)
- training/ — CRUD endpoints for training sessions and drills
- gis/ — Geospatial endpoints (mapping, region queries)
- report/ — Automated report generation and export (PDF/CSV)
- analytics/ — Impact tracking, dashboard queries, gap detection
- admin/ — User management and access control tools
- alerts/ — Notification and push APIs

3. GIS / Mapping Services

- Mapbox or OpenLayers integration for geospatial visualization
- Layered data for coverage, themes, institutional overlays, and event icons

4. AI / ML and Engagement Modules

- Predictive scheduling, anomaly detection, and dynamic alerts (Python/Node agents)
- Chatbot integrations (Dialogflow/custom) for onboarding and FAQs
- Gamified drills, leaderboards, and engagement tracking

5. Deployment & Configuration

- Frontend: Vercel (static) or similar; Backend: Render / Supabase; CI/CD pipelines
- Environment configs: .env.local, manifest.json, role settings
- Mobile installability via manifest and add-to-home support (PWA)

6. Documentation & Support

- /README.md — Project overview, quick start and links
- /docs — User manuals, API docs, and integration guides
- /tests — Frontend and backend test suites (Jest, React Testing Library, Pytest)

This modular structure helps ensure Suraksha Saathi meets SIH and NDMA requirements for a real-time, multi-stakeholder disaster-management training monitoring platform.


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

---

## 👥 Team & Roles

| Name | Role |
|---|---|
| Bhanu Kumar Dev | Project Manager / Lead Full Stack Dev |
| Kumar Gaurav | Lead Frontend Developer |
| Yuvakshi Jyala | UI/UX Designer & Documentation Lead |
| Gaurav | Backend Developer & DevOps Engineer |
| Kanishka | Database Architect & Supabase Integration |
| Aman Sinha | QA Engineer & Junior Frontend Developer |

If you'd like these listed under Contributions with contact or GitHub handles, I can add them.
