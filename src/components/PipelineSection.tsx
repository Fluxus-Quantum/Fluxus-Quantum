import React, { useState } from 'react';
import { PIPELINE_NODES } from '../data/logisticsData';
import { PipelineNode } from '../types';
import {
  Building2,
  Factory,
  Boxes,
  Truck,
  MapPin,
  Users,
  Info,
  CheckCircle,
  AlertTriangle,
  X
} from 'lucide-react';

export const PipelineSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<PipelineNode | null>(null);

  const getNodeIcon = (id: string, accent: 'cyan' | 'green') => {
    const iconClass = accent === 'cyan' ? 'w-5 h-5 text-cyan-400' : 'w-5 h-5 text-emerald-400';
    switch (id) {
      case 'proveedores':
        return <Building2 className={iconClass} />;
      case 'fabricacion':
        return <Factory className={iconClass} />;
      case 'almacenamiento':
        return <Boxes className={iconClass} />;
      case 'transporte':
        return <Truck className={iconClass} />;
      case 'distribucion':
        return <MapPin className={iconClass} />;
      case 'cliente':
        return <Users className={iconClass} />;
      default:
        return <Building2 className={iconClass} />;
    }
  };

  return (
    <section id="flujo" className="py-20 sm:py-24 px-4 sm:px-6 relative bg-[#0D1322]/40 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-cyan-400/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3">
              Mapeo de Cadena Integral
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-['Syncopate'] font-bold text-white tracking-tight">
              TU ALIADO ESTRATÉGICO EN CADA ETAPA
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
            Control de indicadores clave (OTIF, Lead Time y ABC/XYZ) en todas las
            intersecciones operativas de tu cadena de suministro. Haz clic en cada
            etapa para ver protocolos.
          </p>
        </div>

        {/* 6 Connected Nodes */}
        <div className="relative py-4">
          {/* Glowing Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 -translate-y-1/2 opacity-70"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {PIPELINE_NODES.map((node) => {
              const isGreen = node.accent === 'green';
              const isSelected = activeNode?.id === node.id;

              return (
                <div
                  key={node.id}
                  id={`node-btn-${node.id}`}
                  onClick={() => setActiveNode(isSelected ? null : node)}
                  className={`glass-card p-4 sm:p-5 rounded-xl text-center group hover:-translate-y-1 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-400/10 shadow-glow-cyan'
                      : ''
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto rounded-full bg-[#080C14] border-2 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
                      isGreen
                        ? 'border-emerald-400 shadow-glow-green'
                        : 'border-cyan-400 shadow-glow-cyan'
                    }`}
                  >
                    {getNodeIcon(node.id, node.accent)}
                  </div>
                  <span className="text-xs font-['Orbitron'] font-bold text-white block mb-1 tracking-wider">
                    {node.name}
                  </span>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    {node.subtitle}
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-center gap-1 text-[10px] text-cyan-300">
                    <Info className="w-3 h-3" />
                    <span>Ver KPIs</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Node Detail Card */}
        {activeNode && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-cyan-400/40 relative animate-fadeIn">
            <button
              onClick={() => setActiveNode(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg bg-[#080C14] border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#080C14] border border-cyan-400 flex items-center justify-center">
                  {getNodeIcon(activeNode.id, activeNode.accent)}
                </div>
                <div>
                  <h3 className="text-lg font-['Orbitron'] font-bold text-white">
                    {activeNode.name} — {activeNode.subtitle}
                  </h3>
                  <p className="text-xs text-gray-300">{activeNode.description}</p>
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-emerald-400/10 border border-emerald-400/40 text-emerald-300 text-xs font-bold font-mono whitespace-nowrap">
                KPI Objetivo: {activeNode.kpi}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Dolores Comunes Detectados en Diagnóstico:
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {activeNode.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#080C14]/50 p-2.5 rounded-lg border border-red-500/20">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-cyan-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  Solución Metodológica Fluxus Quantum:
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {activeNode.fluxusSolution.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#080C14]/50 p-2.5 rounded-lg border border-cyan-500/20">
                      <span className="text-cyan-400 font-bold">✔</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 4 Bottom Metric Points Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          <div className="p-5 rounded-xl bg-[#080C14] border border-cyan-400/25 group hover:border-cyan-400/60 transition-colors">
            <span className="text-cyan-400 font-['Orbitron'] text-xs sm:text-sm font-bold block mb-1">
              MATRIZ ABC / XYZ
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Clasificación dinámica por rotación y variabilidad de demanda.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#080C14] border border-emerald-400/25 group hover:border-emerald-400/60 transition-colors">
            <span className="text-emerald-400 font-['Orbitron'] text-xs sm:text-sm font-bold block mb-1">
              CONTROL OTIF
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Monitoreo continuo de On-Time In-Full en cada entrega comercial.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#080C14] border border-cyan-400/25 group hover:border-cyan-400/60 transition-colors">
            <span className="text-cyan-400 font-['Orbitron'] text-xs sm:text-sm font-bold block mb-1">
              LEAD TIME COMPRESSION
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Reducción drástica del ciclo total de abastecimiento y despacho.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#080C14] border border-emerald-400/25 group hover:border-emerald-400/60 transition-colors">
            <span className="text-emerald-400 font-['Orbitron'] text-xs sm:text-sm font-bold block mb-1">
              DASHBOARDS CLOUD
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Indicadores ejecutivos y operativos actualizados en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
