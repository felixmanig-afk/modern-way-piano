import Script from 'next/script';
import { generateOrganizationSchema, generateLocalBusinessSchema, generateCourseSchemas, generateBreadcrumbSchema, generatePersonSchema, generatePricingSchema } from '@/lib/structured-data';

interface StructuredDataProps {
  type: 'homepage' | 'courses' | 'about' | 'testimonials' | 'contact' | 'pricing';
  path?: string;
}

export default function StructuredData({ type, path = '/' }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData: Record<string, unknown>[] = [
      generateOrganizationSchema(),
      generateLocalBusinessSchema(),
    ];

    if (type === 'courses' || type === 'homepage') {
      baseData.push(...generateCourseSchemas());
    }

    if (type === 'about') {
      baseData.push(generatePersonSchema());
    }

    if (type === 'pricing') {
      baseData.push(...generatePricingSchema());
    }

    baseData.push(generateBreadcrumbSchema(path));

    return baseData;
  };

  const structuredData = getStructuredData();

  return (
    <>
      {structuredData.map((data, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}
    </>
  );
}