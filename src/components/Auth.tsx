
import React, { useState } from 'react';
import { motion } from 'motion/react';

interface AuthProps {
  onLogin: () => void;
  onEmergency: () => void;
}

export default function Auth({ onLogin, onEmergency }: AuthProps) {
  const [mode, setMode] = useState<'LOGIN' | 'SIGNUP'>('LOGIN');

  return (
    <div className="w-full max-w-md h-screen relative flex flex-col bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden mx-auto">
      <div className="absolute -top-[20%] -left-[20%] w-[140%] h-[60%] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center pt-12 px-6 pb-6">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white to-primary/10 dark:from-slate-800 dark:to-primary/10 shadow-lg flex items-center justify-center mb-6 ring-1 ring-primary/20 backdrop-blur-sm">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 m-auto w-4 h-full bg-primary rounded-full"></div>
            <div className="absolute inset-0 m-auto h-4 w-full bg-primary rounded-full"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 text-center">CHIKITSAK</h1>
        <p className="text-slate-500 dark:text-slate-400 text-center font-medium">Verification Required</p>
      </div>

      <div className="px-6 relative z-10 w-full">
        <div className="bg-slate-200/50 dark:bg-black/20 p-1 rounded-xl flex mb-8 backdrop-blur-sm">
          <button 
            onClick={() => setMode('LOGIN')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${mode === 'LOGIN' ? 'bg-white dark:bg-slate-800 shadow-sm text-primary-dark dark:text-primary' : 'text-slate-500 dark:text-slate-400'}`}
          >
            Login via OTP
          </button>
          <button 
            onClick={() => setMode('SIGNUP')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${mode === 'SIGNUP' ? 'bg-white dark:bg-slate-800 shadow-sm text-primary-dark dark:text-primary' : 'text-slate-500 dark:text-slate-400'}`}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 flex flex-col gap-6 relative z-10 overflow-y-auto no-scrollbar">
        {mode === 'LOGIN' ? (
          <>
            <div className="group">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-1">Email or Phone</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </span>
                <input 
                  className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm text-slate-900 dark:text-slate-100" 
                  placeholder="Enter your email or phone" 
                  type="text" 
                  defaultValue="+1 (555) 000-1234"
                />
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">6-Digit OTP</label>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {[...Array(6)].map((_, i) => (
                  <input 
                    key={i}
                    className="w-full aspect-square text-center text-xl font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm text-slate-900 dark:text-slate-100" 
                    maxLength={1} 
                    placeholder="•" 
                    type="text" 
                  />
                ))}
              </div>
              <div className="flex justify-between items-center mt-3 px-1">
                <span className="text-xs text-slate-500 dark:text-slate-400">Didn't receive it?</span>
                <button className="text-sm font-bold text-primary-dark dark:text-primary hover:underline">Resend OTP</button>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="group">
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ml-1">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                </span>
                <input className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm text-slate-900 dark:text-slate-100" placeholder="John Doe" type="text" />
              </div>
            </div>
            <div className="group">
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ml-1">Phone Number</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </span>
                <input className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm text-slate-900 dark:text-slate-100" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-4 pb-8">
          <button 
            onClick={onLogin}
            className="w-full py-4 bg-gradient-to-r from-primary-dark to-[#088a8a] dark:from-primary dark:to-[#0ea5a5] hover:opacity-90 text-white dark:text-slate-900 font-bold text-lg rounded-xl shadow-lg shadow-primary/20 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>{mode === 'LOGIN' ? 'Verify & Login' : 'Create Account'}</span>
            <span className="material-symbols-outlined text-[20px]">{mode === 'LOGIN' ? 'verified_user' : 'how_to_reg'}</span>
          </button>
          
          <button 
            onClick={onEmergency}
            className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-rose-200 dark:shadow-none transform active:scale-[0.98] transition-all flex items-center justify-center gap-3 ring-4 ring-rose-500/10"
          >
            <span className="material-symbols-outlined text-[24px] fill-current font-variation-settings-fill">medical_services</span>
            <span className="uppercase tracking-wider">Emergency? Skip Login</span>
          </button>
        </div>
      </div>

      <div className="px-6 pb-8 pt-4 relative z-10 mt-auto bg-background-light dark:bg-background-dark">
        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          <span className="flex-shrink-0 mx-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Or continue with</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
        </div>
        <div className="flex justify-center gap-6 mt-2">
          <button className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all">
            <img alt="Google" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlq9QOFxmny_pWf6G1xIZO1zKiyREFTgskQRT0xYBvTkGqSpfUFMvAiCMZhHWBxHtAN5xSIG6bk5_6nP-gqvPCYj9u84y_aRZS4tSf43_EYcni-MAQi-eF15Jiit44UUp8UN_uM6xx_RAZMiVEWmx2WqGvEf56uq2RwosQGvgfLnGonsFD3NsaYvfvGHNHCkGlYNLnNx2i50vUGVTAs56tT2Tw_tC13kOUm8oYdqY5xmR7MOxqiwrPSHUJyFUziN7IzScXU7YWU2o" />
          </button>
          <button className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all">
            <span className="material-symbols-outlined text-3xl text-slate-800 dark:text-white">ios</span>
          </button>
          <button className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all">
            <img alt="Facebook" className="w-6 h-6 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5IY2xFqafak8PTQDmiElDOH9FBl9NV48zwUG4CjpuYklgoS-1Nv7f_92wRIRRh_pKs6srbpaaVPyduNfRAgyTtXZSh4zmgnM2eAVHQAnDrSyTMAQ5y7bN3xUcmRAxQCKPUkIsExEq9Pdt-va6p36YyL4qOtmLdrJZiWKulLr-ZceRWzodfeoB-Jo-coHGfncMIBpCY8gjroCmdUOU08QeufLtkqcGLTH7qzLvZIBKrDzhsh9PLHjcmHNKPr523P8gVwCUvQ1OTMA" />
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-400 mt-8">
          By continuing, you agree to our <button className="text-primary-dark dark:text-primary hover:underline">Terms of Service</button> & <button className="text-primary-dark dark:text-primary hover:underline">Privacy Policy</button>.
        </p>
      </div>
    </div>
  );
}
