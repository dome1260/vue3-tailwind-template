import { defineStore } from 'pinia'
import {
  Ref,
  ref,
  ComputedRef,
  computed
} from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const loadingCount: Ref<number> = ref(0)

  const isLoading: ComputedRef<boolean> = computed((): boolean => !!loadingCount.value)

  function addLoading (): void {
    loadingCount.value++
  }

  function removeLoading (): void {
    loadingCount.value = loadingCount.value - 1 < 0 ? 0 : loadingCount.value - 1
  }

  return {
    loadingCount,
    isLoading,
    addLoading,
    removeLoading
  }
})
