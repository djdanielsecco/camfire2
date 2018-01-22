<template>
  <div class="imgg">
    <h1>{{ msg }}</h1>
      <div v-if="!image">
    <h2>Select an image</h2>
    <input type="file" accept="video/*;capture=camcorder" @change="onFileChange">
  </div>
  <div v-else>
    <img :src="image" width="50px" height="50px"/>
    <button @click="removeImage">Remove image</button>
  </div>
    
  </div>
</template>

<script>
	var firebase = require('firebase');

	
	
	
	export default {
		name: 'imgg',
		data() {
			return {
				msg: 'vai',
				image: '',
				urr: ''
			}
		},
		methods: {
			onFileChange(e) {
				var files = e.target.files || e.dataTransfer.files;
				if (!files.length)
					return;
				this.createImage(files[0]);
var file = e.target.files[0];
                  var storageRef = firebase.storage().ref(file.name);
                  storageRef.put(file);
				storageRef.getDownloadURL().then(function(url) {
                 console.log(url + '<-----------------');

                });
				firebase.database().ref('/data2/').set({
					foto: this.urr,
					lat: 1231212,
					long: 11123123123,
					user: 5585558
				});
			},
			createImage(file) {
				var image = new Image();
				var reader = new FileReader();
				var vm = this;

				reader.onload = (e) => {
					vm.image = e.target.result;
				};
				reader.readAsDataURL(file);
				
				 // use the Blob or File API
					/*storageRef.put(reader).then(function(snapshot) {
						console.log('Uploaded a blob or file!');
					});*/
				console.log(image.innerText + '<kkkkk>');

			},
			removeImage: function(e) {
				this.image = '';
			}
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

</style>
