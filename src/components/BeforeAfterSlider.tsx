import { useRef, useState } from "react";
import type { MouseEvent, TouchEvent } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(52);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (event.buttons === 1) handleMove(event.clientX);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (event.touches[0]) handleMove(event.touches[0].clientX);
  };

  return (
    <div className="space-y-5">
      <div>
        <span className="inline-flex rounded-full bg-[var(--brand)] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-white">
          vetor x peça
        </span>
        <h3 className="mt-3 text-2xl font-black text-white">Do arquivo técnico ao acabamento final.</h3>
        <p className="mt-2 text-sm leading-6 text-white/68">
          Arraste para comparar a leitura vetorial com a peça finalizada.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseDown={(event) => handleMove(event.clientX)}
        onMouseMove={handleMouseMove}
        onTouchStart={(event) => event.touches[0] && handleMove(event.touches[0].clientX)}
        onTouchMove={handleTouchMove}
        className="relative h-[330px] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-[28px] border border-white/18 bg-white"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#4b3192]" />
          <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white" />
          <div className="absolute bottom-8 left-12 h-28 w-44 rounded-2xl bg-[var(--brand)]" />
          <div className="absolute right-10 top-16 h-36 w-52 rounded-3xl bg-white/18 ring-4 ring-white/40" />
          <span className="absolute bottom-5 right-5 rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#4b3192]">
            Peça final
          </span>
        </div>

        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <div className="absolute inset-0 min-h-full min-w-full bg-[#f7f3ee]">
            <svg viewBox="0 0 640 360" className="h-full w-full text-[#4b3192]">
              <rect x="72" y="56" width="496" height="248" rx="18" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
              <rect x="124" y="96" width="158" height="170" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M360 94h138l30 30v112l-30 30H360l-30-30V124z" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="429" cy="180" r="51" fill="none" stroke="#f1461c" strokeWidth="4" />
              <path d="M104 292h432M104 72h432M72 56l496 248M72 304 568 56" stroke="currentColor" strokeWidth="1" opacity="0.28" />
              <text x="320" y="42" textAnchor="middle" className="fill-current font-mono text-[11px]">
                revisão vetorial | escala 1:1 | MonkLaser
              </text>
            </svg>
          </div>
          <span className="absolute bottom-5 left-5 rounded-full bg-[var(--brand)] px-3 py-1.5 text-xs font-black text-white">
            Arquivo técnico
          </span>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-20 w-[3px] bg-[var(--brand)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-xl">
            <MoveHorizontal className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
