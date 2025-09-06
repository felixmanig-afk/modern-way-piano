'use client';

import { Button } from '@/components/ui/button';

interface PlanCardProps {
  title: string;
  price: number;
  currency: string;
  period: 'month' | 'lesson';
  perLessonPrice?: number;
  description: string;
  calendlyUrl: string;
  ribbon?: {
    text: string;
    type: 'popular' | 'savings';
  };
}

export default function PlanCard({
  title,
  price,
  currency,
  period,
  perLessonPrice,
  description,
  calendlyUrl,
  ribbon,
}: PlanCardProps) {
  const formatPrice = (amount: number) => {
    return `${currency}${amount}`;
  };

  const formatPerLessonPrice = (amount: number) => {
    return `≈ ${currency}${amount.toFixed(2)} per lesson`;
  };

  return (
    <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg p-6">
      {/* Ribbon */}
      {ribbon && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            ribbon.type === 'popular' 
              ? 'bg-gradient-to-r from-[#ff8a3d] to-[#f6c37b] text-white' 
              : 'bg-gradient-to-r from-[#ff8a3d] to-[#f6c37b] text-white'
          }`}>
            {ribbon.text}
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
        {title}
      </h3>

      {/* Price */}
      <div className="mb-2">
        <div className="text-4xl font-montserrat font-bold text-foreground leading-tight">
          {formatPrice(price)}
        </div>
        <div className="text-sm text-zinc-400">
          per {period}
        </div>
      </div>

      {/* Per-lesson price (Monthly/Annual only) */}
      {perLessonPrice && (
        <div className="mb-4">
          <span className="inline-block px-2 py-1 bg-muted rounded text-xs text-zinc-400">
            {formatPerLessonPrice(perLessonPrice)}
          </span>
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6">
        {description}
      </p>

      {/* CTA Button */}
      <Button
        asChild
        className="w-full bg-gradient-to-r from-[#ff8a3d] to-[#f6c37b] hover:from-[#ff8a3d]/90 hover:to-[#f6c37b]/90 text-white font-semibold"
        aria-label={`Book ${title} lesson`}
      >
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
          Book Now
        </a>
      </Button>
    </div>
  );
}
