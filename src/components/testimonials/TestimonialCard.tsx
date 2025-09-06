import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/types/content';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card h-full group hover:-translate-y-1 transition-all duration-200">
      <div className="p-6">
        <div className="flex justify-center mb-6" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className="h-5 w-5 fill-[#ff8a3d] text-[#ff8a3d] mx-0.5"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="sr-only">5 out of 5 stars</span>
        
        <blockquote className="text-zinc-300 italic mb-4 text-center text-lg">
          <span className="text-4xl text-brand opacity-50">&ldquo;</span>
          {testimonial.quote}
          <span className="text-4xl text-brand opacity-50">&rdquo;</span>
        </blockquote>
        
        <cite className="text-foreground font-medium text-right block">
          — {testimonial.name}
        </cite>
      </div>
    </div>
  );
}
