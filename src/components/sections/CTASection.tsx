import React from 'react';
import { Button } from '../ui/Button';
import { BlurText } from '../ui/BlurText';
import { Reveal } from '../ui/Reveal';
import { PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../../data/navigation';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-[#10274D] to-[#0D1E3A] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Reveal delay={0.05}>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Acompañamiento Empresarial
          </span>
        </Reveal>

        <BlurText
          text="¿Listo para articular tus compras, almacenes y ventas en un solo flujo?"
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance"
        />

        <Reveal delay={0.2}>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-pretty font-normal">
            Coordina una demostración guiada de DSINet ERP Core o solicita una evaluación técnica
            para el desarrollo de software a la medida de tus procesos.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/contacto"
              variant="primary"
              size="lg"
              className="bg-[#1749C7] hover:bg-blue-600 shadow-lg shadow-blue-900/40"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Solicitar Demostración
            </Button>
            <Button
              href={COMPANY_CONTACT.whatsappUrl}
              isExternal
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white"
              icon={<MessageCircle className="w-4 h-4 text-emerald-400" />}
              iconPosition="left"
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="pt-8 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
            <span>Atención de Lunes a Viernes 8:30 am - 6:30 pm</span>
            <span>·</span>
            <span>ventas@dsi-sac.com</span>
            <span>·</span>
            <span>Lima, Perú</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
