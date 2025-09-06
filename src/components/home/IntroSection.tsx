'use client';

import { getIntro } from '@/lib/content';
import { motion } from 'framer-motion';

export default function IntroSection() {
  const intro = getIntro();

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-8"
          >
            Modern Way Piano
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            {intro.lead}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
