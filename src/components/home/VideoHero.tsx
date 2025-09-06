'use client';

import { Button } from '@/components/ui/button';
import { getHero, getIntro } from '@/lib/content';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function VideoHero() {
  const hero = getHero();
  const intro = getIntro();
  const [shouldAutoplay, setShouldAutoplay] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldAutoplay(!mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldAutoplay(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError && (
          <video
            className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay={shouldAutoplay}
            muted
            loop
            playsInline
            preload="metadata"
            poster={hero.poster}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => {
              console.log('Video can play');
              setVideoLoaded(true);
            }}
            onError={(e) => {
              console.error('Video error:', e.nativeEvent || e);
              setVideoError(true);
            }}
            onLoadedData={() => console.log('Video data loaded')}
          >
            <source src="/video/site_snippets-1.mp4" type="video/mp4" />
            <source src={hero.videoSrc} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Fallback background image - always visible as poster */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${hero.poster})`
          }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white"
          >
            {hero.headline}
          </motion.h1>
          
          {intro.lead && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-zinc-300 max-w-2xl mx-auto"
            >
              {intro.lead}
            </motion.p>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-br from-[#ff8a3d] to-[#f6c37b] text-black font-semibold rounded-xl px-6 py-3 shadow-[0_0_30px_-12px_rgba(255,138,61,.9)] hover:translate-y-[-1px] transition"
            >
              <a
                href={hero.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
                aria-label={hero.buttonText}
              >
                {hero.buttonText}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
