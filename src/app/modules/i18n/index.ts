import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import raw from './Translation/en.json';
import Sessions from '../Sessions';
import { SESSION_STORAGE_KEY as LanguageKey } from '../Language';

const userLanguage = Sessions.get(LanguageKey)?.Language ?? 'en';

const resources = {
    en: raw
}

i18n.use(initReactI18next).init({
    resources,
    lng: `${userLanguage}`,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
})

export default i18n;