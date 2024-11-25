<template>
    <h1>Counter</h1>
    <section>

        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>
        <div>
            <button @click="increment">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import {computed, ref} from 'vue';

    const props = defineProps({
        value: {type: Number, required: true},
    });

    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value);

    const increment = () => {
        counter.value++;
    }

    const decrement = () => {
        counter.value--;
    }
    

</script>


<style scoped>
    h1 {
        color: green
    }
</style>