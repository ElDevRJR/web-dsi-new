import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlurText } from '../components/ui/BlurText';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { ImageReveal } from '../components/ui/ImageReveal';
import { TechnicalGrid } from '../components/ui/TechnicalGrid';
import { HexagonMotif } from '../components/ui/HexagonMotif';
import { CTASection } from '../components/sections/CTASection';
import {
  Code2,
  CheckCircle2,
  Users,
  Compass,
  Headphones,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react';
import aboutImg from '../assets/images/peru_business_management_1791563355465.jpg';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="Nosotros | DSISAC Fábrica de Software"
        description="Conoce a DSISAC: fábrica de software peruana especializada en el desarrollo de soluciones de gestión empresarial, arquitectura de software y acompañamiento técnico."
        canonicalPath="/nosotros"
      />

      <main className="py-12 lg:py-20 relative overflow-hidden">
        <TechnicalGrid crosshairs={false} />

        <Container className="relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Identidad & Enfoque
            </span>
            <BlurText
              text="Ingeniería de software centrada en la realidad de la empresa"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              En DSISAC combinamos experiencia práctica en procesos comerciales y logística con
              capacidad técnica de desarrollo para construir herramientas que simplifican el control
              operativo y tributario.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <ImageReveal
                src={aboutImg}
                alt="Reunión técnica y de gestión empresarial en DSISAC"
                direction="left"
                duration={0.9}
                overlayScrim={true}
                className="w-full h-[400px]"
              >
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Compromiso de Continuidad
                  </div>
                  <div className="text-base font-bold mt-1">
                    Soluciones diseñadas para perdurar y evolucionar con el negocio.
                  </div>
                </div>
              </ImageReveal>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10274D]">Quiénes somos</h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Somos una fábrica de software conformada por ingenieros, analistas y consultores
                enfocados en el desarrollo e implementación de sistemas de gestión empresarial
                (ERP), emisión electrónica SUNAT y soluciones tecnológicas a medida.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                A diferencia de los proveedores que revenden licencias empaquetadas sin posibilidad
                de intervención, nosotros desarrollamos y mantenemos el código fuente de nuestras
                soluciones. Esto nos permite entender el flujo operativo a fondo y brindar
                respuestas técnicas directas, sin dependencias de terceros.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7]" />
                  <span>Desarrollo propio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7]" />
                  <span>Soporte en Perú</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7]" />
                  <span>Alineación normativa SUNAT</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7]" />
                  <span>Arquitectura modular</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <SectionHeading
              kicker="Metodología"
              title="Cómo acompañamos a nuestros clientes"
              description="Nuestra labor no concluye con la entrega de una instalación. Estructuramos un proceso metódico para asegurar que el sistema se convierta en el pilar operativo de la organización."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Reveal delay={0.08}>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1749C7] mb-6">
                      <Compass className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      01. Diagnóstico Inicial
                    </span>
                    <h3 className="text-lg font-bold text-[#10274D] mb-3">
                      Entendimiento de la Operación
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Revisamos cómo se compran, almacenan, venden y cobran los productos actualmente,
                      identificando cuellos de botella y riesgos antes de configurar los parámetros.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1749C7] mb-6">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      02. Despliegue y Pruebas
                    </span>
                    <h3 className="text-lg font-bold text-[#10274D] mb-3">
                      Parametrización y Migración
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Carga de catálogos de productos, listas de clientes, saldos iniciales de Kardex
                      y configuración de comprobantes de pago con pruebas controladas en emisor.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1749C7] mb-6">
                      <Headphones className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      03. Acompañamiento Continuo
                    </span>
                    <h3 className="text-lg font-bold text-[#10274D] mb-3">
                      Capacitación y Mesa de Ayuda
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Entrenamos al personal de caja, almacén y administración. Mantenemos canales de
                      soporte activos para resolver dudas durante las horas de alta actividad.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#10274D] text-white relative overflow-hidden">
            <TechnicalGrid variant="dark" />
            <div className="relative max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Capacidades Técnicas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Especialización funcional y tecnológica
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nuestra experiencia abarca sistemas de escritorio cliente-servidor de alto
                rendimiento para puntos de venta y cajas rápidas, así como arquitecturas en la nube
                para el enlace de almacenes remotos y servicios web de emisión electrónica.
              </p>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 mt-10 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-base font-bold text-white block">Sistemas ERP Transaccionales</span>
                <p className="text-xs text-slate-300">
                  Desarrollo de motores de Kardex y contabilidad operacional.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-base font-bold text-white block">Integración con SUNAT / OSE</span>
                <p className="text-xs text-slate-300">
                  Generación UBL, firma digital y canal seguro de contingencia.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-base font-bold text-white block">Infraestructura y VPS</span>
                <p className="text-xs text-slate-300">
                  Entornos virtuales dedicados para trabajo en red multisede.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-base font-bold text-white block">Desarrollo a la Medida</span>
                <p className="text-xs text-slate-300">
                  Módulos e interfaces a medida cuando la operación lo demanda.
                </p>
              </div>
            </div>

            <div className="relative pt-10 flex flex-wrap items-center gap-4">
              <Button to="/contacto" variant="primary" size="md">
                Conversar con nuestro equipo
              </Button>
              <Button
                to="/soluciones/dsinet-erp-core"
                variant="outline"
                size="md"
                className="!bg-transparent !text-white !border-white/30 hover:!bg-white/10 hover:!border-white hover:!text-white"
              >
                Ver DSINet ERP Core
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
