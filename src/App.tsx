import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProfileBuilding from "./pages/ProfileBuilding";
import AIAssessment from "./pages/AIAssessment";
import FindMentor from "./pages/FindMentor";
import AIRecommendation from "./pages/AIRecommendation";
import MentorProfile from "./pages/MentorProfile";
import ConnectMentor from "./pages/ConnectMentor";
import FeedbackRewards from "./pages/FeedbackRewards";
import SignInPage from "./components/Auth/SignInPage";
import SignUpPage from "./components/Auth/SignUpPage";
import ResetPasswordPage from "./components/Auth/ResetPasswordPage";

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

          {/* Auth */}
          <Route path="/auth/sign-in" element={<SignInPage />} />
          <Route path="/auth/sign-up" element={<SignUpPage />} />
          <Route path="/auth/reset" element={<ResetPasswordPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;