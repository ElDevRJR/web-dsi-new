import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { Button } from '../components/ui/Button';
import { COMPANY_CONTACT } from '../data/navigation';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  ExternalLink,
} from 'lucide-react';

const contactSchema = z.object({
  nombre: z.string().min(2, 'Por favor, ingresa tu nombre completo.'),
  empresa: z.string().min(2, 'Por favor, ingresa la razón social o nombre comercial de tu empresa.'),
  email: z.string().email('Por favor, ingresa un correo electrónico corporativo válido.'),
  telefono: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9+() -]{7,15}$/.test(val), {
      message: 'Ingresa un número telefónico válido (ej. +51 940 769 186).',
    }),
  tipoConsulta: z.enum(['demo', 'erp', 'soporte', 'medida', 'otro']),
  mensaje: z
    .string()
    .min(10, 'Por favor, detalla tu requerimiento o dudas con al menos 10 caracteres.'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<ContactFormInputs | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      tipoConsulta: 'demo',
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setSubmissionState('loading');
    // Simulate brief client validation processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmittedData(data);
      setSubmissionState('success');
      reset();
    } catch {
      setSubmissionState('error');
    }
  };

  const getWhatsAppDispatchUrl = (data: ContactFormInputs) => {
    const text = encodeURIComponent(
      `Hola DSISAC, soy ${data.nombre} de la empresa ${data.empresa}. Mi correo es ${data.email}${
        data.telefono ? ` y mi teléfono ${data.telefono}` : ''
      }. Tipo de consulta: ${data.tipoConsulta}. Mensaje: ${data.mensaje}`
    );
    return `https://wa.me/51940769186?text=${text}`;
  };

  const getMailtoUrl = (data: ContactFormInputs) => {
    const subject = encodeURIComponent(`Consulta Comercial - ${data.empresa} (${data.tipoConsulta})`);
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmpresa: ${data.empresa}\nCorreo: ${data.email}\nTeléfono: ${
        data.telefono || 'No especificado'
      }\nTipo de consulta: ${data.tipoConsulta}\n\nMensaje:\n${data.mensaje}`
    );
    return `mailto:ventas@dsi-sac.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEO
        title="Contacto Comercial y Demostraciones | DSISAC"
        description="Ponte en contacto con DSISAC para coordinar una demostración guiada de DSINet ERP Core, consultar por servicios técnicos o desarrollo a medida."
        canonicalPath="/contacto"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Atención Directa
            </span>
            <BlurText
              text="Contáctanos y solicita una demostración"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              Conversemos sobre los requerimientos de tu empresa. Te orientamos sobre los módulos
              de DSINet ERP Core o evaluamos el alcance de un desarrollo de software a medida.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm">
              <h2 className="text-xl font-bold text-[#10274D] mb-6">Formulario de Requerimiento</h2>

              {submissionState === 'success' && submittedData ? (
                <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-4">
                  <div className="flex items-center gap-2 text-[#1749C7] font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Datos listos para despacho</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Muchas gracias, <strong>{submittedData.nombre}</strong> ({submittedData.empresa}).
                    Tus datos han sido validados. Para recibir respuesta instantánea, puedes despachar
                    tu consulta con 1 clic a través de WhatsApp o correo electrónico:
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppDispatchUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enviar por WhatsApp a Asesor</span>
                    </a>
                    <a
                      href={getMailtoUrl(submittedData)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1749C7] hover:bg-blue-700 text-white text-xs font-bold transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Enviar a ventas@dsi-sac.com</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmissionState('idle')}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nombre */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Nombre completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Carlos Mendoza"
                        {...register('nombre')}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1749C7] transition-all ${
                          errors.nombre ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.nombre && (
                        <p className="mt-1 text-xs text-red-600">{errors.nombre.message}</p>
                      )}
                    </div>

                    {/* Empresa */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Empresa / Negocio <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Distribuidora Lima S.A.C."
                        {...register('empresa')}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1749C7] transition-all ${
                          errors.empresa ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.empresa && (
                        <p className="mt-1 text-xs text-red-600">{errors.empresa.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="carlos@empresa.com"
                        {...register('email')}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1749C7] transition-all ${
                          errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Teléfono / WhatsApp <span className="text-slate-400 font-normal">(Opcional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+51 987 654 321"
                        {...register('telefono')}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1749C7] transition-all ${
                          errors.telefono ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.telefono && (
                        <p className="mt-1 text-xs text-red-600">{errors.telefono.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Tipo de Consulta */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tipo de consulta <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('tipoConsulta')}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1749C7]"
                    >
                      <option value="demo">Solicitud de Demostración de DSINet ERP</option>
                      <option value="erp">Consulta sobre Módulos de ERP (Compras, Almacén, Ventas)</option>
                      <option value="medida">Desarrollo de Software a Medida</option>
                      <option value="soporte">Servicio de Soporte Técnico / Consultoría</option>
                      <option value="otro">Certificados Digitales / VPS / Otro requerimiento</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Mensaje / Detalle de tu operación <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos sobre tu empresa: volumen de productos, cantidad de sedes, o dudas operativas..."
                      {...register('mensaje')}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1749C7] transition-all ${
                        errors.mensaje ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.mensaje && (
                      <p className="mt-1 text-xs text-red-600">{errors.mensaje.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                      disabled={submissionState === 'loading'}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {submissionState === 'loading' ? 'Validando datos...' : 'Enviar Solicitud'}
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-normal text-center pt-1">
                    Tus datos son tratados bajo estricta confidencialidad comercial y profesional.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Contact Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6">
                <h3 className="text-lg font-bold text-[#10274D]">Canales Directos</h3>

                <div className="space-y-4">
                  <a
                    href={COMPANY_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group p-3 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-emerald-700">
                        WhatsApp Comercial
                      </span>
                      <span className="text-xs text-slate-500">{COMPANY_CONTACT.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                    className="flex items-start gap-3 group p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1749C7] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-[#1749C7]">
                        Central Telefónica
                      </span>
                      <span className="text-xs text-slate-500">{COMPANY_CONTACT.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="flex items-start gap-3 group p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1749C7] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block group-hover:text-[#1749C7]">
                        Correo Electrónico
                      </span>
                      <span className="text-xs text-slate-500">{COMPANY_CONTACT.email}</span>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1749C7]" />
                    <span>Lunes a Viernes: 8:30 am - 6:30 pm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#1749C7]" />
                    <span>Lima, Perú</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Verified */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Redes Oficiales
                </span>
                <div className="flex flex-col gap-2 text-xs">
                  <a
                    href={COMPANY_CONTACT.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-[#1749C7] flex items-center justify-between py-1"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a
                    href={COMPANY_CONTACT.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-[#1749C7] flex items-center justify-between py-1 border-t border-slate-100"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a
                    href={COMPANY_CONTACT.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-[#1749C7] flex items-center justify-between py-1 border-t border-slate-100"
                  >
                    <span>TikTok</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};
