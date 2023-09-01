import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import raw from './Translation/en.json';
import idn from './Translation/id.json'
import Sessions from '../Sessions/session';
import { SESSION_STORAGE_KEY as LanguageKey } from '../Language/languageConfig';


const userLanguage = Sessions.get(LanguageKey)?.Language ?? 'en';

const resources = {
    en: raw,
    id: idn
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