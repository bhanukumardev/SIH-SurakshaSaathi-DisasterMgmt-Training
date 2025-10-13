import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, MapPin, Calendar, Users, Building } from 'lucide-react';
import { useState } from 'react';

const Trainings = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const trainings = [
    {
      id: 1,
      name: language === 'hi' ? 'आपदा प्रतिक्रिया प्रशिक्षण' : 'Disaster Response Training',
      state: language === 'hi' ? 'महाराष्ट्र' : 'Maharashtra',
      city: language === 'hi' ? 'मुंबई' : 'Mumbai',
      date: '2025-10-15 to 2025-10-18',
      participants: 150,
      status: 'ongoing',
      partner: 'NIDM',
      category: language === 'hi' ? 'प्रतिक्रिया' : 'Response'
    },
    {
      id: 2,
      name: language === 'hi' ? 'क्षमता निर्माण कार्यशाला' : 'Capacity Building Workshop',
      state: language === 'hi' ? 'केरल' : 'Kerala',
      city: language === 'hi' ? 'तिरुवनंतपुरम' : 'Thiruvananthapuram',
      date: '2025-10-20 to 2025-10-22',
      participants: 80,
      status: 'scheduled',
      partner: 'LBSNAA',
      category: language === 'hi' ? 'क्षमता निर्माण' : 'Capacity Building'
    },
    {
      id: 3,
      name: language === 'hi' ? 'आपात प्रबंधन पाठ्यक्रम' : 'Emergency Management Course',
      state: language === 'hi' ? 'दिल्ली' : 'Delhi',
      city: language === 'hi' ? 'नई दिल्ली' : 'New Delhi',
      date: '2025-10-01 to 2025-10-07',
      participants: 120,
      status: 'completed',
      partner: 'NDMA',
      category: language === 'hi' ? 'तैयारी' : 'Preparedness'
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { color: string; label: string }> = {
      ongoing: { color: 'bg-primary text-primary-foreground', label: language === 'hi' ? 'चल रहा' : 'Ongoing' },
      scheduled: { color: 'bg-secondary text-secondary-foreground', label: language === 'hi' ? 'निर्धारित' : 'Scheduled' },
      completed: { color: 'bg-success text-success-foreground', label: language === 'hi' ? 'पूर्ण' : 'Completed' }
    };
    const variant = variants[status];
    return <Badge className={variant.color}>{variant.label}</Badge>;
  };

  const filteredTrainings = trainings.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            {language === 'hi' ? 'प्रशिक्षण कार्यक्रम' : 'Training Programs'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'hi' 
              ? 'सभी आपदा प्रबंधन प्रशिक्षण गतिविधियों की व्यापक सूची' 
              : 'Comprehensive list of all disaster management training activities'}
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={language === 'hi' ? 'प्रशिक्षण, राज्य, या शहर खोजें...' : 'Search trainings, state, or city...'}
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Trainings List */}
        <div className="space-y-4">
          {filteredTrainings.map((training) => (
            <Card key={training.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{training.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {getStatusBadge(training.status)}
                      <Badge variant="outline">{training.category}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{training.city}, {training.state}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{training.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{training.participants} {language === 'hi' ? 'प्रतिभागी' : 'participants'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>{training.partner}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Trainings;
