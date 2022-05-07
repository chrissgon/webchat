<template>
  <section
    :class="user.active ? 'bg-blue-100 hover:bg-blue-100' : 'hover:bg-blue-50'"
    class="itemContact max-w-full flex items-center p-4 cursor-pointer"
  >
    <header class="avatar">
      <img :src="require(`@/assets/img/user-${user.avatar}.png`)" />
    </header>

    <article class="info pl-3">
      <header class="flex justify-between items-center">
        <h4>{{ user.name }}</h4>
        <small class="font-medium text-blue-500">{{ user.time }}</small>
      </header>
      <aside class="flex items-center">
        <p
          class="w-full whitespace-nowrap text-ellipsis overflow-hidden text-slate-400"
        >
          {{ user.message }}
        </p>
        <small
          v-if="!nullNotification"
          class="bg-blue-500 px-3 ml-3 rounded-full text-white"
          >{{ user.notifications }}</small
        >
      </aside>
    </article>
  </section>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const nullNotification = computed(() => !props.user.notifications);

    return { nullNotification };
  },
};
</script>

<style scoped>
.itemContact {
  border-bottom: 1px solid #eee;
}
.itemContact .avatar img {
  max-width: 50px;
  min-width: 50px;
}
.itemContact .info {
  max-width: calc(100% - 62px);
}
</style>
