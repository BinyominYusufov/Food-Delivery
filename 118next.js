// i18n.js or i18n.ts
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./public/locales/en.json"; // Import translations
import ru from "./public/locales/ru.json";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en, // English translations
        },
        ru: {
            translation: ru, // Russian translations
        },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
        escapeValue: false, // React already escapes values
    },
});

export default i18next;
