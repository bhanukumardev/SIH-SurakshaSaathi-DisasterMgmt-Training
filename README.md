# 🚨 Suraksha Saathi: Disaster Management Training

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/bhanukumardev/SIH-SurakshaSaathi-DisasterMgmt-Training)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Stars](https://img.shields.io/github/stars/bhanukumardev/SIH-SurakshaSaathi-DisasterMgmt-Training?style=social)](https://github.com/bhanukumardev/SIH-SurakshaSaathi-DisasterMgmt-Training/stargazers)
[![Forks](https://img.shields.io/github/forks/bhanukumardev/SIH-SurakshaSaathi-DisasterMgmt-Training?style=social)](https://github.com/bhanukumardev/SIH-SurakshaSaathi-DisasterMgmt-Training/forks)

> Real-Time Monitoring System for Disaster Management Trainings — An advanced full-stack platform with AI/ML integration for scheduling, tracking, analytics, real-time alerts, and gamified drills.

## 🚀 Live Demo

**[View Demo →](https://suraksha-saathi.vercel.app/)** | **[Project Report](#)** | **[Video Walkthrough](#)**

## 📌 Overview

Suraksha Saathi is an innovative disaster management training platform designed to revolutionize how government agencies, NGOs, and communities prepare for emergencies. Built for Smart India Hackathon (SIH), this system provides:

- **Real-time monitoring** of training sessions and drills
- **AI-powered analytics** for performance insights
- **Gamified learning modules** to enhance engagement
- **Live alerts and notifications** for critical updates
- **Comprehensive dashboards** for administrators and trainees
- **Role-based access control** for security and privacy

## ✨ Key Features

### 📈 Dashboard & Analytics
- Real-time data visualization with Recharts
- Training completion rates and progress tracking
- Performance metrics and leaderboards
- Export reports in CSV/PDF formats

### 📚 Training Modules
- Interactive drills and simulations
- Video tutorials and documentation
- Quizzes and assessments
- Progress tracking and certification

### 🔔 Real-Time Alerts
- Push notifications for emergencies
- SMS/Email integration
- Geolocation-based alerts
- Drill announcements

### 🎮 Gamification
- Points and badges system
- Leaderboards and rankings
- Team challenges
- Achievement unlocks

### 👥 User Management
- Role-based access (Admin, Trainer, Trainee)
- Profile management
- Activity logs
- Attendance tracking

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, Radix UI
- **State Management:** React Query (TanStack Query)
- **Charts:** Recharts
- **Routing:** React Router v6

### Backend
- **Runtime:** Node.js + Express
- **Language:** TypeScript
- **Authentication:** JWT + Supabase Auth
- **API:** RESTful + Real-time subscriptions

### Database & Services
- **Database:** Supabase (PostgreSQL)
- **Real-time:** Supabase Realtime
- **Storage:** Supabase Storage
- **Analytics:** Custom aggregation pipelines

### Deployment
- **Frontend:** Vercel / Render
- **Backend:** Render (auto-scaling)
- **Database:** Supabase Cloud
- **CI/CD:** GitHub Actions

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Git

### Clone Repository

```bash
git clone https://github.com/bhanukumardev/SIH-SurakshaSaathi-DisasterMgmt-Training.git
cd SIH-SurakshaSaathi-DisasterMgmt-Training
```

### Frontend Setup

```bash
cd frontend
npm install

# Create .env file
cp .env.example .env
# Add your Supabase credentials

# Start development server
npm run dev
```

### Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Add your Supabase and API keys

# Start backend server
npm run dev
```

### Environment Variables

**Frontend `.env`:**
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_BASE_URL=http://localhost:3000
```

**Backend `.env`:**
```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_service_key
JWT_SECRET=your_jwt_secret
PORT=3000
```

## 🎯 Usage Example

### Creating a Training Session

```typescript
// frontend/src/services/training.ts
import { supabase } from './supabase';

const createTraining = async (trainingData) => {
  const { data, error } = await supabase
    .from('trainings')
    .insert({
      title: trainingData.title,
      description: trainingData.description,
      scheduled_at: trainingData.date,
      trainer_id: trainingData.trainerId,
      drill_type: trainingData.drillType
    });
  
  return { data, error };
};
```

### Real-time Subscription

```typescript
// Subscribe to training updates
supabase
  .channel('trainings')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'trainings' },
    (payload) => {
      console.log('Training updated:', payload);
      // Update UI
    }
  )
  .subscribe();
```

## 📊 Data Flow Architecture

1. **User Action** → UI triggers event (form submit, dashboard load)
2. **React Query** → Manages API calls and caching
3. **Supabase Client** → Real-time updates via subscriptions
4. **Backend API** → Business logic, JWT verification, data validation
5. **Supabase Database** → Secure data storage and retrieval
6. **Analytics Pipeline** → Server-side aggregations and reporting

## 🚀 Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

### Backend (Render)

1. Create new Web Service on Render
2. Connect GitHub repository
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

### Supabase Setup

1. Create new project on Supabase
2. Run database migrations from `/supabase/migrations`
3. Set up Row Level Security (RLS) policies
4. Configure authentication providers
5. Copy project URL and keys

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure code passes linting (`npm run lint`)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team & Contributors

| Name | Role | GitHub |
|------|------|--------|
| **Bhanu Kumar Dev** | Project Manager / Lead Full Stack Developer | [@bhanukumardev](https://github.com/bhanukumardev) |
| **Kumar Gaurav** | Lead Frontend Developer | - |
| **Yuvakshi Jyala** | UI/UX Designer & Documentation Lead | - |
| **Gaurav** | Backend Developer & DevOps Engineer | - |
| **Kanishka** | Database Architect & Supabase Integration | - |
| **Aman Sinha** | QA Engineer & Junior Frontend Developer | - |

## 🏆 Acknowledgments

- **Smart India Hackathon 2024** - For the opportunity and challenge
- **Supabase Team** - For excellent documentation and support
- **React & TypeScript Communities** - For amazing resources
- **KIIT University** - For infrastructure and guidance

## 👤 Contact

**Bhanu Kumar Dev**
- 📧 Email: kumarbhanu818@gmail.com
- 💼 LinkedIn: [bhanu-kumar-dev-97b820313](https://www.linkedin.com/in/bhanu-kumar-dev-97b820313)
- 🐙 GitHub: [@bhanukumardev](https://github.com/bhanukumardev)
- 🌐 Portfolio: [bhanukumardev.github.io/bhanu-portfolio](https://bhanukumardev.github.io/bhanu-portfolio/)

## 📚 Additional Resources

- [Project Documentation](docs/)
- [API Reference](docs/api.md)
- [Database Schema](docs/schema.md)
- [Deployment Guide](docs/deployment.md)
- [Contributing Guide](CONTRIBUTING.md)

---

<div align="center">
  <b>⭐ Star this repo to support disaster preparedness initiatives!</b>
  <br>
  Made with ❤️ for Smart India Hackathon by Team SurakshaSaathi
</div>
