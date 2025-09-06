'use client';

import { CheckCircle2 } from 'lucide-react';

interface IncludedListProps {
  features: string[];
}

export default function IncludedList({ features }: IncludedListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <CheckCircle2 className="h-5 w-5 text-[#ff8a3d] flex-shrink-0 mt-0.5" />
          <span className="text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>
  );
}