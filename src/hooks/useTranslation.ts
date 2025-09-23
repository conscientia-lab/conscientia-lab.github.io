import { useTranslation } from "react-i18next";

// Defina as chaves de tradução para type safety
type TranslationKeys =
  // Navegação e UI básica
  "";

export const useTypedTranslation = () => {
  const { t, i18n } = useTranslation();

  return {
    t: (key: TranslationKeys) => t(key),
    i18n,
    changeLanguage: i18n.changeLanguage,
    currentLanguage: i18n.language,
  };
};
