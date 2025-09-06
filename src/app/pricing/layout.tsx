import { Metadata } from 'next';
import { getSEO } from '@/lib/content';

const seo = getSEO();

export const metadata: Metadata = {
  title: `Pricing - ${seo.defaultTitle}`,
  description: seo.defaultDescription,
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
