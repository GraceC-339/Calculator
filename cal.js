//Show the calculating process
function get(num){
  var shownums = document.getElementById("display");
  shownums.value += num;
}

//Clear
var cc = document.getElementById("clear");
function clear(){
  document.getElementById("display").value="";
}
cc.addEventListener("click",clear,false);

//Backspace/delete
var dd = document.getElementById("delete");
function backspace(){
  var shownums = document.getElementById("display");
  shownums.value = shownums.value.substring(0,shownums.value.length-1);
}
dd.addEventListener("click",backspace,false);

//Calculate
var re = document.getElementById("cal");
function calculates(){
  var result = 0;
  result = document.getElementById("display").value;
  //document.getElementById("display").value = "";
  document.getElementById("display").value = eval(result);
}
re.addEventListener("click",calculates,false);

//Show time
function showTime(){
  var today = new Date();
  var y = today.getFullYear();
  var M = today.getMonth()+1;
  var d = today.getDate();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  var week = today.getDay();
  var w = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    document.getElementById("time").innerHTML = y + ". " + M + ". " + d + "<br>" + h + ":" + m + ":" + s + " " + w[week];
    setTimeout("showTime()",1000);
}

//When number is less than 10, add a 0 in the front
function checkTime(i){
  if(i<10){
    i="0" + i;
  }
  return i;
}
window.onload = function(){
  showTime();
}
