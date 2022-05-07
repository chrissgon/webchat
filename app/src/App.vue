<template>
  <section class="container flex max-h-screen min-h-screen max-w-full overflow-hidden">
    <SideNav class="hidden lg:flex" />
    <div class="w-full flex flex-wrap">
      <MainNav />
      <div class="flex h-full w-full">
        <ListContact class="hidden md:flex md:w-4/12" />
        <ChatContent class="w-12/12" />
      </div>
    </div>
  </section>
</template>

<script>
import SideNav from "@/components/SideNav";
import MainNav from "@/components/MainNav";
import ListContact from "@/components/ListContact";
import ChatContent from "@/components/ChatContent";

export default {
  name: "App",
  components: {
    SideNav,
    MainNav,
    ListContact,
    ChatContent,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
