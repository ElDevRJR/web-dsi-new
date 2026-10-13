
import React from 'react';
import { Button } from '../ui/Button';
import { BlurText } from '../ui/BlurText';
import { Reveal } from '../ui/Reveal';
import { TechnicalGrid } from '../ui/TechnicalGrid';
import { HexagonMotif } from '../ui/HexagonMotif';
import { ImageReveal } from '../ui/ImageReveal';
import { ParallaxItem } from '../ui/ParallaxItem';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Database,
  FileText,
  TrendingUp,
} from 'lucide-react';
import heroImg from '../../assets/images/hero_erp_operations_1791563324980.jpg';

const benefits = [
  {
    icon: Database,
    title: 'Inventarios centralizados',
    description:
      'Control de existencias, movimientos y transferencias entre almacenes y sucursales.',
  },
  {
    icon: FileText,
    title: 'Facturación electrónica',
    description:
      'Gestiona comprobantes electrónicos y guías de remisión desde tu sistema.',
  },
  {
    icon: ShieldCheck,
    title: 'Control financiero',
    description:
      'Organiza créditos, letras por cobrar y obligaciones de tus operaciones.',
  },
  {
    icon: TrendingUp,
    title: 'Información integrada',
    description:
      'Conecta los procesos de tu empresa para trabajar con información más consistente.',
  },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-24 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 z-0">
        <TechnicalGrid crosshairs={true} />
        <div className="absolute inset-0 bg-transparent" aria-hidden="true" />
        <div className="absolute right-8 top-12 hidden opacity-40 xl:block">
          <HexagonMotif size={160} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-7 text-left lg:col-span-7">
            <Reveal delay={0.05} yOffset={14}>
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 shadow-sm shadow-blue-900/[0.03]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1749C7]" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1749C7] sm:text-xs">
                  Fábrica de Software
                </span>

                <span className="text-slate-300" aria-hidden="true">
                  /
                </span>

                <span className="text-[11px] font-medium text-slate-600 sm:text-xs">
                  Soluciones empresariales en Perú
                </span>
              </div>
            </Reveal>

            <div data-no-global-reveal>
              <BlurText
                text="Conecta tus procesos. Potencia tu empresa."
                as="h1"
                wordByWord
                className="max-w-3xl text-4xl font-extrabold leading-[1.06] tracking-[-0.045em] text-[#10274D] sm:text-5xl md:text-6xl lg:text-[3.75rem]"
              />
            </div>

            <Reveal delay={0.18} yOffset={20} duration={0.8}>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
                Desarrollamos software empresarial y soluciones de gestión
                que ayudan a integrar tus operaciones, controlar tus procesos
                y tomar decisiones con información más clara.
              </p>
            </Reveal>

            <Reveal delay={0.3} yOffset={18}>
              <div className="flex flex-col items-stretch gap-3.5 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  to="/contacto"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Solicita una demostración
                </Button>

                <Button
                  to="/soluciones/dsinet-erp-core"
                  variant="outline"
                  size="lg"
                >
                  Conoce nuestras soluciones
                </Button>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Conversemos sobre los procesos y necesidades de tu empresa.
              </p>
            </Reveal>

            <Reveal delay={0.4} yOffset={14}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1749C7]" />
                  <span>Facturación y guías electrónicas</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1749C7]" />
                  <span>Inventarios y múltiples almacenes</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1749C7]" />
                  <span>Soporte técnico local</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <ParallaxItem offset={12}>
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div
                  className="absolute -inset-4 rounded-[2rem] bg-blue-100/30 blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative rounded-2xl border border-white bg-white p-2 shadow-2xl shadow-blue-950/10 sm:p-3">
                  <div className="relative isolate overflow-hidden rounded-xl bg-[#10274D]">
                    <ImageReveal
                      src={heroImg}
                      alt="Visual de operaciones y gestión empresarial con DSI-NET"
                      direction="right"
                      duration={1}
                      overlayScrim={true}
                      className="h-[340px] w-full sm:h-[430px] lg:h-[470px]"
                    >
                      <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between gap-3 sm:left-5 sm:right-5 sm:top-5">
                        <div className="rounded-lg border border-white/20 bg-[#10274D]/75 px-3 py-2 backdrop-blur-md">
                          <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200">
                            Gestión empresarial
                          </span>
                          <span className="mt-0.5 block text-sm font-semibold text-white">
                            DSI-NET ERP
                          </span>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#10274D]/65 px-3 py-2 backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[10px] font-medium text-white sm:text-xs">
                            Procesos conectados
                          </span>
                        </div>
                      </div>

                      <Reveal delay={0.35} yOffset={16}>
                        <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                              <TrendingUp className="h-5 w-5 text-[#1749C7]" />
                            </div>

                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1749C7]">
                                Visión integrada
                              </span>

                              <p className="mt-1 text-sm font-bold leading-snug text-[#10274D] sm:text-base">
                                Más control sobre las operaciones de tu empresa
                              </p>

                              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                                Compras, ventas, almacenes y gestión financiera
                                desde una solución empresarial.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    </ImageReveal>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -right-3 -z-10 hidden h-24 w-24 rounded-2xl border border-blue-200/70 sm:block"
                  aria-hidden="true"
                />
              </div>
            </ParallaxItem>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200/80 pt-9 sm:mt-20 sm:pt-11">
          <Reveal delay={0.1} yOffset={12}>
            <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1749C7]">
                  Capacidades de gestión
                </p>

                <h2 className="mt-2 text-xl font-bold tracking-tight text-[#10274D] sm:text-2xl">
                  Procesos conectados. Mejor control.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-slate-500">
                Herramientas para organizar las operaciones diarias
                y tener una visión más clara del negocio.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  delay={0.12 + index * 0.1}
                  yOffset={18}
                  duration={0.7}
                >
                  <div className="group h-full rounded-xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/[0.05]">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-300 group-hover:bg-[#1749C7]">
                      <Icon className="h-5 w-5 text-[#1749C7] transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <h3 className="text-sm font-bold text-[#10274D]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
