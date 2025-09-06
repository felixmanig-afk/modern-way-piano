'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface BrandImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export default function BrandImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  fill = false 
}: BrandImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const imageProps = fill 
    ? { fill: true, className: "object-cover" }
    : { width: width || 400, height: height || 300 };

  return (
    <motion.div
      className={`relative card overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        y: -4,
      }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        {...imageProps}
        className="transition-transform duration-300"
      />
    </motion.div>
  );
}
