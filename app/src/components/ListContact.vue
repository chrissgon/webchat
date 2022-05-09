<template>
  <section
    class="listContact flex flex-col h-screen border-r-2 border-slate-100"
  >
    <label
      for="search"
      class="flex justify-between p-2 border-b-2 border-slate-100"
    >
      <input
        type="text"
        id="search"
        class="w-full focus:outline-none pl-4"
        placeholder="Pesquiser um nome ou número"
      />
      <i class="bi bi-funnel p-2 px-3 cursor-pointer bg-slate-100 rounded"></i>
    </label>

    <article class="overflow-y-auto pb-16">
      <!-- <template > -->
      <ItemContact v-for="(contact, i) in contacts" :user="contact" :key="i" />
      <!-- </template> -->
    </article>
  </section>
</template>

<script>
import ItemContact from "@/components/ItemContact";

export default {
  components: { ItemContact },
  setup() {
    const contacts = [
      {
        active: true,
        avatar: "one",
        name: "Grupo da Diversão 😝😂",
        time: "20:45",
        message:
          "Falaaa pessoal do grupo, mandem oq quiserem",
      },
      {
        avatar: "two",
        name: "Amanda Ketellyn",
        time: "19:14",
        message:
          "Eu precisava que vc me ajudasse a cuidar do Henrique",
        notifications: "5",
      },
      {
        avatar: "three",
        name: "Evanildo Oliveira",
        time: "19:02",
        message:
          "Vc viu que lançou o novo filme do Doutor Estranho?",
        notifications: "2",
      },
      {
        avatar: "four",
        name: "Stony Ruan",
        time: "17:59",
        message:
          "Adivinha quem foi promovido????",
      },
      {
        avatar: "five",
        name: "Camila Barreto",
        time: "16:31",
        message:
          "Sabe a Isadir, minha sobrinha? Ela foi para os EUA.",
        notifications: "3",
      },
      {
        avatar: "six",
        name: "Kevin Torres",
        time: "16:18",
        message:
          "Eu comprei um curso muito bom pela Udemy, depois te passo o link",
      },
      {
        avatar: "one",
        name: "Eduardo Andrade",
        time: "15:22",
        message:
          "Mas é vdd que ninguém supera ele como ator, meu preferido",
      },
      {
        avatar: "two",
        name: "Maria de Jesus",
        time: "12:06",
        message:
          "Vc conseguiu comprar as coisas que te pedi no supermecado???",
      },
    ];

    return {
      contacts,
    };
  },
};
</script>

<style scoped>
.listContact {
  max-width: 400px;
}
</style>
