import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Mentors', 'Mentees', 'Features', 'Pricing', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
      isScrolled ? 'h-16 shadow-lg' : 'h-20'
    }`} style={{ boxShadow: 'var(--shadow-navbar)' }}>
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/bbf08e79-67b3-4ee4-8031-75619a1e50c5.png" 
              alt="Mastero Konnect Logo" 
              className={`transition-all duration-300 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}
            />
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className={`font-bold text-mastero-dark transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}>
                  Mastero
                </span>
                <span className={`font-bold gradient-text transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}>
                  Konnect
                </span>
              </div>
              <p className={`text-mastero-text-light transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-xs'
              }`}>
                Transform Your Journey. Connect with a Mastero.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`nav-link ${activeLink === link ? 'active' : ''}`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <button className="btn-outline px-6 py-2.5 text-sm">
            Become a Mentor
          </button>
          <button className="btn-primary px-5 py-2.5 text-sm">
            Sign Up Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;