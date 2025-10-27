<template>
  <div class="corinvo-input-wrapper">
    <label v-if="label" class="corinvo-input-label">{{ label }}</label>
    <input
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/core/utils';
import type { InputProps } from '@/core/types';
import './Input.css';

export interface VueInputProps extends InputProps {
  modelValue?: string;
  class?: string;
  label?: string;
}

const props = withDefaults(defineProps<VueInputProps>(), {
  type: 'text',
  disabled: false,
  modelValue: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const inputClasses = computed(() => {
  return cn('corinvo-input', props.class);
});

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>
