import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ShieldAlert } from "lucide-react";

export default function LGPDBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("monklaser_cookies_accepted");
    if (!accepted) {
      const timer = window.setTimeout(() => setVisible(true), 1200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("monklaser_cookies_accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="fixed bottom-5 left-5 right-5 z-[5000] rounded-[22px] border border-white/18 bg-[#4b3192]/95 p-4 shadow-2xl backdrop-blur-xl md:left-auto md:max-w-md"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-1">
              <span className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-[var(--brand)]">
                <ShieldAlert className="h-3.5 w-3.5" /> Privacidade
              </span>
              <p className="mt-2 text-xs leading-5 text-white/72">
                Usamos cookies essenciais para lembrar preferências e melhorar a navegação.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAccept}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2 text-xs font-black text-white hover:bg-[var(--brand-strong)]"
            >
              <Check className="h-3.5 w-3.5" /> Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
