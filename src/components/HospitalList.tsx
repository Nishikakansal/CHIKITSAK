
import React from 'react';
import { Hospital } from '../types';
import { HOSPITALS } from '../constants';

interface HospitalListProps {
  onHospitalClick: (hospital: Hospital) => void;
}

export default function HospitalList({ onHospitalClick }: HospitalListProps) {
  return (
    <div className="flex flex-col h-full">
      <header className="sticky top-0 z-10 bg-white dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">Hospital Recommendations</h1>
          </div>
          <button className="flex items-center justify-center p-2 rounded-full text-primary-dark dark:text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">map</span>
          </button>
        </div>
        
        <div className="px-4 pb-3">
          <div className="flex h-10 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
            {['Best Match', 'Fastest', 'Nearest'].map((tab, i) => (
              <button 
                key={tab}
                className={`flex-1 h-full flex items-center justify-center rounded-[0.25rem] text-sm font-medium transition-all ${i === 0 ? 'bg-white dark:bg-slate-700 shadow-sm text-primary-dark dark:text-primary' : 'text-slate-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 flex flex-col gap-4 bg-background-light dark:bg-background-dark">
        {HOSPITALS.map((hospital) => (
          <article 
            key={hospital.id} 
            onClick={() => onHospitalClick(hospital)}
            className={`flex flex-col gap-3 rounded-xl bg-white dark:bg-slate-800 p-4 shadow-sm border relative overflow-hidden group cursor-pointer ${hospital.id === '1' ? 'border-primary/20' : 'border-slate-100 dark:border-slate-700'}`}
          >
            {hospital.id === '1' && (
              <div className="absolute top-0 right-0 bg-primary/20 text-primary-dark dark:text-primary px-3 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">
                Top Pick
              </div>
            )}
            
            <div className="flex gap-4">
              <div className="w-24 h-24 shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
                <img alt={hospital.name} className="w-full h-full object-cover" src={hospital.image} referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 flex flex-col justify-between min-h-[6rem]">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">{hospital.name}</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{hospital.address}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium border ${
                    hospital.crowdLevel === 'Low' ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-100' : 
                    hospital.crowdLevel === 'Mod.' ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-100' :
                    'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-100'
                  }`}>
                    <span className="material-symbols-outlined text-[14px]">groups</span>
                    {hospital.crowdLevel} Crowd
                  </div>
                  {hospital.id === '1' && (
                    <div className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-400 border border-blue-100">
                      <span className="material-symbols-outlined text-[14px] fill-1 font-variation-settings-fill">verified</span>
                      Specialized
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-slate-100 dark:border-slate-700">
              <div className="flex flex-col items-center justify-center border-r border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-1 text-primary-dark dark:text-primary">
                  <span className="material-symbols-outlined text-lg">timer</span>
                  <span className="text-sm font-bold">{hospital.eta}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wide text-slate-400 font-medium">ETA</span>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-lg">near_me</span>
                  <span className="text-sm font-bold">{hospital.distance}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wide text-slate-400 font-medium">Distance</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className={`flex items-center gap-1 ${hospital.icuBeds.available > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                  <span className="material-symbols-outlined text-lg">bed</span>
                  <span className="text-sm font-bold">{hospital.ventilators.available + hospital.icuBeds.available} Avail</span>
                </div>
                <span className={`text-[10px] uppercase tracking-wide font-medium ${hospital.icuBeds.available > 0 ? 'text-slate-400' : 'text-red-500 font-bold'}`}>
                  {hospital.icuBeds.available} ICU
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 h-11 flex items-center justify-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <span className="material-symbols-outlined text-[20px]">call</span>
                Call
              </button>
              <button className="flex-[2] h-11 flex items-center justify-center gap-2 rounded-lg bg-primary text-slate-900 font-bold text-sm shadow-md shadow-primary/20 hover:brightness-105 transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined text-[20px] fill-1 font-variation-settings-fill">directions</span>
                Navigate
              </button>
            </div>
          </article>
        ))}
        <div className="h-20"></div>
      </main>
    </div>
  );
}
