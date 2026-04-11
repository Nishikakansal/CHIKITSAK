import React from 'react';
import { Hospital } from '../types';

interface TriageResultProps {
  onFindHospital: () => void;
  onBack: () => void;
  result?: {
    severity: 'CRITICAL' | 'MEDIUM' | 'LOW';
    summary: string;
    probable_condition: string;
    action_required: string;
    symptoms?: string;
  };
}

export default function TriageResult({ onFindHospital, onBack, result }: TriageResultProps) {
  const data = result || {
    severity: 'CRITICAL' as const,
    summary: 'Detected severe chest pressure combined with shortness of breath.',
    probable_condition: 'Acute Cardiac Distress',
    action_required: 'Immediate medical attention required.',
    symptoms: '',
  };

  const config = {
    CRITICAL: {
      label: 'CRITICAL',
      color: '#ef4444',
      bg: '#fef2f2',
      pillBg: '#fee2e2',
      pillText: '#ef4444',
      pillBorder: '#fecaca',
      icon: 'emergency',
      iconBg: '#fee2e2',
      iconColor: '#ef4444',
      topMsg: 'Call emergency services immediately',
      topMsgColor: '#ef4444',
      hospitals: [
        { name: 'City General Hospital', eta: '4 min', km: '0.8 km', icu: 3, vent: 2, badge: 'Nearest ICU' },
        { name: 'Apollo Emergency', eta: '7 min', km: '1.4 km', icu: 5, vent: 4, badge: 'High Capacity' },
        { name: 'AIIMS Trauma Centre', eta: '11 min', km: '2.1 km', icu: 8, vent: 6, badge: 'Trauma Specialist' },
      ],
    },
    MEDIUM: {
      label: 'MEDIUM',
      color: '#f59e0b',
      bg: '#fffbeb',
      pillBg: '#fef3c7',
      pillText: '#d97706',
      pillBorder: '#fde68a',
      icon: 'warning',
      iconBg: '#fef3c7',
      iconColor: '#f59e0b',
      topMsg: 'Seek medical attention soon',
      topMsgColor: '#d97706',
      hospitals: [
        { name: 'Fortis Clinic', eta: '6 min', km: '1.0 km', icu: 2, vent: 1, badge: 'Available Now' },
        { name: 'Max Super Speciality', eta: '10 min', km: '1.9 km', icu: 4, vent: 3, badge: 'Short Wait' },
        { name: 'Medanta Hospital', eta: '15 min', km: '3.2 km', icu: 6, vent: 5, badge: 'Full Services' },
      ],
    },
    LOW: {
      label: 'LOW',
      color: '#22c55e',
      bg: '#f0fdf4',
      pillBg: '#dcfce7',
      pillText: '#16a34a',
      pillBorder: '#bbf7d0',
      icon: 'check_circle',
      iconBg: '#dcfce7',
      iconColor: '#22c55e',
      topMsg: 'Visit a nearby clinic at your convenience',
      topMsgColor: '#16a34a',
      hospitals: [
        { name: 'Community Health Centre', eta: '8 min', km: '1.2 km', icu: 0, vent: 0, badge: 'Walk-in' },
        { name: 'Wellness Clinic', eta: '12 min', km: '2.0 km', icu: 0, vent: 0, badge: 'Open 24h' },
        { name: 'City PHC', eta: '18 min', km: '3.5 km', icu: 0, vent: 0, badge: 'Free OPD' },
      ],
    },
  };

  const cfg = config[data.severity];

  return (
    <div className="min-h-screen flex flex-col font-['Inter',sans-serif] antialiased pb-10" style={{ background: cfg.bg }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-10 pb-4">
        <button
          onClick={onBack}
          className="h-10 w-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition"
        >
          <span className="material-symbols-outlined text-[22px] text-slate-600">arrow_back</span>
        </button>
        <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
          <span className="material-symbols-outlined text-[16px] text-[#0cd8d8]">smart_toy</span>
          <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">CHIKITSAK AI</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-5 gap-5">

        {/* Severity Card */}
        <div className="w-full bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden">
          {/* Colored top stripe */}
          <div className="h-1.5 w-full" style={{ background: cfg.color }}></div>
          <div className="p-6 flex flex-col items-center gap-3">
            {/* Icon */}
            <div
              className="h-20 w-20 rounded-full flex items-center justify-center"
              style={{ background: cfg.iconBg }}
            >
              <span
                className="material-symbols-outlined text-[40px] fill-1 font-variation-settings-fill"
                style={{ color: cfg.iconColor }}
              >
                {cfg.icon}
              </span>
            </div>

            {/* Severity Badge */}
            <div
              className="px-5 py-1.5 rounded-full border font-extrabold text-[13px] tracking-widest uppercase"
              style={{ background: cfg.pillBg, color: cfg.pillText, borderColor: cfg.pillBorder }}
            >
              {cfg.label} SEVERITY
            </div>

            {/* Top Message */}
            <p className="text-[13px] font-bold text-center" style={{ color: cfg.topMsgColor }}>
              {cfg.topMsg}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-slate-100 my-1"></div>

            {/* Action Required */}
            <div className="w-full">
              <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1">Recommended Action</p>
              <p className="text-[14px] font-semibold text-[#1e293b] leading-relaxed">{data.action_required}</p>
            </div>
          </div>
        </div>

        {/* AI Analysis Card */}
        <div className="w-full bg-white rounded-[24px] shadow-sm border border-slate-100 p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#e6f8f7] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0cd8d8] text-[16px]">psychology</span>
            </div>
            <p className="text-[12px] font-extrabold text-[#1e293b] uppercase tracking-wider">AI Analysis</p>
          </div>

          {data.symptoms && (
            <div className="bg-[#f8fafb] rounded-[14px] p-3 border border-slate-100">
              <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">Reported Symptoms</p>
              <p className="text-[13px] text-[#475569] font-medium italic">"{data.symptoms}"</p>
            </div>
          )}

          <div>
            <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">AI Observation</p>
            <p className="text-[13px] text-[#1e293b] font-medium leading-relaxed">{data.summary}</p>
          </div>

          <div className="bg-[#f8fafb] rounded-[14px] p-3 border border-slate-100">
            <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">Probable Condition</p>
            <p className="text-[14px] font-bold text-[#1e293b]">{data.probable_condition}</p>
            <p className="text-[10px] text-[#94a3b8] mt-1">⚠ Disclaimer: Not a medical diagnosis.</p>
          </div>
        </div>

        {/* Suggested Hospitals */}
        <div className="w-full flex flex-col gap-3">
          <p className="text-[11px] font-extrabold text-[#94a3b8] uppercase tracking-widest">Suggested Hospitals</p>
          {cfg.hospitals.map((h, i) => (
            <div
              key={h.name}
              className="bg-white rounded-[20px] border border-slate-100 shadow-sm p-4 flex items-center gap-4"
            >
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center font-extrabold text-[14px] text-white flex-shrink-0"
                style={{ background: cfg.color }}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-[#1e293b] truncate">{h.name}</p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-[11px] text-[#94a3b8] font-medium">{h.eta} · {h.km}</span>
                  {h.icu > 0 && (
                    <span className="text-[10px] font-bold text-[#22c55e] bg-[#dcfce7] px-2 py-0.5 rounded-full">
                      ICU: {h.icu}
                    </span>
                  )}
                </div>
              </div>
              <span
                className="text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0"
                style={{ background: cfg.pillBg, color: cfg.pillText }}
              >
                {h.badge}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 mt-2">
          <button
            onClick={onFindHospital}
            className="w-full h-[56px] rounded-[18px] flex items-center justify-center gap-3 font-bold text-[15px] text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            style={{ background: cfg.color, boxShadow: `0 8px 25px ${cfg.color}40` }}
          >
            <span className="material-symbols-outlined text-[20px] fill-1 font-variation-settings-fill">local_hospital</span>
            View All Hospitals
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <a
            href="tel:112"
            className="w-full h-[50px] rounded-[18px] flex items-center justify-center gap-2 font-bold text-[14px] text-[#ef4444] bg-white border border-[#fecaca] shadow-sm hover:bg-[#fef2f2] transition-all"
          >
            <span className="material-symbols-outlined text-[20px] fill-1 font-variation-settings-fill">call</span>
            Call Emergency (112)
          </a>
        </div>

      </div>
    </div>
  );
}
