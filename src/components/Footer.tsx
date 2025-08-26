import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const partnerLogos = [
    { name: "TechCorp", width: "w-24" },
    { name: "InnovateHub", width: "w-28" },
    { name: "FutureLearn", width: "w-26" },
    { name: "SkillForge", width: "w-24" },
    { name: "CareerPath", width: "w-30" },
    { name: "MentorPro", width: "w-26" },
  ];

  return (
    <footer className="bg-white">
      {/* Partners Section */}
      <div className="border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-mastero-text-dark text-center mb-8">
            Partnered With
          </h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className={`${partner.width} h-12 bg-gray-100 rounded-lg flex items-center justify-center`}
              >
                <span className="text-gray-400 font-medium text-sm">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-blue-50/30 to-transparent py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo and Tagline */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-mastero-blue to-mastero-blue-end rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    <span className="text-mastero-dark">Mastero</span>
                    <span className="gradient-text"> Konnect</span>
                  </h3>
                </div>
              </div>
              <p className="text-mastero-text-light text-sm leading-relaxed">
                Transform Your Journey. Connect with a Mastero.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-semibold text-mastero-text-dark mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Mentors', 'Mentees', 'Features', 'Pricing', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-mastero-text-medium hover:text-mastero-blue transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: About Us */}
            <div>
              <h4 className="font-semibold text-mastero-text-dark mb-4">About Us</h4>
              <ul className="space-y-3">
                {['Our Story', 'Blog', 'Careers', 'Press Kit', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-mastero-text-medium hover:text-mastero-blue transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="font-semibold text-mastero-text-dark mb-4">Contact Info</h4>
              <div className="space-y-3 text-mastero-text-medium">
                <p>
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </p>
                <p>
                  <a href="mailto:hello@masterokonnect.com" className="hover:text-mastero-blue transition-colors">
                    hello@masterokonnect.com
                  </a>
                </p>
                <p>
                  <a href="tel:+1-555-123-4567" className="hover:text-mastero-blue transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-mastero-text-medium text-sm">
            © {currentYear} Mastero Konnect. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {[
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" }
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-mastero-text-medium hover:text-mastero-blue hover:bg-mastero-bg-subtle hover:shadow-lg transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;