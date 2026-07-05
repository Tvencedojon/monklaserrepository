import { motion } from "motion/react";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const MATERIALS = [
  {
    title: "MDF cru e naval",
    badge: "Corte e encaixes",
    spec: "3 mm a 18 mm",
    description:
      "Ideal para maquetes, displays, organizadores, peças decorativas e kits de montagem.",
  },
  {
    title: "Acrílico cristal e colorido",
    badge: "Acabamento premium",
    spec: "2 mm a 10 mm",
    description:
      "Perfeito para placas, letreiros, displays, troféus e peças com visual marcante.",
  },
  {
    title: "Couro legítimo e sintético",
    badge: "Gravação nítida",
    spec: "natural / vegano",
    description:
      "Aplicado em brindes, tags, etiquetas, acessórios e personalização corporativa.",
  },
];

export default function ServiceShowcase() {
  return (
    <div className="w-full space-y-4">
      <div className="rounded-[24px] bg-white p-6 text-[#4b3192] shadow-xl shadow-[#24134f]/10">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand)] text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[var(--brand)]">especialidade</span>
        </div>
        <h3 className="text-xl font-black">Corte limpo, gravação nítida e presença de marca.</h3>
        <p className="mt-2 text-sm leading-6 text-[#654f8f]">
          A estética MonkLaser combina produção técnica com visual autoral, divertido e memorável.
        </p>
      </div>

      <div className="space-y-3">
        {MATERIALS.map((material, index) => (
          <motion.div
            key={material.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[22px] border border-white/18 bg-white/10 p-5 text-white transition-colors hover:bg-white/15"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[var(--brand)]/30 bg-[var(--brand)] px-2.5 py-1 font-mono text-[10px] font-black uppercase text-white">
                {material.badge}
              </span>
              <span className="font-mono text-[10px] text-white/55">{material.spec}</span>
            </div>
            <h4 className="mt-3 text-base font-black">{material.title}</h4>
            <p className="mt-2 text-sm leading-6 text-white/68">{material.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-2xl bg-white p-4 text-[#4b3192]">
          <ShieldCheck className="h-5 w-5 shrink-0 text-[var(--brand)]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.12em]">otimização de chapa</span>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white p-4 text-[#4b3192]">
          <Heart className="h-5 w-5 shrink-0 text-[var(--brand)]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.12em]">acabamento manual</span>
        </div>
      </div>
    </div>
  );
}
