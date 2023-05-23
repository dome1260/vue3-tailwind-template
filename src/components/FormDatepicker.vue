<template>
  <div>
    <date-picker
      :value="props.modelValue"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :format="props.format"
      :lang="props.lang"
      :clearable="false"
      :disabled-date="props.disabledDate"
      @update:value="update($event)" />
  </div>
</template>

<script setup lang="ts">
// import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";
import 'vue-datepicker-next/locale/th.es'

interface IProps {
  modelValue?: Date | string
  name: string
  disabled?: boolean
  errorMessages?: string | string[]
  placeholder?: string
  format?: string
  lang?: string
  disabledDate?(date: Date): void
}

const props: Readonly<IProps> = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  name: '',
  disabled: false,
  errorMessages: '',
  placeholder: '',
  format: 'YYYY-MM-DD',
  lang: '',
  disabledDate: undefined
})

interface IEmits {
  (e: 'update:model-value', value: any): void
}

const emits: IEmits = defineEmits<IEmits>()

function update (e: Event): void {
  emits('update:model-value', e)
}

</script>

<style scoped>
  :deep(.mx-input) {
    height: 43px;
    border-radius: 8px;
    box-shadow: none;
    border-color: #CDCDCD;
  }
  :deep(.mx-datepicker) {
    width: 100%;
  }
  :deep(.mx-input:hover) {
    border-color: #CDCDCD;
  }
  :deep(.mx-input:disabled) {
    background-color: #F5F5F5;
    color: #000000;
  }
</style>
