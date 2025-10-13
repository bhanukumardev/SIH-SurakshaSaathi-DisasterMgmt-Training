import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, TrendingUp, TrendingDown } from 'lucide-react';

const MapView = () => {
  const { language } = useLanguage();

  const regionalData = [
    {
      region: language === 'hi' ? 'उत्तर क्षेत्र' : 'North Region',
      states: ['Delhi', 'Punjab', 'Haryana', 'Uttarakhand'],
      trainings: 85,
      coverage: 78,
      trend: 'up'
    },
    {
      region: language === 'hi' ? 'दक्षिण क्षेत्र' : 'South Region',
      states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh'],
      trainings: 142,
      coverage: 92,
      trend: 'up'
    },
    {
      region: language === 'hi' ? 'पूर्व क्षेत्र' : 'East Region',
      states: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand'],
      trainings: 64,
      coverage: 65,
      trend: 'down'
    },
    {
      region: language === 'hi' ? 'पश्चिम क्षेत्र' : 'West Region',
      states: ['Maharashtra', 'Gujarat', 'Goa', 'Rajasthan'],
      trainings: 118,
      coverage: 85,
      trend: 'up'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-[1800px] py-6 px-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            {language === 'hi' ? 'भौगोलिक मानचित्र दृश्य' : 'Geographic Map View'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {language === 'hi' 
              ? 'प्रशिक्षण कवरेज का भौगोलिक विज़ुअलाइज़ेशन' 
              : 'Geographic visualization of training coverage'}
          </p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-6 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">{language === 'hi' ? 'भारत प्रशिक्षण कवरेज मानचित्र' : 'India Training Coverage Map'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[600px] bg-gradient-to-br from-primary/10 via-background to-success/10 rounded-lg flex items-center justify-center border-2 border-dashed">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">
                  {language === 'hi' ? 'इंटरैक्टिव GIS मानचित्र' : 'Interactive GIS Map'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' 
                    ? 'Mapbox या Google Maps के साथ एकीकरण के लिए तैयार' 
                    : 'Ready for integration with Mapbox or Google Maps'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regional Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {regionalData.map((region) => (
            <Card key={region.region} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{region.region}</span>
                  {region.trend === 'up' ? (
                    <TrendingUp className="h-5 w-5 text-success" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-destructive" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'hi' ? 'राज्य' : 'States'}
                    </p>
                    <p className="text-xs">{region.states.join(', ')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'hi' ? 'प्रशिक्षण' : 'Trainings'}
                      </p>
                      <p className="text-2xl font-bold text-primary">{region.trainings}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'hi' ? 'कवरेज' : 'Coverage'}
                      </p>
                      <p className="text-2xl font-bold text-secondary">{region.coverage}%</p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-success h-2 rounded-full transition-all"
                      style={{ width: `${region.coverage}%` }}
                    />
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

export default MapView;
