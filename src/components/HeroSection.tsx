import NetworkIllustration from './NetworkIllustration';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white network-bg pt-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-[3.5rem] font-bold leading-tight text-mastero-text-dark">
              Find Your{' '}
              <span className="gradient-text">Perfect Mentor</span>{' '}
              With AI-Powered Matching
            </h1>
            
            <p className="text-xl text-mastero-text-body leading-relaxed max-w-lg mx-auto lg:mx-0">
              Connect with top industry experts, gain guidance, and unlock your true potential.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="btn-primary px-8 py-4 text-lg w-full sm:w-auto">
              Get Started Free
            </button>
            <button className="btn-outline px-8 py-4 text-lg w-full sm:w-auto">
              Explore Mentors
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-mastero-text-light">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-mastero-blue rounded-full"></div>
                <span className="text-sm">1000+ Mentors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-mastero-blue rounded-full"></div>
                <span className="text-sm">AI-Powered Matching</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-mastero-blue rounded-full"></div>
                <span className="text-sm">Free to Start</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Interactive Illustration */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-lg">
            <NetworkIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;