<template>
  <section class="w-full mb-3">
    <article class="text-left float-left">
      <p class="bg-slate-600 text-white p-3 rounded-lg">{{ chat.message }}</p>
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
