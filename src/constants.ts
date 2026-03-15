
import { Hospital, UserProfile } from './types';

export const HOSPITALS: Hospital[] = [
  {
    id: '1',
    name: 'City General Hospital',
    address: '123 Health Avenue, Downtown',
    distance: '1.2 km',
    eta: '8 min',
    rating: 4.5,
    reviews: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVDOmeUnO2AIJkU8F6dCCEiPh1t2_jd7A3XYhGyT2iQIwHuXGENXqocJMFAhdfpN_8ov1Du00s11p1-2pEP-mK81jPc6K0_JYWYOu3l_6CqUzYxhHSKLIyFiVYM67UPrmoRq6QtWSnDU9IAzenuwUCpk3urzDgT9rlSLnMo-ycF6JLNvCLihx8j_lOOd38E2YIW2DH7YzuEaq_p39uLpiej9m-9SpYScvp6PAUxCCoZB8I1CcQSf1IyTaKz5rrTS8vzprWOwKqpVw',
    ventilators: { available: 4, total: 12 },
    icuBeds: { available: 2, total: 30 },
    doctorsActive: 15,
    specializations: ['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Trauma Center', 'Emergency'],
    phone: '+1 (555) 123-4567',
    isEmergency: true,
    crowdLevel: 'Low'
  },
  {
    id: '2',
    name: "St. Mary's Clinic",
    address: '45 Westside Road, Uptown',
    distance: '3.5 km',
    eta: '12 min',
    rating: 4.2,
    reviews: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfWrBi1vumosnaRF10Dw5v19eYTBbb13PSeI_TU9j88XtI3GcoeU0PmKsLYOGO4hRI_hG5mQoQrggFQzu1Jqt6JEukI6doSld6vc-nYT1pYwFzjlfL55gI3nCTpgFaDgp_N3XijTRKgn9mTcoZiPkqG588RntFCm4PMMQX8GcPB0ztCZG5YmQEbwhHgjW3JlmkkkVK4jSWT0TmuwXYoQOWyqypqsB4LDwTkXbGTJaDGy5tDiyMMR5Kv_q0DsbHJAGSgpXzPtONk5A',
    ventilators: { available: 2, total: 5 },
    icuBeds: { available: 0, total: 10 },
    doctorsActive: 8,
    specializations: ['General Medicine', 'Pediatrics', 'Diagnostics'],
    phone: '+1 (555) 987-6543',
    isEmergency: false,
    crowdLevel: 'Mod.'
  },
  {
    id: '3',
    name: 'Northside Emergency',
    address: '89 North Boulevard',
    distance: '5.1 km',
    eta: '18 min',
    rating: 4.0,
    reviews: 210,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlkaZfCfJmnXruep3DrUvGKIOcfqtmJVBv1lpVaqe17k4FLOmMN5OUEVLPgORNTwl2Lre2kJUqVLjn4HrOxZ296KlmdH1F97BNU6Uzgu7AjhWHNqvTCYKWDVIE12X6mgtmCihpO49trbH1cZj_iMSTLHPOxM2jAuQZ-Km_VwiUtXjkh-SxIh_p1stsbO2dkQXp6Gcpje56k0PKaVfEn_CktJx8rrd9ryvp85c5iqcRPHZIq3gJ_-psW-5Yv5H1g1-rWsqJ-ODYCHc',
    ventilators: { available: 10, total: 20 },
    icuBeds: { available: 5, total: 40 },
    doctorsActive: 25,
    specializations: ['Emergency', 'Surgery', 'Trauma'],
    phone: '+1 (555) 444-3333',
    isEmergency: true,
    crowdLevel: 'High'
  }
];

export const USER: UserProfile = {
  name: 'Rahul Sharma',
  age: 28,
  gender: 'Male',
  bloodGroup: 'O+',
  medicalId: '#CH-8921',
  emergencyContacts: [
    { name: 'Priya Sharma', relation: 'Wife', initials: 'PS', color: 'bg-pink-100 text-pink-600' },
    { name: 'Amit Singh', relation: 'Brother', initials: 'AS', color: 'bg-blue-100 text-blue-600' }
  ]
};
