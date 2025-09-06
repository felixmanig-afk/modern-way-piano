interface PianoKeyDividerProps {
  className?: string;
}

export default function PianoKeyDivider({ className = "" }: PianoKeyDividerProps) {
  return (
    <div 
      className={`w-full piano-key-divider ${className}`}
      aria-hidden="true"
    />
  );
}
