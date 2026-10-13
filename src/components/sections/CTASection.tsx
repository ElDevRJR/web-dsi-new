
import React from 'react';
import { Button } from '../ui/Button';
import { BlurText } from '../ui/BlurText';
import { Reveal } from '../ui/Reveal';
import {
  ArrowRight,
  MessageCircle,
  Clock3,
  Mail,
  MapPin,
} from 'lucide-react';
import { COMPANY_CONTACT } from '../../data/navigation';

export const CTASection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-[#10274D] to-[#0D1E3A] py-14 text-white sm:py-16 lg:py-20">
      {/* Cuadrícula tecnológica */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Iluminación sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]"
      />

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Hablemos de tu próximo proyecto
          </span>
        </Reveal>

        <BlurText
          text="Tu empresa puede trabajar de forma más conectada."
          as="h2"
          className="mx-auto mt-4 max-w-4xl text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
        />

        <Reveal delay={0.18}>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Optimiza tus procesos con DSINet ERP Core o desarrolla una
            solución tecnológica adaptada a las necesidades de tu empresa.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              to="/contacto"
              variant="primary"
              size="lg"
              className="justify-center bg-[#1749C7] shadow-lg shadow-blue-950/30 hover:bg-blue-600"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Solicitar demostración
            </Button>

            <Button
              href={COMPANY_CONTACT.whatsappUrl}
              isExternal
              variant="outline"
              size="lg"
              className="justify-center border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
              icon={<MessageCircle className="h-4 w-4 text-emerald-400" />}
              iconPosition="left"
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </Reveal>

        {/* Datos de contacto en una sola franja */}
        <Reveal delay={0.38}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:text-sm">
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-blue-300" />
              Lun. a vie. · 8:30 a. m. – 6:30 p. m.
            </span>

            <a
              href="mailto:ventas@dsi-sac.com"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-blue-300" />
              ventas@dsi-sac.com
            </a>

            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-300" />
              Lima, Perú
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
