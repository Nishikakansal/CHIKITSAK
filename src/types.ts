
export type Screen = 
  | 'SPLASH' 
  | 'ONBOARDING' 
  | 'LOGIN' 
  | 'SIGNUP' 
  | 'HOME' 
  | 'HOSPITAL_LIST' 
  | 'HOSPITAL_DETAILS' 
  | 'NAVIGATION' 
  | 'TRIAGE_INPUT'
  | 'TRIAGE_RESULT' 
  | 'PROFILE' 
  | 'SETTINGS';

export interface Hospital {
  id: string;
  name: string;
  address: string;
  distance: string;
  eta: string;
  rating: number;
  reviews: number;
  image: string;
  ventilators: { available: number; total: number };
  icuBeds: { available: number; total: number };
  doctorsActive: number;
  specializations: string[];
  phone: string;
  isEmergency: boolean;
  crowdLevel: 'Low' | 'Mod.' | 'High';
}

export interface UserProfile {
  name: string;
  age: number;
  gender: string;
  bloodGroup: string;
  medicalId: string;
  emergencyContacts: Array<{
    name: string;
    relation: string;
    initials: string;
    color: string;
  }>;
}
