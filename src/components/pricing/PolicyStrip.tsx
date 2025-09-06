'use client';

import { Shield, Clock, MessageCircle, CreditCard } from 'lucide-react';

interface PolicyStripProps {
  policies: string[];
}

const policyIcons = [Shield, Clock, MessageCircle, CreditCard];

export default function PolicyStrip({ policies }: PolicyStripProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {policies.slice(0, 4).map((policy, index) => {
        const Icon = policyIcons[index] || Shield;
        return (
          <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-card/50">
            <Icon className="h-5 w-5 text-[#ff8a3d] flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{policy}</span>
          </div>
        );
      })}
    </div>
  );
}