import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContentBlock1 from '../components/ContentBlock1';
import ContentBlock2 from '../components/ContentBlock2';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ContentBlock1 />
      <ContentBlock2 />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default Index;
