<template>
  <div class="home">
    <Counter />
  </div>
  <div class="button">
    <button @click="eatingTime.addTime()">Nu får {{ eatingTime.babyName }} mad</button>
  </div>
  <hr>
  <div>
    {{ eatingTime.babyName }} spiste sidst kl: {{ eatingTime.timesOfEating.slice(-1) }}
  </div>
  <hr>
  <div>
    <h3>Edit counter:</h3>
    {{ eatingTime.timesOfEating}}
  </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import { useEatingTimeStore } from '@/stores/eatingTime'

const eatingTime = useEatingTimeStore()

</script>

<style>
.count {
  font-size: 10rem;
  margin: 5rem;
}
.button button {
  font-size: 5rem;
  margin: 2.5rem;
}
</style>
