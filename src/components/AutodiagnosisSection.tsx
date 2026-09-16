import React, { useState } from 'react';
import { AuditFormData } from '../types';
import { ArrowRight, CheckCircle2, Download, RefreshCw, Shield } from 'lucide-react';

interface AutodiagnosisSectionProps {
  id?: string;
}

export const AutodiagnosisSection: React.FC<AutodiagnosisSectionProps> = ({ id = 'diagnostico' }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    role: '',
    company: '',
    email: '',
    sector: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      role: '',
      company: '',
      email: '',
      sector: ''
    });
  };

  return (
    <section
      id={id}
      className="py-20 sm:py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#080C14] to-[#0D1322]"
    >
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-emerald-400 font-['Orbitron'] font-bold tracking-widest text-xs sm:text-sm uppercase block text-glow-green">
            Logística que Impulsa tu Futuro
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Syncopate'] font-bold text-white tracking-tight">
            AUTODIAGNÓSTICO LOGÍSTICO{' '}
            <span className="text-cyan-400">GRATUITO</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Descubre en menos de 48 horas el potencial de ahorro oculto en tu
            cadena de suministro con un informe preliminar de nuestros
            consultores senior.
          </p>
        </div>

        {/* Glass Form Container */}
        <div className="glass-card p-6 sm:p-10 md:p-12 rounded-3xl border border-cyan-400/40 relative shadow-glow-cyan">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Nombre Completo */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white">
                    Nombre Completo
                  </label>
                  <input
                    id="input-full-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-4 py-3 rounded-xl bg-[#080C14]/90 border border-cyan-400/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Cargo Directivo */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white">
                    Cargo en la Empresa
                  </label>
                  <select
                    id="select-role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080C14]/90 border border-cyan-400/30 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="" disabled>
                      Selecciona tu posición
                    </option>
                    <option value="coo">Director de Operaciones (COO)</option>
                    <option value="cfo">Director Financiero (CFO)</option>
                    <option value="logistics_mgr">Gerente de Logística / Supply Chain</option>
                    <option value="general_mgr">Director General / CEO</option>
                    <option value="other">Otro Perfil Directivo</option>
                  </select>
                </div>

                {/* Empresa */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white">
                    Empresa
                  </label>
                  <input
                    id="input-company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ej. Grupo Industrial Andino"
                    className="w-full px-4 py-3 rounded-xl bg-[#080C14]/90 border border-cyan-400/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Correo Corporativo */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white">
                    Correo Corporativo
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="cmendoza@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#080C14]/90 border border-cyan-400/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Sector Industrial */}
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white">
                    Sector de Operación
                  </label>
                  <select
                    id="select-sector"
                    required
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080C14]/90 border border-cyan-400/30 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="" disabled>
                      Selecciona el sector
                    </option>
                    <option value="manufactura">Manufactura & Ensamblaje Industrial</option>
                    <option value="retail">Retail & Gran Consumo (FMCG)</option>
                    <option value="3pl">Operador Logístico 3PL / Almacenaje Multicliente</option>
                    <option value="farmaceutico">Farmacéutico / Cadena de Frío & Salud</option>
                    <option value="agro">Agroindustria & Exportación</option>
                  </select>
                </div>
              </div>

              {/* Botón CTA Neón Formulario */}
              <div className="pt-3">
                <button
                  id="submit-diagnosis-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#080C14] shadow-glow-cyan hover:shadow-glow-green transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Procesando Solicitud...
                    </>
                  ) : (
                    <>
                      Acceder a Autodiagnóstico Logístico
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  Información tratada bajo estrictos acuerdos de confidencialidad
                  B2B (NDA). Cero spam comercial.
                </span>
              </div>
            </form>
          ) : (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-400/15 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-300 shadow-glow-green">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-xl mx-auto">
                <h3 className="text-2xl font-bold font-['Orbitron'] text-white">
                  ¡Diagnóstico Registrado con Éxito!
                </h3>
                <p className="text-sm text-gray-300">
                  Estimado(a) <strong className="text-white">{formData.name}</strong> de{' '}
                  <strong className="text-cyan-400">{formData.company}</strong>, hemos
                  iniciado el análisis preliminar para el sector{' '}
                  <strong className="text-emerald-400 uppercase">{formData.sector}</strong>.
                </p>
              </div>

              {/* Quick Summary Preview Box */}
              <div className="p-5 rounded-2xl bg-[#080C14] border border-cyan-400/30 text-left max-w-lg mx-auto space-y-3">
                <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block">
                  Protocolo de Intervención Asignado
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#111827] p-2.5 rounded-lg border border-white/5">
                    <span className="text-gray-400 block text-[10px]">Tiempo Estimado Informe:</span>
                    <span className="font-bold text-white">&lt; 24 Horas</span>
                  </div>
                  <div className="bg-[#111827] p-2.5 rounded-lg border border-white/5">
                    <span className="text-gray-400 block text-[10px]">Consultor Asignado:</span>
                    <span className="font-bold text-emerald-400">Equipo Senior Supply</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-300">
                  Te remitiremos a <strong className="text-cyan-300">{formData.email}</strong> la
                  matriz preliminar de oportunidades de optimización y reducción de mermas.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-xl bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-cyan-400/30 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Imprimir Comprobante B2B
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-[#111827] border border-white/20 text-gray-300 text-xs font-semibold hover:bg-white/5 cursor-pointer"
                >
                  Realizar Otra Consulta
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
