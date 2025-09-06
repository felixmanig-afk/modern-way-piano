interface BrandPatternProps {
  className?: string;
}

export default function BrandPattern({ className = "" }: BrandPatternProps) {
  return (
    <div 
      className={`absolute inset-0 brand-pattern ${className}`}
      aria-hidden="true"
    />
  );
}
