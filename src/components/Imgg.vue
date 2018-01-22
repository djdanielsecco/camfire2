<template>
  <div class="imgg">
    <h1>{{ msg }}</h1>
      <div v-if="!image">
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange">
  </div>
  <div v-else>
    <img :src="image" />
    <button @click="removeImage">Remove image</button>
  </div>
    
  </div>
</template>

<script>
export default {
  name: 'imgg',
  data () {
    return {
      msg: 'vai',
		image: ''
    }
  },
	  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
