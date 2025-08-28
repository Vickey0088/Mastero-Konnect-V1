const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "AI-Based Matching",
      description: "Our intelligent algorithm analyzes your goals, skills, and preferences to connect you with the perfect mentor.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-all duration-300">
          <path 
            d="M24 2L29.09 16.26L44 12L32.74 24L44 36L29.09 31.74L24 46L18.91 31.74L4 36L15.26 24L4 12L18.91 16.26L24 2Z" 
            fill="url(#sparkGradient)"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--mastero-blue-start))" />
              <stop offset="100%" stopColor="hsl(var(--mastero-blue-end))" />
            </linearGradient>
          </defs>
        </svg>
      ),
      hoverClass: "hover:shadow-[0_0_20px_rgba(0,123,255,0.2)]"
    },
    {
      id: 2,
      title: "1:1 Mentorship",
      description: "Get personalized guidance through direct conversations with industry experts who understand your journey.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-all duration-300 group-hover:animate-bounce">
          <path 
            d="M40 8H8C5.79086 8 4 9.79086 4 12V28C4 30.2091 5.79086 32 8 32H12V38C12 38.5523 12.4477 39 13 39C13.3466 39 13.6684 38.8205 13.8507 38.5257L20.3507 28.5257C20.4818 28.3119 20.4818 28.0476 20.3507 27.8338L13.8507 17.8338C13.6684 17.539 13.3466 17.3595 13 17.3595C12.4477 17.3595 12 17.8072 12 18.3595V24H8V12H40V28H24"
            stroke="url(#chatGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--mastero-blue-start))" />
              <stop offset="100%" stopColor="hsl(var(--mastero-blue-end))" />
            </linearGradient>
          </defs>
        </svg>
      ),
      hoverClass: "hover:transform hover:-translate-y-1"
    },
    {
      id: 3,
      title: "Portfolio & Feedback",
      description: "Build an impressive portfolio with constructive feedback and showcase your growth to potential employers.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-all duration-300">
          <circle cx="24" cy="16" r="8" stroke="url(#profileGradient)" strokeWidth="3" fill="none"/>
          <path 
            d="M8 42C8 34.2680 14.2680 28 22 28H26C33.7320 28 40 34.2680 40 42"
            stroke="url(#profileGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path 
            d="M36 8L38.5 13L44 13.5L39.5 18L40.5 23.5L36 21L31.5 23.5L32.5 18L28 13.5L33.5 13L36 8Z"
            fill="url(#starGradient)"
          />
          <defs>
            <linearGradient id="profileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--mastero-blue-start))" />
              <stop offset="100%" stopColor="hsl(var(--mastero-blue-end))" />
            </linearGradient>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--mastero-blue-start))" />
              <stop offset="100%" stopColor="hsl(var(--mastero-blue-end))" />
            </linearGradient>
          </defs>
        </svg>
      ),
      hoverClass: "hover:transform hover:perspective-1000 hover:rotate-x-5"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mastero-text-dark mb-4">
            Why Choose Mastero{' '}
            <span className="gradient-text">Konnect</span>?
          </h2>
          <p className="text-xl text-mastero-text-body max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technology with human expertise to deliver 
            unparalleled mentorship experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`group bg-white p-8 rounded-2xl border border-gray-100 shadow-md transition-all duration-300 text-center ${service.hoverClass}`}
              style={{ 
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
              }}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-mastero-text-dark mb-4">
                {service.title}
              </h3>
              
              <p className="text-mastero-text-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;