import React, { useState } from 'react';
import { Screen, Hospital } from './types';
import { HOSPITALS } from './constants';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';
import Auth from './components/Auth';
import Home from './components/Home';
import HospitalList from './components/HospitalList';
import HospitalDetails from './components/HospitalDetails';
import Navigation from './components/Navigation';
import TriageResult from './components/TriageResult';
import Profile from './components/Profile';
import Settings from './components/Settings';

export default function App() {
  const [screen, setScreen] = useState<Screen>('SPLASH');
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [triageResult, setTriageResult] = useState<any>(null);

  const navigate = (newScreen: Screen) => {
    setScreen(newScreen);
    window.scrollTo(0, 0);
  };

  const handleHospitalClick = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    navigate('HOSPITAL_DETAILS');
  };

  const handleTriage = async (symptoms: string) => {
    // Show a loading state or just navigate immediately for responsiveness
    // In a real app, we'd call the /api/triage endpoint
    // console.log("Triaging symptoms:", symptoms);
    
    // Simulating AI delay
    const mockResult = {
      severity: 'CRITICAL',
      summary: `Based on detected symptoms "${symptoms}", we suspect an acute cardiovascular event. High risk of myocardial infarction or severe respiratory distress.`,
      probable_condition: 'Acute Coronary Syndrome',
      action_required: 'Immediate medical evaluation required. Do not drive yourself.'
    };
    
    setTriageResult(mockResult);
    navigate('TRIAGE_RESULT');
  };

  const renderScreen = () => {
    switch (screen) {
      case 'SPLASH':
        return <SplashScreen onComplete={() => navigate('ONBOARDING')} />;
      case 'ONBOARDING':
        return <Onboarding onNext={() => navigate('LOGIN')} onSkip={() => navigate('LOGIN')} />;
      case 'LOGIN':
      case 'SIGNUP':
        return <Auth onLogin={() => navigate('HOME')} onEmergency={() => handleTriage('Emergency SOS Triggered')} />;
      case 'HOME':
        return (
          <Home 
            onServiceClick={(id) => id === 'ambulance' ? navigate('HOSPITAL_LIST') : null} 
            onEmergency={() => handleTriage('Emergency button pressed')}
            onProfile={() => navigate('PROFILE')}
          />
        );
      case 'HOSPITAL_LIST':
        return <HospitalList onHospitalClick={handleHospitalClick} />;
      case 'HOSPITAL_DETAILS':
        return selectedHospital ? (
          <HospitalDetails 
            hospital={selectedHospital} 
            onBack={() => navigate('HOSPITAL_LIST')} 
            onNavigate={() => navigate('NAVIGATION')}
          />
        ) : null;
      case 'NAVIGATION':
        return selectedHospital ? (
          <Navigation hospital={selectedHospital} onBack={() => navigate('HOSPITAL_DETAILS')} />
        ) : null;
      case 'TRIAGE_RESULT':
        return <TriageResult result={triageResult} onFindHospital={() => navigate('HOSPITAL_LIST')} onBack={() => navigate('HOME')} />;
      case 'PROFILE':
        return <Profile />;
      case 'SETTINGS':
        return <Settings onLogout={() => navigate('LOGIN')} />;
      default:
        return <Home onServiceClick={() => {}} onEmergency={() => {}} onProfile={() => {}} />;
    }
  };

  return (
    <Layout currentScreen={screen} onNavigate={navigate}>
      {renderScreen()}
    </Layout>
  );
}
