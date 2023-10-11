let v1=0;
const v2=document.getElementById("head2");
document.addEventListener("keydown",function(event){
    "use strict"
    v1++;
   if(v1>0){
    v2.style.visibility="visible";
   }
});
let audio= new Audio('1.mp3');




document.addEventListener("keydown",function(event){
    const press=event.key;
    const head=document.getElementById("head1");
    head.innerText=`You pressed: '${press}'`;
    const keypress=event.keyCode;
    const display=document.getElementById("key");
    display.textContent= keypress;
    audio.play();
    setTimeout(() => {
        audio.pause()

    }, 500);
    audio.currentTime=0
});
