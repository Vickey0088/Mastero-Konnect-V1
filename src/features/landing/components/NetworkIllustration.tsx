const NetworkIllustration = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        width="500" 
        height="400" 
        viewBox="0 0 500 400" 
        className="max-w-full h-auto"
      >
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--mastero-bg-subtle))" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
          
          {/* Gradients */}
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--mastero-blue-start))" />
            <stop offset="100%" stopColor="hsl(var(--mastero-blue-end))" />
          </linearGradient>
          
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--mastero-blue-start))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--mastero-blue-end))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--mastero-blue-start))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="500" height="400" fill="url(#grid)" opacity="0.5" />
        
        {/* Connection Lines */}
        <g stroke="url(#lineGradient)" strokeWidth="2" fill="none">
          {/* Main network connections */}
          <path d="M 150 200 Q 250 150 350 200" />
          <path d="M 150 200 Q 200 100 300 120" />
          <path d="M 350 200 Q 400 250 450 280" />
          <path d="M 300 120 Q 350 150 350 200" />
          <path d="M 100 150 Q 125 175 150 200" />
          <path d="M 350 200 Q 375 240 400 300" />
          <path d="M 200 300 Q 275 250 350 200" />
          <path d="M 80 280 Q 115 240 150 200" />
        </g>
        
        {/* Network Nodes - Mentees (smaller) */}
        <g>
          <circle cx="100" cy="150" r="6" fill="hsl(var(--mastero-blue-start))" opacity="0.7">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="280" r="5" fill="hsl(var(--mastero-blue-start))" opacity="0.6" />
          <circle cx="200" cy="300" r="6" fill="hsl(var(--mastero-blue-start))" opacity="0.7">
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="300" r="5" fill="hsl(var(--mastero-blue-start))" opacity="0.6" />
          <circle cx="450" cy="280" r="6" fill="hsl(var(--mastero-blue-start))" opacity="0.7" />
        </g>
        
        {/* Network Nodes - Mentors (larger, more prominent) */}
        <g>
          <circle cx="150" cy="200" r="12" fill="url(#nodeGradient)" className="pulse-dot">
            <animate attributeName="r" values="12;15;12" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="200" r="14" fill="url(#nodeGradient)" className="pulse-dot">
            <animate attributeName="r" values="14;17;14" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="120" r="10" fill="url(#nodeGradient)">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Moving Data Points */}
        <g>
          {/* Moving along main connection */}
          <circle r="3" fill="hsl(var(--mastero-blue-end))" opacity="0.8">
            <animateMotion dur="4s" repeatCount="indefinite">
              <path d="M 150 200 Q 250 150 350 200" />
            </animateMotion>
          </circle>
          
          {/* Moving along secondary connection */}
          <circle r="2" fill="hsl(var(--mastero-blue-start))" opacity="0.6">
            <animateMotion dur="5s" repeatCount="indefinite">
              <path d="M 300 120 Q 350 150 350 200 Q 375 240 400 300" />
            </animateMotion>
          </circle>
          
          {/* Third moving point */}
          <circle r="2.5" fill="hsl(var(--mastero-blue-end))" opacity="0.7">
            <animateMotion dur="6s" repeatCount="indefinite">
              <path d="M 100 150 Q 125 175 150 200 Q 200 100 300 120" />
            </animateMotion>
          </circle>
        </g>
        
        {/* Central AI Node */}
        <g>
          <circle cx="250" cy="200" r="20" fill="url(#nodeGradient)" stroke="white" strokeWidth="3">
            <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* AI Symbol */}
          <text 
            x="250" 
            y="206" 
            textAnchor="middle" 
            fill="white" 
            fontSize="14" 
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
          >
            AI
          </text>
        </g>
        
        {/* Floating Elements */}
        <g opacity="0.4">
          <circle cx="70" cy="100" r="2" fill="hsl(var(--mastero-blue-start))">
            <animate attributeName="cy" values="100;90;100" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="430" cy="80" r="1.5" fill="hsl(var(--mastero-blue-end))">
            <animate attributeName="cy" values="80;70;80" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="350" r="2.5" fill="hsl(var(--mastero-blue-start))">
            <animate attributeName="cy" values="350;340;350" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default NetworkIllustration;