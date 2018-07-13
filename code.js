
 document.querySelector("#but").onclick = function takeOpen(){
    var x = document.querySelector(".block_1");
    var y =  document.querySelector(".block_2");    
    x.classList.remove("del");
    y.classList.add("del");
}
 
/* document.querySelector(".btn").onclick = function OpenWind(){
    var wind = document.querySelector(".closed");
    var ClassWind = document.querySelector(".wind");
   
} */


var butClick = document.querySelector(".btn");
var ClassWind = document.querySelector(".wind");



function OpenWind(){
    if(ClassWind.classList.contains('closed')){
        ClassWind.classList.remove('closed');
    }else {
        ClassWind.classList.add('closed');
    }
}

butClick.addEventListener("click",OpenWind);

