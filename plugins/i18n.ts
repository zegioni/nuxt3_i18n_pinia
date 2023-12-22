import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import uk from '../locales/uk.json';
import { useLanguageStore } from '../stores/languageStore.js';

export default defineNuxtPlugin(({ vueApp }) => {
    const languageStore = useLanguageStore();
    languageStore.initLocale();

    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: languageStore.locale,
        fallbackLocale: 'en',
        messages: {
            en,
            uk,
        },
    });

    vueApp.use(i18n);
});
