// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let getAddress = document.getElementById('getAddress');

var addressVet = ["Rua Agnelo Macedo,234,Barreiro", 
"Rua Professor Pimenta da Veiga,228,Cidade Nova", 
"Rua Resedá,220,Santa Efigênia",
"Rua Santa Rita Durão,347,Funcionários"
];

var cepVet = ["30640-120", 
"31170-190", 
"30240-410",
"30140-110"
];

var latitudeVet =  [-19.975675,
-19.8873849,
-19.925973,
-19.935862];

var longitudeVet = [-44.019000,
-43.92715,
-43.914715,
-43.928181];

var address = "";
var cep =  ""; 
var chestId = ""; 
var tracking = "";
var lat = "";
var lon = "";

document.getElementById("address").value = document.cookie;

getAddress.onclick = function(element) {
  var x = Math.floor((Math.random() * 4) + 1);
  address = addressVet[x - 1];
  cep = cepVet[x - 1];
  chestId = Math.floor((Math.random() * 100000) + 1);
  lat = latitudeVet[x - 1];
  lon = longitudeVet[x - 1];

  document.getElementById("address").value = address;
  document.getElementById("cep").value = cep;
  document.getElementById("chestID").value = chestId;
  document.cookie = "address = " + address + ";";
};

sendToApp.onclick = function(){
  tracking = document.getElementById("tracking").value;
  if(address == ""||cep == ""|| chestId == "" || tracking == "" ){
    alert("Dados inconsistentes!");
  }
  else{
    var xhr = new XMLHttpRequest();
    var params = "http://192.168.99.86:3000/sendTracking/lucasakiocamacho/" + cep + "/" + address + "/" + chestId + "/" + tracking + "/" + lat + "/" + lon;
    xhr.open('GET', params, true);
    xhr.send();
    alert("Envio com sucesso.");
  }
  
}

