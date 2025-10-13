import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, UserCog, Shield, Users as UsersIcon, FileEdit } from 'lucide-react';
import { useState } from 'react';

const Users = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@ndma.gov.in',
      role: 'Admin',
      organization: 'NDMA',
      status: 'active',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@nidm.gov.in',
      role: 'Partner Admin',
      organization: 'NIDM',
      status: 'active',
      lastActive: '5 hours ago'
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit.patel@maharashtra.gov.in',
      role: 'State Coordinator',
      organization: 'Maharashtra SDMA',
      status: 'active',
      lastActive: '1 day ago'
    },
    {
      id: 4,
      name: 'Sneha Menon',
      email: 'sneha.menon@kerala.gov.in',
      role: 'State Coordinator',
      organization: 'Kerala SDMA',
      status: 'active',
      lastActive: '3 hours ago'
    },
    {
      id: 5,
      name: 'Ravi Singh',
      email: 'ravi.singh@lbsnaa.gov.in',
      role: 'Data Entry',
      organization: 'LBSNAA',
      status: 'inactive',
      lastActive: '1 week ago'
    },
  ];

  const roleIcons: Record<string, any> = {
    'Admin': Shield,
    'Partner Admin': UserCog,
    'State Coordinator': UsersIcon,
    'Data Entry': FileEdit
  };

  const roleColors: Record<string, string> = {
    'Admin': 'bg-destructive text-destructive-foreground',
    'Partner Admin': 'bg-primary text-primary-foreground',
    'State Coordinator': 'bg-secondary text-secondary-foreground',
    'Data Entry': 'bg-muted text-muted-foreground'
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            {language === 'hi' ? 'उपयोगकर्ता प्रबंधन' : 'User Management'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'hi' 
              ? 'भूमिका-आधारित पहुंच नियंत्रण और उपयोगकर्ता प्रबंधन' 
              : 'Role-based access control and user management'}
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={language === 'hi' ? 'उपयोगकर्ता, ईमेल, या संगठन खोजें...' : 'Search users, email, or organization...'}
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => {
            const RoleIcon = roleIcons[user.role];
            return (
              <Card key={user.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{user.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    {user.status === 'active' ? (
                      <Badge className="bg-success text-success-foreground">
                        {language === 'hi' ? 'सक्रिय' : 'Active'}
                      </Badge>
                    ) : (
                      <Badge variant="outline">
                        {language === 'hi' ? 'निष्क्रिय' : 'Inactive'}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Badge className={roleColors[user.role]}>
                      <RoleIcon className="h-3 w-3 mr-1" />
                      {user.role}
                    </Badge>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'hi' ? 'संगठन' : 'Organization'}
                    </p>
                    <p className="text-sm font-medium">{user.organization}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'hi' ? 'अंतिम सक्रिय' : 'Last Active'}
                    </p>
                    <p className="text-sm font-medium">{user.lastActive}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Role Permissions Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'भूमिका अनुमतियाँ' : 'Role Permissions'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-destructive" />
                  Admin
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' 
                    ? 'पूर्ण पहुंच - सभी डेटा, उपयोगकर्ताओं और कॉन्फ़िगरेशन का प्रबंधन' 
                    : 'Full access - Manage all data, users, and configurations'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <UserCog className="h-4 w-4 text-primary" />
                  Partner Admin
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' 
                    ? 'साझेदार-विशिष्ट डेटा और उपयोगकर्ताओं का प्रबंधन' 
                    : 'Manage partner-specific data and users'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <UsersIcon className="h-4 w-4 text-secondary" />
                  State Coordinator
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' 
                    ? 'राज्य-स्तरीय डेटा और रिपोर्ट तक पहुंच' 
                    : 'Access state-level data and reports'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <FileEdit className="h-4 w-4 text-muted-foreground" />
                  Data Entry
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' 
                    ? 'केवल प्रशिक्षण डेटा सबमिट करें' 
                    : 'Submit training data only'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Users;
