import { Metadata } from 'next';
import { getTestimonials, getSEO } from '@/lib/content';
import TestimonialCard from '@/components/testimonials/TestimonialCard';

export const metadata: Metadata = {
  title: `Testimonials - ${getSEO().defaultTitle}`,
  description: getSEO().defaultDescription,
};

export default function TestimonialsPage() {
  const testimonials = getTestimonials();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6">
              Student Testimonials
            </h1>
            <p className="text-xl text-muted-foreground">
              Hear what my students have to say about their learning experience with Modern Way Piano.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}