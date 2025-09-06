import VideoHero from '@/components/home/VideoHero';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import LessonsSection from '@/components/home/LessonsSection';
import CoursesSection from '@/components/home/CoursesSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialCarousel from '@/components/testimonials/TestimonialCarousel';

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <HowItWorksSection />
      <LessonsSection />
      <CoursesSection />
      <AboutSection />
      <TestimonialCarousel />
    </>
  );
}