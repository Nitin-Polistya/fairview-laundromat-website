interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Washer-door circle icon */}
      <svg
        width={compact ? 36 : 44}
        height={compact ? 36 : 44}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="22" cy="22" r="20" stroke="#0EA7A0" strokeWidth="3" fill="none" />
        <circle cx="22" cy="22" r="13" stroke="#0EA7A0" strokeWidth="1.5" fill="none" />
        <circle cx="17" cy="16" r="2.5" fill="#123142" />
        <circle cx="22" cy="16" r="2.5" fill="#123142" />
        <circle cx="27" cy="16" r="2.5" fill="#123142" />
        {/* Sparkle */}
        <path
          d="M33 10L34 12L36 13L34 14L33 16L32 14L30 13L32 12L33 10Z"
          fill="#0EA7A0"
        />
      </svg>
      <div className="flex flex-col">
        <span
          className={`font-heading font-bold text-navy leading-tight ${compact ? 'text-sm' : 'text-base'}`}
        >
          Fairview Laundromat
        </span>
        {!compact && (
          <span className="text-xs text-text-secondary leading-tight">
            Self-Service Laundry
          </span>
        )}
      </div>
    </div>
  );
}
