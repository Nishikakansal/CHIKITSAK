
import React from 'react';
import { Hospital } from '../types';

interface NavigationProps {
  hospital: Hospital;
  onBack: () => void;
}

export default function Navigation({ hospital, onBack }: NavigationProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-hidden h-screen w-full flex flex-col max-w-md mx-auto relative">
      <div className="absolute top-0 left-0 right-0 z-20 px-4 pt-6 pb-2 bg-gradient-to-b from-white/90 to-transparent dark:from-background-dark/90 pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <button onClick={onBack} className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex flex-col items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Navigating to</span>
            <span className="text-sm font-bold">{hospital.name}</span>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      <div className="relative flex-1 w-full h-full bg-[#eef2f3] dark:bg-[#1a202c] overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-40" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.5) 2px, transparent 2px)',
          backgroundSize: '40px 40px',
          backgroundColor: '#e5e7eb'
        }}></div>
        
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 375 812">
          <path className="dark:stroke-slate-700" d="M-20 400 L400 350" stroke="white" strokeWidth="20"></path>
          <path className="dark:stroke-slate-700" d="M100 0 L80 812" stroke="white" strokeWidth="15"></path>
          <path className="dark:stroke-slate-700" d="M280 0 L300 812" stroke="white" strokeWidth="12"></path>
          <path className="dark:stroke-slate-700" d="M0 200 L375 220" stroke="white" strokeWidth="18"></path>
          
          <path className="dark:fill-slate-800/50" d="M-50 -50 L150 -50 L150 150 L-50 150 Z" fill="#d1fae5"></path>
          <path className="dark:fill-slate-800/50" d="M250 500 L400 500 L400 700 L250 650 Z" fill="#d1fae5"></path>
          
          <path d="M187 650 C 187 550, 80 500, 80 400 C 80 300, 200 300, 200 200" fill="none" stroke="#13ecec" strokeLinecap="round" strokeWidth="6" className="drop-shadow-md"></path>
          
          <path className="opacity-80" d="M80 460 C 80 440, 80 420, 80 400" fill="none" stroke="#ef4444" strokeLinecap="round" strokeWidth="6"></path>
          <path className="opacity-80" d="M80 400 C 80 380, 100 360, 120 350" fill="none" stroke="#f59e0b" strokeLinecap="round" strokeWidth="6"></path>
          
          <g transform="translate(188, 180)">
            <circle cx="12" cy="12" fill="rgba(19, 236, 236, 0.2)" r="24"></circle>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#ef4444" transform="scale(1.5) translate(-4, -4)"></path>
          </g>
          
          <g transform="translate(187, 650)">
            <circle className="fill-primary/30 dark:fill-primary/20 animate-ping" cx="0" cy="0" r="20"></circle>
            <circle className="shadow-lg" cx="0" cy="0" fill="white" r="12" stroke="#13ecec" strokeWidth="4"></circle>
          </g>
        </svg>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-md text-slate-700 dark:text-slate-200">
            <span className="material-symbols-outlined text-[20px]">add</span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-md text-slate-700 dark:text-slate-200">
            <span className="material-symbols-outlined text-[20px]">remove</span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-md text-primary mt-2">
            <span className="material-symbols-outlined text-[20px]">my_location</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full bg-white dark:bg-slate-800 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        </div>
        <div className="px-5 pb-6 pt-2">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold leading-tight">{hospital.name}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Emergency Care Unit • Open 24/7
              </p>
            </div>
            <span className="bg-primary/10 text-primary-dark dark:text-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Fastest</span>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">ETA</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">{hospital.eta.split(' ')[0]}</span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">min</span>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Distance</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">{hospital.distance.split(' ')[0]}</span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">km</span>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Arrival</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold">10:42</span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">AM</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30">
            <span className="material-symbols-outlined text-red-500 dark:text-red-400 text-lg">traffic</span>
            <p className="text-sm text-red-700 dark:text-red-300 font-medium">Heavy traffic reported on 5th Avenue (+4m)</p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <button className="col-span-1 flex flex-col items-center justify-center h-14 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300">
              <span className="material-symbols-outlined">call</span>
              <span className="text-[10px] font-semibold mt-0.5">Call</span>
            </button>
            <button className="col-span-3 flex items-center justify-center gap-2 h-14 rounded-lg bg-primary text-slate-900 font-bold shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">near_me</span>
              <span>Start Navigation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
