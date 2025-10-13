import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building, MapPin, GraduationCap, Users, Phone, Mail } from 'lucide-react';

const Partners = () => {
  const { language } = useLanguage();

  const partners = [
    {
      name: 'NIDM',
      fullName: language === 'hi' ? 'राष्ट्रीय आपदा प्रबंधन संस्थान' : 'National Institute of Disaster Management',
      location: language === 'hi' ? 'नई दिल्ली' : 'New Delhi',
      trainings: 245,
      participants: 18500,
      themes: [
        language === 'hi' ? 'क्षमता निर्माण' : 'Capacity Building',
        language === 'hi' ? 'प्रतिक्रिया' : 'Response',
        language === 'hi' ? 'तैयारी' : 'Preparedness'
      ],
      contact: 'contact@nidm.gov.in'
    },
    {
      name: 'LBSNAA',
      fullName: language === 'hi' ? 'लाल बहादुर शास्त्री राष्ट्रीय प्रशासन अकादमी' : 'Lal Bahadur Shastri National Academy of Administration',
      location: language === 'hi' ? 'मसूरी, उत्तराखंड' : 'Mussoorie, Uttarakhand',
      trainings: 128,
      participants: 9600,
      themes: [
        language === 'hi' ? 'नेतृत्व' : 'Leadership',
        language === 'hi' ? 'समन्वय' : 'Coordination',
        language === 'hi' ? 'नीति' : 'Policy'
      ],
      contact: 'training@lbsnaa.gov.in'
    },
    {
      name: language === 'hi' ? 'महाराष्ट्र SDMA' : 'Maharashtra SDMA',
      fullName: language === 'hi' ? 'महाराष्ट्र राज्य आपदा प्रबंधन प्राधिकरण' : 'Maharashtra State Disaster Management Authority',
      location: language === 'hi' ? 'मुंबई, महाराष्ट्र' : 'Mumbai, Maharashtra',
      trainings: 156,
      participants: 12400,
      themes: [
        language === 'hi' ? 'बाढ़ प्रबंधन' : 'Flood Management',
        language === 'hi' ? 'शहरी तैयारी' : 'Urban Preparedness',
        language === 'hi' ? 'समुदाय लचीलापन' : 'Community Resilience'
      ],
      contact: 'info@sdma.maharashtra.gov.in'
    },
    {
      name: language === 'hi' ? 'केरल SDMA' : 'Kerala SDMA',
      fullName: language === 'hi' ? 'केरल राज्य आपदा प्रबंधन प्राधिकरण' : 'Kerala State Disaster Management Authority',
      location: language === 'hi' ? 'तिरुवनंतपुरम, केरल' : 'Thiruvananthapuram, Kerala',
      trainings: 134,
      participants: 10800,
      themes: [
        language === 'hi' ? 'तटीय तैयारी' : 'Coastal Preparedness',
        language === 'hi' ? 'आपातकालीन प्रतिक्रिया' : 'Emergency Response',
        language === 'hi' ? 'समुदाय प्रशिक्षण' : 'Community Training'
      ],
      contact: 'sdma@kerala.gov.in'
    },
  ];

  const totalStats = {
    partners: 42,
    trainings: partners.reduce((acc, p) => acc + p.trainings, 0),
    participants: partners.reduce((acc, p) => acc + p.participants, 0)
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            {language === 'hi' ? 'प्रशिक्षण भागीदार नेटवर्क' : 'Training Partner Network'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'hi' 
              ? 'भारत के आपदा प्रबंधन प्रशिक्षण पारिस्थितिकी तंत्र में योगदान देने वाले संगठन' 
              : 'Organizations contributing to India\'s disaster management training ecosystem'}
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                {language === 'hi' ? 'कुल भागीदार' : 'Total Partners'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{totalStats.partners}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-secondary" />
                {language === 'hi' ? 'कुल प्रशिक्षण' : 'Total Trainings'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{totalStats.trainings}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-success" />
                {language === 'hi' ? 'कुल प्रतिभागी' : 'Total Participants'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">{totalStats.participants.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Partners List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {partners.map((partner) => (
            <Card key={partner.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{partner.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{partner.fullName}</p>
                  </div>
                  <Badge className="bg-success text-success-foreground">
                    {language === 'hi' ? 'सक्रिय' : 'Active'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{partner.location}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">{language === 'hi' ? 'प्रशिक्षण' : 'Trainings'}</p>
                    <p className="text-lg font-bold text-primary">{partner.trainings}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{language === 'hi' ? 'प्रतिभागी' : 'Participants'}</p>
                    <p className="text-lg font-bold text-secondary">{partner.participants.toLocaleString()}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">
                    {language === 'hi' ? 'मुख्य विषय' : 'Key Themes'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {partner.themes.map((theme) => (
                      <Badge key={theme} variant="outline">{theme}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{partner.contact}</span>
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

export default Partners;
