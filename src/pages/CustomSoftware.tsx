import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlurText } from '../components/ui/BlurText';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { ImageReveal } from '../components/ui/ImageReveal';
import { TechnicalGrid } from '../components/ui/TechnicalGrid';
import { CTASection } from '../components/sections/CTASection';
import {
  Code2,
  GitBranch,
  Terminal,
  Database,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react';
import teamImg from '../assets/images/enterprise_consulting_team_1791563345025.jpg';

export const CustomSoftware: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Levantamiento de Requerimientos',
      desc: 'Analizamos a fondo los flujos operativos, entradas de datos, excepciones y salidas esperadas junto a los responsables del área.',
    },
    {
      num: '02',
      title: 'Diseño de Arquitectura y Base de Datos',
      desc: 'Definimos el modelo relacional, las estructuras de seguridad y las reglas de negocio para asegurar estabilidad y escalabilidad.',
    },
    {
      num: '03',
      title: 'Desarrollo Iterativo y Pruebas',
      desc: 'Construcción modular del software con revisiones intermedias y pruebas con casos reales de la empresa en ambientes controlados.',
    },
    {
      num: '04',
      title: 'Puesta en Marcha y Capacitación',
      desc: 'Despliegue en estaciones o servidores, migración de datos iniciales y acompañamiento cercano al personal operativo en el arranque.',
    },
  ];

  return (
    <>
      <SEO
        title="Desarrollo de Software a Medida | DSISAC Fábrica de Software"
        description="Ingeniería y desarrollo de software a la medida en Perú. Creamos sistemas empresariales personalizados e integraciones alineadas con tus procesos operativos."
        canonicalPath="/soluciones/software-a-medida"
      />

      <main className="py-12 lg:py-20 relative overflow-hidden">
        <TechnicalGrid crosshairs={false} />

        <Container className="relative">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Fábrica de Software
            </span>
            <BlurText
              text="Desarrollo de Software a Medida"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              Construimos sistemas y módulos empresariales ajustados exactamente a la dinámica de tu
              organización cuando los paquetes comerciales estándar no satisfacen tus necesidades
              operativas.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Button to="/contacto" variant="primary" size="lg">
                Solicitar evaluación de requerimiento
              </Button>
              <Button href="#etapas" variant="outline" size="lg">
                Ver etapas del proceso
              </Button>
            </div>
          </div>

          {/* Visual Anchor with Image Mask Reveal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <ImageReveal
                src={teamImg}
                alt="Sesión de arquitectura y desarrollo de software empresarial"
                direction="down"
                duration={0.85}
                overlayScrim={true}
                className="w-full h-[380px] sm:h-[440px]"
              >
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Ingeniería Propia
                  </div>
                  <div className="text-base font-bold mt-1">
                    Tu empresa mantiene el control sobre sus reglas de negocio y flujos operativos.
                  </div>
                </div>
              </ImageReveal>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10274D]">
                ¿Cuándo optar por un software a la medida?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Muchas empresas operan con ventajas competitivas que radican precisamente en su
                forma única de comprar, fraccionar productos, despachar o calcular listas de
                precios. Tratar de forzar esos procesos en un sistema enlatado suele generar
                frustración o el uso de múltiples hojas de cálculo paralelas sin seguridad.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Como fábrica de software, en DSISAC diseñamos la arquitectura técnica escuchando a
                los líderes de cada área, logrando herramientas intuitivas que los operadores adoptan
                con rapidez.
              </p>

              <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7]" />
                  <span>Sin licencias por asiento innecesarias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7]" />
                  <span>Conexión directa con bases de datos y sistemas legados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1749C7]" />
                  <span>Capacidad de evolución continua con el mismo equipo desarrollador</span>
                </div>
              </div>
            </div>
          </div>

          {/* Etapas de Trabajo */}
          <div id="etapas" className="mb-24 scroll-mt-28">
            <SectionHeading
              kicker="Metodología de Trabajo"
              title="Etapas estructuradas para garantizar resultados"
              description="Un desarrollo exitoso requiere claridad técnica desde el primer día para cumplir los objetivos operativos sin desvíos de tiempo ni presupuesto."
              className="mb-14"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, index) => (
                <Reveal key={s.num} delay={0.08 * index}>
                  <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                    <div>
                      <div className="text-2xl font-extrabold text-[#1749C7] mb-4">{s.num}</div>
                      <h3 className="text-base font-bold text-[#10274D] mb-2">{s.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form Banner / Callout en Contrast Navy */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#10274D] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <TechnicalGrid variant="dark" />
            <div className="space-y-2 max-w-xl relative">
              <h3 className="text-2xl font-bold">¿Tienes un proyecto o proceso específico en mente?</h3>
              <p className="text-sm text-slate-300">
                Cuéntanos sobre tu modelo de negocio y organizaremos una reunión técnica para
                evaluar la viabilidad y alcance del sistema.
              </p>
            </div>
            <div className="shrink-0 relative">
              <Button to="/contacto" variant="primary" size="lg" className="bg-[#1749C7] hover:bg-blue-600">
                Contactar con nuestro equipo técnico
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
