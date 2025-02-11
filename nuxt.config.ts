// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@pinia/nuxt', '@vueuse/nuxt'],
    pinia: {
        storesDirs: ['./stores'],
    },
});
