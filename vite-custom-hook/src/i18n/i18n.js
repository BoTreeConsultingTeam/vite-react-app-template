import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../language/en';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          ...en,
        },
      },
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
      format: (value, format, lng) => {
        let returnValue = value;
        if (format === 'number') {
          returnValue = new Intl.NumberFormat(lng).format(value);
        }
        return returnValue;
      },
    },
  });

export default i18n;
