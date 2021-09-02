//code of sleep function
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

mc.regConsoleCmd("restart","restart the server",function(args){
    log("restart the server through 5 second")
    var step;
    for (step = 1; step < 6; step++) {
        mc.broadcast('restart through', step ,'second');
        sleep(1000);
    }
    mc.runcmdEx("stop")
})
setInterval(function(){
    mc.runcmdEx("restart")
}, 60000); //the time after which the server will restart (milliseconds)