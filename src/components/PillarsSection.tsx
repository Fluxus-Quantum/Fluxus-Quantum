import React, { useState } from 'react';
import { SERVICE_PILLARS } from '../data/logisticsData';
import { ServicePillar } from '../types';
import {
  Truck,
  Network,
  TrendingUp,
  Leaf,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  X,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface PillarsSectionProps {
  onOpenDiagnosis: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenDiagnosis }) => {
  const [selectedPillar, setSelectedPillar] = useState<ServicePillar | null>(null);

  const renderIcon = (name: ServicePillar['iconName'], accent: ServicePillar['accentColor']) => {
    const iconClass =
      accent === 'cyan'
        ? 'w-7 h-7 text-cyan-400 group-hover:text-cyan-300'
        : 'w-7 h-7 text-emerald-400 group-hover:text-emerald-300';

    switch (name) {
      case 'truck':
        return <Truck className={iconClass} />;
      case 'network':
        return <Network className={iconClass} />;
      case 'trendingUp':
        return <TrendingUp className={iconClass} />;
      case 'leaf':
        return <Leaf className={iconClass} />;
      case 'cpu':
        return <Cpu className={iconClass} />;
      case 'shieldCheck':
        return <ShieldCheck className={iconClass} />;
      default:
        return <Truck className={iconClass} />;
    }
  };

  return (
    <section id="soluciones" className="py-20 sm:py-24 px-4 sm:px-6 relative border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            Soluciones Estratégicas B2B
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Syncopate'] font-bold text-white tracking-tight">
            PILARES DE <span className="text-cyan-400">SERVICIOS DE ÉLITE</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Diseñamos e implementamos sistemas operativos de clase mundial que
            aseguran continuidad, precisión analítica y altos márgenes financieros.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_PILLARS.map((pillar) => {
            const isCyan = pillar.accentColor === 'cyan';
            return (
              <div
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                onClick={() => setSelectedPillar(pillar)}
                className="glass-card p-7 sm:p-8 rounded-2xl relative group transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${
                      isCyan
                        ? 'bg-cyan-400/10 border-cyan-400/40 shadow-glow-cyan'
                        : 'bg-emerald-400/10 border-emerald-400/40 shadow-glow-green'
                    }`}
                  >
                    {renderIcon(pillar.iconName, pillar.accentColor)}
                  </div>

                  {/* Title */}
                  <div className="flex items-center justify-between mb-2.5">
                    <h3
                      className={`text-xl font-['Montserrat'] font-bold text-white transition-colors ${
                        isCyan ? 'group-hover:text-cyan-300' : 'group-hover:text-emerald-300'
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Badge Bottom */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      isCyan ? 'text-cyan-300' : 'text-emerald-300'
                    }`}
                  >
                    {pillar.badge}
                  </span>
                  <span className="text-[10px] text-gray-400 group-hover:text-white underline underline-offset-4">
                    Ver SOPs
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Details for Clicked Pillar */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0D1322] border border-cyan-400/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-glow-cobalt max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg bg-[#111827] border border-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center">
                  {renderIcon(selectedPillar.iconName, selectedPillar.accentColor)}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                    {selectedPillar.badge}
                  </span>
                  <h3 className="text-2xl font-['Montserrat'] font-bold text-white">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedPillar.description}
              </p>

              <div className="p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/30">
                <span className="text-xs text-cyan-300 font-semibold uppercase tracking-wider block mb-1">
                  Impacto Cuantitativo Esperado
                </span>
                <p className="text-sm font-bold text-white">
                  {selectedPillar.kpiImpact}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-200 mb-3">
                  Entregables Tácticos & Procedimientos SOPs:
                </h4>
                <div className="space-y-2.5">
                  {selectedPillar.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedPillar(null);
                    onOpenDiagnosis();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#080C14] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-glow-cyan"
                >
                  Auditar Este Pilar en mi Empresa
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="py-3 px-4 rounded-xl bg-[#111827] border border-white/20 text-gray-300 text-xs font-semibold hover:bg-white/5 cursor-pointer"
                >
                  Cerrar Detalle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
