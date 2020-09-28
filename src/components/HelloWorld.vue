<template>
  <div class="hello">
    <p v-if="errors.length">
      <b>Por favor, Corrija o(s) erro(s) a seguir.</b>
      <ul>
        <li v-for="(err,index) in errors" :key="index">{{err}}</li>
      </ul>
    </p>
    <form action="" @submit="teste">
      <input type="text" v-model="nome" class="input" placeholder="Git hub name"/><br />
      <input type="submit" value="Mudar">
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      errors: [],
      nome: null
    }
  },
  methods: {
    teste: function(e){
      if(this.checkForm(e)){
        this.$router.replace(`/home/${this.nome}`);
      }
    },
    checkForm: function(e){
      if(this.nome){
        return true;
      }

      this.errors = [];

      if(!this.nome){
        this.errors.push('Preencha o campo nome.');
      }

      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  padding: 10px;
  background: none;
  border: 2px solid #000;
  margin-bottom: 10px;
}
</style>
