import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { BarChart3, Users, GraduationCap, TrendingUp, MapPin, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { language } = useLanguage();

  const stats = [
    {
      title: language === 'hi' ? 'सक्रिय प्रशिक्षण' : 'Active Trainings',
      value: '127',
      change: '+12%',
      icon: GraduationCap,
      color: 'text-primary'
    },
    {
      title: language === 'hi' ? 'मासिक संचालित' : 'Monthly Conducted',
      value: '48',
      change: '+8%',
      icon: BarChart3,
      color: 'text-secondary'
    },
    {
      title: language === 'hi' ? 'प्रतिभागी' : 'Participants',
      value: '15,234',
      change: '+23%',
      icon: Users,
      color: 'text-success'
    },
    {
      title: language === 'hi' ? 'पूर्णता दर' : 'Completion Rate',
      value: '87%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-primary'
    },
  ];

  const monthlyData = [
    { month: language === 'hi' ? 'जन' : 'Jan', trainings: 35 },
    { month: language === 'hi' ? 'फ़र' : 'Feb', trainings: 42 },
    { month: language === 'hi' ? 'मार्च' : 'Mar', trainings: 38 },
    { month: language === 'hi' ? 'अप्रै' : 'Apr', trainings: 45 },
    { month: language === 'hi' ? 'मई' : 'May', trainings: 48 },
  ];

  const categoryData = [
    { name: language === 'hi' ? 'क्षमता निर्माण' : 'Capacity Building', value: 35 },
    { name: language === 'hi' ? 'प्रतिक्रिया' : 'Response', value: 25 },
    { name: language === 'hi' ? 'तैयारी' : 'Preparedness', value: 20 },
    { name: language === 'hi' ? 'पुनर्प्राप्ति' : 'Recovery', value: 20 },
  ];

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--success))', 'hsl(var(--accent))'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-[1800px] py-6 px-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            {language === 'hi' ? 'रीयल-टाइम डैशबोर्ड' : 'Real-Time Dashboard'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {language === 'hi' 
              ? 'राष्ट्रव्यापी प्रशिक्षण गतिविधियों की व्यापक निगरानी' 
              : 'Comprehensive monitoring of training activities nationwide'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="border-l-4 hover:shadow-lg transition-shadow" style={{ borderLeftColor: `hsl(var(--primary))` }}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-xs text-success mt-1">
                    {stat.change} {language === 'hi' ? 'पिछले महीने से' : 'from last month'}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Trend Chart */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{language === 'hi' ? 'मासिक प्रशिक्षण रुझान' : 'Monthly Training Trends'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="trainings" stroke="hsl(var(--primary))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{language === 'hi' ? 'श्रेणी वितरण' : 'Category Distribution'}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <Card className="border-l-4 border-l-destructive hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <AlertCircle className="h-5 w-5 text-destructive" />
              {language === 'hi' ? 'महत्वपूर्ण अलर्ट' : 'Critical Alerts'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-destructive" />
                <span>
                  {language === 'hi' 
                    ? 'उत्तर प्रदेश में कम कवरेज - पिछले महीने केवल 12 प्रशिक्षण' 
                    : 'Low coverage in Uttar Pradesh - Only 12 trainings last month'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-destructive" />
                <span>
                  {language === 'hi' 
                    ? 'बिहार में विलंबित रिपोर्टिंग - 3 राज्य एजेंसियां लंबित' 
                    : 'Delayed reporting in Bihar - 3 state agencies pending'}
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
