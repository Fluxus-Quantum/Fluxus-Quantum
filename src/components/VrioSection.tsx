import React from 'react';
import { Check } from 'lucide-react';

export const VrioSection: React.FC = () => {
  return (
    <section id="metodo-vrio" className="py-20 sm:py-24 px-4 sm:px-6 relative border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-14 border border-cyan-400/40 relative overflow-hidden shadow-glow-cyan">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
                Metodología VRIO & Autonomía
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-['Syncopate'] font-bold text-white leading-tight tracking-tight">
                CADENA DE SUMINISTRO OPTIMIZADA Y{' '}
                <span className="text-emerald-400">AUTOGESTIONABLE</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic border-l-2 border-emerald-400/60 pl-4">
                &ldquo;Integramos visibilidad tecnológica en tiempo real y
                acompañamos a tu equipo en planta hasta asegurar la adopción total
                de los procesos mediante SOPs estandarizados, reduciendo costos
                sin generar dependencia de consultores externos.&rdquo;
              </p>

              {/* Checklist */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-gray-300">
                <span className="flex items-center gap-2 bg-[#080C14]/60 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                  <Check className="w-4 h-4 text-cyan-400 stroke-[3]" />
                  Protocolos SOPs en Planta
                </span>
                <span className="flex items-center gap-2 bg-[#080C14]/60 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                  <Check className="w-4 h-4 text-cyan-400 stroke-[3]" />
                  Sin Dependencia Externa
                </span>
                <span className="flex items-center gap-2 bg-[#080C14]/60 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                  <Check className="w-4 h-4 text-cyan-400 stroke-[3]" />
                  Auditorías Cuantitativas
                </span>
              </div>
            </div>

            {/* Right Impact Metrics */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:gap-5">
              {/* Metric 1 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#080C14]/90 border border-cyan-400/30 shadow-glow-cyan flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                    Mermas & Inventario
                  </span>
                  <p className="text-xs text-gray-200 font-medium">
                    Reducción promedio en sobrecostos
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-['Orbitron'] font-extrabold text-cyan-400">
                    &gt;20%
                  </span>
                  <span className="block text-[10px] text-cyan-300 uppercase font-semibold">
                    Ahorro Directo
                  </span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#080C14]/90 border border-emerald-400/30 shadow-glow-green flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                    Cumplimiento OTIF
                  </span>
                  <p className="text-xs text-gray-200 font-medium">
                    Indicador On-Time In-Full en entregas
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-['Orbitron'] font-extrabold text-emerald-400">
                    &gt;95%
                  </span>
                  <span className="block text-[10px] text-emerald-300 uppercase font-semibold">
                    Excelencia SLA
                  </span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#080C14]/90 border border-blue-500/40 shadow-glow-cobalt flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                    Autonomía Operativa
                  </span>
                  <p className="text-xs text-gray-200 font-medium">
                    Transferencia total de capacidades
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-['Orbitron'] font-extrabold text-white">
                    100%
                  </span>
                  <span className="block text-[10px] text-gray-400 uppercase font-semibold">
                    Capacidad Interna
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
