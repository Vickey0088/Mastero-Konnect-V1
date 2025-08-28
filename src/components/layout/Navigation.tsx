'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Navigation = () => {
  const router = useRouter()
  useEffect(() => {
    // Inject Google Fonts: Poppins
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = '';
    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    link3.rel = 'stylesheet';
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
  }, []);

  const navLinks = ['Home', 'Mentors', 'Mentees', 'Features', 'Pricing', 'About'];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{
          height: '70px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between relative">
          {/* Left (Logo + Wordmark) */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/bbf08e79-67b3-4ee4-8031-75619a1e50c5.png"
                alt="Mastero Konnect Logo"
                className="w-10 h-10"
              />
              <div className="flex flex-col leading-none">
                <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333' }}>Mastero</span>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, var(--mk-blue-1), var(--mk-blue-2))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Konnect
                </span>
              </div>
            </div>
          </div>

          {/* Center (Navigation Links) - absolutely centered */}
          <div className="hidden md:flex items-center space-x-5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="mk-nav-link"
                style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: '#000',
                  textTransform: 'none',
                  paddingBottom: '2px',
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right (Buttons) - minimal gap */}
          <div className="flex items-center gap-2">
            <button
              className="mk-cta-btn"
              style={{
                width: '160px',
                height: '40px',
                background: 'linear-gradient(135deg, var(--mk-white-1), var(--mk-white-2))',
                color: 'var(--mk-blue-1)',
                fontWeight: 600,
                borderRadius: '8px',
                border: '1px solid var(--mk-blue-1)',
                transition: 'transform 200ms ease, filter 200ms ease, box-shadow 200ms ease',
                boxShadow: '0 8px 16px rgba(47, 107, 174, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.filter = 'brightness(0.98)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'none';
              }}
            >
              Become a Mentor
            </button>
            <button
              className="mk-cta-btn"
              onClick={() => router.push('/auth/sign-in')}
              style={{
                width: '120px',
                height: '40px',
                background: 'linear-gradient(135deg, var(--mk-blue-1), var(--mk-blue-2))',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '8px',
                border: 'none',
                transition: 'transform 200ms ease, filter 200ms ease, box-shadow 200ms ease',
                boxShadow: '0 8px 16px rgba(47, 107, 174, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.filter = 'brightness(0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'none';
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* CSS Variables and Component-Specific Styles */}
      <style>
        {`
          :root {
            --mk-blue-1: #2F6BAE;
            --mk-blue-2: #5A8DC8;
            --mk-text-dark: #000000;
            --mk-text-muted: #555555;
            --mk-white-1: #ffffff;
            --mk-white-2: #f4f7fb;
          }
          .mk-nav-link {
            position: relative;
            transition: color 200ms ease;
          }
          .mk-nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 2px;
            background: var(--mk-blue-1);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 200ms ease;
          }
          .mk-nav-link:hover {
            color: var(--mk-blue-1);
          }
          .mk-nav-link:hover::after {
            transform: scaleX(1);
          }
        `}
      </style>
    </>
  );
};

export default Navigation;