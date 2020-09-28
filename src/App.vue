<template>
  <div id="app">
    <nav>
      <router-link to="/hello">hello</router-link>
      <router-link to="/home">Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin-top: 60px;
  display: flex;
  
}
#app nav{
  position: fixed;
  top: 20px;
  align-self: center;
}

#app nav a{
  text-transform: uppercase;
  margin: 10px;
  font-size: 20px;
  color: #000;
  text-decoration: none;
  transition: all .2s;
  background-color: #11111188;
  padding: 10px;
  border: 2px solid #ddd;
} 

#app nav a:hover{
  letter-spacing: 2px;
  color: #fff;
}
</style>
