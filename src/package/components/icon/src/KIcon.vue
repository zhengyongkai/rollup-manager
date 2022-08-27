<template>
  <i :class="'k-icon-' + name"></i>
</template>

<script>
export default {
  name: 'k-icon',
  props: {
    name: String,
  },
};
</script>
