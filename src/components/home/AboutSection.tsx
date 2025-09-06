'use client';

import { Card, CardContent } from '@/components/ui/card';
import { getAbout } from '@/lib/content';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BrandPattern from '@/components/ui/BrandPattern';
import { media } from '@/lib/media';

export default function AboutSection() {
  const about = getAbout();

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
              About Chloe
            </h2>
          </div>
          <p className="text-zinc-300">
            Your Piano Instructor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={media.about.teacher}
                  alt="Portrait of Chloe, piano instructor"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                {/* Conic gradient ring border */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent bg-gradient-conic from-[#ff8a3d] via-[#f6c37b] to-[#ff8a3d] bg-clip-border" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-prose space-y-6"
          >
            {about.bio.map((paragraph, index) => (
              <p key={index} className="text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="flex flex-wrap gap-3">
              <div className="card px-3 py-2 text-sm">
                <span className="text-foreground font-medium">{about.stats.students}</span>
              </div>
              <div className="card px-3 py-2 text-sm">
                <span className="text-foreground font-medium">{about.stats.training}</span>
              </div>
              <div className="card px-3 py-2 text-sm">
                <span className="text-foreground font-medium">{about.stats.experience}</span>
              </div>
              <div className="card px-3 py-2 text-sm">
                <span className="text-foreground font-medium">All Ages Welcome</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
