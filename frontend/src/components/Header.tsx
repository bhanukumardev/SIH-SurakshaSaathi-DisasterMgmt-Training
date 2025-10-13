import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  LayoutDashboard, 
  GraduationCap, 
  BarChart3, 
  Users, 
  FileInput, 
  Map, 
  UserCog, 
  LogOut,
  Globe,
  Moon,
  Sun,
  Menu
} from 'lucide-react';
import logo from '@/assets/suraksha-saathi-logo.png';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/overview', label: language === 'hi' ? 'अवलोकन' : 'Overview', icon: LayoutDashboard },
    { path: '/dashboard', label: t('dashboard'), icon: LayoutDashboard },
    { path: '/trainings', label: t('trainings'), icon: GraduationCap },
    { path: '/analytics', label: t('analytics'), icon: BarChart3 },
    { path: '/partners', label: t('partners'), icon: Users },
    { path: '/data-entry', label: t('dataEntry'), icon: FileInput },
    { path: '/map', label: t('map'), icon: Map },
    { path: '/users', label: t('users'), icon: UserCog },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container max-w-[1800px] flex h-16 items-center justify-between px-6 gap-4">
        {/* Logo & Brand */}
        <Link to="/overview" className="flex items-center gap-3 hover:opacity-80 transition min-w-[200px] flex-shrink-0">
          <img src={logo} alt="Suraksha Saathi" className="h-10 w-10" />
          <div className="hidden md:block">
            <h1 className="text-base font-bold bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent whitespace-nowrap">
              {t('appName')}
            </h1>
            <p className="text-[9px] text-muted-foreground uppercase tracking-wide">{t('ndma')}</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`${isActive ? "bg-primary text-primary-foreground" : ""} px-2 xl:px-3`}
                  title={item.label}
                >
                  <Icon className="h-4 w-4 xl:mr-2" />
                  <span className="hidden xl:inline text-sm">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2 min-w-[140px] flex-shrink-0 justify-end">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="hidden sm:flex"
            title={language === 'en' ? 'Switch to Hindi' : 'अंग्रेज़ी में बदलें'}
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="hidden sm:flex"
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.location.href = '/login'}
            title="Logout"
          >
            <LogOut className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-card">
          <nav className="container py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
