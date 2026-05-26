import type { CSSProperties } from "react";

type IconProps = {
  name: string;
  className?: string;
  style?: CSSProperties;
};

export function Icon({ name, className = "", style }: IconProps) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={style} aria-hidden>
      {name}
    </span>
  );
}
