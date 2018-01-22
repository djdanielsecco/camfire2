    	'use strict'
var firebase = require('firebase');
var $ = require('jquery')
	var config = {
    apiKey: "AIzaSyCZLUzrohM-sSo6xdNozSj45tw7JO161Bw",
    authDomain: "fotogeo-16a78.firebaseapp.com",
    databaseURL: "https://fotogeo-16a78.firebaseio.com",
    projectId: "fotogeo-16a78",
    storageBucket: "fotogeo-16a78.appspot.com",
    messagingSenderId: "1093165096555"};

	var jhg = document.getElementById("poi");
	var uio = [];
var dados1 = [];
var furlf;
	var defaultApp = firebase.initializeApp(config);
 var database = firebase.database();
	
console.log(defaultApp.name);  // "[DEFAULT]"

////// cria blocos para cada elemento

function createCard(data) {
	//$("#tarima").attr("src", data.foto);
	//jhg.innerHTML = furlf;
	console.log(data + '  <  >');

	
}

     function updateUI(data) {
  
  for (var i = 0; i < data.length; i++) {
    createCard(data[i]);
  }
}

var url = 'https://fotogeo-16a78.firebaseio.com/data.json';
var networkDataReceived = false;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    networkDataReceived = true;
	window.furlf = data.foto;
	
var jhg = document.getElementById("poi");
jhg.textContent = data.lat;
$("#tarima").attr("src", data.foto);
	console.log(data.foto + '<???>' + jhg) ;
	/*window.fefe = data.geral0.value;
	window.xaxa = data.geral0.device;
	window.xexe = data.geral0.channel;
	window.xixi = data.geral0.cc;
	firebase.database().ref('/fader/geral0').set({
  cc:xixi, channel:xexe, device:xaxa, value:fefe
  });*/
    console.log('From web', data);
    var dataArray = [];
    for (var key in data) {
     dataArray.push(data[key]);
     uio.push(data[key]);
    }
    updateUI(dataArray);
	window.dados1 = uio;
	
	return window.dados1, window.furlf;
  });
/*
document.addEventListener('input', function () {
var koko;
	var xcx={};
	var xuxu1= [];
	window.koko = document.getElementsByTagName("INPUT");
	xcx = document.getElementsByClassName('xyzw');
	
    var ggy = this.getElementsByClassName('faders1')[xuxu].value;
	console.log(ggy + ' id ' + xcx[xuxu].dataset.ig + '<>' + xuxu);
	var jajax = ["/fader/geral" + xuxu +"/"];
	
	firebase.database().ref('/fader/geral'+(xuxu)).set({
  cc:xixi, channel:xexe, device:xaxa, value:ggy
  });
    
}, false);
function writeUserData(fader, cc, channel, device, value) {
  firebase.database().ref('fader/' +  fader ).set({
  cc:15, channel:10, device:3, value:123
  });
}
 */