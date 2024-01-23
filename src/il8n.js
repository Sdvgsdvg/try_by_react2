// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json'; // English translations
import translationES from './locales/ar.json'; // Spanish translations

// Language resources
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources, // Language resources
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React handles escaping
  },
});

export default i18n;