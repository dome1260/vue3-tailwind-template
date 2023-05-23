import { defineStore } from 'pinia'
import {
  Ref,
  ref,
  ComputedRef,
  computed
} from 'vue'

export const useAppStore = defineStore('app', () => {
  const isPaid: Ref<boolean> = ref(false)

  const isPaidValue: ComputedRef<boolean> = computed((): boolean => isPaid.value)

  function setPaymentState (value: boolean): void {
    isPaid.value = value
  }

  return {
    isPaid,
    isPaidValue,
    setPaymentState
  }
})
