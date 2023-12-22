// store/languageStore.js
export const useLanguageStore = defineStore('language', {
    state: () => ({
        locale: 'en', // Значение по умолчанию
    }),
    actions: {
        setLocale(newLocale) {
            this.locale = newLocale;
            const cookie = useCookie('locale');
            cookie.value = newLocale;
        },
        initLocale() {
            const cookie = useCookie('locale');
            if (cookie.value) {
                this.locale = cookie.value;
            }
        },
    },
});
