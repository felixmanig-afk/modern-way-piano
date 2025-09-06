import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Youtube, Instagram } from 'lucide-react';
import { getContact, getSite, getSocial } from '@/lib/content';
import PianoKeyDivider from '@/components/ui/PianoKeyDivider';

export default function Footer() {
  const contact = getContact();
  const site = getSite();
  const social = getSocial();

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <footer className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Image 
                src={site.logoSymbol} 
                alt={site.name}
                width={200}
                height={80}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Piano lessons designed to make learning quick and easy — in London or online. Structured, motivating, and tailored to you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-base text-foreground">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/pricing" className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Pricing
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                About
              </Link>
              <Link href="/testimonials" className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Testimonials
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-base text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors duration-200 text-sm">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors duration-200 text-sm">
                  {contact.phone}
                </a>
              </div>
              <div className="text-muted-foreground text-sm">
                {contact.available}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-semibold text-base text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              {social.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a
                href={`https://${site.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                {site.domain}
              </a>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}