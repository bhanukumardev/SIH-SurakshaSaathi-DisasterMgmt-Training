import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Globe } from 'lucide-react';
import logo from '@/assets/suraksha-saathi-logo.png';

const Login = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [credentials, setCredentials] = useState({ email: '', password: '', role: '' });
  const [isSignUp, setIsSignUp] = useState(false);

  const demoCredentials = [
    { role: 'Admin', email: 'admin@suraksha.gov.in', password: 'admin123' },
    { role: 'Trainer', email: 'trainer@suraksha.gov.in', password: 'trainer123' },
    { role: 'State Coordinator', email: 'coordinator@suraksha.gov.in', password: 'coord123' },
    { role: 'Data Entry', email: 'entry@suraksha.gov.in', password: 'entry123' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validCredential = demoCredentials.find(
      c => c.email === credentials.email && c.password === credentials.password
    );
    
    if (validCredential) {
      toast.success(`${language === 'hi' ? 'स्वागत है' : 'Welcome'}, ${validCredential.role}!`);
      navigate('/dashboard');
    } else {
      toast.error(language === 'hi' ? 'अमान्य प्रमाण पत्र' : 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--background))] to-[hsl(var(--success))] p-4">
      {/* Language and Theme Toggle */}
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="bg-card/80 backdrop-blur"
        >
          <Globe className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-card/80 backdrop-blur"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <Card className="w-full max-w-md shadow-2xl border-2 border-primary/20">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img src={logo} alt="Suraksha Saathi Logo" className="h-24 w-24 object-contain" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              {t('appName')}
            </CardTitle>
            <CardDescription className="text-base mt-2">
              {t('tagline')}
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={language === 'hi' ? 'अपना ईमेल दर्ज करें' : 'Enter your email'}
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">{t('password')}</Label>
              <Input
                id="password"
                type="password"
                placeholder={language === 'hi' ? 'अपना पासवर्ड दर्ज करें' : 'Enter your password'}
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="role">{language === 'hi' ? 'भूमिका' : 'Role'}</Label>
                <Select onValueChange={(value) => setCredentials({ ...credentials, role: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder={language === 'hi' ? 'भूमिका चुनें' : 'Select role'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trainee">{language === 'hi' ? 'प्रशिक्षु' : 'Trainee'}</SelectItem>
                    <SelectItem value="trainer">{language === 'hi' ? 'प्रशिक्षक' : 'Trainer'}</SelectItem>
                    <SelectItem value="admin">{language === 'hi' ? 'व्यवस्थापक' : 'Admin'}</SelectItem>
                    <SelectItem value="coordinator">{language === 'hi' ? 'समन्वयक' : 'Coordinator'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90">
              {isSignUp ? t('signup') : t('login')}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-center text-muted-foreground mb-3">
              {language === 'hi' ? 'डेमो प्रमाण पत्र:' : 'Demo Credentials:'}
            </p>
            <div className="space-y-2 text-xs">
              {demoCredentials.map((cred) => (
                <div key={cred.role} className="bg-muted/50 p-2 rounded">
                  <p className="font-semibold">{cred.role}</p>
                  <p className="text-muted-foreground">{cred.email} / {cred.password}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button
              variant="link"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm"
            >
              {isSignUp 
                ? (language === 'hi' ? 'खाता है? लॉगिन करें' : 'Have an account? Login')
                : (language === 'hi' ? 'नया उपयोगकर्ता? साइन अप करें' : 'New user? Sign Up')
              }
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t text-center space-y-2">
            <p className="text-xs text-muted-foreground font-semibold">
              {t('poweredBy')}
            </p>
            <p className="text-xs text-muted-foreground">
              {t('ndma')}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
