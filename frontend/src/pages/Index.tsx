import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, GraduationCap, BarChart3, MapPin, AlertCircle, TrendingUp } from 'lucide-react';
import logo from '@/assets/suraksha-saathi-logo.png';

const Index = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const stats = [
    { 
      title: language === 'hi' ? 'कुल कार्यक्रम' : 'Total Programs', 
      value: '663', 
      icon: GraduationCap,
      color: 'text-primary'
    },
    { 
      title: language === 'hi' ? 'प्रतिभागी' : 'Participants', 
      value: '51,500', 
      icon: Users,
      color: 'text-secondary'
    },
    { 
      title: language === 'hi' ? 'प्रशिक्षण भागीदार' : 'Training Partners', 
      value: '42', 
      icon: Shield,
      color: 'text-success'
    },
    { 
      title: language === 'hi' ? 'पूर्णता दर' : 'Completion Rate', 
      value: '87%', 
      icon: TrendingUp,
      color: 'text-primary'
    },
  ];

  const recentActivities = [
    {
      title: language === 'hi' ? 'नया प्रशिक्षण शुरू - मुंबई' : 'New Training Started - Mumbai',
      time: language === 'hi' ? '2 घंटे पहले' : '2 hours ago',
      status: 'ongoing'
    },
    {
      title: language === 'hi' ? 'प्रशिक्षण पूर्ण - तिरुवनंतपुरम' : 'Training Completed - Thiruvananthapuram',
      time: language === 'hi' ? '5 घंटे पहले' : '5 hours ago',
      status: 'completed'
    },
    {
      title: language === 'hi' ? 'नया भागीदार जोड़ा गया - ATI पंजाब' : 'New Partner Added - ATI Punjab',
      time: language === 'hi' ? '1 दिन पहले' : '1 day ago',
      status: 'new'
    },
  ];

  const alerts = [
    {
      message: language === 'hi' ? 'उत्तर प्रदेश में कम कवरेज - तत्काल ध्यान चाहिए' : 'Low coverage in Uttar Pradesh - Needs immediate attention',
      type: 'critical'
    },
    {
      message: language === 'hi' ? 'बिहार से लंबित रिपोर्ट - 3 एजेंसियां' : 'Pending reports from Bihar - 3 agencies',
      type: 'warning'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-background to-success py-16 px-6">
          <div className="container max-w-[1800px] mx-auto text-center">
            <img src={logo} alt="Suraksha Saathi Logo" className="h-28 w-28 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
              {language === 'hi' ? 'सुरक्षा साथी' : 'Suraksha Saathi'}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {language === 'hi' 
                ? 'आपदा प्रबंधन प्रशिक्षण मंच' 
                : 'Disaster Management Training Platform'}
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'hi' 
                ? 'राष्ट्रव्यापी आपदा प्रबंधन प्रशिक्षण की रीयल-टाइम निगरानी और समन्वय' 
                : 'Real-time monitoring and coordination of disaster management training nationwide'}
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/dashboard')}
                className="bg-gradient-to-r from-primary to-primary/80"
              >
                {language === 'hi' ? 'डैशबोर्ड देखें' : 'View Dashboard'}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/trainings')}
              >
                {language === 'hi' ? 'प्रशिक्षण ब्राउज़ करें' : 'Browse Trainings'}
              </Button>
            </div>
          </div>
        </section>

        <div className="container max-w-[1800px] mx-auto px-6 py-12">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: `hsl(var(--primary))` }}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  {language === 'hi' ? 'हाल की गतिविधि' : 'Recent Activity'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'ongoing' ? 'bg-primary' :
                        activity.status === 'completed' ? 'bg-success' :
                        'bg-secondary'
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Critical Alerts */}
            <Card className="border-l-4 border-l-destructive">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  {language === 'hi' ? 'महत्वपूर्ण अलर्ट' : 'Critical Alerts'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert, idx) => (
                    <div key={idx} className={`p-3 rounded-lg ${
                      alert.type === 'critical' ? 'bg-destructive/10' : 'bg-orange-500/10'
                    }`}>
                      <div className="flex items-start gap-2">
                        <MapPin className={`h-4 w-4 mt-1 ${
                          alert.type === 'critical' ? 'text-destructive' : 'text-orange-500'
                        }`} />
                        <p className="text-sm">{alert.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* MHA Branding */}
          <div className="mt-12 text-center py-8 border-t">
            <p className="text-sm font-semibold text-muted-foreground mb-2">
              {language === 'hi' ? 'गृह मंत्रालय द्वारा संचालित' : 'Powered by Ministry of Home Affairs'}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'hi' ? 'राष्ट्रीय आपदा प्रबंधन प्राधिकरण' : 'National Disaster Management Authority'}
            </p>
            <div className="flex justify-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full bg-primary"></span>
              <span className="inline-block w-4 h-4 rounded-full bg-white border-2"></span>
              <span className="inline-block w-4 h-4 rounded-full bg-success"></span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
