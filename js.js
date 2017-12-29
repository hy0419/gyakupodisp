var text = "こんばんは"
var flag = 0;

var si = setInterval(changecolor,1000);

function changecolor(){
    if(flag === 0){
        c();
        flag = 1;
    }else{
        d();
        flag = 0;
    }
}
function c() {
    $('body').css(
        "background-color","red"
    )
}

function d() {
    $('body').css(
        "background-color","green"
    )
}
function stopinterval() {
    clearInterval(si)
}
function youkoso() {
    var name = document.getElementById("a").value;
   var san = name+"さん";
    alert(san);
}
function bunakatu() {
    var n= document.getElementById("a").value;
    var kekka = n.split(" ");
    kekka[0]
}