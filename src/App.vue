<template>
  <div id="app">
  
      <hello></hello>
      <br />
<cam></cam>
 <br />
 <database></database>
 <imgg></imgg>
  </div>
</template>

<script>
	
	var firebase = require('firebase');
	require('../static/fire.js');
	
	
import Hello from './components/Hello.vue'
import Cam from './components/Cam.vue'
import  Database from './components/Database.vue'
import  Imgg from './components/Imgg.vue'

export default {
  name: 'app',
  components: {
    Hello,
	Cam,
	  Database,
	  Imgg
  }
}
</script>

<style>


body, header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

</style>
