import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Code2, GitMerge, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import teamImg from '../../assets/images/enterprise_consulting_team_1791563345025.jpg';

export const CustomDevSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal delay={0.1} yOffset={20}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src={teamImg}
                  alt="Equipo de ingeniería y fábrica de software de DSISAC"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80">
                  <div className="text-xs font-bold text-[#1749C7] uppercase tracking-wider">
                    Fábrica de Software
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    Metodología de ingeniería orientada a procesos reales
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              kicker="Ingeniería y Adaptación"
              title="Desarrollo de Software a Medida"
              description="Cuando las soluciones comerciales cerradas imponen restricciones artificiales o no reflejan la operativa de tu cadena de valor, diseñamos y programamos sistemas personalizados adaptados con exactitud a tu modelo de negocio."
            />

            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-[#1749C7]">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Sistemas a la Medida</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Creación de aplicaciones web y de escritorio alineadas con la lógica operativa interna.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-[#1749C7]">
                    <GitMerge className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Integración de Sistemas</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Conexión entre bases de datos existentes, plataformas de ecommerce y módulos SUNAT.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-[#1749C7]">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Modernización Operativa</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Migración de procesos basados en hojas de cálculo hacia bases de datos relacionales estables.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-[#1749C7]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Capacitación y Despliegue</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entrenamiento directo a los operadores de tu empresa y documentación técnica completa.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  to="/soluciones/software-a-medida"
                  variant="primary"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Conocer etapas de desarrollo
                </Button>
                <Button to="/contacto" variant="outline">
                  Consultar requerimiento técnico
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
