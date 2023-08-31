import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEatingTimeStore = defineStore('eatingTime', () => {
    
    const babyName = ref('Sia')

    const firstTime = ref(new Date('August 31, 2023 15:42:00'))
    const secondTime = ref(new Date('August 31, 2023 18:42:00'))
    const ThirdTime = ref(new Date('August 31, 2023 21:42:00'))
    const forthTime = ref(new Date('September 01, 2023 00:42:00'))
    const timesOfEating = ref([firstTime, secondTime, ThirdTime, forthTime])

    const addTime = () => {
        timesOfEating.value.push(new Date())
    }

    const eatenToday = computed(() => {
        const today = new Date();
    
        const test = timesOfEating.value.filter(dateRef => {
            const date = dateRef.value; // Access the underlying Date value
            return (
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()
            )
        }).length;
    
        return test;
    });
  
    return { babyName, timesOfEating, addTime, eatenToday }
})
