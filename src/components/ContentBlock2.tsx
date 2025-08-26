const ContentBlock2 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Dashboard Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-lg w-full">
              {/* Dashboard mockup container */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transform hover:scale-105 transition-transform duration-300">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-mastero-text-dark">Your Matches</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Mentor Cards */}
                <div className="space-y-4">
                  {/* Mentor 1 */}
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-mastero-bg-subtle/50 to-white rounded-xl border border-mastero-blue/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-mastero-blue to-mastero-blue-end rounded-full flex items-center justify-center text-white font-bold">
                      SM
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-mastero-text-dark">Sarah Martinez</h4>
                      <p className="text-sm text-mastero-text-body">Senior Product Manager</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-mastero-blue">96%</div>
                      <div className="text-xs text-mastero-text-light">Match Score</div>
                    </div>
                  </div>
                  
                  {/* Mentor 2 */}
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-mastero-blue-end to-mastero-blue rounded-full flex items-center justify-center text-white font-bold">
                      JC
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-mastero-text-dark">James Chen</h4>
                      <p className="text-sm text-mastero-text-body">Tech Lead at Google</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-mastero-blue">89%</div>
                      <div className="text-xs text-mastero-text-light">Match Score</div>
                    </div>
                  </div>
                  
                  {/* Mentor 3 */}
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-mastero-blue to-mastero-blue-end rounded-full flex items-center justify-center text-white font-bold">
                      AL
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-mastero-text-dark">Alex Liu</h4>
                      <p className="text-sm text-mastero-text-body">Startup Founder</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-mastero-blue">84%</div>
                      <div className="text-xs text-mastero-text-light">Match Score</div>
                    </div>
                  </div>
                </div>
                
                {/* AI Insights */}
                <div className="mt-6 p-4 bg-mastero-bg-subtle/30 rounded-xl border border-mastero-blue/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-mastero-blue rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-mastero-text-dark">AI Insights</span>
                  </div>
                  <p className="text-sm text-mastero-text-body">
                    Sarah has mentored 50+ professionals in your field with 98% success rate.
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-mastero-blue rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
                AI
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-mastero-text-dark leading-tight">
              Your Personalized{' '}
              <span className="gradient-text">Career Compass</span>
            </h2>
            
            <div className="space-y-4 text-lg text-mastero-text-body leading-relaxed">
              <p>
                Our advanced AI algorithm analyzes your career goals, current skills, industry preferences, 
                and learning style to create a unique profile that matches you with mentors who can 
                provide the most relevant guidance for your specific journey.
              </p>
              
              <p>
                Premium members get access to detailed compatibility scores, mentor availability 
                calendars, and exclusive 1:1 session booking with top-tier industry leaders who 
                have been carefully vetted for their expertise and mentoring capabilities.
              </p>
            </div>
            
            {/* Features list */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-mastero-blue rounded-full"></div>
                <span className="text-mastero-text-medium">Real-time compatibility scoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-mastero-blue rounded-full"></div>
                <span className="text-mastero-text-medium">Instant mentor availability</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-mastero-blue rounded-full"></div>
                <span className="text-mastero-text-medium">Personalized learning paths</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <button className="btn-primary px-8 py-4 text-lg">
                Find My Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock2;