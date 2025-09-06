import { Content } from '@/types/content';
import contentData from '../../content/content.json';

export const content: Content = contentData as Content;

export const getContent = (): Content => content;

// Individual getters with console warnings for missing fields
export const getSite = (): Content['site'] => {
  if (!content.site) {
    console.warn('Missing content key: site');
    return {} as Content['site'];
  }
  return content.site;
};

export const getHero = (): Content['hero'] => {
  if (!content.hero) {
    console.warn('Missing content key: hero');
    return {} as Content['hero'];
  }
  return content.hero;
};

export const getIntro = (): Content['intro'] => {
  if (!content.intro) {
    console.warn('Missing content key: intro');
    return {} as Content['intro'];
  }
  return content.intro;
};

export const getLessons = (): Content['lessons'] => {
  if (!content.lessons) {
    console.warn('Missing content key: lessons');
    return {} as Content['lessons'];
  }
  return content.lessons;
};

export const getBenefits = (): Content['benefits'] => {
  if (!content.benefits) {
    console.warn('Missing content key: benefits');
    return {} as Content['benefits'];
  }
  return content.benefits;
};

export const getCourses = (): Content['courses'] => {
  if (!content.courses) {
    console.warn('Missing content key: courses');
    return [];
  }
  return content.courses;
};

export const getPricing = (): Content['pricing'] => {
  if (!content.pricing) {
    console.warn('Missing content key: pricing');
    return {} as Content['pricing'];
  }
  return content.pricing;
};

export const getAbout = (): Content['about'] => {
  if (!content.about) {
    console.warn('Missing content key: about');
    return {} as Content['about'];
  }
  return content.about;
};

export const getTestimonials = (): Content['testimonials'] => {
  if (!content.testimonials) {
    console.warn('Missing content key: testimonials');
    return [];
  }
  return content.testimonials;
};

export const getContact = (): Content['contact'] => {
  if (!content.contact) {
    console.warn('Missing content key: contact');
    return {} as Content['contact'];
  }
  return content.contact;
};

export const getSocial = (): Content['social'] => {
  if (!content.social) {
    console.warn('Missing content key: social');
    return {} as Content['social'];
  }
  return content.social;
};

export const getSEO = (): Content['seo'] => {
  if (!content.seo) {
    console.warn('Missing content key: seo');
    return {} as Content['seo'];
  }
  return content.seo;
};