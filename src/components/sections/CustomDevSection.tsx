
import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { MotionCard } from '../ui/MotionCard';
import {
  Code2,
  GitMerge,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import teamImg from '../../assets/images/enterprise_consulting_team_1791563345025.jpg';

const capabilities = [
  {
    icon: Code2,
    title: 'Sistemas a la medida',
    description:
      'Aplicaciones web y de escritorio diseñadas según la lógica y las necesidades reales de tu negocio.',
  },
  {
    icon: GitMerge,
    title: 'Integración de sistemas',
    description:
      'Conectamos tus bases de datos, plataformas de comercio electrónico y sistemas empresariales.',
  },
  {
    icon: Cpu,
    title: 'Modernización operativa',
    description:
      'Transformamos procesos manuales y hojas de cálculo en soluciones digitales más confiables.',
  },
  {
    icon: CheckCircle2,
    title: 'Capacitación y despliegue',
    description:
      'Acompañamos la implementación con capacitación para tu equipo y documentación técnica.',
  },
];

export const CustomDevSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50/60 py-20 sm:py-24 lg:py-28">
      {/* Detalle visual sutil de marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Imagen principal */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <MotionCard
              delay={0.08}
              lift={5}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.35)]">
                <img
                  src={teamImg}
                  alt="Equipo de ingeniería y desarrollo de software de DSISAC"
                  className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[420px] lg:h-[490px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                {/* Identificación de la sección */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px w-7 bg-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                      DSISAC · Fábrica de Software
                    </span>
                  </div>

                  <h3 className="max-w-sm text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                    Tecnología diseñada alrededor de tu negocio.
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-200">
                    Soluciones construidas para responder a tus procesos,
                    objetivos y desafíos operativos.
                  </p>
                </div>

                {/* Acento de marca */}
                <div className="absolute left-0 top-0 h-1 w-24 bg-[#1749C7]" />
              </div>
            </MotionCard>

            <Reveal delay={0.25} yOffset={12}>
              <div className="mt-5 flex items-center gap-3 px-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-[#1749C7] shadow-sm">
                  <Code2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    De la necesidad a la solución
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    Ingeniería enfocada en problemas reales.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contenido y capacidades */}
          <div className="order-1 space-y-7 lg:order-2 lg:col-span-7">
            <SectionHeading
              kicker="Ingeniería y adaptación"
              title="Desarrollo de software a medida"
              description="Cuando una solución comercial no se adapta a tu operación, diseñamos y desarrollamos sistemas personalizados que responden a la forma en que trabaja tu empresa."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <MotionCard
                    key={capability.title}
                    delay={0.12 + index * 0.12}
                    lift={5}
                    className="h-full rounded-xl"
                  >
                    <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200/90 bg-white p-5 transition-colors duration-300 hover:border-blue-200">
                      {/* Línea de acento */}
                      <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#1749C7] transition-all duration-300 group-hover:w-full" />

                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1749C7] transition-colors duration-300 group-hover:bg-[#1749C7] group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="text-sm font-bold leading-snug text-slate-900">
                          {capability.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-relaxed text-slate-600">
                        {capability.description}
                      </p>
                    </div>
                  </MotionCard>
                );
              })}
            </div>

            {/* Llamadas a la acción */}
            <Reveal delay={0.35} yOffset={14}>
              <div className="flex flex-col items-start gap-3 border-t border-slate-200/80 pt-6 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  to="/soluciones/software-a-medida"
                  variant="primary"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Conocer etapas de desarrollo
                </Button>

                <Button to="/contacto" variant="outline">
                  Consultar requerimiento técnico
                </Button>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                ¿Tienes un proceso que necesitas automatizar? Conversemos
                sobre lo que tu empresa necesita.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
