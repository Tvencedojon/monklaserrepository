import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Layers3,
  Menu,
  PackageCheck,
  Phone,
  Ruler,
  ShieldCheck,
  Target,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import BeforeAfterSlider from "./components/BeforeAfterSlider";
import FAQSection from "./components/FAQSection";
import IkeaDemonstrator from "./components/IkeaDemonstrator";
import LGPDBanner from "./components/LGPDBanner";
import MonkeyMascot from "./components/MonkeyMascot";
import QuoteForm from "./components/QuoteForm";
import ServiceShowcase from "./components/ServiceShowcase";
import StepTimeline from "./components/StepTimeline";

const NAV_ITEMS = [
  { id: "quem-somos", label: "Quem somos" },
  { id: "servicos", label: "Soluções" },
  { id: "como-trabalhamos", label: "Processo" },
  { id: "para-quem", label: "Segmentos" },
  { id: "perguntas", label: "FAQ" },
];

const TRUST_METRICS = [
  { value: "2h", label: "retorno em horário comercial" },
  { value: "1-3 dias", label: "produção média aprovada" },
  { value: "3 linhas", label: "MDF, acrílico e couro" },
  { value: "BR", label: "envio protegido nacional" },
];

const VALUE_PROPS = [
  {
    icon: Ruler,
    title: "Precisão no arquivo",
    text: "Revisamos medidas, espessuras, folgas e encaixes antes da produção.",
  },
  {
    icon: ClipboardCheck,
    title: "Aprovação clara",
    text: "Você recebe orientação objetiva para material, acabamento, prazo e custo.",
  },
  {
    icon: PackageCheck,
    title: "Acabamento final",
    text: "As peças passam por limpeza, conferência e embalagem reforçada.",
  },
  {
    icon: ShieldCheck,
    title: "Atendimento direto",
    text: "Sem login e sem formulário longo: fale pelo canal que preferir.",
  },
];

