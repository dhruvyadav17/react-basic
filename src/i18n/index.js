import translations from "./translations";

/**
 * t(lang, "menu.home")
 * t(lang, "textForm.heading")
 */
export const t = (lang, keyPath) => {
  return (
    keyPath.split(".").reduce((obj, key) => obj?.[key], translations[lang]) ||
    keyPath
  );
};
