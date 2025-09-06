import { 
  Compass, 
  ClipboardCheck, 
  PlayCircle, 
  RefreshCw 
} from 'lucide-react';

interface MethodIconProps {
  className?: string;
  size?: number;
}

const iconMap = {
  Assess: Compass,
  Plan: ClipboardCheck,
  Practice: PlayCircle,
  Review: RefreshCw,
} as const;

export function MethodIcon({ 
  stepName, 
  className = "h-4 w-4", 
  size 
}: { 
  stepName: keyof typeof iconMap; 
  className?: string; 
  size?: number;
}) {
  const IconComponent = iconMap[stepName];
  
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#ff8a3d] to-[#f6c37b] text-white">
      <IconComponent 
        className={className} 
        size={size || 16}
      />
    </div>
  );
}

export { Compass, ClipboardCheck, PlayCircle, RefreshCw };
