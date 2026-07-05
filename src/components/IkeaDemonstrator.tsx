import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Clock, PackageOpen, Wrench } from "lucide-react";

const PRODUCTS = [
  {
    id: "stand",
    name: "Suporte ergonômico",
    description: "Laterais angulares e travessas para notebook ou tablet.",
    parts: 4,
    time: "1 minuto",
  },
  {
    id: "box",
    name: "Organizador modular",
    description: "Painéis com travas de pressão para montagem sem cola.",
    parts: 6,
    time: "5 minutos",
  },
  {
    id: "display",
    name: "Display de balcão",
    description: "Peça de PDV com base, frente e encaixe de comunicação visual.",
    parts: 5,
    time: "3 minutos",
  },
];

export default function IkeaDemonstrator() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(35);
  const selected = PRODUCTS[selectedIndex];
  const factor = (100 - progress) / 100;

  return (
    <div className="rounded-[28px] border border-white/18 bg-white/10 p-5 panel-shadow sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-white">
            <Wrench className="h-3.5 w-3.5" /> estudo de encaixe
          </div>
          <h3 className="text-2xl font-black text-white">Montagem simples, visual marcante.</h3>
          <p className="mt-3 text-sm leading-7 text-white/68">
            A ideia é criar peças fáceis de transportar, montar e repetir em lote, mantendo o acabamento da marca.
          </p>

          <div className="mt-6 space-y-2">
            {PRODUCTS.map((product, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => {
                    setSelectedIndex(index);
                    setProgress(35);
                  }}
                  className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                    isSelected ? "border-[var(--brand)] bg-[var(--brand)] text-white" : "border-white/18 bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  <span className="text-sm font-black">{product.name}</span>
                  <p className={`mt-2 text-xs leading-5 ${isSelected ? "text-white/80" : "text-white/62"}`}>{product.description}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4 text-[#4b3192]">
              <PackageOpen className="mb-3 h-5 w-5 text-[var(--brand)]" />
              <p className="font-mono text-[10px] font-black uppercase">partes</p>
              <p className="mt-1 text-sm font-black">{selected.parts} peças</p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-[#4b3192]">
              <Clock className="mb-3 h-5 w-5 text-[var(--brand)]" />
              <p className="font-mono text-[10px] font-black uppercase">montagem</p>
              <p className="mt-1 text-sm font-black">{selected.time}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[28px] bg-white">
            <div className="absolute inset-x-0 top-0 h-16 bg-[var(--brand)]" />
            <span className="absolute left-5 top-5 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-white">
              simulador de encaixe
            </span>

            <div className="relative h-[230px] w-[360px] max-w-full">
              <motion.div
                animate={{ x: -72 * factor, rotate: -8 * factor }}
                className="absolute left-[72px] top-[70px] h-[126px] w-[58px] rounded-xl bg-[#4b3192]"
              />
              <motion.div
                animate={{ x: 72 * factor, rotate: 8 * factor }}
                className="absolute right-[72px] top-[70px] h-[126px] w-[58px] rounded-xl bg-[#4b3192]"
              />
              <motion.div
                animate={{ y: -58 * factor, rotate: 6 * factor }}
                className="absolute left-1/2 top-[42px] h-[48px] w-[180px] -translate-x-1/2 rounded-full bg-[var(--brand)]"
              />
              <motion.div
                animate={{ y: 44 * factor }}
                className="absolute bottom-[34px] left-1/2 h-[32px] w-[210px] -translate-x-1/2 rounded-xl bg-[#f7f3ee] ring-4 ring-[#4b3192]"
              />
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between font-mono text-[10px] font-black uppercase">
              <span className="text-white/55">progresso</span>
              <span className="text-[var(--brand)]">{progress}% encaixado</span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(event) => setProgress(Number(event.target.value))}
                className="h-1 flex-1 cursor-pointer appearance-none rounded-lg bg-white/22"
                style={{ accentColor: "var(--brand)" }}
              />
              <button
                type="button"
                onClick={() => setProgress((current) => Math.min(100, current + 25))}
                disabled={progress === 100}
                className="inline-flex items-center gap-1 rounded-xl bg-[var(--brand)] px-3 py-2 text-xs font-black text-white disabled:cursor-not-allowed disabled:opacity-45"
              >
                Próximo <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
