const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: '90vh',
        backgroundImage: 'linear-gradient(180deg, rgba(47,107,174,0.18), rgba(255,255,255,1), rgba(90,141,200,0.18))',
        paddingTop: '100px', // account for fixed navbar
      }}
    >
      {/* Bottom gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(47, 107, 174, 0.2) 100%)',
        }}
      />

      {/* Centered content container (relative for floating icons) */}
      <div className=" max-w-[1200px] mt-20 w-full px-10 mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <div className="text-center" style={{ maxWidth: '700px' }}>
          <h1
            style={{
              fontFamily:
                'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#000',
              lineHeight: 1.2,
            }}
          >
            Find Your <span style={{ color: 'var(--mk-blue-1)', fontWeight: 700 }}>Perfect Mentor</span>
          </h1>
          <h1
            style={{
              fontFamily:
                'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#000',
              lineHeight: 1.2,
            }}
          >
             With{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--mk-blue-1), var(--mk-blue-2))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
              }}
            >
              AI-Powered
            </span>
          </h1>
          <h1
            style={{
              fontFamily:
                'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#000',
              lineHeight: 1.2,
            }}
          >
               Matching
            </h1>
            
        {/* Subheading */}
        <p
          className="mx-auto"
          style={{
            marginTop: '1.25rem',
            fontSize: '1rem',
            fontWeight: 400,
            color: '#555555',
            lineHeight: 1.6,
            maxWidth: '600px',
          }}
        >
              Connect with top industry experts, gain guidance, and unlock your true potential.
            </p>
          </div>
          
          {/* CTA Buttons */}
        <div
          className="flex items-center justify-center"
          style={{ gap: '1rem', marginTop: '2rem' }}
        >
          <button
            style={{
              background: '#000',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.875rem',
              padding: '0.6rem 1.5rem',
              borderRadius: '100px',
              border: 'none',
              transition: 'transform 200ms ease, box-shadow 200ms ease',
              boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Watch Demos
            </button>
          <span
            style={{
              background: '#f1f1f1',
              color: '#555',
              fontSize: '0.75rem',
              padding: '0.2rem 0.6rem',
              borderRadius: '100px',
            }}
          >
            3 mins
          </span>
          </div>
          
        {/* Floating Icon Cards */}
        <div className="absolute inset-0" aria-hidden>
          {/* Card 1 - Top Left */}
          <div className="mk-float-card" style={{ top: '13%', left: '25%' }}>📈</div>
          {/* Card 2 - Top Right */}
          <div className="mk-float-card" style={{ top: '15%', right: '20%' }}>🛍️</div>
          {/* Card 3 - Middle Left */}
          <div className="mk-float-card" style={{ top: '40%', left: '16%' }}>▶️</div>
          {/* Card 4 - Middle Right */}
          <div className="mk-float-card" style={{ top: '45%', right: '14%' }}>🧩</div>
          {/* Card 5 - Bottom Left */}
          <div className="mk-float-card" style={{ bottom: '28%', left: '26%' }}>📊</div>
          {/* Card 6 - Bottom Right */}
          <div className="mk-float-card" style={{ bottom: '30%', right: '24%' }}>🧾</div>
        </div>
        
        {/* Browser Mockup at bottom */}
        {/* <div
          className="w-full"
          style={{ width: '100%', marginTop: '3rem' }}
        >
          <div
            className="mx-auto"
            style={{
              width: '80%',
              maxWidth: '800px',
              background: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              overflow: 'hidden',
            }}
          > */}
            {/* Top bar */}
            {/* <div
              className="flex items-center"
              style={{
                height: '40px',
                padding: '0 12px',
                background: '#f7f7f8',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <div className="flex items-center gap-2">
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>
              <div className="flex-1" />
              <div
                style={{
                  width: '60%',
                  height: '24px',
                  background: '#ffffff',
                  borderRadius: '6px',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              />
            </div> */}
            {/* Content placeholder */}
            <div
              style={{
                height: '340px',
                background:
                  'linear-gradient(135deg, rgba(47, 107, 174, 0.08), rgba(90, 141, 200, 0.15))',
                filter: 'saturate(0.9) blur(0px)',
              }}
            />
          </div>
        {/* </div>
        </div> */}

      {/* Component styles for floating cards */}
      <style>
        {`
          :root {
            --mk-blue-1: #2F6BAE;
            --mk-blue-2: #5A8DC8;
          }
          .mk-float-card {
            position: absolute;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border-radius: 12px;
            border: 1.5px solid var(--mk-blue-1);
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            animation: mk-float 4s ease-in-out infinite;
            font-size: 22px;
          }
          .mk-float-card:nth-child(1) { animation-delay: 0s; }
          .mk-float-card:nth-child(2) { animation-delay: 0.2s; }
          .mk-float-card:nth-child(3) { animation-delay: 0.4s; }
          .mk-float-card:nth-child(4) { animation-delay: 0.6s; }
          .mk-float-card:nth-child(5) { animation-delay: 0.8s; }
          .mk-float-card:nth-child(6) { animation-delay: 1s; }

          @keyframes mk-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @media (min-width: 1024px) {
            .mk-float-card { font-size: 20px; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;