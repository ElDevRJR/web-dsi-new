import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Headphones, MessageCircle, Phone, Mail, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/navigation';
import { CTASection } from '../components/sections/CTASection';

export const Support: React.FC = () => {
  return (
    <>
      <SEO
        title="Servicio de Soporte Técnico | DSISAC"
        description="Acompañamiento técnico, mesa de ayuda y resolución de incidencias para usuarios y administradores de sistemas DSINet."
        canonicalPath="/servicios/soporte"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Servicio Especializado
            </span>
            <BlurText
              text="Servicio de Soporte Técnico"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              La continuidad de tu facturación, ventas y almacén es nuestra prioridad. Ofrecemos
              asistencia técnica calificada para responder dudas de uso, resolver incidencias
              operativas y brindar acompañamiento en contingencias SUNAT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#1749C7]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#10274D]">Atención por WhatsApp</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Canal ágil para consultas rápidas, envío de capturas de pantalla de errores y
                coordinación con los analistas de soporte.
              </p>
              <div className="pt-2">
                <Button
                  href={COMPANY_CONTACT.whatsappUrl}
                  isExternal
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                >
                  Abrir WhatsApp de Soporte
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#1749C7]">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#10274D]">Central Telefónica</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comunicación directa para incidencias críticas que requieran atención inmediata en
                caja o andén de despacho.
              </p>
              <div className="pt-2">
                <Button
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Llamar: {COMPANY_CONTACT.phone}
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#1749C7]">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#10274D]">Correo Electrónico</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Para solicitudes de ajustes de formatos, revisión de bases de datos o consultas
                administrativas y comerciales.
              </p>
              <div className="pt-2">
                <Button
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  {COMPANY_CONTACT.email}
                </Button>
              </div>
            </div>
          </div>

          {/* Scope of support */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 mb-20">
            <SectionHeading
              kicker="Alcance de Atención"
              title="¿Qué cubre nuestro servicio de soporte?"
              description="Acompañamos tanto a las empresas clientes con instalaciones vigentes como a nuevos equipos en proceso de adaptación."
              className="mb-8"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                <span>Diagnóstico y asistencia remota sobre estaciones de trabajo con DSINet.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                <span>Revisión de comprobantes observados o con inconsistencias ante SUNAT.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                <span>Orientación operativa al incorporar nuevos colaboradores a la empresa.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                <span>Verificación de la integridad de la base de datos y copias de seguridad.</span>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
