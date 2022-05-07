<template>
  <section class="w-full mb-3">
    <article class="text-right float-right">
      <p class="bg-blue-600 text-white p-3 rounded-lg">{{ chat.message }}</p>
      <small>{{ chat.time }}</small>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    chat: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
