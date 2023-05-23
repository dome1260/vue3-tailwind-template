<template>
  <div
    v-if="props.show"
    class="overlay fixed h-screen w-screen flex justify-center items-center top-0 left-0 z-50 bg-[#21212175]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  show?: boolean
}

const props: Readonly<IProps> = withDefaults(defineProps<IProps>(), {
  show: false
})

</script>

<style scoped>
</style>
