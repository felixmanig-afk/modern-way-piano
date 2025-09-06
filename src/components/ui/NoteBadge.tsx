interface NoteBadgeProps {
  className?: string;
}

export default function NoteBadge({ className = "" }: NoteBadgeProps) {
  return (
    <div className={`inline-flex items-center justify-center w-6 h-6 bg-gradient-to-br from-[#ff8a3d] to-[#f6c37b] rounded-full ${className}`}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M12 3V21M8.5 6.5L12 3L15.5 6.5M8.5 17.5L12 21L15.5 17.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="6" r="3" fill="currentColor" />
        <circle cx="6" cy="18" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}
