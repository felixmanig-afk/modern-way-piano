'use client';

import { Card, CardContent } from '@/components/ui/card';
import { getLessons, getBenefits } from '@/lib/content';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function LessonsSection() {
  const lessons = getLessons();
  const benefits = getBenefits();

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 musical-notes opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Why Modern Way Piano */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
              <span className="gradient-text">Why Modern Way Piano?</span>
            </h2>
            <div className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto space-y-4">
              {lessons.why.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Method - This will be replaced by MethodSection component */}

          {/* In-person and Online lessons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border h-full cursor-pointer hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/20 transition-all duration-300 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    In-person lessons
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                    {lessons.inPerson}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border h-full cursor-pointer hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-500/20 transition-all duration-300 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    Online lessons
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                    {lessons.online}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <div className="text-center mb-4">
              <h2 className="text-grad">
                {benefits.title}
              </h2>
            </div>
            <p className="text-zinc-300 max-w-3xl mx-auto">
              Three core principles that make learning piano simple, effective, and enjoyable.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {benefits.clarity.title}
              </h4>
              <p className="text-zinc-300 mb-4">
                {benefits.clarity.description}
              </p>
              <ul className="space-y-2 mb-6">
                {benefits.clarity.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-[#ff8a3d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#ff8a3d] font-medium text-sm">
                {benefits.clarity.result}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {benefits.fundamentals.title}
              </h4>
              <p className="text-zinc-300 mb-4">
                {benefits.fundamentals.description}
              </p>
              <ul className="space-y-2 mb-6">
                {benefits.fundamentals.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-[#ff8a3d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#ff8a3d] font-medium text-sm">
                {benefits.fundamentals.result}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {benefits.momentum.title}
              </h4>
              <p className="text-zinc-300 mb-4">
                {benefits.momentum.description}
              </p>
              <ul className="space-y-2 mb-6">
                {benefits.momentum.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-[#ff8a3d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#ff8a3d] font-medium text-sm">
                {benefits.momentum.result}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
