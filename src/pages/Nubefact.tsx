import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { Button } from '../components/ui/Button';
import { CloudLightning, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export const Nubefact: React.FC = () => {
  return (
    <>
      <SEO
        title="NubeFact - OSE | Integración de Facturación Electrónica | DSISAC"
        description="Integración de comprobantes y validación electrónica mediante NubeFact OSE para empresas con alta exigencia transaccional y disponibilidad continua."
        canonicalPath="/servicios/nubefact-ose"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Operador de Servicios Electrónicos
            </span>
            <BlurText
              text="NubeFact - OSE"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              Conexión e integración del servicio de validación de comprobantes a través de
              NubeFact Operador de Servicios Electrónicos (OSE), garantizando respuesta y constancia
              de recepción (CDR) en milisegundos para operaciones comerciales de alto volumen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-[#10274D]">
                Emisión estable para empresas con flujo comercial continuo
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Para negocios mayoristas, tiendas con múltiples cajas y empresas designadas como
                principales contribuyentes, depender del servidor general de SUNAT en horas pico puede
                ocasionar demoras en la respuesta de comprobantes.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                En DSISAC estructuramos la integración nativa entre DSINet y el OSE NubeFact,
                asegurando que cada comprobante emitido sea verificado, validado y respaldado de
                forma casi instantánea.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Configuración de token y credenciales seguras de conexión en DSINet.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Validación estricta de estructura XML y catálogos de códigos UBL.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Almacenamiento seguro y trazabilidad de las constancias CDR de SUNAT.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-8 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1749C7]">
                <CloudLightning className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10274D]">
                ¿Tu empresa requiere migrar hacia un OSE?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Coordinamos contigo los requerimientos técnicos y el proceso de vinculación en el
                portal de SUNAT para que tu facturación opere sin interrupciones.
              </p>
              <Button to="/contacto" variant="primary" size="md" className="w-full justify-center">
                Consultar integración con NubeFact
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
