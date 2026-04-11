
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
    <div className="flex flex-col h-screen bg-[#f8fafb] overflow-hidden max-w-md mx-auto shadow-2xl relative font-['Inter',sans-serif] antialiased">
      <main className="flex-1 overflow-y-auto no-scrollbar">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 w-full z-50">
        <div className="max-w-md mx-auto relative bg-white border-t border-slate-100 rounded-t-[32px] shadow-[0_-10px_35px_-15px_rgba(0,0,0,0.1)] pt-4 pb-8 px-6">
          <div className="flex justify-between items-center relative z-10 w-full">
            <button 
              onClick={() => onNavigate('HOME')}
              className={`flex flex-col items-center justify-center gap-1 transition-all ${currentScreen === 'HOME' ? 'text-[#0cd8d8]' : 'text-[#94a3b8] hover:text-[#64748b]'}`}
            >
              <span className={`material-symbols-outlined text-[28px] ${currentScreen === 'HOME' ? 'fill-1 font-variation-settings-fill' : ''}`}>home</span>
              <span className="text-[11px] font-bold tracking-wide">Home</span>
            </button>
            
            <button 
              onClick={() => {}} // Dummy for history
              className="flex flex-col items-center justify-center gap-1 transition-all text-[#94a3b8] hover:text-[#64748b]"
            >
              <span className="material-symbols-outlined text-[28px]">history</span>
              <span className="text-[11px] font-bold tracking-wide">History</span>
            </button>

            <button 
              onClick={() => onNavigate('HOSPITAL_LIST')}
              className={`flex flex-col items-center justify-center gap-1 transition-all ${currentScreen === 'HOSPITAL_LIST' ? 'text-[#0cd8d8]' : 'text-[#94a3b8] hover:text-[#64748b]'}`}
            >
              <span className={`material-symbols-outlined text-[28px] ${currentScreen === 'HOSPITAL_LIST' ? 'fill-1 font-variation-settings-fill' : 'fill-1 font-variation-settings-fill'}`}>add_box</span>
              <span className="text-[11px] font-bold tracking-wide">Hospitals</span>
            </button>

            <button 
              onClick={() => onNavigate('SETTINGS')}
              className={`flex flex-col items-center justify-center gap-1 transition-all ${currentScreen === 'SETTINGS' ? 'text-[#0cd8d8]' : 'text-[#94a3b8] hover:text-[#64748b]'}`}
            >
              <span className={`material-symbols-outlined text-[28px] ${currentScreen === 'SETTINGS' ? 'fill-1 font-variation-settings-fill' : 'fill-1 font-variation-settings-fill'}`}>settings</span>
              <span className="text-[11px] font-bold tracking-wide">Settings</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
