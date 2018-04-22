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

var address = "";
var cep =  ""; 
var chestId = ""; 
var tracking = "";

getAddress.onclick = function(element) {
  var x = Math.floor((Math.random() * 4) + 1);
  address = addressVet[x - 1];
  cep = cepVet[x - 1];
  chestId = Math.floor((Math.random() * 100000) + 1);

  document.getElementById("address").value = address;
  document.getElementById("cep").value = cep;
  document.getElementById("chestID").value = chestId;
};

sendToApp.onclick = function(){
  tracking = document.getElementById("tracking").value;
  if(address == ""||cep == ""|| chestId == "" || tracking == "" ){
    alert("Dados inconsistentes!");
  }
  else{
    var xhr = new XMLHttpRequest();
    var params =   "http://localhost:3000/sendTracking/lucasakiocamacho/" + cep + "/" + address + "/" + chestId + "/" + tracking;
    xhr.open('GET', params, true);
    xhr.send();
    alert("Envio com sucesso.");
  }
  
}

