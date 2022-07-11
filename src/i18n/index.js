import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEn from './en';
import translationsUa from './ua';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: { 
      en: { translation: translationsEn }, 
      ua: { translation: translationsUa } 
    },
  });
