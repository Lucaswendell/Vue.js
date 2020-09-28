<template>
  <div v-if="!load">
    <img
      :src="usuario.avatar_url"
      alt="avatar gitHub"
      width="100"
      height="100"
    />
    <h1>{{ usuario.name }}</h1>
    <ul>
      <li v-for="(repository, index) in repositores" :key="index">
        {{ repository.name }}
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Carregando ...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      load: true,
      isError: false,
      usuario: null,
      repositores: [],
    };
  },
  created() {
    if (this.checkParam()) {
      this.fetchUsuario();
    }
  },
  methods: {
    checkParam() {
      if (!this.$route.params.nome) {
        return false;
      }
      return true;
    },
    async fetchUsuario() {
      try {
        const response = await axios.get(
          `https://api.gitHub.com/users/${this.$route.params.nome}`
        );
        this.usuario = response.data;
        this.load = false;
      } catch (err) {}

      axios
        .get(`https://api.gitHub.com/users/${this.$route.params.nome}/repos`)
        .then((res) => {
          this.repositores = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="stylus" scoped></style>