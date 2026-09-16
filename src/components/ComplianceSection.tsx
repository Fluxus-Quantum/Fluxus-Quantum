import React from 'react';
import { FileText, Cpu, ShieldCheck } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  return (
    <section id="garantia-erp" className="py-20 sm:py-24 px-4 sm:px-6 relative border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            Certidumbre B2B de Nivel Enterprise
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-['Syncopate'] font-bold text-white tracking-tight">
            CUMPLIMIENTO, SEGURIDAD & COMPATIBILIDAD
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Intervenimos tu operación con metodologías no invasivas y
            compatibilidad técnica total.
          </p>
        </div>

        {/* 3 Pillars of Security/Compliance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* 01 */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#111827]/70 border border-cyan-400/30 space-y-4 hover:border-cyan-400/70 transition-all">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-300 flex items-center justify-center font-bold text-sm font-['Orbitron'] border border-cyan-400/30">
                01
              </div>
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white font-['Montserrat']">
              Mapeo Documental Riguroso
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Diseño de procesos 100% alineados con normativas aduaneras,
              comerciales, certificaciones ISO de calidad y requerimientos de
              auditoría fiscal.
            </p>
          </div>

          {/* 02 */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#111827]/70 border border-emerald-400/30 space-y-4 hover:border-emerald-400/70 transition-all">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-300 flex items-center justify-center font-bold text-sm font-['Orbitron'] border border-emerald-400/30">
                02
              </div>
              <Cpu className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white font-['Montserrat']">
              Compatibilidad ERP & Legacy
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Conexión directa con SAP, Oracle NetSuite, Microsoft Dynamics, WMS de
              terceros y hojas de cálculo internas mediante capas API seguras sin
              alterar el core tecnológico.
            </p>
          </div>

          {/* 03 */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#111827]/70 border border-cyan-400/30 space-y-4 hover:border-cyan-400/70 transition-all">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-300 flex items-center justify-center font-bold text-sm font-['Orbitron'] border border-cyan-400/30">
                03
              </div>
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white font-['Montserrat']">
              Metodología de Cero Disrupción
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Despliegue escalonado en turnos operativos. Garantizamos que el
              ritmo diario de producción y despacho no se detenga en ninguna fase
              de la consultoría.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
