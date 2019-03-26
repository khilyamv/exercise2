var calc = document.querySelector("#calc");
var layar1 = document.querySelector("#layar1");
var layar2 = document.querySelector("#layar2");
var layar3 = document.querySelector("#layar3");
var tombol = document.querySelector("#tombol");
var samadengan = document.querySelector("#samadengan");
var ac = document.querySelector("#ac");
var angka1 = null, angka2 = null, hasil = null;
var trigger, operator;
var equals = false;

function cek(){
    alert("ya ok");
}

tombol.onclick = function(){
    trigger = event.target.value;
    angka = Number(trigger);
    
        if (trigger == "ac"){
            angka1 = null;
            angka2 = null;
            hasil = null;
            operator = null;
            layar1.value = "";
            layar2.value = "";
            layar3.value = "";
            equals = false;
        } else if (trigger == "hapus"){
             layar3.value = layar3.value.slice(0, layar3.value.length-1);
        } else {
            layar3.value += trigger;
        }
    console.log(angka1, angka2, hasil, equals, operator);
    console.log(layar3.value)
}

samadengan.onclick = function(){
    hasil = eval(layar3.value);
    layar1.value = layar3.value + " =";
    layar2.value = hasil.toFixed(3);
    layar3.value = "";
}

// TEMA

var buttons = document.querySelectorAll("button");

function white(){
    calc.className = "white";
    layar1.className = "darkgray-text";
    layar2.className ="mint-text";
    layar3.className ="black-text";
    for (var i=0; i<buttons.length;i++){
        buttons[i].className = " darkgray-text";
    }
    samadengan.className = "mint white-text";
}

function seasalt(){
    calc.className = "seasalt";
    layar1.className = "white-text";
    layar2.className ="white-text";
    layar3.className ="white-text";
    for (var i=0; i<buttons.length;i++){
        buttons[i].className = " white-text";
    }
    samadengan.className = "white darkgray-text";
}

function goodnight(){
    calc.className = "goodnight";
    layar1.className = "white-text";
    layar2.className ="white-text";
    layar3.className ="white-text";
    for (var i=0; i<buttons.length;i++){
        buttons[i].className = " white-text";
    }
    samadengan.className = "white darkgray-text";
}

function cucumber(){
    calc.className = "cucumber";
    layar1.className = "darkdark-text";
    layar2.className ="black-text";
    layar3.className ="black-text";
    for (var i=0; i<buttons.length;i++){
        buttons[i].className = " darkdark-text";
    }
    samadengan.className = "white darkgray-text";
}

function rose(){
    calc.className = "mistyrose";
    layar1.className = "white-text";
    layar2.className ="white-text";
    layar3.className ="white-text";
    for (var i=0; i<buttons.length;i++){
//        buttons[i].innerHTML = "<span lang='latex'>\color{white} " + buttons[i].innerHTML;
        buttons[i].className = " white-text";
    }
    samadengan.className = "white rose-text";
}