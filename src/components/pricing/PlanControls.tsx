'use client';

import { useState } from 'react';

interface PlanControlsProps {
  billing: 'monthly' | 'annual' | 'payg';
  duration: '50' | '30';
  onBillingChange: (billing: 'monthly' | 'annual' | 'payg') => void;
  onDurationChange: (duration: '50' | '30') => void;
}

export default function PlanControls({
  billing,
  duration,
  onBillingChange,
  onDurationChange,
}: PlanControlsProps) {
  const [announcement, setAnnouncement] = useState('');

  const handleBillingChange = (newBilling: 'monthly' | 'annual' | 'payg') => {
    onBillingChange(newBilling);
    setAnnouncement(`Billing changed to ${newBilling === 'payg' ? 'Pay-As-You-Go' : newBilling}`);
  };

  const handleDurationChange = (newDuration: '50' | '30') => {
    onDurationChange(newDuration);
    setAnnouncement(`Duration changed to ${newDuration} minutes`);
  };

  return (
    <>
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {/* Billing Control */}
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium text-foreground mb-2">Billing</label>
          <div className="bg-muted rounded-lg p-1 flex" role="radiogroup" aria-label="Billing options">
            <button
              onClick={() => handleBillingChange('monthly')}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                billing === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              role="radio"
              aria-checked={billing === 'monthly'}
              aria-label="Monthly billing"
            >
              Monthly
            </button>
            <button
              onClick={() => handleBillingChange('annual')}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                billing === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              role="radio"
              aria-checked={billing === 'annual'}
              aria-label="Annual billing"
            >
              Annual
            </button>
            <button
              onClick={() => handleBillingChange('payg')}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                billing === 'payg'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              role="radio"
              aria-checked={billing === 'payg'}
              aria-label="Pay-As-You-Go billing"
            >
              Pay-As-You-Go
            </button>
          </div>
        </div>

        {/* Duration Control */}
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium text-foreground mb-2">Duration</label>
          <div className="bg-muted rounded-lg p-1 flex" role="radiogroup" aria-label="Duration options">
            <button
              onClick={() => handleDurationChange('50')}
              disabled={billing === 'payg'}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                duration === '50'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              } ${billing === 'payg' ? 'opacity-50 cursor-not-allowed' : ''}`}
              role="radio"
              aria-checked={duration === '50'}
              aria-label="50 minute lessons"
            >
              50 min
            </button>
            <button
              onClick={() => handleDurationChange('30')}
              disabled={billing === 'payg'}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                duration === '30'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              } ${billing === 'payg' ? 'opacity-50 cursor-not-allowed' : ''}`}
              role="radio"
              aria-checked={duration === '30'}
              aria-label="30 minute lessons"
            >
              30 min
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
