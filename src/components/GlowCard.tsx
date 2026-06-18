"use client";

import { useRef, useState } from "react";

export function GlowCard({
  children,
  sih,
  className,
  onClick,
  glowCircleSize = 200,
}: {
  children: React.ReactNode;
  sih?: string;
  className?: string;
  onClick?: () => void;
  glowCircleSize?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, active: false });

  return (
    <div
      ref={ref}
      className="relative h-full rounded-2xl"
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        setGlow({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          active: true,
        });
      }}
      onMouseLeave={() => setGlow((g) => ({ ...g, active: false }))}
    >
      {/* Glow Border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20"
        style={{
          opacity: glow.active ? 1 : 0,
          transition: "opacity 300ms ease",
          padding: "1px",
          background: `radial-gradient(${glowCircleSize}px circle at ${glow.x}px ${glow.y}px, rgba(14,165,233,0.9), transparent 65%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
      />

      {/* Card */}
      <div
        className={`relative z-10 flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/9 ${className ?? "p-6"}`}
      >
        {sih && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div
              className="absolute bg-sky-500 py-0.5 text-center text-[10px] font-bold tracking-widest text-white"
              style={{
                width: 150,
                top: 10,
                left: -56,
                transform: "rotate(-45deg)",
              }}
            >
              SIH
            </div>
          </div>
        )}
        {onClick ? (
          <div className="cursor-pointer select-none h-full" onClick={onClick}>
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
