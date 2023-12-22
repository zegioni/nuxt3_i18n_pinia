<template>
    <div class="header">
        <div class="nav">
            <div class="nav-link">
                <NuxtLink to="/" class="link">Главная</NuxtLink>
            </div>
            <div class="nav-link">
                <NuxtLink to="/about" class="link">О нас</NuxtLink>
            </div>
            <form>
                <label for="locale-select">{{ $t('language') }}: </label>
                <select id="locale-select" v-model="selectedLocale">
                    <option value="en">en</option>
                    <option value="uk">uk</option>
                </select>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCookie } from '#app';

const languageStore = useLanguageStore();
const localeCookie = useCookie('locale');
const { locale } = useI18n();

// Реактивное свойство для выбранного языка
const selectedLocale = ref(localeCookie.value || languageStore.locale);

// Отслеживаем изменения выбранного языка и обновляем i18n и store
watch(selectedLocale, (newLocale) => {
    locale.value = newLocale;
    languageStore.setLocale(newLocale);
});

// Синхронизируем значение языка из cookie с i18n при монтировании
onMounted(() => {
    if (localeCookie.value && localeCookie.value !== languageStore.locale) {
        languageStore.setLocale(localeCookie.value);
        locale.value = localeCookie.value;
    }
});
</script>

<style lang="sass">
header
    background-color: #252525
    .nav
        .nav-link
            background-color: red
</style>
