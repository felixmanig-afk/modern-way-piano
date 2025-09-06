import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getContact, getSEO } from '@/lib/content';
import { Mail, Phone, MapPin } from 'lucide-react';
import BrandPattern from '@/components/ui/BrandPattern';
import BrandImage from '@/components/ui/BrandImage';
import { media } from '@/lib/media';

export const metadata: Metadata = {
  title: `Contact - ${getSEO().defaultTitle}`,
  description: getSEO().defaultDescription,
};

export default function ContactPage() {
  const contact = getContact();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <BrandPattern />
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="text-center py-16 md:py-24">
            <h1 className="text-grad mb-6">
              Contact
            </h1>
            <p className="text-zinc-300 max-w-3xl mx-auto">
              Have a question or ready to begin your piano journey? I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          aria-label={`Send email to ${contact.email}`}
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone/WhatsApp</h3>
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          aria-label={`Call ${contact.phone}`}
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Available</h3>
                        <p className="text-muted-foreground">{contact.available}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Studio Image */}
              <div>
                <BrandImage
                  src={media.contact.studio}
                  alt="Piano studio with upright piano and soft lighting"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Calendly Embed */}
            <div className="mt-12">
              <div className="card">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {contact.bookCta}
                  </h3>
                  <p className="text-zinc-300 mb-6">
                    Schedule your first lesson or consultation with Chloe. Choose a time that works best for you.
                  </p>
                  <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="h-8 w-8 text-brand" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Calendly Integration</h4>
                      <p className="text-sm text-zinc-400 mb-4">
                        Click below to open the booking calendar
                      </p>
                      <Button asChild className="bg-gradient-to-br from-[#ff8a3d] to-[#f6c37b] text-black font-semibold rounded-xl px-4 py-2 shadow-[0_0_30px_-12px_rgba(255,138,61,.9)] hover:translate-y-[-1px] transition">
                        <a
                          href={contact.bookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open booking calendar"
                        >
                          Open Booking Calendar
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}