import React from 'react';
import { Button } from '../ui/Button';
import { BlurText } from '../ui/BlurText';
import { Reveal } from '../ui/Reveal';
import { TechnicalGrid } from '../ui/TechnicalGrid';
import { HexagonMotif } from '../ui/HexagonMotif';
import { ImageReveal } from '../ui/ImageReveal';
import { ParallaxItem } from '../ui/ParallaxItem';
import { ArrowRight, CheckCircle2, ShieldCheck, Database, FileText } from 'lucide-react';
import heroImg from '../../assets/images/hero_erp_operations_1791563324980.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white">
      <TechnicalGrid crosshairs={true} />
      <div className="absolute top-10 right-10 opacity-60 hidden xl:block pointer-events-none">
        <HexagonMotif size={160} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1749C7]">
                <span>Fábrica de Software</span>
                <span aria-hidden="true">·</span>
                <span>ERP & Soluciones de Gestión en Perú</span>
              </div>
            </Reveal>

            <BlurText
              text="Tecnología que conecta tus procesos empresariales."
              as="h1"
              wordByWord
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#10274D] tracking-tight leading-[1.12]"
            />

            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl text-pretty font-normal">
                Desarrollamos soluciones de software que ayudan a las empresas a gestionar mejor
                sus operaciones, integrar sus procesos y tomar decisiones con mayor información.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  to="/contacto"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
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
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1749C7]" />
                  <span>SUNAT Facturación & Guías GRE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1749C7]" />
                  <span>Kardex Valorizado & Multisede</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1749C7]" />
                  <span>Acompañamiento Técnico Directo</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <ParallaxItem offset={16}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-900/10 bg-slate-900 group">
                <ImageReveal
                  src={heroImg}
                  alt="Centro de control operativo y gestión empresarial con DSINet"
                  direction="right"
                  duration={0.9}
                  overlayScrim={true}
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px]"
                >
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#1749C7]">
                          DSINet ERP Core
                        </div>
                        <div className="text-sm font-semibold text-slate-900 mt-0.5">
                          Control total en almacén, ventas y finanzas
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          Sincronización en tiempo real para empresas y distribuidoras en Perú.
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageReveal>
              </div>
            </ParallaxItem>
          </div>
        </div>

        <Reveal delay={0.45} yOffset={20}>
          <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#1749C7]">
                <Database className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Kardex Centralizado</span>
              </div>
              <p className="text-sm text-slate-600 leading-snug pt-1">
                Control de inventarios y transferencias entre múltiples almacenes y sucursales.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#1749C7]">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Emisión Electrónica</span>
              </div>
              <p className="text-sm text-slate-600 leading-snug pt-1">
                Facturas, Boletas y Guías de Remisión Electrónicas (GRE) validadas ante SUNAT.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#1749C7]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Gestión Crediticia</span>
              </div>
              <p className="text-sm text-slate-600 leading-snug pt-1">
                Seguimiento de líneas de crédito, letras por cobrar y cartera vencida de clientes.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#1749C7]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Desarrollo Propio</span>
              </div>
              <p className="text-sm text-slate-600 leading-snug pt-1">
                Fábrica de software con capacidad de adaptación y soporte técnico local.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
