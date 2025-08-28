const ContentBlock1 = () => {
  return (
    <section className="py-20 bg-mastero-bg-subtle/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-mastero-text-dark leading-tight">
              Bridging the Gap Between{' '}
              <span className="gradient-text">Aspiration & Guidance</span>
            </h2>
            
            <div className="space-y-4 text-lg text-mastero-text-body leading-relaxed">
              <p>
                In today's fast-paced world, finding reliable career guidance can be overwhelming. 
                With countless sources of information and conflicting advice online, many professionals 
                struggle to navigate their career paths effectively.
              </p>
              
              <p>
                Mastero Konnect eliminates the guesswork by connecting you directly with verified 
                industry experts who have walked the path you aspire to take. Our mentors provide 
                personalized, actionable insights that cut through the noise of generic advice.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-mastero-blue rounded-full animate-pulse"></div>
                <span className="text-mastero-text-medium font-medium">Verified Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-mastero-blue rounded-full animate-pulse"></div>
                <span className="text-mastero-text-medium font-medium">Personalized Guidance</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - SVG Illustration */}
          <div className="flex justify-center lg:justify-end">
            <svg width="400" height="300" viewBox="0 0 400 300" className="max-w-full h-auto">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--mastero-blue-start))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--mastero-blue-end))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--mastero-blue-start))" stopOpacity="0.3" />
                </linearGradient>
                
                <linearGradient id="figureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--mastero-blue-start))" />
                  <stop offset="100%" stopColor="hsl(var(--mastero-blue-end))" />
                </linearGradient>
              </defs>
              
              {/* Background elements */}
              <circle cx="80" cy="80" r="2" fill="hsl(var(--mastero-blue-start))" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="320" cy="60" r="1.5" fill="hsl(var(--mastero-blue-end))" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
              
              {/* Left figure - confused person */}
              <g transform="translate(50, 120)">
                {/* Body */}
                <ellipse cx="25" cy="80" rx="15" ry="25" fill="hsl(var(--mastero-text-medium))" opacity="0.6" />
                
                {/* Head */}
                <circle cx="25" cy="40" r="20" fill="hsl(var(--mastero-text-medium))" opacity="0.7" />
                
                {/* Question mark */}
                <g transform="translate(15, 10)">
                  <text 
                    x="10" 
                    y="15" 
                    fontSize="24" 
                    fill="hsl(var(--mastero-blue-start))" 
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    ?
                  </text>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="15,10; 15,5; 15,10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </g>
                
                {/* Confused expression lines */}
                <g stroke="hsl(var(--mastero-text-medium))" strokeWidth="2" opacity="0.5">
                  <path d="M 10 50 Q 15 45 20 50" fill="none" />
                  <path d="M 30 50 Q 35 45 40 50" fill="none" />
                </g>
              </g>
              
              {/* Connection line with moving dot */}
              <g>
                <path 
                  d="M 100 180 Q 200 150 300 180" 
                  stroke="url(#connectionGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                />
                
                {/* Moving dot along the path */}
                <circle r="4" fill="hsl(var(--mastero-blue-end))">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <path d="M 100 180 Q 200 150 300 180" />
                  </animateMotion>
                  <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Right figure - confident mentor */}
              <g transform="translate(280, 120)">
                {/* Body */}
                <ellipse cx="25" cy="80" rx="15" ry="25" fill="url(#figureGradient)" />
                
                {/* Head */}
                <circle cx="25" cy="40" r="20" fill="url(#figureGradient)" />
                
                {/* Confident posture - raised hand */}
                <ellipse cx="45" cy="65" rx="8" ry="15" fill="url(#figureGradient)" transform="rotate(30 45 65)" />
                
                {/* Success indicator - lightbulb */}
                <g transform="translate(15, 5)">
                  <circle cx="10" cy="15" r="8" fill="none" stroke="hsl(var(--mastero-blue-start))" strokeWidth="2" />
                  <path d="M 6 20 L 14 20" stroke="hsl(var(--mastero-blue-start))" strokeWidth="2" />
                  <path d="M 8 22 L 12 22" stroke="hsl(var(--mastero-blue-start))" strokeWidth="2" />
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </g>
                
                {/* Confident expression */}
                <g stroke="hsl(var(--background))" strokeWidth="2" opacity="0.8">
                  <path d="M 18 50 Q 25 55 32 50" fill="none" />
                </g>
              </g>
              
              {/* Floating success indicators */}
              <g opacity="0.6">
                <text x="320" y="120" fontSize="12" fill="hsl(var(--mastero-blue-start))" fontWeight="bold">✓</text>
                <text x="310" y="140" fontSize="10" fill="hsl(var(--mastero-blue-end))" fontWeight="bold">✓</text>
                <text x="330" y="160" fontSize="14" fill="hsl(var(--mastero-blue-start))" fontWeight="bold">✓</text>
                
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 5,-5; 0,0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock1;