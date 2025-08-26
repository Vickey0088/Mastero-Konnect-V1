import { useState } from "react";
import { ArrowRight, Camera, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ProfileBuilding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    skills: [] as string[],
    interests: "",
    profilePicture: null
  });

  const steps = [
    { id: 1, title: "Basic Info", tip: "A clear name helps build trust with mentors!" },
    { id: 2, title: "Education", tip: "Your educational background helps mentors understand your foundation." },
    { id: 3, title: "Skills", tip: "Add skills you have or want to develop - mentors love helping with both!" },
    { id: 4, title: "Career Interests", tip: "The more specific you are, the better we can match you!" },
    { id: 5, title: "Profile Picture", tip: "A clear photo helps mentors put a face to the name!" }
  ];

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < 5) {
      setCurrentStep(stepId + 1);
    }
  };

  const handleSkillAdd = (skill: string) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
    }
  };

  const handleFinish = () => {
    navigate("/ai-assessment");
  };

  const progressPercentage = (completedSteps.length / 5) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-2">
        <div 
          className="h-2 bg-gradient-to-r from-mastero-blue to-mastero-blue-end transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Side - Form */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-mastero-dark mb-2">
                Build Your Profile
              </h1>
              <p className="text-mastero-text-medium">
                Step {currentStep} of 5 - Let's create your mentorship profile
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1: Basic Info */}
              <Card className={`transition-all duration-300 ${currentStep === 1 ? 'ring-2 ring-mastero-blue' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-mastero-dark">Basic Information</h3>
                    {completedSteps.includes(1) && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <Button 
                        onClick={() => handleStepComplete(1)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={!formData.name}
                      >
                        Save & Continue <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Step 2: Education */}
              <Card className={`transition-all duration-300 ${currentStep === 2 ? 'ring-2 ring-mastero-blue' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-mastero-dark">Education</h3>
                    {completedSteps.includes(2) && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="education">Highest Education</Label>
                        <Input
                          id="education"
                          value={formData.education}
                          onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                          placeholder="e.g., Bachelor's in Computer Science"
                        />
                      </div>
                      <Button 
                        onClick={() => handleStepComplete(2)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={!formData.education}
                      >
                        Save & Continue <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Step 3: Skills */}
              <Card className={`transition-all duration-300 ${currentStep === 3 ? 'ring-2 ring-mastero-blue' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-mastero-dark">Skills</h3>
                    {completedSteps.includes(3) && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <Label>Your Skills</Label>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {formData.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-mastero-bg-subtle text-mastero-blue rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Add a skill"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                handleSkillAdd((e.target as HTMLInputElement).value);
                                (e.target as HTMLInputElement).value = '';
                              }
                            }}
                          />
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleStepComplete(3)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={formData.skills.length === 0}
                      >
                        Save & Continue <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Step 4: Career Interests */}
              <Card className={`transition-all duration-300 ${currentStep === 4 ? 'ring-2 ring-mastero-blue' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-mastero-dark">Career Interests</h3>
                    {completedSteps.includes(4) && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="interests">What are your career goals?</Label>
                        <Input
                          id="interests"
                          value={formData.interests}
                          onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                          placeholder="e.g., Transition to Product Management"
                        />
                      </div>
                      <Button 
                        onClick={() => handleStepComplete(4)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={!formData.interests}
                      >
                        Save & Continue <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Step 5: Profile Picture */}
              <Card className={`transition-all duration-300 ${currentStep === 5 ? 'ring-2 ring-mastero-blue' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-mastero-dark">Profile Picture</h3>
                    {completedSteps.includes(5) && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {currentStep === 5 && (
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4">Drag and drop your photo here, or click to browse</p>
                        <Button variant="outline">Choose File</Button>
                      </div>
                      <Button 
                        onClick={handleFinish}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                      >
                        Complete Profile <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Tips Sidebar */}
          <div className="w-80">
            <Card className="sticky top-8 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-mastero-dark mb-4">💡 Pro Tip</h3>
                <p className="text-mastero-text-medium">
                  {steps.find(step => step.id === currentStep)?.tip}
                </p>
                
                <div className="mt-6">
                  <h4 className="font-medium text-mastero-dark mb-2">Progress</h4>
                  <div className="space-y-2">
                    {steps.map((step) => (
                      <div key={step.id} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full ${
                          completedSteps.includes(step.id) 
                            ? 'bg-green-500' 
                            : currentStep === step.id 
                              ? 'bg-mastero-blue' 
                              : 'bg-gray-300'
                        }`} />
                        <span className={`text-sm ${
                          completedSteps.includes(step.id) || currentStep === step.id 
                            ? 'text-mastero-dark' 
                            : 'text-gray-500'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBuilding;