import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { Upload, Save } from 'lucide-react';

const DataEntry = () => {
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      language === 'hi' 
        ? 'प्रशिक्षण डेटा सफलतापूर्वक सबमिट किया गया!' 
        : 'Training data submitted successfully!'
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            {language === 'hi' ? 'प्रशिक्षण डेटा प्रविष्टि' : 'Training Data Entry'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'hi' 
              ? 'रीयल-टाइम प्रशिक्षण जानकारी सबमिट करें' 
              : 'Submit real-time training information'}
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'नया प्रशिक्षण रिकॉर्ड' : 'New Training Record'}</CardTitle>
            <CardDescription>
              {language === 'hi' 
                ? 'कृपया सभी आवश्यक फ़ील्ड भरें' 
                : 'Please fill in all required fields'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {language === 'hi' ? 'बुनियादी जानकारी' : 'Basic Information'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="training-name">
                      {language === 'hi' ? 'प्रशिक्षण नाम' : 'Training Name'} *
                    </Label>
                    <Input id="training-name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="partner">
                      {language === 'hi' ? 'प्रशिक्षण भागीदार' : 'Training Partner'} *
                    </Label>
                    <Select>
                      <SelectTrigger id="partner">
                        <SelectValue placeholder={language === 'hi' ? 'भागीदार चुनें' : 'Select partner'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nidm">NIDM</SelectItem>
                        <SelectItem value="lbsnaa">LBSNAA</SelectItem>
                        <SelectItem value="sdma-mh">Maharashtra SDMA</SelectItem>
                        <SelectItem value="sdma-kl">Kerala SDMA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">
                      {language === 'hi' ? 'श्रेणी' : 'Category'} *
                    </Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder={language === 'hi' ? 'श्रेणी चुनें' : 'Select category'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="capacity">
                          {language === 'hi' ? 'क्षमता निर्माण' : 'Capacity Building'}
                        </SelectItem>
                        <SelectItem value="response">
                          {language === 'hi' ? 'प्रतिक्रिया प्रशिक्षण' : 'Response Training'}
                        </SelectItem>
                        <SelectItem value="preparedness">
                          {language === 'hi' ? 'तैयारी' : 'Preparedness'}
                        </SelectItem>
                        <SelectItem value="recovery">
                          {language === 'hi' ? 'पुनर्प्राप्ति' : 'Recovery'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mode">
                      {language === 'hi' ? 'प्रशिक्षण मोड' : 'Training Mode'} *
                    </Label>
                    <Select>
                      <SelectTrigger id="mode">
                        <SelectValue placeholder={language === 'hi' ? 'मोड चुनें' : 'Select mode'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="offline">{language === 'hi' ? 'ऑफलाइन' : 'Offline'}</SelectItem>
                        <SelectItem value="online">{language === 'hi' ? 'ऑनलाइन' : 'Online'}</SelectItem>
                        <SelectItem value="hybrid">{language === 'hi' ? 'हाइब्रिड' : 'Hybrid'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {language === 'hi' ? 'स्थान विवरण' : 'Location Details'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state">
                      {language === 'hi' ? 'राज्य' : 'State'} *
                    </Label>
                    <Select>
                      <SelectTrigger id="state">
                        <SelectValue placeholder={language === 'hi' ? 'राज्य चुनें' : 'Select state'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mh">{language === 'hi' ? 'महाराष्ट्र' : 'Maharashtra'}</SelectItem>
                        <SelectItem value="kl">{language === 'hi' ? 'केरल' : 'Kerala'}</SelectItem>
                        <SelectItem value="dl">{language === 'hi' ? 'दिल्ली' : 'Delhi'}</SelectItem>
                        <SelectItem value="tn">{language === 'hi' ? 'तमिलनाडु' : 'Tamil Nadu'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">
                      {language === 'hi' ? 'शहर' : 'City'} *
                    </Label>
                    <Input id="city" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="venue">
                      {language === 'hi' ? 'स्थान' : 'Venue'}
                    </Label>
                    <Input id="venue" />
                  </div>
                </div>
              </div>

              {/* Dates & Participants */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {language === 'hi' ? 'तिथियां और प्रतिभागी' : 'Dates & Participants'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">
                      {language === 'hi' ? 'प्रारंभ तिथि' : 'Start Date'} *
                    </Label>
                    <Input id="start-date" type="date" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="end-date">
                      {language === 'hi' ? 'समाप्ति तिथि' : 'End Date'} *
                    </Label>
                    <Input id="end-date" type="date" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="participants">
                      {language === 'hi' ? 'प्रतिभागी संख्या' : 'Number of Participants'} *
                    </Label>
                    <Input id="participants" type="number" required />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {language === 'hi' ? 'अतिरिक्त विवरण' : 'Additional Details'}
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="description">
                    {language === 'hi' ? 'प्रशिक्षण विवरण' : 'Training Description'}
                  </Label>
                  <Textarea 
                    id="description" 
                    placeholder={language === 'hi' ? 'प्रशिक्षण के बारे में विवरण प्रदान करें' : 'Provide details about the training'}
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              {/* Bulk Upload Option */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'hi' ? 'बल्क अपलोड' : 'Bulk Upload'}
                </h3>
                <Button type="button" variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  {language === 'hi' ? 'CSV/Excel फ़ाइल अपलोड करें' : 'Upload CSV/Excel File'}
                </Button>
              </div>

              {/* Submit */}
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline">
                  {language === 'hi' ? 'रीसेट' : 'Reset'}
                </Button>
                <Button type="submit" className="bg-gradient-to-r from-primary to-primary/80">
                  <Save className="h-4 w-4 mr-2" />
                  {language === 'hi' ? 'सबमिट करें' : 'Submit'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DataEntry;
