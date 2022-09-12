<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      `k-button`,
      `k-button--${type}`,
      {
        'is-disabled': disabled || loading,
        'is-round': round,
        'is-circle': circle,
        'is-loading': loading,
      },
    ]"
  >
    <i class="k-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'k-button',
  props: {
    type: {
      type: String,
      default: () => 'primary',
    },
    disabled: {
      type: Boolean,
    },
    round: {
      type: Boolean,
    },
    circle: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>
