// Media map for consistent image paths
export const media = {
  hero: {
    poster: '/images/hero/poster.jpg',
  },
  courses: {
    beginner: '/images/courses/Beginner.png',
    intermediate: '/images/courses/Intermediate.png',
    advanced: '/images/courses/Advanced.png',
  },
  about: {
    teacher: '/images/about/teacher.png',
  },
  contact: {
    studio: '/images/contact/Piano.png',
  },
} as const;

// Helper function to get course image by slug
export function getCourseImage(slug: string): string {
  const courseImages: Record<string, string> = {
    beginner: media.courses.beginner,
    intermediate: media.courses.intermediate,
    advanced: media.courses.advanced,
  };
  
  return courseImages[slug] || media.courses.beginner;
}
