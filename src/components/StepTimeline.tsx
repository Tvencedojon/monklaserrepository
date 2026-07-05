import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Clock,
  Flame,
  HeartHandshake,
  MessageSquare,
  Palette,
  Send,
  ShieldAlert,
  Truck,
} from "lucide-react";

type Step = {
  num: number;
  title: string;
  desc: string;
  estimate: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    num: 1,
    title: "Envio da ideia",
    desc: "Você manda referência, arquivo ou medidas pelo canal de contato.",
    estimate: "imediato",
    icon: Send,
  },
  {
    num: 2,
    title: "Alinhamento",
    desc: "Confirmamos material, acabamento, quantidade, prazo e formato.",
    estimate: "até 2h úteis",
    icon: MessageSquare,
  },
  {
    num: 3,
    title: "Arte técnica",
    desc: "Ajustamos vetores, encaixes, folgas e aproveitamento da chapa.",
    estimate: "sob análise",
    icon: Palette,
  },
  {
    num: 4,
    title: "Aprovação",
    desc: "Você aprova a proposta antes da produção começar.",
    estimate: "seu tempo",
    icon: CheckCircle2,
  },
  {
    num: 5,
    title: "Produção",
    desc: "Cortamos e gravamos com parâmetros adequados para cada material.",
    estimate: "1 a 3 dias",
    icon: Flame,
  },
  {
    num: 6,
    title: "Qualidade",
    desc: "Conferimos bordas, gravações, encaixes e acabamento final.",
    estimate: "revisado",
    icon: ShieldAlert,
  },
  {
    num: 7,
    title: "Entrega",
    desc: "Embalamos com proteção e combinamos envio ou retirada.",
    estimate: "todo o BR",
    icon: Truck,
  },
  {
    num: 8,
    title: "Pós-venda",
    desc: "Acompanhamos dúvidas de montagem, uso e conservação.",
    estimate: "suporte",
    icon: HeartHandshake,
  },
];

export default function StepTimeline() {
  const [activeStep, setActiveStep] = useState(1);
  const selected = STEPS[activeStep - 1];
  const SelectedIcon = selected.icon;

  return (
    <div className="space-y-8">
      <div className="rounded-[28px] bg-white p-6 text-[#4b3192] shadow-xl shadow-[#24134f]/10 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand)] text-white">
            <SelectedIcon className="h-8 w-8" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[var(--brand)]">
                etapa {activeStep} de 8
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#4b3192]/10 px-2.5 py-1 font-mono text-[10px] font-black text-[#4b3192]">
                <Clock className="h-3 w-3" /> {selected.estimate}
              </span>
            </div>
            <h3 className="mt-2 text-2xl font-black">{selected.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#654f8f]">{selected.desc}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {STEPS.map((step) => {
          const isSelected = activeStep === step.num;
          const StepIcon = step.icon;

          return (
            <button
              key={step.num}
              type="button"
              onClick={() => setActiveStep(step.num)}
              className={`min-h-[124px] rounded-2xl border p-3 text-left transition-all ${
                isSelected
                  ? "border-[var(--brand)] bg-[var(--brand)] text-white shadow-xl shadow-[#24134f]/18"
                  : "border-white/18 bg-white/10 text-white hover:bg-white/15"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-8 w-8 items-center justify-center rounded-xl font-mono text-xs font-black ${isSelected ? "bg-white text-[var(--brand)]" : "bg-white/16 text-white"}`}>
                  {step.num}
                </span>
                <StepIcon className="h-4 w-4" />
              </div>
              <p className="mt-4 text-sm font-black leading-5">{step.title}</p>
              <p className={`mt-1 font-mono text-[10px] ${isSelected ? "text-white/78" : "text-white/55"}`}>{step.estimate}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
