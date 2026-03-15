
import React, { useState } from 'react';
import { motion } from 'motion/react';

interface HomeProps {
  onServiceClick: (service: string) => void;
  onEmergency: () => void;
  onProfile: () => void;
}

export default function Home({ onServiceClick, onEmergency, onProfile }: HomeProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onEmergency(); // In a real app, this would send the query to the triage logic
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-32 pt-8">
      <header className="flex items-center justify-between px-6 pb-2 sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-2xl">medical_services</span>
          </div>
          <div>
            <h1 className="font-black text-xl tracking-tight text-slate-900 dark:text-white leading-none">CHIKITSAK</h1>
            <p className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Emergency Care</p>
          </div>
        </div>
        <button onClick={onProfile} className="relative group p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden ring-2 ring-primary/10 group-hover:ring-primary/40 transition-all">
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-2xl">person</span>
          </div>
        </button>
      </header>

      <section className="px-6">
        <div className="relative w-full h-52 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10 flex items-center justify-between px-8">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 h-40 w-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="z-10 max-w-[65%]">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
              Get <span className="text-primary">Medical Help</span><br/>In Seconds
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">Predicting severity and finding the best nearby hospitals for you.</p>
            <button className="mt-5 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-xl shadow-lg active:scale-95 transition-all">
              Learn More
            </button>
          </div>
          <div className="absolute right-4 bottom-0 top-0 w-1/3 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-40">
            <span className="material-symbols-outlined text-[100px] text-primary transform rotate-12">health_and_safety</span>
          </div>
        </div>
      </section>

      <section className="px-6">
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
          </div>
          <input 
            className="block w-full pl-12 pr-12 py-5 bg-white dark:bg-slate-900 border-0 rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-base text-slate-900 dark:text-white" 
            placeholder="Tell us your symptoms..." 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <div className="p-2 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors text-primary-dark">
              <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </div>
          </button>
        </form>
      </section>

      <section className="flex flex-col gap-5">
        <div className="px-6 flex items-center justify-between">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Medical Services</h3>
        </div>
        <div className="flex overflow-x-auto gap-6 px-6 no-scrollbar pb-2">
          {[
            { id: 'ambulance', name: 'Ambulance', icon: 'ambulance', color: 'text-primary' },
            { id: 'labs', name: 'Labs', icon: 'biotech', color: 'text-blue-500' },
            { id: 'blood', name: 'Blood Bank', icon: 'bloodtype', color: 'text-rose-500' },
            { id: 'pharmacy', name: 'Pharmacy', icon: 'medication', color: 'text-emerald-500' },
          ].map((service) => (
            <div key={service.id} className="flex flex-col items-center gap-3 flex-shrink-0">
              <button 
                onClick={() => onServiceClick(service.id)}
                className={`h-20 w-20 rounded-3xl bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex items-center justify-center ${service.color} active:scale-90 transition-transform`}
              >
                <div className="absolute inset-0 bg-current opacity-[0.03] rounded-3xl"></div>
                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
              </button>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{service.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-4 py-8 px-6 bg-gradient-to-t from-slate-100/50 to-transparent dark:from-slate-900/50">
        <div className="relative">
          <button 
            onClick={onEmergency}
            className="emergency-ring relative z-10 h-32 w-32 rounded-full bg-danger text-white shadow-2xl shadow-danger/40 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-6xl fill-1 font-variation-settings-fill">e911_emergency</span>
          </button>
        </div>
        <div className="mt-10 text-center">
          <p className="text-danger font-black text-2xl tracking-tighter uppercase mb-1">EMERGENCY SOS</p>
          <p className="text-xs text-slate-400 font-medium max-w-[200px] leading-relaxed">Press for immediate medical assistance and nearest ambulance dispatch</p>
        </div>
      </section>
    </div>
  );
}
