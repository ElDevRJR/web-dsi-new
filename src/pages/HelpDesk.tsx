import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { MessageCircle, Phone, Mail, Clock, HelpCircle, ShieldAlert, ArrowRight, Laptop } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/navigation';
import { CTASection } from '../components/sections/CTASection';

export const HelpDesk: React.FC = () => {
  return (
    <>
      <SEO
        title="Mesa de Ayuda y Canales de Asistencia | DSISAC"
        description="Acceso a la mesa de ayuda técnica de DSISAC. Instrucciones claras para reportar incidencias, soporte remoto y horarios de atención al cliente."
        canonicalPath="/mesa-de-ayuda"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Atención a Clientes
            </span>
            <BlurText
              text="Mesa de Ayuda DSISAC"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              Canal de orientación y soporte técnico para usuarios activos de DSINet ERP y soluciones
              desarrolladas por DSISAC. Sigue las instrucciones para una atención rápida y efectiva.
            </p>
          </div>

          {/* Quick Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-[#10274D]">Canal WhatsApp Directo</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Canal recomendado para enviar capturas de pantalla de mensajes de error, fotos de
                  comprobantes o consultas operativas rápidas.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Button
                  href={COMPANY_CONTACT.whatsappUrl}
                  isExternal
                  variant="primary"
                  size="sm"
                  className="w-full justify-center bg-emerald-600 hover:bg-emerald-700"
                >
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1749C7] flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-[#10274D]">Central de Soporte</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Comunícate telefónicamente con nuestros operadores de guardia para incidencias de
                  alta prioridad en cajas de venta o andenes de despacho.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
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

            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-[#10274D]">Correo Institucional</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Envío de solicitudes de modificación de formatos, archivos de backup para revisión
                  o consultas contractuales.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
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

          {/* Instructions for Fast Resolution */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 mb-20">
            <SectionHeading
              kicker="Protocolo de Atención"
              title="Recomendaciones para agilizar tu atención"
              description="Para que nuestros analistas puedan identificar y solucionar el inconveniente en el menor tiempo posible, te sugerimos tener a mano los siguientes datos al momento de contactarnos:"
              className="mb-8"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-white border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-[#1749C7]">
                  <Laptop className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    1. Datos de la Empresa y Estación
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Indica la razón social de tu empresa y el número o nombre de la máquina/sucursal donde
                  ocurre la incidencia (ej. Caja 1 Sede Central).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-[#1749C7]">
                  <ShieldAlert className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    2. Mensaje o Código de Error Exacto
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Captura la ventana completa donde se muestra la advertencia o código tributario de
                  SUNAT antes de cerrar la aplicación.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-[#1749C7]">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    3. Horario de Atención Regular
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lunes a Viernes de 8:30 a.m. a 6:30 p.m. y Sábados de 9:00 a.m. a 1:00 p.m.
                  (Horario de Lima, Perú).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-[#1749C7]">
                  <HelpCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    4. Asistencia Remota
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ten preparado tu software de asistencia remota autorizado por la empresa si la
                  incidencia requiere revisión directa del técnico.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
