<template>
  <section ref="refChat" class="flex flex-col overflow-y-auto h-full pb-0 p-6">
    <p class="w-full text-center mb-6">
      <small class="py-2 px-3 bg-slate-200 rounded-md font-medium">{{
        new Date().toLocaleDateString()
      }}</small>
    </p>
    <ChatLeft
      :chat="{
        time: '20:45',
        message: 'Falaaa pessoal do grupo, mandem oq quiserem',
      }"
    />
    <template v-for="chat in chats">
      <ChatRight v-if="chat.ID === ID" :chat="chat" :key="chat.ID" />
      <ChatLeft v-else :chat="chat" :key="chat.ID" />
    </template>
  </section>
</template>

<script>
import { onMessage } from "@/mixins/socket";
import { ref } from "@vue/reactivity";

import ChatLeft from "@/components/ChatLeft";
import ChatRight from "@/components/ChatRight";

export default {
  components: {
    ChatLeft,
    ChatRight,
  },
  props: {
    socket: Object,
    ID: String,
  },
  setup(props) {
    const chats = ref([]);
    const refChat = ref();
    const scrollBottom = () => {
      refChat.value.scrollTop = refChat.value.scrollHeight;
    };

    onMessage(props.socket, ({ data }) => {
      chats.value.push(JSON.parse(data));

      setTimeout(() => {
        scrollBottom();
      }, 0);
    });

    return {
      chats,
      refChat,
    };
  },
};
</script>

<style scoped></style>
