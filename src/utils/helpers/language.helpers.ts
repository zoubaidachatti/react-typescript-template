import { LanguageCodes } from '@/config/constants';
import { LanguageCodesEnum, LocaleCodesEnum } from '@/config/enums';

export const localeToLanguage = (locale: string) => {
  switch (locale) {
    case LocaleCodesEnum.ENGLISH_UNITED_STATES:
      return LanguageCodesEnum.ENGLISH;
    case LocaleCodesEnum.FRENCH_FRANCE:
      return LanguageCodesEnum.FRENCH;
    default:
      return LanguageCodes.FALLBACK.short;
  }
};
