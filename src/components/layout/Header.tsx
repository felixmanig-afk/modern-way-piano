'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getSite, getSocial, getContact } from '@/lib/content';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const site = getSite();
  const social = getSocial();
  const contact = getContact();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src={site.logoSymbol} 
              alt={site.name}
              width={200}
              height={80}
              className="h-14 w-auto group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA and Social */}
          <div className="hidden md:flex items-center space-x-4">
            {social.youtube && (
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            )}
            <Button asChild className="bg-gradient-to-br from-[#ff8a3d] to-[#f6c37b] text-black font-semibold rounded-xl px-4 py-2 shadow-[0_0_30px_-12px_rgba(255,138,61,.9)] hover:translate-y-[-1px] transition">
              <Link href={contact.bookUrl} target="_blank" rel="noopener noreferrer">
                {contact.bookCta}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {social.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Youtube className="h-4 w-4 mr-2" />
                  YouTube
                </a>
              )}
              <div className="pt-4">
                <Button asChild className="w-full bg-gradient-to-br from-[#ff8a3d] to-[#f6c37b] text-black font-semibold rounded-xl px-4 py-2 shadow-[0_0_30px_-12px_rgba(255,138,61,.9)] hover:translate-y-[-1px] transition">
                  <Link href={contact.bookUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    {contact.bookCta}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}