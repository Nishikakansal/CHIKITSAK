
import React from 'react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function Layout({ children, currentScreen, onNavigate }: LayoutProps) {
  const showNav = ['HOME', 'HOSPITAL_LIST', 'PROFILE', 'SETTINGS'].includes(currentScreen);

  if (!showNav) return <>{children}</>;

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden max-w-md mx-auto shadow-2xl relative">
      <main className="flex-1 overflow-y-auto no-scrollbar">
        {children}
      </main>
      
      <nav className="sticky bottom-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 pb-8 pt-4 z-50 rounded-t-[32px] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <button 
            onClick={() => onNavigate('HOME')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'HOME' ? 'text-primary-dark dark:text-primary' : 'text-slate-400'}`}
          >
            <span className={`material-symbols-outlined text-[28px] ${currentScreen === 'HOME' ? 'fill-1 font-variation-settings-fill' : ''}`}>home</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          
          <button 
            onClick={() => onNavigate('HOSPITAL_LIST')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'HOSPITAL_LIST' ? 'text-primary-dark dark:text-primary' : 'text-slate-400'}`}
          >
            <span className={`material-symbols-outlined text-[28px] ${currentScreen === 'HOSPITAL_LIST' ? 'fill-1 font-variation-settings-fill' : ''}`}>local_hospital</span>
            <span className="text-[10px] font-medium">Hospitals</span>
          </button>

          <div className="-mt-12 relative">
            <button 
              onClick={() => onNavigate('TRIAGE_RESULT')}
              className="h-16 w-16 rounded-full bg-danger text-white shadow-xl flex items-center justify-center active:scale-95 transition-transform emergency-ring"
            >
              <span className="material-symbols-outlined text-3xl">sos</span>
            </button>
          </div>

          <button 
            onClick={() => onNavigate('PROFILE')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'PROFILE' ? 'text-primary-dark dark:text-primary' : 'text-slate-400'}`}
          >
            <span className={`material-symbols-outlined text-[28px] ${currentScreen === 'PROFILE' ? 'fill-1 font-variation-settings-fill' : ''}`}>person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </button>

          <button 
            onClick={() => onNavigate('SETTINGS')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'SETTINGS' ? 'text-primary-dark dark:text-primary' : 'text-slate-400'}`}
          >
            <span className={`material-symbols-outlined text-[28px] ${currentScreen === 'SETTINGS' ? 'fill-1 font-variation-settings-fill' : ''}`}>settings</span>
            <span className="text-[10px] font-medium">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
