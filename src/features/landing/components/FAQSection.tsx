'use client'

import { useState } from 'react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does AI mentor matching work?",
      answer: "Our AI algorithm analyzes your career goals, skills, experience level, industry preferences, and learning style to create a comprehensive profile. It then matches you with mentors who have relevant expertise, compatible communication styles, and proven track records in areas where you want to grow. The system continuously learns from successful mentorship pairs to improve matching accuracy."
    },
    {
      question: "Is mentorship free for students?",
      answer: "Students get access to our Starter plan for free, which includes basic mentor browsing, AI matching, and one mentor connection per month. We also offer student discounts on our Pro plan - up to 50% off with valid student ID verification. We believe in making quality mentorship accessible to the next generation of professionals."
    },
    {
      question: "Can I become both mentor & mentee?",
      answer: "Absolutely! Many of our users wear both hats. You might be seeking guidance in one area while sharing your expertise in another. Our platform allows you to maintain separate profiles for mentoring and being mentored, and you can switch between roles seamlessly within your dashboard."
    },
    {
      question: "What happens if I'm not satisfied with my mentor match?",
      answer: "We want you to have the best possible mentorship experience. If you're not satisfied with a match, you can request a new mentor at any time. Pro and Enterprise users get priority re-matching, and we'll work with you to understand what didn't work so we can find a better fit."
    },
    {
      question: "How do session scheduling and payments work?",
      answer: "Once matched with a mentor, you can view their availability calendar and book sessions directly through our platform. Pro plan includes scheduled 1:1 video sessions, while Starter plan users can connect via messaging. All payments are processed securely, and mentors set their own session rates for premium consultations."
    },
    {
      question: "What qualifications do mentors have?",
      answer: "All mentors go through a rigorous vetting process. We verify their professional background, industry experience, and previous mentoring success. Most of our mentors are senior professionals, executives, or successful entrepreneurs with 10+ years of experience in their fields. We also collect feedback from mentees to maintain quality standards."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mastero-text-dark mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-mastero-text-body max-w-2xl mx-auto">
            Get answers to common questions about our mentorship platform and how it works.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-mastero-blue/20 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-mastero-text-dark pr-8">
                  {faq.question}
                </h3>
                
                <div
                  className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    openQuestion === index ? 'transform rotate-90' : ''
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-mastero-blue"
                  >
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-mastero-text-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <p className="text-mastero-text-body mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="btn-outline px-6 py-3">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;