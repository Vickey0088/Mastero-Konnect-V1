'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Software Engineer at Google",
      image: "/api/placeholder/60/60",
      rating: 5,
      quote: "Mastero Konnect transformed my career path completely.",
      backText: "Landed a job at Google!",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager at Meta",
      image: "/api/placeholder/60/60",
      rating: 5,
      quote: "The AI matching system is incredibly accurate and helpful.",
      backText: "Promoted to Senior PM!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "UX Designer at Airbnb",
      image: "/api/placeholder/60/60",
      rating: 5,
      quote: "Found the perfect mentor who guided me through my transition.",
      backText: "Started my own design agency!",
    },
    {
      id: 4,
      name: "David Kim",
      title: "Data Scientist at Netflix",
      image: "/api/placeholder/60/60",
      rating: 5,
      quote: "The personalized feedback helped me improve so much faster.",
      backText: "Became a team lead in 6 months!",
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Marketing Director at Spotify",
      image: "/api/placeholder/60/60",
      rating: 5,
      quote: "Best platform for connecting with industry experts.",
      backText: "Doubled my salary in one year!",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mastero-text-dark mb-4">
            Hear From Our Community
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-mastero-bg-subtle"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-mastero-bg-subtle"
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - 3}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Testimonials Container */}
          <div className="flex gap-6 justify-center px-16">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-80 h-96 perspective-1000 cursor-pointer"
                onMouseEnter={() => toggleFlip(testimonial.id)}
                onMouseLeave={() => toggleFlip(testimonial.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCards.has(testimonial.id) ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl border border-gray-200 shadow-lg p-8 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-mastero-blue to-mastero-blue-end"></div>
                    </div>
                    <h4 className="text-xl font-semibold text-mastero-text-dark mb-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-mastero-text-medium mb-4">
                      {testimonial.title}
                    </p>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-mastero-text-body text-center leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-mastero-blue to-mastero-blue-end rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-white">
                    <h4 className="text-xl font-semibold mb-4">What changed after mentorship?</h4>
                    <div className="text-3xl font-bold text-center">
                      {testimonial.backText}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;