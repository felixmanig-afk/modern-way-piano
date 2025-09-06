import { getSite, getContact, getCourses, getAbout, getSEO, getSocial, getPricing } from './content';

export function generateOrganizationSchema() {
  const site = getSite();
  const contact = getContact();
  const seo = getSEO();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.name,
    "description": seo.defaultDescription,
    "url": `https://${site.domain}`,
    "logo": `https://${site.domain}${site.logoSymbol}`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contact.phone,
      "contactType": "customer service",
      "email": contact.email,
      "areaServed": seo.locality,
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": seo.locality,
      "addressCountry": "GB"
    },
    "sameAs": [
      ...(getSocial().youtube ? [getSocial().youtube] : []),
      ...(getSocial().instagram ? [getSocial().instagram] : [])
    ]
  };
}

export function generateLocalBusinessSchema() {
  const site = getSite();
  const contact = getContact();
  const seo = getSEO();

  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": site.name,
    "description": seo.defaultDescription,
    "url": `https://${site.domain}`,
    "logo": `https://${site.domain}${site.logoSymbol}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": seo.locality,
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contact.phone,
      "contactType": "customer service",
      "email": contact.email
    },
    "openingHours": [
      "Mo-Fr 09:00-20:00",
      "Sa 10:00-18:00"
    ],
    "priceRange": "££",
    "serviceArea": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  };
}

export function generateCourseSchemas() {
  const courses = getCourses();
  const site = getSite();

  return courses.map(course => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${course.title} Piano Course`,
    "description": course.summary,
    "provider": {
      "@type": "Organization",
      "name": site.name,
      "url": `https://${site.domain}`
    },
    "courseMode": "online",
    "educationalLevel": course.slug,
    "inLanguage": "en-GB"
  }));
}

export function generateBreadcrumbSchema(path: string) {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `https://${getSite().domain}`
    }
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1),
      "item": `https://${getSite().domain}${currentPath}`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  };
}

export function generatePersonSchema() {
  const about = getAbout();
  const site = getSite();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chloe",
    "jobTitle": "Piano Instructor",
    "description": about.bio.join(' '),
    "worksFor": {
      "@type": "Organization",
      "name": site.name,
      "url": `https://${site.domain}`
    },
    "knowsAbout": [
      "Piano Instruction",
      "Music Education",
      "Classical Music",
      "Jazz Piano",
      "Music Theory"
    ],
    "sameAs": about.youtube ? [about.youtube] : []
  };
}

export function generatePricingSchema() {
  const pricing = getPricing();
  const site = getSite();

  return Object.values(pricing).map(plan => ({
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": plan.title,
    "description": plan.note || plan.title,
    "price": plan.price,
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": site.name,
      "url": `https://${site.domain}`
    }
  }));
}