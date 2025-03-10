var timer=60;
var score=0;
var hitnum=0;
function incscore(){
    score+=10;
    document.querySelector("#scoreid").textContent=score;  
}
function gethit(){
    hitnum=Math.floor(Math.random()*10);
document.querySelector("#hitb").textContent=hitnum;
}


function makebubble(){
    var clutter = "";
    for(var i=0;i<=183;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;    
    }
    document.querySelector("#bottom").innerHTML=clutter;
    
}



function runtimer(){
   var timerid= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timmerval").textContent=timer;
        }
        else{
            clearInterval(timerid);
            document.querySelector("#bottom").innerHTML=`<h1>Game Over Your Score is ${score}</h1>`; 
        }
      
    },1000);
}
document.querySelector("#bottom").addEventListener("click",function(det){
    var clickednum=Number(det.target.textContent);
    if(clickednum===hitnum){
        incscore();
        makebubble();
        gethit();
    }
})
runtimer();
makebubble();
gethit();
