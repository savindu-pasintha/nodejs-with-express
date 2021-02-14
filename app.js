var time=0;
var timerloop= setInterval(() => {
     time +=2
     console.log("savindu");
     if(time>20){
         clearInterval(timerloop);
     }
}, 2000);