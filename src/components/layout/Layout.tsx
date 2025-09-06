import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import StructuredData from '@/components/seo/StructuredData';

interface LayoutProps {
  children: ReactNode;
  structuredDataType?: 'homepage' | 'courses' | 'about' | 'testimonials' | 'contact' | 'pricing';
  path?: string;
}

export default function Layout({ children, structuredDataType = 'homepage', path = '/' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StructuredData type={structuredDataType} path={path} />
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}