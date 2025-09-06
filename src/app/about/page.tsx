import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAbout, getContact, getSEO } from '@/lib/content';
import { Award, Users, Music, GraduationCap, Youtube } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: `About - ${getSEO().defaultTitle}`,
  description: getSEO().defaultDescription,
};

export default function AboutPage() {
  const about = getAbout();
  const contact = getContact();

  const stats = [
    { icon: Users, label: "Students Taught", value: "100+" },
    { icon: Award, label: "Classical and Modern Trained", value: "" },
    { icon: Music, label: "Years of teaching", value: "10+" },
    { icon: GraduationCap, label: "All Ages Welcome", value: "" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6">
              About Chloe
            </h1>
            <p className="text-xl text-muted-foreground">
              Your Piano Instructor
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <Card className="bg-card border-border">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/about/teacher.png"
                      alt="Chloe - Piano Instructor"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h2 className="text-3xl font-montserrat font-bold text-foreground">
                  Meet Your Instructor
                </h2>
                {about.bio.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-card rounded-lg border border-border">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      {stat.value && (
                        <div className="text-2xl font-montserrat font-bold text-foreground">{stat.value}</div>
                      )}
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {about.youtube && (
                  <div className="pt-4">
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={about.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Youtube className="h-5 w-5" />
                        <span>Watch on YouTube</span>
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-6 text-center">
                Teaching Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Passion-Driven Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    I believe that learning piano should be enjoyable and inspiring, not intimidating.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Personalized Approach</h4>
                  <p className="text-sm text-muted-foreground">
                    Every student is unique, and I tailor my teaching methods to match your learning style.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
                  <p className="text-sm text-muted-foreground">
                    My students consistently achieve their goals and develop a lifelong love for music.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-foreground mb-4">
              Ready to Start Your Piano Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your first lesson with Chloe and experience the Modern Way Piano difference.
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