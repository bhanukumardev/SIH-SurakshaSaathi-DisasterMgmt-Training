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
└── .gitignore
```

---

## 📦 Tech Stack

- React — Front-end framework for UI
- TypeScript — Safer, scalable code
- Vite — Fast web build tool
- Tailwind CSS — Utility-first responsive styling
- Radix UI — Accessible UI primitives
- shadcn-UI — Standardized component patterns
- Recharts — Data visualization
- React Query — Data fetching & caching

---

## 🚀 Getting Started (Local)

1. Clone the repo

```bash
git clone https://github.com/bhanukumardev/SIH-SurakshaSaathi-DisasterMgmt-Training.git
```

2. Enter the frontend folder

```bash
cd SIH-SurakshaSaathi-DisasterMgmt-Training/frontend
```

3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```

Open http://localhost:8080/ (or the address shown in the terminal).

---

## 🔥 Module Overview

- **Dashboard** — Real-time summary of training activities, coverage maps, charts, and alerts.
- **Training Submission** — Add new training events, document participants, and track performance.
- **User Management** — Role-based access for trainers, trainees, and admins.
- **Data Reporting** — Generate analytics for program effectiveness and readiness.
- **Notifications** — Instant feedback on actions and critical warnings.

---

## 🌐 Deployment (Vercel)

Recommended: Deploy the `frontend` directory as a standalone project in Vercel.

- Project root in Vercel: `frontend`
- Build Command: `npm run vercel-build`
- Output Directory: `dist`
- Node Version: `18.x` (set in Project Settings or via `package.json` `engines`)

This repo includes a `vercel-build` script that performs a clean install and builds the frontend to avoid platform-specific optional-dependency issues.

Alternatively you can deploy to Netlify or other static hosting providers; point the build to the `frontend` folder and use `npm run build` as the build command.

---

## 🔮 Future Enhancements

- GIS integration for live hazard zones and impact simulations
- Scheduled push reminders for training events
- Sync with national disaster registries
- AI-based analytics for predictive insights
- Expanded accessibility and localization

---

## 🤝 Contributions

Contributions, suggestions, and bug reports are welcome. Please open an issue or submit a pull request.

---

## 📄 License

MIT License

---

## 💡 Acknowledgements

Engineered to foster readiness, professionalism, and life-saving intervention across India’s disaster landscape.
