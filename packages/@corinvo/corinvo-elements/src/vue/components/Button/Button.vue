<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/core/utils';
import type { ButtonProps } from '@/core/types';
import './Button.css';

export interface VueButtonProps extends ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  class?: string;
}

const props = withDefaults(defineProps<VueButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
});

const emit = defineEmits<{
  click: [];
}>();

const buttonClasses = computed(() => {
  const baseClass = 'corinvo-button';
  const variantClass = `${baseClass}--${props.variant}`;
  const sizeClass = `${baseClass}--${props.size}`;
  return cn(baseClass, variantClass, sizeClass, props.class);
});

const handleClick = () => {
  if (!props.disabled) {
    emit('click');
  }
};
</script>
