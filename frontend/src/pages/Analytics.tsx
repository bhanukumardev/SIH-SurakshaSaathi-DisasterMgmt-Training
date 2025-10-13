import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, MapPin, Target } from 'lucide-react';

const Analytics = () => {
  const { language } = useLanguage();

  const stateData = [
    { state: language === 'hi' ? 'महाराष्ट्र' : 'Maharashtra', trainings: 42, participants: 3200 },
    { state: language === 'hi' ? 'केरल' : 'Kerala', trainings: 38, participants: 2800 },
    { state: language === 'hi' ? 'दिल्ली' : 'Delhi', trainings: 35, participants: 2500 },
    { state: language === 'hi' ? 'तमिलनाडु' : 'Tamil Nadu', trainings: 32, participants: 2300 },
    { state: language === 'hi' ? 'कर्नाटक' : 'Karnataka', trainings: 28, participants: 2100 },
  ];

  const impactMetrics = [
    {
      title: language === 'hi' ? 'प्रशिक्षण प्रभाव स्कोर' : 'Training Impact Score',
      value: '8.7/10',
      icon: Target,
      description: language === 'hi' ? 'प्रतिभागी प्रतिक्रिया के आधार पर' : 'Based on participant feedback'
    },
    {
      title: language === 'hi' ? 'भौगोलिक कवरेज' : 'Geographic Coverage',
      value: '28/29',
      icon: MapPin,
      description: language === 'hi' ? 'राज्य शामिल' : 'States covered'
    },
    {
      title: language === 'hi' ? 'ज्ञान प्रतिधारण' : 'Knowledge Retention',
      value: '92%',
      icon: TrendingUp,
      description: language === 'hi' ? '3 महीने के बाद' : 'After 3 months'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-[1800px] py-6 px-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            {language === 'hi' ? 'विश्लेषण और अंतर्दृष्टि' : 'Analytics & Insights'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {language === 'hi' 
              ? 'प्रशिक्षण प्रभाव और कवरेज की गहन विश्लेषण' 
              : 'In-depth analysis of training impact and coverage'}
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {impactMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.title} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* State Performance */}
        <Card className="mb-6 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">{language === 'hi' ? 'राज्य प्रदर्शन तुलना' : 'State Performance Comparison'}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={stateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" />
                <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--primary))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--secondary))" />
                <Tooltip />
                <Legend />
                <Bar 
                  yAxisId="left" 
                  dataKey="trainings" 
                  fill="hsl(var(--primary))" 
                  name={language === 'hi' ? 'प्रशिक्षण' : 'Trainings'} 
                />
                <Bar 
                  yAxisId="right" 
                  dataKey="participants" 
                  fill="hsl(var(--secondary))" 
                  name={language === 'hi' ? 'प्रतिभागी' : 'Participants'} 
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Coverage Gaps */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">{language === 'hi' ? 'कवरेज अंतराल विश्लेषण' : 'Coverage Gap Analysis'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-6 bg-destructive/10 rounded-lg">
                <h3 className="font-semibold mb-3 text-destructive text-lg">
                  {language === 'hi' ? 'उच्च प्राथमिकता वाले क्षेत्र' : 'High Priority Areas'}
                </h3>
                <ul className="space-y-2">
                  <li>• {language === 'hi' ? 'उत्तर प्रदेश - केवल 8 प्रशिक्षण पिछली तिमाही में' : 'Uttar Pradesh - Only 8 trainings last quarter'}</li>
                  <li>• {language === 'hi' ? 'बिहार - कोई LBSNAA सहयोग नहीं' : 'Bihar - No LBSNAA collaboration yet'}</li>
                </ul>
              </div>
              <div className="p-6 bg-success/10 rounded-lg">
                <h3 className="font-semibold mb-3 text-success text-lg">
                  {language === 'hi' ? 'मजबूत प्रदर्शन' : 'Strong Performance'}
                </h3>
                <ul className="space-y-2">
                  <li>• {language === 'hi' ? 'महाराष्ट्र - 42 प्रशिक्षण, 95% पूर्णता' : 'Maharashtra - 42 trainings, 95% completion'}</li>
                  <li>• {language === 'hi' ? 'केरल - सभी थीम्स में कवर किया गया' : 'Kerala - All themes covered'}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Analytics;
