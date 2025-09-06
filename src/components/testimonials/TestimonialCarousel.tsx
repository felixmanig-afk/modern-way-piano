'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { getTestimonials } from '@/lib/content';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import BrandPattern from '@/components/ui/BrandPattern';
import PianoKeyDivider from '@/components/ui/PianoKeyDivider';

export default function TestimonialCarousel() {
  const testimonials = getTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextTestimonial, prevTestimonial]);

  if (testimonials.length === 0) return null;

  return (
    <section className="relative overflow-hidden staff-lines">
      <BrandPattern />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="text-center mb-4">
            <h2 className="text-grad">
              What My Students Say
            </h2>
          </div>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what my students have to say about their learning experience.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative px-12">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/10 hover:border-white/30 transition-all duration-200 shadow-lg"
              aria-label="Previous testimonial"
              variant="ghost"
              size="icon"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
            <Button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/10 hover:border-white/30 transition-all duration-200 shadow-lg"
              aria-label="Next testimonial"
              variant="ghost"
              size="icon"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/testimonials"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            Read All Testimonials →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
