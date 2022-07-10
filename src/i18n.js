import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "Koh69VwdDNIdHKXBUORx4Q";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en", "af", "sq", "am", "ar", "hy", "az", "eu", "zh", "my", "ca", "da", "nl", "eo", "et", "fi", "he", "hu", "gu", "fr", "ko", "ms", "ps", "th", "mr", "be", "bn", "bs", "bg", "cs", "hr", "ka", "gl", "de", "hi", "is", "ha", "ig", "ga", "id", "kn", "rw", "kk", "it", "ja", "km", "lb", "or", "mg", "yo", "uz", "sr", "si", "fy", "cy", "vi", "ur", "ta", "ug", "tr", "uk", "sl", "so", "pl", "fa", "ne", "mn", "es", "no", "te", "mk", "ky", "lo", "sv", "el", "lv", "lt", "ro", "ml", "mt", "sn", "ru", "gd", "sk", "zu", "yi", "pa", "pt", "sw", "tl"],

    backend: {
      loadPath: loadPath
    }
  })