<template>
  <section
    class="chatHeader flex w-full justify-between items-center px-6 border-b-2 border-slate-100 backdrop-blur-md"
  >
    <article class="flex items-center">
      <img class="avatar" src="@/assets/img/user-one.png" />
      <span class="ml-4">Grupo da Diversão 😝😂</span>
    </article>
    <aside class="text-slate-400 cursor-pointer">
      <i class="bi bi-heart-fill text-red-700 px-2"></i>
      <i class="bi bi-camera-video px-2"></i>
      <i class="bi bi-telephone px-2"></i>
      <i class="bi bi-info-circle px-2"></i>
    </aside>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.chatHeader {
  min-height: 58px;
  max-height: 58px;
}

.chatHeader .avatar {
  min-width: 35px;
  max-width: 35px;
}
</style>
