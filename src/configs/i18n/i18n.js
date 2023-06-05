import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { LANGUAGE } from "../../constants/language";

import { en } from "./locales/en";
import { vi } from "./locales/vi";

i18n
  .use(initReactI18next)
  .init({
    returnNull: false,
    fallbackLng: LANGUAGE.VI,
    debug: false,
    lng: LANGUAGE.EN,
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error) => {
    throw error;
  });

console.log("i18m", i18n);
const I18n = i18n;

export { I18n };
