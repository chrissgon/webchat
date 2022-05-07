<template>
  <section
    class="chatContent flex flex-col justify-between w-full overflow-hidden"
  >
    <ChatHeader />

    <ChatMessage :class="{ disabled: error }" :socket="socket" :ID="ID" />

    <ChatBar :class="{ disabled: error }" :socket="socket" :ID="ID" />
  </section>
</template>

<script>
import ChatHeader from "@/components/ChatHeader";
import ChatMessage from "@/components/ChatMessage";
import ChatBar from "@/components/ChatBar";
import { ref } from "@vue/reactivity";

export default {
  components: {
    ChatHeader,
    ChatMessage,
    ChatBar,
  },
  setup() {
    let socket;
    const error = ref(false);
    const ID = btoa(new Date().toISOString());

    try {
      socket = new WebSocket("ws://localhost:5000");
    } catch (e) {
      error.value = true;
    }

    return { socket, error, ID };
  },
};
</script>

<style scoped>
.chatContent {
  max-height: calc(100% - 60px);
}
</style>
