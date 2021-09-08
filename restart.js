mc.regConsoleCmd("restart","restart the server",function(){
    log("restart the server through 10 second")
    setTimeout(() => { mc.broadcast("restart through 10 second"); }, 2000);
    setTimeout(() => { mc.broadcast("restart through 9 second"); }, 4000);
    setTimeout(() => { mc.broadcast("restart through 8 second"); }, 6000);
    setTimeout(() => { mc.broadcast("restart through 7 second"); }, 8000);
    setTimeout(() => { mc.broadcast("restart through 6 second"); }, 10000);
    setTimeout(() => { mc.broadcast("restart through 5 second"); }, 12000);
    setTimeout(() => { mc.broadcast("restart through 4 second"); }, 14000);
    setTimeout(() => { mc.broadcast("restart through 3 second"); }, 16000);
    setTimeout(() => { mc.broadcast("restart through 2 second"); }, 18000);
    setTimeout(() => { mc.broadcast("restart through 1 second"); }, 20000);
    setTimeout(() => { mc.broadcast("RESTART!"); }, 21000);
    setTimeout(() => { mc.runcmdEx("stop") }, 23000);

})
setInterval(function(){
    mc.runcmdEx("restart")
}, 3600000); //the time after which the server will restart (milliseconds)
