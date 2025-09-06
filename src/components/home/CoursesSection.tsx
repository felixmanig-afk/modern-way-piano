'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getCourses } from '@/lib/content';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import BrandPattern from '@/components/ui/BrandPattern';
import PianoKeyDivider from '@/components/ui/PianoKeyDivider';
import { getCourseImage } from '@/lib/media';

export default function CoursesSection() {
  const courses = getCourses();

  return (
    <section className="relative overflow-hidden">
      <BrandPattern />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="text-center mb-4">
            <h2 className="text-grad">
              My Courses
            </h2>
          </div>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            Choose the perfect course for your skill level and start your piano journey today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getCourseImage(course.slug)}
                    alt={`${course.title} piano course`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-zinc-300 mb-4">
                    {course.summary}
                  </p>
                  <ul className="space-y-2">
                    {course.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-[#ff8a3d] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/courses"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            View All Courses →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
