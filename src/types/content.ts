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

export interface MethodStep {
  title: string;
  description: string;
}

export interface Method {
  title: string;
  steps: MethodStep[];
}

export interface Lessons {
  why: string;
  method: Method;
  inPerson: string;
  online: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  items: string[];
  result: string;
}

export interface Benefits {
  title: string;
  clarity: BenefitItem;
  fundamentals: BenefitItem;
  momentum: BenefitItem;
}

export interface Course {
  slug: string;
  title: string;
  summary: string;
  details: string[];
}

export interface PricingMeta {
  currency: string;
  perLessonAssumption: number;
}

export interface PricingPlans {
  monthly: {
    "50": number;
    "30": number;
  };
  annual: {
    "50": number;
    "30": number;
  };
  payg: {
    "50": number;
  };
}

export interface PricingLabels {
  monthly50: string;
  monthly30: string;
  annual50: string;
  annual30: string;
  payg50: string;
}

export interface Pricing {
  meta: PricingMeta;
  plans: PricingPlans;
  labels: PricingLabels;
  included: string[];
  policies: string[];
  calendlyUrl: string;
}

export interface About {
  bio: string[];
  stats: {
    students: string;
    training: string;
    experience: string;
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
  whatsapp: string;
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