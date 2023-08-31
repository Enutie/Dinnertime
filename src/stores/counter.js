import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  const decrement = () => {
    count.value--
  }
  const oddOrEven = () =>  {
    if(count.value % 2 === 0) return 'even'
    return 'odd'
  }

  return { count, doubleCount, increment, decrement, oddOrEven }
})
