<template>
  <section class="navChat flex flex-col justify-between overflow-hidden overflow-y-auto h-screen bg-slate-900">
    <!-- logo -->
    <header class="mb-7">
      <div
        class="flex justify-center items-center py-4 px-5 text-slate-500 text-2xl"
      >
        <img class="w-6" src="../../public/favicon.png" />
      </div>
      <div
        class="flex justify-center items-center py-4 px-5 text-slate-200 cursor-pointer"
      >
        <i class="bi bi-search text-md"></i>
      </div>
    </header>

    <article class="mb-7">
      <div
        class="flex justify-center items-center py-4 px-5 text-slate-200 bg-slate-700 cursor-pointer"
      >
        <i class="bi bi-person text-lg"></i>
      </div>
      <div
        class="flex justify-center items-center py-4 px-5 text-slate-200 cursor-pointer"
      >
        <i class="bi bi-alarm"></i>
      </div>
      <div
        class="flex justify-center items-center py-4 px-5 text-slate-200 cursor-pointer"
      >
        <i class="bi bi-bar-chart"></i>
      </div>
      <div
        class="flex justify-center items-center py-4 px-5 text-slate-200 cursor-pointer"
      >
        <i class="bi bi-basket3"></i>
      </div>
    </article>

    <footer>
      <div
        class="flex justify-center items-center py-4 px-5 text-slate-200 cursor-pointer"
      >
        <i class="bi bi-gear"></i>
      </div>
      <div
        class="flex justify-center items-center py-4 px-5 text-red-600 cursor-pointer"
      >
        <i class="bi bi-box-arrow-left"></i>
      </div>
      <div
        class="flex justify-center items-center py-4 px-5 cursor-pointer"
      >
        <img class="w-full" src="../assets/img/avatar.png" />
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.navChat{
  min-width: 75px;
  max-width: 75px;
}
</style>
