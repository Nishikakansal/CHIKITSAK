
import React from 'react';
import { USER } from '../constants';

export default function Profile() {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <div className="flex items-center justify-between px-6 pt-8 pb-4 sticky top-0 z-10 bg-background-light dark:bg-background-dark">
        <h1 className="text-2xl font-bold tracking-tight">Medical Profile</h1>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-primary-dark dark:text-primary">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>edit</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="px-6 mb-6">
          <div className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="relative mb-4">
              <div className="h-28 w-28 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  alt={USER.name} 
                  className="h-full w-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_YSoDwwr0cIOTqUaM72hIPnIbSg5DqvgU9iBPEEgmwSxP-qOPG3z7ObAA2RaiyPFbAB1F3lW6t2dAppc9zi1UofWez0YIHJXu9En9jwHtOnhQ_iGHmfTk53UGVGvUynkhBOQZrs3s85dZe6d-hdAsvW3K0y8rHdL89-qwOWyp1MD52ANpGbOeepLOLkvKlCEnc2Bgbh0DNujNmB5qh957Lt9Yw7fHg6aXNsfxnKv6pd6--kOLnFlFNRExUyPCMURANfIJ-aogfTw" 
                />
              </div>
              <div className="absolute bottom-1 right-1 h-7 w-7 bg-primary rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[16px]">check</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{USER.name}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-base font-medium">{USER.age} Years, {USER.gender}</p>
            
            <div className="mt-6 w-full pt-6 border-t border-slate-50 dark:border-slate-700 flex justify-center">
              <div className="flex flex-col items-center px-8 py-3 bg-primary/10 dark:bg-primary/5 rounded-2xl border border-primary/20">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-dark dark:text-primary mb-1">Blood Group</span>
                <span className="text-3xl font-black text-primary-dark dark:text-primary">{USER.bloodGroup}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Emergency Contacts</h3>
            <button className="text-xs font-semibold text-primary-dark dark:text-primary hover:underline">Add New</button>
          </div>
          <div className="space-y-3">
            {USER.emergencyContacts.map((contact, i) => (
              <div key={i} className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold ${contact.color}`}>
                    {contact.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-base">{contact.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{contact.relation}</p>
                  </div>
                </div>
                <button className="h-11 w-11 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-100 transition-colors shadow-sm">
                  <span className="material-symbols-outlined fill-1 font-variation-settings-fill">call</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 pb-12">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Medical ID</p>
            <p className="text-sm font-bold text-primary-dark dark:text-primary">{USER.medicalId}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
