export const iconDefaults = {
  size: 14,
  weight: "Outline" as const,
  color: "currentColor",
};

type IconOptions = {
  size?: number | string;
  weight?: "Filled" | "Outline";
  color?: string;
  className?: string;
};

export function iconProps(overrides?: IconOptions): IconOptions {
  return { ...iconDefaults, ...overrides };
}
