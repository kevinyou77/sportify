<template>
  <div id="app">
    <div id="sidebar">
      <sidebar></sidebar>
    </div>
    <div id="app-content">
      <div id="navbar">
          <navbar></navbar>
      </div>
      <div id="mainContent">
          <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
export default {
  components:{
    'sidebar': Sidebar,
    'navbar': Navbar,
  }
}
</script>

<style>
body{
  background-color: #ecf0f5;
}
#app{
 display: flex;
}
#sidebar{
  position: fixed;
}
#app-content{
  width: 83.6%;
  position: relative;
  left: 16.4%;
}
#mainContent{
  padding: 1%;
  padding-left: 2%;
  margin-top: 5%;
}
#navbar{
  position: fixed;
  z-index: 2;
}

h1{
  margin: 0;
}
</style>
