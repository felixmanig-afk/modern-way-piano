'use client';

import { useState, useEffect } from 'react';
import { getContent } from '@/lib/content';
import PlanControls from '@/components/pricing/PlanControls';
import PlanCard from '@/components/pricing/PlanCard';
import IncludedList from '@/components/pricing/IncludedList';
import PolicyStrip from '@/components/pricing/PolicyStrip';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

type BillingType = 'monthly' | 'annual' | 'payg';
type DurationType = '50' | '30';

export default function PricingPage() {
  const content = getContent();
  const pricing = content.pricing;
  
  const [billing, setBilling] = useState<BillingType>('monthly');
  const [duration, setDuration] = useState<DurationType>('50');
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  // Sticky bar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsStickyVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate current price
  const getCurrentPrice = () => {
    if (billing === 'payg') {
      return pricing.plans.payg['50'];
    }
    return pricing.plans[billing][duration];
  };

  // Calculate per-lesson price
  const getPerLessonPrice = () => {
    if (billing === 'payg') return undefined;
    return getCurrentPrice() / pricing.meta.perLessonAssumption;
  };

  // Calculate savings
  const getSavings = () => {
    if (billing !== 'annual') return undefined;
    const monthlyPrice = pricing.plans.monthly[duration];
    const annualPrice = pricing.plans.annual[duration];
    return (monthlyPrice - annualPrice) * 12;
  };

  // Get plan cards to display
  const getPlanCards = () => {
    if (billing === 'payg') {
      return [
        {
          title: 'Pay-As-You-Go (50 min)',
          price: pricing.plans.payg['50'],
          period: 'lesson' as const,
          description: pricing.labels.payg50,
        },
      ];
    }

    return [
      {
        title: `${billing === 'monthly' ? 'Monthly' : 'Annual'} (50 min)`,
        price: pricing.plans[billing]['50'],
        period: 'month' as const,
        perLessonPrice: pricing.plans[billing]['50'] / pricing.meta.perLessonAssumption,
        description: pricing.labels[`${billing}50` as keyof typeof pricing.labels],
        ribbon: billing === 'monthly' && duration === '50' 
          ? { text: 'Most popular', type: 'popular' as const }
          : billing === 'annual' 
            ? { text: `Best value • Save ${pricing.meta.currency}${(pricing.plans.monthly['50'] - pricing.plans.annual['50']) * 12} / year`, type: 'savings' as const }
            : undefined,
      },
      {
        title: `${billing === 'monthly' ? 'Monthly' : 'Annual'} (30 min)`,
        price: pricing.plans[billing]['30'],
        period: 'month' as const,
        perLessonPrice: pricing.plans[billing]['30'] / pricing.meta.perLessonAssumption,
        description: pricing.labels[`${billing}30` as keyof typeof pricing.labels],
        ribbon: billing === 'annual' 
          ? { text: `Save ${pricing.meta.currency}${(pricing.plans.monthly['30'] - pricing.plans.annual['30']) * 12} / year`, type: 'savings' as const }
          : undefined,
      },
    ];
  };

  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "Modern Way Piano Lessons",
    "description": "Professional piano lessons with Chloe Angelopoulou",
    "url": "https://modernwaypiano.com/pricing",
    "priceCurrency": pricing.meta.currency,
    "offers": getPlanCards().map(plan => ({
      "@type": "Offer",
      "name": plan.title,
      "description": plan.description,
      "price": plan.price,
      "priceCurrency": pricing.meta.currency,
      "availability": "https://schema.org/InStock",
      "url": pricing.calendlyUrl
    }))
  };

  const planCards = getPlanCards();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-14 md:py-20 bg-card">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
                Piano Lesson Pricing
              </h1>
              <p className="text-sm text-muted-foreground">
                Per-lesson examples assume {pricing.meta.perLessonAssumption} lessons per month.
              </p>
            </div>
          </div>
        </section>

        {/* Controls */}
        <section className="py-14 md:py-20 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <PlanControls
              billing={billing}
              duration={duration}
              onBillingChange={setBilling}
              onDurationChange={setDuration}
            />
          </div>
        </section>

        {/* Plan Cards */}
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className={`grid gap-6 ${planCards.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
              {planCards.map((plan, index) => (
                <PlanCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  currency={pricing.meta.currency}
                  period={plan.period}
                  perLessonPrice={plan.perLessonPrice}
                  description={plan.description}
                  calendlyUrl={pricing.calendlyUrl}
                  ribbon={plan.ribbon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-xl font-montserrat font-bold text-foreground text-center mb-6">
              What&apos;s included in all plans
            </h2>
            <IncludedList features={pricing.included} />
          </div>
        </section>

        {/* Trust & Policy */}
        <section className="py-14 md:py-20 bg-card">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-lg font-montserrat font-bold text-foreground text-center mb-6">
              Trust & Policy
            </h2>
            <PolicyStrip policies={pricing.policies} />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-foreground mb-3">
                Ready to start?
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Book your first lesson with Chloe and begin your piano journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#ff8a3d] to-[#f6c37b] hover:from-[#ff8a3d]/90 hover:to-[#f6c37b]/90 text-white font-semibold"
                >
                  <a href={pricing.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    Schedule your first lesson
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border border-white/20 hover:bg-white/5"
                >
                  <a href="https://wa.me/447874708762" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Questions? WhatsApp me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky Bar */}
        {isStickyVisible && (
          <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-white/10 p-4 z-50 md:hidden">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-foreground">
                  {billing === 'payg' ? 'Pay-As-You-Go' : `${billing === 'monthly' ? 'Monthly' : 'Annual'} (${duration} min)`}
                </div>
                <div className="text-sm text-muted-foreground">
                  {pricing.meta.currency}{getCurrentPrice()}{billing === 'payg' ? ' per lesson' : ' per month'}
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-[#ff8a3d] to-[#f6c37b] hover:from-[#ff8a3d]/90 hover:to-[#f6c37b]/90 text-white font-semibold"
              >
                <a href={pricing.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}