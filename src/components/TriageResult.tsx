
import React from 'react';
import { motion } from 'motion/react';

interface TriageResultProps {
  onFindHospital: () => void;
  onBack: () => void;
  result?: {
    severity: 'CRITICAL' | 'URGENT' | 'STABLE';
    summary: string;
    probable_condition: string;
    action_required: string;
  };
}

export default function TriageResult({ onFindHospital, onBack, result }: TriageResultProps) {
  const data = result || {
    severity: 'CRITICAL',
    summary: 'Detected severe chest pressure combined with shortness of breath.',
    probable_condition: 'Acute Cardiac Distress',
    action_required: 'Immediate medical attention required'
  };

  const isCritical = data.severity === 'CRITICAL';
  const isUrgent = data.severity === 'URGENT';

  return (
    <div className={`font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col max-w-md mx-auto relative ${isCritical ? 'bg-rose-50' : isUrgent ? 'bg-orange-50' : 'bg-emerald-50'} dark:bg-background-dark transition-colors duration-500`}>
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-white/30 dark:bg-background-dark/30">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-slate-100 hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
          <h2 className="text-sm font-black tracking-[0.2em] uppercase text-slate-500">Chikitsak AI</h2>
        </div>
        <div className="size-10"></div>
      </div>

      <main className="flex-1 px-5 py-2 flex flex-col gap-6 w-full pb-32">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative w-full"
        >
          <div className={`absolute -inset-1 rounded-3xl blur-md animate-pulse ${isCritical ? 'bg-rose-500/20' : isUrgent ? 'bg-orange-500/20' : 'bg-emerald-500/20'}`}></div>
          <div className="relative flex flex-col items-center justify-center rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-2xl border-b-8 border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className={`absolute left-0 top-0 h-full w-2 ${isCritical ? 'bg-rose-500' : isUrgent ? 'bg-orange-500' : 'bg-emerald-500'}`}></div>
            
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`flex size-20 items-center justify-center rounded-full mb-6 shadow-inner ${isCritical ? 'bg-rose-100 text-rose-600' : isUrgent ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'}`}
            >
              <span className="material-symbols-outlined text-5xl fill-1 font-variation-settings-fill">
                {isCritical ? 'emergency' : isUrgent ? 'warning' : 'check_circle'}
              </span>
            </motion.div>
            
            <h1 className={`text-4xl font-black tracking-tighter text-center mb-1 ${isCritical ? 'text-rose-600' : isUrgent ? 'text-orange-600' : 'text-emerald-600'}`}>
              {data.severity}
            </h1>
            <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Prediction Status</p>
            
            <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-8"></div>
            
            <div className="flex items-start gap-4 w-full">
              <span className={`material-symbols-outlined text-3xl mt-0.5 ${isCritical ? 'text-rose-500' : isUrgent ? 'text-orange-500' : 'text-emerald-500'}`}>
                {isCritical ? 'vital_signs' : 'stethoscopes'}
              </span>
              <p className="text-xl font-bold leading-tight text-slate-800 dark:text-white">
                {data.action_required}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4 rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-xl border border-slate-100 dark:border-slate-800"
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary text-xl font-bold">smart_toy</span>
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">AI Analysis Details</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Observation</p>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">
                {data.summary}
              </p>
            </div>
            
            <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Probable Condition</p>
              <p className="text-base font-bold text-slate-900 dark:text-white">{data.probable_condition}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl overflow-hidden shadow-2xl relative h-40 w-full group"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&q=80&w=800")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-bold text-primary-light uppercase tracking-widest mb-1">Best Recommended Facility</p>
                <p className="text-xl font-black text-white">City General Hospital</p>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Ventilators Available
                  </div>
                  <div className="h-1 w-1 rounded-full bg-white/30"></div>
                  <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider">High Priority</div>
                </div>
              </div>
              <div className="text-xs font-black bg-primary text-slate-900 px-3 py-1.5 rounded-xl shadow-lg">
                1.2 km
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 w-full p-6 z-40">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <button 
            onClick={onFindHospital}
            className="group flex w-full items-center justify-center gap-4 overflow-hidden rounded-2xl h-16 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl"
          >
            <span className="material-symbols-outlined text-2xl font-bold">local_hospital</span>
            <span className="text-lg font-black tracking-wide">Find Optimized Path</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl h-12 px-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-rose-600 dark:text-rose-400 font-bold border border-rose-100 dark:border-rose-900/50 shadow-sm">
            <span className="material-symbols-outlined text-xl fill-1 font-variation-settings-fill">call</span>
            <span>Emergency Services</span>
          </button>
        </div>
      </div>
    </div>
  );
}
