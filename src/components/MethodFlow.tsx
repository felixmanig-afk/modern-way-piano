'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { MethodIcon } from '@/components/icons/Method';
import { Card } from '@/components/ui/card';

export interface MethodStep {
  name: string;
  desc: string;
  icon?: React.ReactNode;
}

interface MethodFlowProps {
  steps: MethodStep[];
  className?: string;
}

type StepState = 'completed' | 'current' | 'upcoming';

export function MethodFlow({ steps, className = '' }: MethodFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeDetail, setActiveDetail] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const detailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for scroll sync
  useEffect(() => {
    const observers = detailRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentStep(index);
          }
        },
        { threshold: 0.5, rootMargin: '-20% 0px' }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const getStepState = (index: number): StepState => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'current';
    return 'upcoming';
  };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setActiveDetail(activeDetail === index ? null : index);
    
    // Scroll to detail panel
    const detailElement = detailRefs.current[index];
    if (detailElement) {
      detailElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const handleKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = Math.max(0, index - 1);
        setCurrentStep(prevIndex);
        stepRefs.current[prevIndex]?.focus();
        break;
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = Math.min(steps.length - 1, index + 1);
        setCurrentStep(nextIndex);
        stepRefs.current[nextIndex]?.focus();
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleStepClick(index);
        break;
    }
  }, [steps.length]);

  // SVG Path for desktop
  const createPath = () => {
    if (isMobile) return null;
    
    const width = 800;
    const height = 100;
    const startX = 50;
    const endX = width - 50;
    const controlY = height * 0.3; // Slight upward arc
    
    return `M ${startX} ${height/2} Q ${width/2} ${controlY} ${endX} ${height/2}`;
  };

  const pathLength = shouldReduceMotion ? 0 : 1;

  return (
    <div 
      ref={containerRef}
      className={`max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24 ${className}`}
    >
      {/* Progress Bar */}
      <div 
        className="sr-only"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={steps.length - 1}
        aria-valuenow={currentStep}
        aria-label="Lesson method progress"
      >
        {currentStep + 1} of {steps.length} steps completed
      </div>

      {/* Desktop Layout */}
      {!isMobile && (
        <div className="hidden md:block">
          {/* SVG Path */}
          <div className="relative mb-12">
            <svg 
              width="100%" 
              height="100" 
              viewBox="0 0 800 100" 
              className="overflow-visible"
            >
              <motion.path
                d={createPath()}
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 1.5, 
                  ease: "easeInOut" 
                }}
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff8a3d" />
                  <stop offset="100%" stopColor="#f6c37b" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps */}
          <div 
            role="list" 
            className="relative flex justify-between items-start"
          >
            {steps.map((step, index) => {
              const state = getStepState(index);
              const isActive = activeDetail === index;
              
              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Step Button */}
                  <motion.button
                    ref={(el) => (stepRefs.current[index] = el)}
                    role="listitem"
                    aria-posinset={index + 1}
                    aria-setsize={steps.length}
                    onClick={() => handleStepClick(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`
                      relative rounded-2xl bg-white/5 ring-1 px-5 py-4 md:px-6 md:py-5
                      transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff8a3d] focus:ring-offset-2 focus:ring-offset-background
                      ${state === 'completed' ? 'ring-[#ff8a3d] shadow-lg shadow-orange-500/20' : ''}
                      ${state === 'current' ? 'ring-2 ring-[#ff8a3d] shadow-xl shadow-orange-500/30' : ''}
                      ${state === 'upcoming' ? 'ring-white/10 text-muted-foreground' : ''}
                    `}
                    whileHover={{ 
                      y: state === 'current' ? -2 : -1,
                      scale: state === 'current' ? 1.05 : 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      y: state === 'current' ? -2 : 0,
                      scale: state === 'current' ? 1.05 : 1
                    }}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-2">
                      <MethodIcon 
                        stepName={step.name as keyof typeof MethodIcon} 
                        className="h-4 w-4"
                      />
                    </div>
                    
                    {/* Step Name */}
                    <div className="text-center">
                      <h3 className="font-semibold text-sm md:text-base">
                        {step.name}
                      </h3>
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* Detail Panel */}
          {activeDetail !== null && (
            <motion.div
              ref={(el) => (detailRefs.current[activeDetail] = el)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <Card className="bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <MethodIcon 
                    stepName={steps[activeDetail].name as keyof typeof MethodIcon}
                    className="h-6 w-6 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {steps[activeDetail].name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {steps[activeDetail].desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical Timeline Path */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff8a3d] to-[#f6c37b]">
              <motion.div
                className="w-full bg-gradient-to-b from-[#ff8a3d] to-[#f6c37b]"
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: isInView ? 1 : 0,
                  transformOrigin: "top"
                }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 1.5,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Steps */}
            <div role="list" className="space-y-8">
              {steps.map((step, index) => {
                const state = getStepState(index);
                const isActive = activeDetail === index;
                
                return (
                  <motion.div
                    key={index}
                    ref={(el) => (detailRefs.current[index] = el)}
                    role="listitem"
                    aria-posinset={index + 1}
                    aria-setsize={steps.length}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 
                    }}
                    className="relative flex gap-4"
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                      <motion.button
                        ref={(el) => (stepRefs.current[index] = el)}
                        onClick={() => handleStepClick(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className={`
                          w-8 h-8 rounded-full flex items-center justify-center
                          transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff8a3d] focus:ring-offset-2
                          ${state === 'completed' ? 'bg-gradient-to-br from-[#ff8a3d] to-[#f6c37b] shadow-lg' : ''}
                          ${state === 'current' ? 'bg-gradient-to-br from-[#ff8a3d] to-[#f6c37b] shadow-xl ring-2 ring-[#ff8a3d]' : ''}
                          ${state === 'upcoming' ? 'bg-white/20 ring-1 ring-white/30' : ''}
                        `}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <MethodIcon 
                          stepName={step.name as keyof typeof MethodIcon}
                          className="h-4 w-4"
                        />
                      </motion.button>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      className="flex-1"
                      animate={{
                        y: state === 'current' ? -2 : 0
                      }}
                    >
                      <Card 
                        className={`
                          bg-white/5 ring-1 p-4 cursor-pointer transition-all duration-300
                          ${state === 'completed' ? 'ring-[#ff8a3d] shadow-lg shadow-orange-500/20' : ''}
                          ${state === 'current' ? 'ring-2 ring-[#ff8a3d] shadow-xl shadow-orange-500/30' : ''}
                          ${state === 'upcoming' ? 'ring-white/10' : ''}
                        `}
                        onClick={() => handleStepClick(index)}
                      >
                        <h3 className="font-semibold text-lg mb-2">
                          {step.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
