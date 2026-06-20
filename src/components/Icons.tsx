/** Ícones SVG inline (sem dependências externas). */

type IconProps = { className?: string };

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg className={className} width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg className={className} {...base} width={20} height={20}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLeaf({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M11 20A7 7 0 019.8 6.1C15.5 5 19 2 19 2s.5 5.5-2.5 9.5C14 15 11 16 11 20z" />
      <path d="M2 22s.5-5 4-8.5" />
    </svg>
  );
}

export function IconFlower({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5c0-2 1-4 0-5.5-1 1.5 0 3.5 0 5.5zM14.5 12c2 0 4 1 5.5 0-1.5-1-3.5 0-5.5 0zM12 14.5c0 2-1 4 0 5.5 1-1.5 0-3.5 0-5.5zM9.5 12c-2 0-4-1-5.5 0 1.5 1 3.5 0 5.5 0z" />
    </svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z" />
    </svg>
  );
}

export function IconPlate({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
    </svg>
  );
}

export function IconPill({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(45 12 12)" />
      <path d="M9 9l6 6" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M21 11.5a8.38 8.38 0 01-9 8.3 8.5 8.5 0 01-3.9-.8L3 20l1-4.1A8.4 8.4 0 0112 3.2a8.38 8.38 0 019 8.3z" />
    </svg>
  );
}

export function IconSparkle({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M18.5 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </svg>
  );
}

export function IconActivity({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 12h4l2.5-6 5 14 2.5-8H21" />
    </svg>
  );
}

const map = {
  leaf: IconLeaf,
  flower: IconFlower,
  heart: IconHeart,
  plate: IconPlate,
  pill: IconPill,
  chat: IconChat,
  sparkle: IconSparkle,
  activity: IconActivity,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = map[name] ?? IconLeaf;
  return <Cmp className={className} />;
}
