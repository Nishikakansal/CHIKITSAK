
import React from 'react';
import { Hospital } from '../types';

interface HospitalDetailsProps {
  hospital: Hospital;
  onBack: () => void;
  onNavigate: () => void;
}

export default function HospitalDetails({ hospital, onBack, onNavigate }: HospitalDetailsProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-32 relative max-w-md mx-auto">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 max-w-md mx-auto">
        <div className="flex items-center p-4 justify-between h-16">
          <button onClick={onBack} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-tight line-clamp-1">Hospital Details</h2>
          <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      <main className="pt-16 flex flex-col w-full">
        <div className="px-4 py-3">
          <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl h-56 relative shadow-sm" style={{ backgroundImage: `url("${hospital.image}")` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="relative p-4 z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full bg-green-500/90 text-white text-xs font-bold uppercase tracking-wide">Open 24/7</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-800/60 backdrop-blur text-white text-xs font-medium">{hospital.distance} away</span>
              </div>
              <h1 className="text-white tracking-tight text-2xl font-bold leading-tight">{hospital.name}</h1>
              <p className="text-slate-200 text-sm font-medium mt-1">{hospital.address}</p>
            </div>
          </div>
        </div>

        <div className="px-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-white">{hospital.rating}</span>
              <div className="flex flex-col">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`material-symbols-outlined text-[18px] fill-current ${i >= Math.floor(hospital.rating) ? 'opacity-50' : ''}`}>star</span>
                  ))}
                </div>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">{hospital.reviews} patient ratings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Real-time Availability</h3>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-xl">pulmonology</span>
                <span className="text-xs font-semibold uppercase tracking-wider">Ventilators</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">{hospital.ventilators.available}</span>
                <span className="text-sm font-medium text-slate-400">/ {hospital.ventilators.total}</span>
              </div>
              <div className="mt-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: `${(hospital.ventilators.available / hospital.ventilators.total) * 100}%` }}></div>
              </div>
              <p className="text-green-600 dark:text-green-400 text-xs font-medium mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">check_circle</span> Available
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-xl">bed</span>
                <span className="text-xs font-semibold uppercase tracking-wider">ICU Beds</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">{hospital.icuBeds.available}</span>
                <span className="text-sm font-medium text-slate-400">/ {hospital.icuBeds.total}</span>
              </div>
              <div className="mt-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                <div className={`h-1.5 rounded-full ${hospital.icuBeds.available < 5 ? 'bg-red-500' : 'bg-primary'}`} style={{ width: `${(hospital.icuBeds.available / hospital.icuBeds.total) * 100}%` }}></div>
              </div>
              <p className={`${hospital.icuBeds.available < 5 ? 'text-red-500' : 'text-green-600'} text-xs font-medium mt-2 flex items-center gap-1`}>
                <span className="material-symbols-outlined text-xs">{hospital.icuBeds.available < 5 ? 'warning' : 'check_circle'}</span> 
                {hospital.icuBeds.available < 5 ? 'Critical Low' : 'Available'}
              </p>
            </div>
            <div className="col-span-2 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">stethoscope</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">Doctors On-Duty</span>
                </div>
                <p className="font-bold text-xl">{hospital.doctorsActive} Active</p>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover" src={`https://picsum.photos/seed/doc${i}/100/100`} referrerPolicy="no-referrer" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">+12</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-6">
          <h3 className="text-lg font-bold mb-3">Specializations</h3>
          <div className="flex flex-wrap gap-2">
            {hospital.specializations.map(spec => (
              <span key={spec} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark dark:text-primary text-sm font-medium border border-primary/20">{spec}</span>
            ))}
          </div>
        </div>

        <div className="px-4 mb-12">
          <h3 className="text-lg font-bold mb-3">Location & Contact</h3>
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="h-40 bg-slate-200 w-full relative group cursor-pointer" onClick={onNavigate}>
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOcVKR1gaG-KC92iDqMCMKukC3iYJsZMUR33z7ntC42h9jQG1UJvFE-xdnvlac-BqcFxk7ocqPq7oIgtDFAXnndA4AOs1Tz3VBCzefgSjxbEBj2V4FSjlpulVRQhwrPHpkAqcY5GMGdROVu7_UTRlx4nMOOKge4wp3Un8iMOgAfasI949H8z3e-MYbKSEL671SSE19_Z-llrdA95rtVcP3K_RLh6o2JbkDwCQobhoWWTMAf71CJlXju0drBaHfkYXgHKGf4MJ7cE4")' }}></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                <div className="bg-white dark:bg-slate-900 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">near_me</span>
                  <span className="text-sm font-bold">Tap to navigate</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="mt-1 bg-slate-100 dark:bg-slate-700 p-2 rounded-full shrink-0 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <p className="font-semibold">{hospital.address}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Medical District, NY 10001</p>
                  <p className="text-primary text-sm font-medium mt-1">{hospital.distance} • 12 min drive</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-full shrink-0 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Emergency Hotline</p>
                  <p className="font-semibold">{hospital.phone}</p>
                </div>
                <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 font-bold rounded-lg transition-colors">Call</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg z-40 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-3">
          <button onClick={onNavigate} className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-primary">navigation</span>
            Navigate
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-primary hover:bg-primary/90 text-slate-900 font-bold shadow-lg shadow-primary/25 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined">ambulance</span>
            Ambulance
          </button>
        </div>
      </div>
    </div>
  );
}
