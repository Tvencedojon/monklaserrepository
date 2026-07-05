import { ArrowRight, Instagram, Mail, MessageCircle, Phone } from "lucide-react";

const CONTACT_OPTIONS = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "+55 (11) 99876-5432",
    helper: "Atendimento rápido para orçamentos e arquivos.",
    href: "https://w.app/monklaser",
    primary: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    detail: "contato@monklaser.com",
    helper: "Envie referências, medidas e arquivos técnicos.",
    href: "mailto:contato@monklaser.com?subject=Or%C3%A7amento%20MonkLaser",
    primary: false,
  },
  {
    icon: Instagram,
    title: "Instagram",
    detail: "@monklaser",
    helper: "Veja a identidade, bastidores e peças finalizadas.",
    href: "https://instagram.com/monklaser",
    primary: false,
  },
];

export default function QuoteForm() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-white p-5 text-[#4b3192]">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)] text-white">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand)]">contato direto</p>
            <h3 className="mt-1 text-2xl font-black">Fale com a MonkLaser</h3>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-[#654f8f]">
          Sem formulário longo: escolha um canal e mande sua ideia, medidas ou arquivo.
        </p>
      </div>

      <div className="space-y-3">
        {CONTACT_OPTIONS.map((option) => {
          const Icon = option.icon;

          return (
            <a
              key={option.title}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all ${
                option.primary
                  ? "border-[var(--brand)] bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)]"
                  : "border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/15"
              }`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  option.primary ? "bg-white text-[var(--brand)]" : "bg-white text-[#4b3192]"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-black">{option.title}</p>
                <p className={`truncate text-sm font-semibold ${option.primary ? "text-white" : "text-white/90"}`}>{option.detail}</p>
                <p className={`mt-1 text-xs leading-5 ${option.primary ? "text-white/80" : "text-white/65"}`}>{option.helper}</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
