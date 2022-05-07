<template>
  <section class="chatBar flex px-6 py-2 border-t-2 border-slate-100">
    <input
      @keyup.enter="sendMessage"
      v-model="message"
      class="w-full rounded-full pl-5 focus:outline-none"
      type="text"
      placeholder="Escreva sua mensagem"
    />
    <button
      @click="sendMessage"
      class="send flex justify-center items-center ml-5 rounded-full text-white text-lg bg-blue-600 px-4"
    >
      <i class="bi bi-send"></i>
    </button>
  </section>
</template>

<script>
import { waitForSocketConnection } from "@/mixins/socket";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/reactivity";

export default {
  props: {
    socket: Object,
    ID: String,
  },
  setup(props) {
    // data
    const message = ref("");
    const messageNotNull = computed(() => message.value.trim() != "");

    // methods
    const sendMessage = () => {
      if (messageNotNull.value) {
        waitForSocketConnection(props.socket, () => {
          const data = {
            time: new Date().toLocaleTimeString("pt-BR", {
              hour: "numeric",
              minute: "numeric",
            }),
            message: message.value,
            ID: props.ID,
          };

          props.socket.send(JSON.stringify(data));

          message.value = "";
        });
      }
    };

    return {
      message,
      sendMessage,
    };
  },
};
</script>

<style scoped>
.chatBar {
  max-height: 60px;
  min-height: 60px;
}
.send {
  min-width: 60px;
  max-width: 60px;
  min-height: 40px;
  max-height: 40px;
}
</style>
