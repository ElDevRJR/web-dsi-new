import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { Button } from '../components/ui/Button';
import { ShieldCheck, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export const DigitalCertificates: React.FC = () => {
  return (
    <>
      <SEO
        title="Certificados Digitales para Facturación Electrónica SUNAT | DSISAC"
        description="Gestión, instalación y validación de certificados digitales tributarios para firma de comprobantes y guías electrónicas en Perú."
        canonicalPath="/servicios/certificados-digitales"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Servicio Tributario & Legal
            </span>
            <BlurText
              text="Certificados Digitales"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              Facilitamos la tramitación, instalación y renovación del certificado digital tributario
              indispensable para firmar digitalmente comprobantes de pago y guías de remisión
              electrónicas emitidas desde DSINet ERP o sistemas propios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-[#10274D]">
                ¿Por qué es obligatorio un certificado digital?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                La normativa tributaria peruana establece que todo contribuyente que emita
                comprobantes electrónicos desde sus propios sistemas debe garantizar la autoría e
                integridad de cada documento mediante una firma digital generada por un certificado
                emitido por una Entidad de Certificación acreditada.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Sin un certificado válido y vigente, los archivos XML no pueden ser generados ni
                recibidos por los servidores de SUNAT, bloqueando inmediatamente la facturación de tu
                empresa.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Asesoría en requisitos documentarios según tipo de personería jurídica.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Instalación técnica en el servidor o estación emisora de DSINet.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Emisión de pruebas de firma y confirmación de RUC ante el ente fiscal.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-8 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1749C7]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10274D]">
                ¿Necesitas tramitar o renovar tu certificado?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ponte en contacto con nuestro equipo comercial para informarte sobre los pasos de
                gestión, los documentos requeridos y programar la instalación técnica en tu sistema.
              </p>
              <Button to="/contacto" variant="primary" size="md" className="w-full justify-center">
                Consultar sobre Certificados Digitales
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
