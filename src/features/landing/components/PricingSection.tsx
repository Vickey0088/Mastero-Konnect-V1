import { useState } from 'react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for exploring mentorship",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Browse mentor profiles",
        "Basic AI matching",
        "1 mentor connection per month",
        "Community forum access",
        "Basic profile setup"
      ],
      buttonText: "Start Free",
      buttonStyle: "btn-outline",
      popular: false
    },
    {
      name: "Pro",
      description: "Ideal for serious career growth",
      price: { monthly: 19, yearly: 152 }, // 20% off yearly: 19*12*0.8 = 182.4, rounded to 152
      features: [
        "Everything in Starter",
        "Advanced AI matching algorithm",
        "Unlimited mentor connections",
        "1:1 video sessions",
        "Portfolio feedback",
        "Priority mentor response",
        "Career roadmap planning"
      ],
      buttonText: "Upgrade Now",
      buttonStyle: "btn-primary",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For teams and organizations",
      price: { monthly: 49, yearly: 470 }, // 20% off yearly: 49*12*0.8 = 470.4, rounded to 470
      features: [
        "Everything in Pro",
        "Team management dashboard",
        "Bulk mentor assignments",
        "Custom matching criteria",
        "Analytics and reporting",
        "Dedicated account manager",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "btn-outline",
      popular: false
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) return "$0";
    
    const price = isYearly ? plan.price.yearly : plan.price.monthly;
    const period = isYearly ? "/year" : "/mo";
    
    if (isYearly && plan.price.monthly > 0) {
      const monthlyEquivalent = Math.round(price / 12);
      return `$${monthlyEquivalent}${period}`;
    }
    
    return `$${price}${period}`;
  };

  return (
    <section className="py-20 bg-mastero-bg-subtle/20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mastero-text-dark mb-4">
            Simple & Transparent Pricing for{' '}
            <span className="gradient-text">Every Journey</span>
          </h2>
          <p className="text-xl text-mastero-text-body max-w-2xl mx-auto mb-8">
            Choose the plan that fits your career ambitions. Upgrade or downgrade at any time.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${!isYearly ? 'text-mastero-text-dark font-semibold' : 'text-mastero-text-body'}`}>
              Monthly
            </span>
            
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                isYearly ? 'bg-gradient-to-r from-mastero-blue to-mastero-blue-end' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  isYearly ? 'transform translate-x-8' : 'transform translate-x-1'
                }`}
              />
            </button>
            
            <div className="flex items-center space-x-2">
              <span className={`text-lg ${isYearly ? 'text-mastero-text-dark font-semibold' : 'text-mastero-text-body'}`}>
                Yearly
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                plan.popular 
                  ? 'border-mastero-blue bg-gradient-to-br from-white to-mastero-bg-subtle/30' 
                  : 'border-gray-100 hover:border-mastero-blue/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-mastero-text-dark mb-2">{plan.name}</h3>
                  <p className="text-mastero-text-body mb-4">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-mastero-text-dark">
                      {getPrice(plan)}
                    </div>
                    {isYearly && plan.price.monthly > 0 && (
                      <div className="text-sm text-mastero-text-light">
                        Billed annually (${plan.price.yearly}/year)
                      </div>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-mastero-blue to-mastero-blue-end flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-mastero-text-body">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 text-lg font-semibold rounded-lg transition-all duration-300 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 text-mastero-text-body">
          <p>All plans include 14-day free trial. No credit card required to start.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;