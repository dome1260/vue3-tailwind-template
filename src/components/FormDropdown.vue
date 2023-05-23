<template>
  <div>
    <Field
      v-slot="{ field, errors }"
      v-bind="$attrs"
      :name="props.name"
      :model-value="props.modelValue">
      <v-select
        v-bind="field"
        :model-value="props.modelValue"
        :options="props.options"
        :label="props.label"
        :name="props.name"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :clearable="false"
        :reduce="$attrs.reduce"
        :class="{
          'vs--required': errorMessages || errors[0]
        }"
        @option:selected="selectItem($event)"
        @input="updateInput($event)">
        <template #search="{events, attributes}">
          <input
            class="vs__search"
            v-on="events"
            v-bind="attributes"
            :maxlength="maxlength" />
        </template>
        <template #open-indicator="{ attributes }">
          <img
            v-bind="attributes"
            src="/icon/chevron-bottom.png"
            width="16"
            height="16">
        </template>
        <template #no-options>
          <span> ไม่พบข้อมูล </span>
        </template>
        <template #option="item">
          <slot name="option" :item="item"></slot>
        </template>
      </v-select>
      <div class="text-red-500 h-3 px-3 pt-1 text-[12px]">
        {{ errorMessages || errors[0] }}
      </div>
    </Field>
  </div>
</template>

<script setup lang="ts">
// import vSelect from "vue-select";
import "vue-select/dist/vue-select.css"
// import { Field } from "vee-validate";

interface IProps {
  modelValue?: string
  name: string
  disabled?: boolean
  errorMessages?: string | string[]
  options?: any
  label?: string
  placeholder?: string
  maxlength?: string
}

const props: Readonly<IProps> = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  name: '',
  disabled: false,
  errorMessages: '',
  options: [],
  label: '',
  placeholder: '',
  maxlength: ''
});

interface IEmits {
  (e: 'input', value: any): void,
  (e: 'option:selected', value: any): void
}

const emits: IEmits = defineEmits<IEmits>()

function updateInput (e: Event): void {
  const eventTarget: HTMLInputElement = e.target as HTMLInputElement
  emits('input', eventTarget.value)
}

function selectItem (e: any): void {
  emits('option:selected', e)
}
</script>

<style scoped>
  :deep(.vs__dropdown-toggle) {
    height: 43px;
    border-radius: 8px;
  }
  :deep(.vs--required .vs__dropdown-toggle) {
    border: 1px solid #FF0000;
  }
  :deep(.vs__search) {
    font-size: 14px;
    color: #9BA3AF;
  }
  :deep(.vs__search:disabled) {
    color: #000000;
  }
</style>
