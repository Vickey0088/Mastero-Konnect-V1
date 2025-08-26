import { useState, useEffect } from "react";
import { Send, Lightbulb, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

const AIAssessment = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Maestro, your AI guide. I'll ask a few questions to understand your goals and strengths better. This helps us find your perfect mentor match. What brings you to Mastero Konnect today?",
      isAI: true,
      timestamp: new Date()
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState("");
  const [quickOptions, setQuickOptions] = useState([
    "Career transition",
    "Skill development",
    "Leadership growth",
    "Industry insights"
  ]);
  const [questionCount, setQuestionCount] = useState(0);
  const [strengths, setStrengths] = useState<string[]>([]);
  const [areasToExplore, setAreasToExplore] = useState<string[]>([]);
  const [networkNodes, setNetworkNodes] = useState<number[]>([]);

  const aiQuestions = [
    "What's your current role and what would you like to achieve in the next 1-2 years?",
    "What skills are you most confident in right now?",
    "What challenges are you facing in your career that you'd like guidance on?",
    "How do you prefer to learn new things?",
    "What type of mentor relationship are you looking for?"
  ];

  const quickResponseSets = [
    ["Career transition", "Skill development", "Leadership growth", "Industry insights"],
    ["Technical skills", "Communication", "Problem-solving", "Project management"],
    ["Work-life balance", "Imposter syndrome", "Career direction", "Skill gaps"],
    ["Hands-on practice", "Reading/Research", "1-on-1 discussions", "Group sessions"],
    ["Regular check-ins", "Project-based", "Occasional advice", "Long-term guidance"]
  ];

  useEffect(() => {
    // Simulate network animation
    const interval = setInterval(() => {
      setNetworkNodes(prev => {
        const newNodes = [...prev];
        const randomIndex = Math.floor(Math.random() * 10);
        if (newNodes.includes(randomIndex)) {
          newNodes.splice(newNodes.indexOf(randomIndex), 1);
        } else {
          newNodes.push(randomIndex);
        }
        return newNodes.slice(0, 5);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentInput("");

    // Process user response for analysis
    processUserResponse(text);

    // Generate AI response after delay
    setTimeout(() => {
      generateAIResponse();
    }, 1500);
  };

  const processUserResponse = (text: string) => {
    const lowerText = text.toLowerCase();
    
    // Extract strengths
    if (lowerText.includes('technical') || lowerText.includes('programming') || lowerText.includes('coding')) {
      setStrengths(prev => [...new Set([...prev, 'Technical Skills'])]);
    }
    if (lowerText.includes('communication') || lowerText.includes('presentation')) {
      setStrengths(prev => [...new Set([...prev, 'Communication'])]);
    }
    if (lowerText.includes('leadership') || lowerText.includes('manage')) {
      setStrengths(prev => [...new Set([...prev, 'Leadership'])]);
    }

    // Extract areas to explore
    if (lowerText.includes('transition') || lowerText.includes('change')) {
      setAreasToExplore(prev => [...new Set([...prev, 'Career Transition'])]);
    }
    if (lowerText.includes('network') || lowerText.includes('connect')) {
      setAreasToExplore(prev => [...new Set([...prev, 'Professional Networking'])]);
    }
    if (lowerText.includes('strategy') || lowerText.includes('planning')) {
      setAreasToExplore(prev => [...new Set([...prev, 'Strategic Planning'])]);
    }
  };

  const generateAIResponse = () => {
    if (questionCount < aiQuestions.length - 1) {
      const nextQuestion = aiQuestions[questionCount + 1];
      const aiMessage: Message = {
        id: messages.length + 2,
        text: nextQuestion,
        isAI: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setQuestionCount(prev => prev + 1);
      setQuickOptions(quickResponseSets[questionCount + 1] || []);
    } else {
      // Final message
      const aiMessage: Message = {
        id: messages.length + 2,
        text: "Perfect! I have enough information to find great mentor matches for you. Let's see your personalized recommendations!",
        isAI: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setQuickOptions([]);
    }
  };

  const handleFinishAssessment = () => {
    navigate("/ai-recommendation");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Column - Chat Interface */}
          <div className="flex-1 max-w-3xl">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-mastero-dark mb-2">
                AI-Powered Profile Assessment
              </h1>
              <p className="text-mastero-text-medium">
                Let's understand your goals and find the perfect mentor match
              </p>
            </div>

            <Card className="h-96 mb-4 overflow-hidden">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isAI
                            ? 'bg-gray-100 text-mastero-dark'
                            : 'bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Options */}
                {quickOptions.length > 0 && (
                  <div className="p-4 border-t bg-gray-50">
                    <p className="text-sm text-mastero-text-medium mb-2">Quick responses:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickOptions.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSendMessage(option)}
                          className="border-mastero-blue text-mastero-blue hover:bg-mastero-blue hover:text-white"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      placeholder="Type your response..."
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage(currentInput);
                        }
                      }}
                    />
                    <Button
                      onClick={() => handleSendMessage(currentInput)}
                      className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {questionCount >= 4 && (
              <Button
                onClick={handleFinishAssessment}
                className="w-full bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                size="lg"
              >
                See My Matches
              </Button>
            )}
          </div>

          {/* Right Column - Live Analysis */}
          <div className="w-96 space-y-6">
            {/* Network Visualization */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-mastero-dark mb-4">
                  AI Analysis in Progress
                </h3>
                
                {/* Abstract Network SVG */}
                <div className="relative h-40 bg-gradient-to-br from-mastero-bg-subtle to-blue-50 rounded-lg mb-4">
                  <svg className="w-full h-full" viewBox="0 0 200 100">
                    {/* Network connections */}
                    <line x1="20" y1="20" x2="80" y2="40" stroke="#2F6BAE" strokeWidth="2" opacity="0.3" />
                    <line x1="80" y1="40" x2="120" y2="20" stroke="#2F6BAE" strokeWidth="2" opacity="0.3" />
                    <line x1="120" y1="20" x2="180" y2="30" stroke="#2F6BAE" strokeWidth="2" opacity="0.3" />
                    <line x1="20" y1="80" x2="80" y2="60" stroke="#2F6BAE" strokeWidth="2" opacity="0.3" />
                    <line x1="80" y1="60" x2="180" y2="70" stroke="#2F6BAE" strokeWidth="2" opacity="0.3" />
                    
                    {/* Network nodes */}
                    {[0,1,2,3,4,5,6,7,8,9].map((index) => (
                      <circle
                        key={index}
                        cx={20 + (index % 4) * 50}
                        cy={20 + Math.floor(index / 4) * 30}
                        r={networkNodes.includes(index) ? "6" : "4"}
                        fill={networkNodes.includes(index) ? "#2F6BAE" : "#94A3B8"}
                        className="transition-all duration-500"
                      />
                    ))}
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Emerging Strengths */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-green-500" />
                  <h3 className="font-semibold text-mastero-dark">Emerging Strengths</h3>
                </div>
                <div className="space-y-2">
                  {strengths.length > 0 ? (
                    strengths.map((strength, index) => (
                      <div key={index} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                        {strength}
                      </div>
                    ))
                  ) : (
                    <p className="text-mastero-text-light text-sm">Your strengths will appear here as we chat</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Areas to Explore */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-mastero-blue" />
                  <h3 className="font-semibold text-mastero-dark">Areas to Explore</h3>
                </div>
                <div className="space-y-2">
                  {areasToExplore.length > 0 ? (
                    areasToExplore.map((area, index) => (
                      <div key={index} className="px-3 py-1 bg-mastero-bg-subtle text-mastero-blue rounded-full text-sm">
                        {area}
                      </div>
                    ))
                  ) : (
                    <p className="text-mastero-text-light text-sm">Growth opportunities will be identified here</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssessment;