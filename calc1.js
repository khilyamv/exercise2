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

ac.onclick = function(){
    angka1 = null;
    angka2 = null;
    hasil = null;
    operator = null;
    layar1.value = "";
    layar2.value = "";
    layar3.value = "";
    equals = false;
}

tombol.onclick = function(){
    trigger = event.target.value;
    angka = Number(trigger);
    
//    if (operator == "samadengan" && equals == true && angka1 !== null && angka2 !== null && hasil !== null && angka !== 0) {
//        layar1.value= ""
//        layar2.value = "";
//        angka1 = null;
//        angka2 = null;
//        hasil = null;
//        operator = null;
//        console.log("hmmzt");
//    }
    
    if (isNaN(angka)) {
        if (trigger == "plusmin"){
            if (layar3.value>=0) {
                layar3.value = "-" + layar3.value;
            } else {
                layar3.value = layar3.value.substr(1);
            };
        } else if (trigger == "koma"){
                layar3.value += ".";
        } else if (trigger == "hapus"){
                layar3.value = layar3.value.slice(0, layar3.value.length-1);
        } else {
            operator = trigger;
            switch(operator){
                case "tambah" : {
                    if (layar3.value == "" && hasil !== null){
                        layar1.value = hasil + " + ";
                        layar2.value = "";
                        console.log("empat");
                    } else if (equals !== true && hasil !== null && angka2 !== null) {
                        angka1 = hasil;
                        angka2 = Number(layar3.value);
                        hasil = angka1 + angka2;
                        layar1.value += angka2 + " + ";
                        layar2.value = hasil;
                        console.log("satu");
                    } else if(equals == true && angka2 !== null && hasil !== null){
                        angka1 = hasil;
                        angka2 = Number(layar3.value);
                        hasil = angka1 + angka2;
                        layar1.value += angka2 + " + ";
                        layar2.value = hasil;
                        console.log("lima");
                    } else if (hasil == null && angka1 !==null && angka2 == null){
                        angka2 = Number(layar3.value);
                        hasil = angka1 + angka2;
                        layar1.value += angka2 + " + ";
                        layar2.value = hasil;
                        console.log("dua");
                    } else { //kondisi awal : angka1 null, angka2 null, hasil null
                        angka1 = Number(layar3.value);
                        layar1.value = angka1 + " + ";
                        layar2.value = hasil;
                        console.log("tiga");
                    }
                    layar3.value = "";
                }; break;
                case "kurang" : {
                    if (layar3.value == "" && hasil !== null){
                        layar1.value = hasil + " - ";
                        layar2.value = "";
                        console.log("empat");
                    } else if (equals !== true && hasil !== null && angka2 !== null) {
                        angka1 = hasil;
                        angka2 = Number(layar3.value);
                        hasil = angka1 - angka2;
                        layar1.value += angka2 + " - ";
                        layar2.value = hasil;
                        console.log("satu");
                    } else if(equals == true && angka2 !== null && hasil !== null){
                        angka1 = hasil;
                        angka2 = Number(layar3.value);
                        hasil = angka1 - angka2;
                        layar1.value += angka2 + " - ";
                        layar2.value = hasil;
                        console.log("lima");
                    } else if (hasil == null && angka1 !==null && angka2 == null){
                        angka2 = Number(layar3.value);
                        hasil = angka1 - angka2;
                        layar1.value += angka2 + " - ";
                        layar2.value = hasil;
                        console.log("dua");
                    } else { //kondisi awal : angka1 null, angka2 null, hasil null
                        angka1 = Number(layar3.value);
                        layar1.value = angka1 + " - ";
                        layar2.value = hasil;
                        console.log("tiga");
                    }
                    layar3.value = "";
                }; break;
                case "kali" : {
                    if (layar3.value == "" && hasil !== null){
                        layar1.value = hasil + " * ";
                        layar2.value = "";
                        console.log("empat");
                    } else if (equals !== true && hasil !== null && angka2 !== null) {
                        angka1 = hasil;
                        angka2 = Number(layar3.value);
                        hasil = angka1 * angka2;
                        layar1.value += angka2 + " * ";
                        layar2.value = hasil;
                        console.log("satu");
                    } else if(equals == true && angka2 !== null && hasil !== null){
                        angka1 = hasil;
                        angka2 = Number(layar3.value);
                        hasil = angka1 * angka2;
                        layar1.value += angka2 + " * ";
                        layar2.value = hasil;
                        console.log("lima");
                    } else if (hasil == null && angka1 !==null && angka2 == null){
                        angka2 = Number(layar3.value);
                        hasil = angka1 * angka2;
                        layar1.value += angka2 + " * ";
                        layar2.value = hasil;
                        console.log("dua");
                    } else { //kondisi awal : angka1 null, angka2 null, hasil null
                        angka1 = Number(layar3.value);
                        layar1.value = angka1 + " * ";
                        layar2.value = hasil;
                        console.log("tiga");
                    }
                    layar3.value = "";
                }; break;
                case "bagi" : {
                    if (layar3.value == "" && hasil !== null){
                        layar1.value = hasil + " / ";
                        layar2.value = "";
                        console.log("empat");
                    } else if (equals !== true && hasil !== null && angka2 !== null) {
                        angka1 = hasil;
                        angka2 = Number(layar3.value);
                        hasil = angka1 / angka2;
                        layar1.value += angka2 + " / ";
                        layar2.value = hasil;
                        console.log("satu");
                    } else if(equals == true && angka2 !== null && hasil !== null){
                        angka1 = hasil;
                        angka2 = Number(layar3.value);
                        hasil = angka1 / angka2;
                        layar1.value += angka2 + " / ";
                        layar2.value = hasil;
                        console.log("lima");
                    } else if (hasil == null && angka1 !==null && angka2 == null){
                        angka2 = Number(layar3.value);
                        hasil = angka1 / angka2;
                        layar1.value += angka2 + " / ";
                        layar2.value = hasil;
                        console.log("dua");
                    } else { //kondisi awal : angka1 null, angka2 null, hasil null
                        angka1 = Number(layar3.value);
                        layar1.value = angka1 + " / ";
                        layar2.value = hasil;
                        console.log("tiga");
                    }
                    layar3.value = "";
                }; break;
            }
        }
    } else {
        layar3.value += angka;
        equals = false;
    }
    console.log(angka1, angka2, hasil, equals, operator);
    //console.log(typeof(angka1), typeof(angka2), typeof(hasil), typeof(equals));
    console.log(layar3.value)
}

samadengan.onclick = function(){
    if (operator == null && layar2.value == "") {
        layar1.value = "Silahkan klik angka dan operator untuk menghitung.";
    } else if (operator == null && layar3.value !== "") {
        angka1 = layar2.value;
        layar1.value = angka1 + " + 0 =";
    } else  {
        switch(operator){
            case "tambah" : {
                if (hasil !== null) {
                    angka1 = hasil;
                }
                angka2 = Number(layar3.value);
                hasil = angka1 + angka2;
                angka1 = hasil;
                layar1.value += angka2 + " = " + hasil;
                layar2.value = hasil;
                layar3.value = "";
                operator = null;
                equals = true;
            }; break;
            case "kurang" : {
                if (hasil !== null) {
                    angka1 = hasil;
                }
                angka2 = Number(layar3.value);
                hasil = angka1 - angka2;
                angka1 = hasil;
                layar1.value += angka2 + " = " + hasil;
                layar2.value = hasil;
                layar3.value = "";
                operator = null;
                equals = true;
            }; break;
            case "kali" : {
                if (hasil !== null) {
                    angka1 = hasil;
                }
                angka2 = Number(layar3.value);
                hasil = angka1 * angka2;
                angka1 = hasil;
                layar1.value += angka2 + " = " + hasil;
                layar2.value = hasil;
                layar3.value = "";
                operator = null;
                equals = true;
            }; break;
            case "bagi" : {
                if (hasil !== null) {
                    angka1 = hasil;
                }
                angka2 = Number(layar3.value);
                hasil = angka1 / angka2;
                angka1 = hasil;
                layar1.value += angka2 + " = " + hasil;
                layar2.value = hasil;
                layar3.value = "";
                operator = null;
                equals = true;
            }; break;
        }
    }
    console.log(angka1, angka2, hasil, equals, operator);
    console.log(layar3.value);
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