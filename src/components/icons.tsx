type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function ServerIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect height="7" rx="1.5" width="17" x="3.5" y="3.5" />
      <rect height="7" rx="1.5" width="17" x="3.5" y="13.5" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}

export function BrainIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5.5a3 3 0 0 0-5.7-1.3A2.8 2.8 0 0 0 4 7a2.9 2.9 0 0 0 .6 1.8A3 3 0 0 0 5 14.6 3 3 0 0 0 9 19a3 3 0 0 0 3-2.4z" />
      <path d="M12 5.5a3 3 0 0 1 5.7-1.3A2.8 2.8 0 0 1 20 7a2.9 2.9 0 0 1-.6 1.8A3 3 0 0 1 19 14.6 3 3 0 0 1 15 19a3 3 0 0 1-3-2.4z" />
      <path d="M12 5.5v11" />
    </svg>
  );
}

export function TerminalIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect height="16" rx="2" width="18" x="3" y="4" />
      <path d="M7.5 9.5 10 12l-2.5 2.5M12.5 15h4" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M15.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5V20" />
      <circle cx="9.5" cy="8" r="3.2" />
      <path d="M20.5 20v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 4.6a3.2 3.2 0 0 1 0 6.2" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function GoogleGIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.87 2.7-6.62z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.95v2.33A9 9 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.95 10.7a5.4 5.4 0 0 1 0-3.4V4.97H.95a9 9 0 0 0 0 8.06l3-2.33z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C12.95.94 11.08.16 9 .16A9 9 0 0 0 .95 4.97l3 2.33C4.66 5.17 6.65 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}

export type IconKey = "server" | "brain" | "terminal" | "users";

export const iconMap: Record<IconKey, (props: IconProps) => React.ReactElement> = {
  server: ServerIcon,
  brain: BrainIcon,
  terminal: TerminalIcon,
  users: UsersIcon,
};