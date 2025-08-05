// resources/js/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './lang.js';

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'id',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
