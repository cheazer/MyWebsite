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

export type IconKey = "server" | "brain" | "terminal" | "users";

export const iconMap: Record<IconKey, (props: IconProps) => React.ReactElement> = {
  server: ServerIcon,
  brain: BrainIcon,
  terminal: TerminalIcon,
  users: UsersIcon,
};