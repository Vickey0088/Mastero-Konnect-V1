import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "@/features/landing/pages/IndexPage";
import NotFound from "@/app/pages/NotFoundPage";

// Feature Pages
import ProfileBuilding from "@/features/profile/pages/ProfileBuildingPage";
import AIAssessment from "@/features/assessment/pages/AIAssessmentPage";
import FindMentor from "@/features/mentors/pages/FindMentorPage";
import AIRecommendation from "@/features/mentors/pages/AIRecommendationPage";
import MentorProfile from "@/features/mentors/pages/MentorProfilePage";
import ConnectMentor from "@/features/mentors/pages/ConnectMentorPage";
import FeedbackRewards from "@/features/mentors/pages/FeedbackRewardsPage";

// Auth Pages
import SignInPage from "@/features/auth/pages/SignInPage";
import SignUpPage from "@/features/auth/pages/SignUpPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile-building" element={<ProfileBuilding />} />
          <Route path="/ai-assessment" element={<AIAssessment />} />
          <Route path="/find-mentor" element={<FindMentor />} />
          <Route path="/ai-recommendation" element={<AIRecommendation />} />
          <Route path="/mentor/:id" element={<MentorProfile />} />
          <Route path="/mentor/:id/connect" element={<ConnectMentor />} />
          <Route path="/mentor/:id/feedback" element={<FeedbackRewards />} />

          {/* Auth Routes */}
          <Route path="/auth/sign-in" element={<SignInPage />} />
          <Route path="/auth/sign-up" element={<SignUpPage />} />
          <Route path="/auth/reset" element={<ResetPasswordPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;