const SEGMENTS = [
  {
    icon: Building2,
    title: "Empresas e startups",
    text: "Sinalização, brindes, displays e protótipos para validar ideias com rapidez.",
  },
  {
    icon: CalendarDays,
    title: "Eventos e festas",
    text: "Credenciais, lembranças, topos de bolo e peças decorativas personalizadas.",
  },
  {
    icon: Target,
    title: "Varejo e franquias",
    text: "Expositores, tags, letreiros e materiais de ponto de venda.",
  },
  {
    icon: Wrench,
    title: "Arquitetura e design",
    text: "Maquetes, gabaritos, divisórias, mobiliário compacto e estudos de encaixe.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "A MonkLaser entendeu o arquivo técnico, sugeriu ajuste de espessura e entregou as peças prontas para montagem.",
    author: "Camila Rocha",
    role: "Design de eventos",
  },
  {
    quote:
      "O retorno foi rápido, com orientação clara e acabamento consistente no lote todo.",
    author: "Rafael Nunes",
    role: "Operações de varejo",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function BrandShowcase() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-white/20 bg-[#4b3192] panel-shadow">
      <div className="absolute inset-x-0 top-0 h-24 bg-[var(--brand)]" />
      <div className="absolute -left-24 bottom-[-76px] h-72 w-72 rounded-full border-[34px] border-white/95" />
      <div className="absolute -right-12 bottom-12 h-28 w-28 rotate-[-22deg] rounded-br-[48px] rounded-tl-[48px] border-[20px] border-[var(--brand)] border-l-transparent border-t-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_14%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_18%_82%,rgba(241,70,28,0.2),transparent_30%)]" />

      <div className="relative flex min-h-[520px] flex-col justify-between p-7 sm:p-9">
        <div className="flex justify-center">
          <div className="rounded-full bg-[#4b3192] px-7 pb-2 pt-4 shadow-[0_18px_40px_rgba(29,13,76,0.22)]">
            <MonkeyMascot size={118} interactive={false} />
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--brand)]">
              <span>Precisão</span>
              <span className="h-1 w-1 rounded-full bg-[var(--brand)]" />
              <span>Criatividade</span>
              <span className="h-1 w-1 rounded-full bg-[var(--brand)]" />
              <span>Qualidade</span>
            </div>
            <div className="flex items-center gap-4">
              <MonkeyMascot size={52} interactive={false} />
              <div>
                <p className="text-5xl font-black italic leading-none text-white sm:text-6xl">
                  Monk
                  <span className="block text-[var(--brand)]">Laser</span>
                </p>
                <p className="mt-2 text-xs font-bold text-white/90">Corte e gravação a laser</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:w-[260px]">
            {["MDF", "Acrílico", "Couro"].map((item) => (
              <div key={item} className="rounded-xl bg-white px-3 py-4 text-center text-xs font-black text-[#4b3192] shadow-lg shadow-[#24134f]/20">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-deep text-text-main selection:bg-[var(--brand)] selection:text-white">
      <header className="fixed left-0 top-0 z-[1000] w-full border-b border-white/15 bg-[#4b3192]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">
          <a href="#" className="flex items-center gap-2.5" aria-label="MonkLaser">
            <MonkeyMascot size={42} interactive={false} />
            <span className="text-xl font-black text-white">
              Monk<span className="text-[var(--brand)]">Laser</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-white/72 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => handleNavClick("contato")}
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-strong)]"
            >
              Falar agora <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/18 bg-white/10 text-white"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-0 top-[72px] z-[999] border-b border-white/15 bg-[#4b3192] px-5 py-5 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="rounded-md px-3 py-3 text-left text-base font-semibold text-white/75 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("contato")}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white"
              >
                Falar agora <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="relative overflow-hidden border-b border-white/15 bg-[#4b3192] px-5 pb-16 pt-28 sm:px-6 lg:pt-32">
          <div className="absolute inset-0 bg-grid opacity-55" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:min-h-[78vh] lg:grid-cols-12 lg:gap-14">
            <div className="relative z-10 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/35 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[var(--brand)]"
              >
                <Zap className="h-3.5 w-3.5" />
                Precisão, criatividade e qualidade
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="max-w-3xl text-5xl font-black italic leading-[0.98] text-white sm:text-6xl lg:text-7xl"
              >
                Monk
                <span className="block text-[var(--brand)]">Laser</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-white/78"
              >
                Corte e gravação a laser para MDF, acrílico e couro, com acabamento profissional e contato direto pelo canal que você preferir.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => handleNavClick("contato")}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-5 py-3.5 text-sm font-black text-white transition-colors hover:bg-[var(--brand-strong)]"
                >
                  Chamar no contato <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick("servicos")}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/22 bg-white/10 px-5 py-3.5 text-sm font-black text-white transition-colors hover:bg-white/15"
                >
                  Ver soluções <Layers3 className="h-4 w-4" />
                </button>
              </motion.div>

              <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {TRUST_METRICS.map((item) => (
                  <div key={item.label} className="border-l border-white/22 pl-3">
                    <p className="text-2xl font-black text-white">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-white/68">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="relative z-10 lg:col-span-6"
            >
              <BrandShowcase />
            </motion.div>
          </div>
        </section>

        <section className="border-y-4 border-[#4b3192] bg-white py-3">
          <div className="flex min-w-max items-center justify-center gap-5 overflow-hidden px-4 text-[#4b3192]">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="font-mono text-sm font-black italic">MonkLaser</span>
                <span className="text-[var(--brand)]">✦</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/15 bg-white px-5 py-8 sm:px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["Arquivos aceitos", "DXF, AI, SVG, PDF ou briefing simples"],
              ["Materiais", "MDF, acrílico cristal/colorido e couro"],
              ["Atendimento", "WhatsApp, e-mail e Instagram"],
            ].map(([title, text]) => (
              <div key={title} className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" />
                <div>
                  <p className="text-sm font-black text-[#4b3192]">{title}</p>
                  <p className="mt-1 text-sm text-[#654f8f]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="quem-somos" className="bg-[#4b3192] px-5 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">nossa forma de trabalhar</p>
                <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                  Produção digital com personalidade e acabamento.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-base leading-8 text-white/75">
                  A MonkLaser une revisão técnica, escolha de material e corte a laser para transformar ideias em peças reais: sinalização, displays, brindes, decoração, kits de montagem e protótipos.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {VALUE_PROPS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/16 bg-white/10 p-5">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-black text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/68">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="servicos" className="border-y border-white/15 bg-[#3f2b86] px-5 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">soluções principais</p>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Materiais e aplicações para projetos sob medida.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                Cada material pede um cuidado diferente. A gente orienta o melhor caminho antes de cortar, gravar ou montar.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ServiceShowcase />
            </div>
          </div>
        </section>

        <section id="proposito" className="bg-[#4b3192] px-5 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">design para produção</p>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Peças pensadas para encaixar, comunicar e durar.
              </h2>
            </div>
            <IkeaDemonstrator />
          </div>
        </section>

        <section id="como-trabalhamos" className="border-y border-white/15 bg-[#3f2b86] px-5 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">processo</p>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Do briefing à entrega, sem ruído.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                Você acompanha as etapas críticas: envio do arquivo, revisão, aprovação, produção, qualidade e despacho.
              </p>
            </div>
            <StepTimeline />
          </div>
        </section>

        <section id="para-quem" className="bg-[#4b3192] px-5 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">segmentos atendidos</p>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Projetos para quem precisa de acabamento e previsibilidade.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SEGMENTS.map((segment) => {
                const Icon = segment.icon;
                return (
                  <div key={segment.title} className="rounded-2xl border border-white/16 bg-white/10 p-5">
                    <Icon className="h-6 w-6 text-[var(--brand)]" />
                    <h3 className="mt-5 text-base font-black text-white">{segment.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/68">{segment.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="border-y border-white/15 bg-[#3f2b86] px-5 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">resultado final</p>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Mais clareza entre o arquivo e a peça pronta.
              </h2>
              <div className="mt-8 space-y-4">
                {TESTIMONIALS.map((testimonial) => (
                  <figure key={testimonial.author} className="rounded-2xl border border-white/16 bg-white/10 p-5">
                    <div className="mb-4 flex gap-1 text-[var(--brand)]">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Award key={item} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-7 text-white/72">"{testimonial.quote}"</blockquote>
                    <figcaption className="mt-5">
                      <p className="text-sm font-black text-white">{testimonial.author}</p>
                      <p className="text-xs text-white/52">{testimonial.role}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <BeforeAfterSlider />
            </div>
          </div>
        </section>

        <section id="perguntas" className="bg-[#4b3192] px-5 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">perguntas frequentes</p>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Antes de solicitar seu orçamento.
              </h2>
            </div>
            <FAQSection />
          </div>
        </section>

        <section id="contato" className="border-t border-white/15 bg-[#4b3192] px-5 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand)]">contato</p>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Vamos conversar pelo canal que for mais fácil para você.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                Mande sua ideia, medidas ou arquivo pelo WhatsApp, e-mail ou Instagram. Sem login, sem cadastro e sem formulário longo.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/18 bg-white/10 p-5 panel-shadow sm:p-6 lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#3f2b86] px-5 py-10 text-sm text-white/62 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <MonkeyMascot size={34} interactive={false} />
            <span className="text-lg font-black text-white">
              Monk<span className="text-[var(--brand)]">Laser</span>
            </span>
          </div>
          <div className="text-left sm:text-center">
            <p>© 2026 MonkLaser. Todos os direitos reservados.</p>
            <p className="mt-1 text-xs text-white/42">Rio de Janeir, RJ | Atendimento: segunda a sexta, 9h às 19h</p>
          </div>
          <div className="flex gap-5 text-xs">
            <a href="https://instagram.com/monklaser" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Termos
            </a>
            <a href="#" className="hover:text-white">
              Privacidade
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://w.app/monklaser"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[4000] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-105"
        title="Falar no WhatsApp"
      >
        <Phone className="h-6 w-6" />
      </a>

      <LGPDBanner />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "MonkLaser",
          url: "https://monklaser.com",
          telephone: "+55-21-98229-5059",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rio de Janeiro",
            addressRegion: "RJ",
            addressCountry: "BR",
          },
        })}
      </script>
    </div>
  );
}
