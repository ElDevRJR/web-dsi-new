import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { Button } from '../components/ui/Button';
import { FileCode, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export const SystemModifications: React.FC = () => {
  return (
    <>
      <SEO
        title="Modificación de Sistema | Adaptación y Ajustes Técnicos | DSISAC"
        description="Adecuación de formatos de impresión, reportes personalizados y comportamientos específicos para usuarios activos de software DSINet."
        canonicalPath="/servicios/modificacion-sistema"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Servicio de Adecuación
            </span>
            <BlurText
              text="Modificación de Sistema"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              Servicio de adaptación técnica sobre instalaciones operativas vigentes: diseño de
              nuevos formatos de impresión, generación de reportes especiales y adecuación de
              criterios operativos a nuevas políticas comerciales de tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-[#10274D]">
                Acompañamos la evolución operativa de tu empresa
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                A medida que una empresa amplía sus líneas de producto o negocia con clientes
                institucionales, surgen requerimientos puntuales: etiquetas con código de barras en
                dimensiones no estándar, reportes de comisiones con fórmulas particulares o adición
                de campos en la emisión de comprobantes.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Al ser los creadores directos del software, en DSISAC evaluamos la viabilidad
                técnica del cambio y lo implementamos asegurando que la estabilidad y el Kardex del
                sistema se mantengan inalterados.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Diseño y calibración de formatos de impresión (Factura, ticket térmico, GRE).</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Creación de reportes operativos y exportaciones personalizadas.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Ajustes en lógica de cálculo de precios, redondeo o listas comerciales.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-8 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1749C7]">
                <FileCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10274D]">
                ¿Requieres un ajuste en tu instalación actual?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Envíanos una muestra del formato o el reporte que necesitas implementar junto con tus
                datos de cliente para evaluar el alcance y los tiempos de entrega.
              </p>
              <Button to="/contacto" variant="primary" size="md" className="w-full justify-center">
                Solicitar evaluación de cambio
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
