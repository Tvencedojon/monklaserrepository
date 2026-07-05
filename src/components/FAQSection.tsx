import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como funciona o processo?",
    answer:
      "Você manda sua ideia por WhatsApp, e-mail ou Instagram. A gente revisa material, medidas e acabamento antes de passar a proposta.",
  },
  {
    question: "Com quais materiais vocês trabalham?",
    answer:
      "Trabalhamos principalmente com MDF, acrílico e couro, sempre avaliando espessura e uso final da peça.",
  },
  {
    question: "Qual é o prazo médio?",
    answer:
      "Depois da aprovação, a produção costuma levar de 1 a 3 dias úteis. Projetos maiores podem precisar de prazo combinado.",
  },
  {
    question: "Entregam para todo o Brasil?",
    answer:
      "Sim. Enviamos com embalagem protegida por Correios ou transportadora, além de retirada combinada quando fizer sentido.",
  },
  {
    question: "Preciso ter arquivo pronto?",
    answer:
      "Não. Arquivos DXF, AI, SVG ou PDF ajudam, mas também orientamos a partir de medidas, referências e objetivo da peça.",
  },
  {
    question: "Vocês fazem peças exclusivas?",
    answer:
      "Sim. Desenvolvemos peças para eventos, comunicação visual, displays, brindes, decoração, maquetes e kits de encaixe.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/14 rounded-[28px] border border-white/16 bg-white/10 px-5">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="py-2">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-black text-white"
            >
              <span>{item.question}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#4b3192]">
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-10 text-sm leading-7 text-white/68">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
