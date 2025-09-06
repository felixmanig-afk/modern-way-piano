export interface Site {
  name: string;
  domain: string;
  logoFont: string;
  logoSymbol: string;
}

export interface Hero {
  headline: string;
  buttonText: string;
  buttonUrl: string;
  videoSrc: string;
  poster: string;
}

export interface Intro {
  lead: string;
}

export interface Lessons {
  why: string;
  inPerson: string;
  online: string;
}

export interface Benefits {
  simple: string[];
  foundations: string[];
  journey: string[];
}

export interface Course {
  slug: string;
  title: string;
  summary: string;
  details: string[];
}

export interface PricingPlan {
  title: string;
  price: string;
  details?: string[];
  note?: string;
}

export interface Pricing {
  monthly50: PricingPlan;
  monthly30: PricingPlan;
  annual50: PricingPlan;
  annual30: PricingPlan;
  payg: PricingPlan;
}

export interface About {
  bio: string[];
  stats: {
    students: string;
    training: string;
  };
  youtube: string;
}

export interface Testimonial {
  name: string;
  quote: string;
}

export interface Contact {
  email: string;
  phone: string;
  available: string;
  bookCta: string;
  bookUrl: string;
}

export interface Social {
  youtube: string;
  instagram: string;
}

export interface SEO {
  defaultTitle: string;
  defaultDescription: string;
  locality: string;
}

export interface Content {
  site: Site;
  hero: Hero;
  intro: Intro;
  lessons: Lessons;
  benefits: Benefits;
  courses: Course[];
  pricing: Pricing;
  about: About;
  testimonials: Testimonial[];
  contact: Contact;
  social: Social;
  seo: SEO;
}