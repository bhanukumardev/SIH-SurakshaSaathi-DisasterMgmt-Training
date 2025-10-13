import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3 text-primary">{t('appName')}</h3>
            <p className="text-sm text-muted-foreground">
              {language === 'hi' 
                ? 'भारत का प्रमुख रीयल-टाइम आपदा प्रबंधन प्रशिक्षण निगरानी मंच'
                : 'India\'s premier real-time disaster management training monitoring platform'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">
              {language === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://ndma.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  NDMA
                </a>
              </li>
              <li>
                <a href="https://nidm.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  NIDM
                </a>
              </li>
              <li>
                <a href="https://www.lbsnaa.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  LBSNAA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">
              {language === 'hi' ? 'संपर्क करें' : 'Contact'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'hi' ? 'गृह मंत्रालय' : 'Ministry of Home Affairs'}<br />
              {language === 'hi' ? 'भारत सरकार' : 'Government of India'}<br />
              {language === 'hi' ? 'नई दिल्ली' : 'New Delhi'}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © 2025 {t('appName')} | {t('poweredBy')} | {t('ndma')}
          </p>
          <div className="mt-2 flex justify-center gap-2 text-xs">
            <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
            <span className="inline-block w-3 h-3 rounded-full bg-white border"></span>
            <span className="inline-block w-3 h-3 rounded-full bg-success"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
