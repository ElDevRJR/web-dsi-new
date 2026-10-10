import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { Button } from '../components/ui/Button';
import { Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export const CloudServer: React.FC = () => {
  return (
    <>
      <SEO
        title="Servidor en la Nube (VPS) para Sistemas de Gestión | DSISAC"
        description="Infraestructura de servidor virtual privado (VPS) para enlazar sucursales, almacenes remotos y permitir acceso seguro a DSINet ERP."
        canonicalPath="/servicios/servidor-vps"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Infraestructura & Conectividad
            </span>
            <BlurText
              text="Servidor en la Nube (VPS)"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              Alojamiento de bases de datos y sistemas de gestión empresarial en entornos virtuales
              dedicados, facilitando que sucursales en distintas ciudades o usuarios remotos operen
              en tiempo real con total estabilidad y seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-[#10274D]">
                Operaciones multisede sin depender de una máquina local
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Cuando una empresa opera con múltiples tiendas, puntos de venta o almacenes de
                despacho distantes, mantener la base de datos en una computadora de oficina genera
                vulnerabilidad frente a cortes de energía, fallas de disco o caídas de internet local.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                A través del servicio de Servidor VPS, configuramos y mantenemos la infraestructura
                en centros de datos certificados con alta disponibilidad, permitiendo accesos remotos
                cifrados y copias de seguridad continuas.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Configuración del motor de base de datos ajustado a DSINet ERP.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Conexión remota cifrada para terminales y sedes autorizadas.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                  <span>Programación de copias de seguridad periódicas de los datos de la empresa.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-8 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1749C7]">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10274D]">
                ¿Planeas interconectar nuevas sucursales?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Evaluamos la cantidad de usuarios concurrentes y el volumen de transacciones para
                recomendar el dimensionamiento adecuado de infraestructura para tu empresa.
              </p>
              <Button to="/contacto" variant="primary" size="md" className="w-full justify-center">
                Consultar sobre Servidores VPS
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
