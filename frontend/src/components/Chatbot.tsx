
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Mic } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');
  const { language, t } = useLanguage();

  const quickResponses: Record<string, string> = {
    trainings: language === 'hi' 
      ? 'आज 45 प्रशिक्षण कार्यक्रम चल रहे हैं। क्या आप विशिष्ट प्रशिक्षण खोज रहे हैं?'
      : 'There are 45 training programs active today. Are you looking for a specific training?',
    compliance: language === 'hi'
      ? 'समग्र अनुपालन दर 87% है। महाराष्ट्र और केरल शीर्ष प्रदर्शनकारी राज्य हैं।'
      : 'Overall compliance rate is 87%. Maharashtra and Kerala are the top performing states.',
    attendance: language === 'hi'
      ? 'उपस्थिति चिह्नित करने के लिए, डेटा प्रविष्टि अनुभाग पर जाएं और "उपस्थिति अपडेट" बटन पर क्लिक करें।'
      : 'To mark attendance, navigate to the Data Entry section and click the "Update Attendance" button.',
    partners: language === 'hi'
      ? 'हमारे पास 42 सक्रिय प्रशिक्षण भागीदार हैं जिनमें NIDM, LBSNAA, और विभिन्न राज्य SDMA शामिल हैं।'
      : 'We have 42 active training partners including NIDM, LBSNAA, and various state SDMAs.',
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isUser: true }]);
    
    // Simple response logic
    const response = Object.keys(quickResponses).find(key => 
      input.toLowerCase().includes(key)
    );
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: response ? quickResponses[response] : (
          language === 'hi'
            ? 'मैं आपकी सहायता के लिए यहां हूं। कृपया प्रशिक्षण, अनुपालन, या उपस्थिति के बारे में पूछें।'
            : 'I\'m here to help! Please ask about trainings, compliance, or attendance.'
        ),
        isUser: false
      }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl border-2 border-primary/20 flex flex-col z-50">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                {t('appName')} {language === 'hi' ? 'सहायक' : 'Assistant'}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <div className="text-center text-muted-foreground mt-8">
                <p className="mb-4">
                  {language === 'hi' 
                    ? '👋 नमस्ते! मैं कैसे मदद कर सकता हूं?' 
                    : '👋 Hello! How can I help you?'}
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" onClick={() => setInput('Show today\'s trainings')}>
                    {language === 'hi' ? 'आज के प्रशिक्षण दिखाएं' : 'Show today\'s trainings'}
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setInput('Compliance report')}>
                    {language === 'hi' ? 'अनुपालन रिपोर्ट' : 'Compliance report'}
                  </Button>
                </div>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-lg ${
                      msg.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder={language === 'hi' ? 'संदेश टाइप करें...' : 'Type a message...'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button size="icon" onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
