import React, { useState } from 'react';
import { ABC_MATRIX_DATA, OFFICIAL_BANNER_URL } from '../data/logisticsData';
import { BarChart3, Layers, Check, ArrowRight } from 'lucide-react';

interface AbcMatrixViewProps {
  onBackToLanding: () => void;
  onGoToDiagnosis: () => void;
}

export const AbcMatrixView: React.FC<AbcMatrixViewProps> = ({
  onBackToLanding,
  onGoToDiagnosis
}) => {
  const [selectedCell, setSelectedCell] = useState(ABC_MATRIX_DATA[0]);

  return (
    <div className="py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 animate-fadeIn">
      {/* Banner Strip */}
      <div className="w-full rounded-2xl overflow-hidden border border-cyan-400/30 relative shadow-glow-cobalt max-h-[160px] sm:max-h-[200px]">
        <img
          src={OFFICIAL_BANNER_URL}
          alt="Fluxus Quantum"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14] via-[#080C14]/85 to-transparent flex items-center px-6 sm:px-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-semibold tracking-wider uppercase mb-2">
              <Layers className="w-3.5 h-3.5" />
              Ingeniería de Inventarios Fluxus
            </div>
            <h1 className="text-lg sm:text-2xl font-['Syncopate'] font-bold text-white tracking-tight">
              SIMULADOR DE MATRIZ ABC / XYZ
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 9 Quadrants Grid */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-cyan-400/30 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-2">
              Segmentación Bidimensional de SKUs
            </div>
            <h3 className="text-lg sm:text-xl font-['Orbitron'] font-bold text-white">
              Cuadrícula Operativa ABC / XYZ
            </h3>
            <p className="text-xs text-gray-300">
              Cruza el volumen económico de ventas (A = 80%, B = 15%, C = 5%) con la
              previsibilidad de la demanda (X = Estable, Y = Fluctuante, Z =
              Errática). Selecciona un cuadrante para ver la política.
            </p>
          </div>

          {/* 3x3 Matrix Grid */}
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-['Orbitron'] font-bold text-gray-400">
              <div></div>
              <div className="text-cyan-400">X (Estable)</div>
              <div className="text-sky-300">Y (Media)</div>
              <div className="text-rose-400">Z (Errática)</div>
            </div>

            {/* Row A */}
            <div className="grid grid-cols-4 gap-2">
              <div className="flex items-center justify-center font-['Orbitron'] font-bold text-xs text-emerald-400 bg-[#080C14] rounded-lg border border-emerald-400/20">
                A (80% $)
              </div>
              {['AX', 'AY', 'AZ'].map((code) => {
                const item = ABC_MATRIX_DATA.find((x) => x.code === code)!;
                const isSelected = selectedCell.code === code;
                return (
                  <button
                    key={code}
                    onClick={() => setSelectedCell(item)}
                    className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${item.color} ${
                      isSelected ? 'ring-2 ring-white scale-105 shadow-glow-cyan' : 'hover:opacity-90'
                    }`}
                  >
                    <span className="font-['Orbitron'] font-extrabold text-base block">
                      {item.code}
                    </span>
                    <span className="text-[10px] opacity-80 block">{item.share} stock</span>
                  </button>
                );
              })}
            </div>

            {/* Row B */}
            <div className="grid grid-cols-4 gap-2">
              <div className="flex items-center justify-center font-['Orbitron'] font-bold text-xs text-cyan-400 bg-[#080C14] rounded-lg border border-cyan-400/20">
                B (15% $)
              </div>
              {['BX', 'BY', 'BZ'].map((code) => {
                const item = ABC_MATRIX_DATA.find((x) => x.code === code)!;
                const isSelected = selectedCell.code === code;
                return (
                  <button
                    key={code}
                    onClick={() => setSelectedCell(item)}
                    className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${item.color} ${
                      isSelected ? 'ring-2 ring-white scale-105 shadow-glow-cyan' : 'hover:opacity-90'
                    }`}
                  >
                    <span className="font-['Orbitron'] font-extrabold text-base block">
                      {item.code}
                    </span>
                    <span className="text-[10px] opacity-80 block">{item.share} stock</span>
                  </button>
                );
              })}
            </div>

            {/* Row C */}
            <div className="grid grid-cols-4 gap-2">
              <div className="flex items-center justify-center font-['Orbitron'] font-bold text-xs text-gray-400 bg-[#080C14] rounded-lg border border-white/10">
                C (5% $)
              </div>
              {['CX', 'CY', 'CZ'].map((code) => {
                const item = ABC_MATRIX_DATA.find((x) => x.code === code)!;
                const isSelected = selectedCell.code === code;
                return (
                  <button
                    key={code}
                    onClick={() => setSelectedCell(item)}
                    className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${item.color} ${
                      isSelected ? 'ring-2 ring-white scale-105 shadow-glow-cyan' : 'hover:opacity-90'
                    }`}
                  >
                    <span className="font-['Orbitron'] font-extrabold text-base block">
                      {item.code}
                    </span>
                    <span className="text-[10px] opacity-80 block">{item.share} stock</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Selected Quadrant Policy Details */}
        <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-cyan-400/40 relative shadow-glow-cyan space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 block">
                Cuadrante Activo
              </span>
              <h3 className="text-3xl font-['Orbitron'] font-extrabold text-cyan-400">
                {selectedCell.code}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
              {selectedCell.share} del Stock Total
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
              Comportamiento de Demanda:
            </span>
            <p className="text-sm font-semibold text-white">
              {selectedCell.label}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#080C14] border border-cyan-400/30 space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-bold block flex items-center gap-1.5">
              <Check className="w-4 h-4 text-cyan-400" />
              Política de Abastecimiento Óptima
            </span>
            <p className="text-xs text-gray-300 leading-relaxed">
              {selectedCell.strategy}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-bold text-gray-300">
              Protocolo en Planta Fluxus Quantum:
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Revisión de parámetros cada 15 días mediante algoritmo en la nube.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Ubicación prioritaria en layout de picking (muelles y alturas de fácil acceso).
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Alerta temprana automática integrada en ERP (SAP / NetSuite / Dynamics).
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onGoToDiagnosis}
              className="flex-1 py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#080C14] flex items-center justify-center gap-2 cursor-pointer shadow-glow-cyan hover:opacity-95"
            >
              Auditar Matriz en mi Almacén
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBackToLanding}
              className="py-3 px-4 rounded-xl bg-[#080C14] border border-white/20 text-gray-300 text-xs font-semibold hover:bg-white/5 cursor-pointer"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
