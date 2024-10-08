<script setup lang="ts">
import { format } from "date-fns"
import type { PropType } from "vue"
import type {
  DatePickerDate,
  DatePickerRangeObject,
} from "v-calendar/dist/types/src/use/datePicker"

const emit = defineEmits(["update:modelValue"])

const props = defineProps({
  modelValue: {
    type: [String, Date, Object] as PropType<
      DatePickerDate | DatePickerRangeObject
    >,
    default: null,
  },
  datePlaceholder: {
    type: String,
    default: 'Filing Date',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isRangedPicker: {
    type: Boolean,
    default: false,
  },
  isLeftBar: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: null,
  },
  isFilter: {
    type: Boolean,
    default: false,
  },
})

const date = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
})

const datePlaceholder = computed(() => {
  return props.isRangedPicker
    ? date.value?.end
      ? `${format(date.value?.start, "d MMMM, yyy")} - ${format(
          date.value?.end,
          "d MMMM, yyy"
        )}`
      : "Date Range"
    : format(date.value, "d MMMM, yyy")
})
</script>
<template>
  <UPopover :popper="{ placement: 'bottom-start' }">
    <UInput
      class="w-full"
      :placeholder="date ? datePlaceholder : props.datePlaceholder"
      type="text"
      icon="i-mdi-calendar"
      :disabled="disabled"
      :trailing="true"
      :size="size"
      :ui="{
        icon: { trailing: { pointer: '' } },
        size: { md: 'h-[44px]' },
      }"
    >
      <template #trailing>
        <UButton
          v-if="isFilter"
          v-show="!!date.start || !!date.end"
          color="gray"
          variant="link"
          icon="i-mdi-cancel-circle text-primary"
          :padded="false"
          @click="emit('update:modelValue', { start: null, end: null })"
        />
        <UIcon name="i-mdi-calendar" class="w-5 h-5 text-primary" />
      </template>
    </UInput>

    <template #panel="{ close }">
      <DatePicker
        v-model="date"
        :is-ranged-picker="isRangedPicker"
        :is-left-bar="isLeftBar"
        is-required
        @close="close"
      />
    </template>
  </UPopover>
</template>
