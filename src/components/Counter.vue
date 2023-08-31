<template>
    <div class="count">
      {{ eatingTime.eatenToday }}
    </div>
</template>

<script setup>
import { useEatingTimeStore } from '@/stores/eatingTime'

const eatingTime = useEatingTimeStore()

</script>