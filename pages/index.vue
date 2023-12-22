<template>
    <div>
        <p>{{ $t('welcome') }}</p>
        <button @click="increment">+</button>
        <span>{{ counter }}</span>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'

export default {
    name: 'home',

    setup() {
        

        const { t } = useI18n()
        const store = useStore();

        const counter = computed(() => store.counter);

        return {
            increment: store.increment,
            decrement: store.decrement,
            counter,
            t
        }
        }
}
</script>

<style lang="scss" scoped>

</style>