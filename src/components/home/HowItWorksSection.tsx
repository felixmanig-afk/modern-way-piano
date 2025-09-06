'use client';

import { motion } from 'framer-motion';
import { Calendar, BookOpen, TrendingUp } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Calendar,
      title: 'Book',
      description: 'Schedule your first lesson',
    },
    {
      icon: BookOpen,
      title: 'Learn',
      description: 'Structured, personalized lessons',
    },
    {
      icon: TrendingUp,
      title: 'Progress',
      description: 'Track your musical journey',
    },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="card p-4 flex items-center gap-3 min-w-0 flex-1 cursor-pointer hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#ff8a3d] to-[#f6c37b] rounded-full flex items-center justify-center">
                <step.icon className="h-4 w-4 text-black" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground text-sm">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
