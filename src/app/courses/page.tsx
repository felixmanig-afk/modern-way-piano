import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getCourses, getContact, getSEO } from '@/lib/content';
import { Check } from 'lucide-react';
import Image from 'next/image';
import BrandPattern from '@/components/ui/BrandPattern';
import { getCourseImage } from '@/lib/media';

export const metadata: Metadata = {
  title: `Courses - ${getSEO().defaultTitle}`,
  description: getSEO().defaultDescription,
};

export default function CoursesPage() {
  const courses = getCourses();
  const contact = getContact();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6">
              Piano Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the perfect course for your skill level and start your piano journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="relative overflow-hidden">
        <BrandPattern />
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.slug} className="group">
                <div className="card h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={getCourseImage(course.slug)}
                      alt={`${course.title} piano course`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {course.title}
                    </h3>
                    <p className="text-zinc-300 mb-4">
                      {course.summary}
                    </p>
                    <ul className="space-y-2">
                      {course.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-[#ff8a3d] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-400">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-foreground mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your first lesson with Chloe and begin your piano journey today.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={contact.bookUrl} target="_blank" rel="noopener noreferrer">
                {contact.bookCta}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}