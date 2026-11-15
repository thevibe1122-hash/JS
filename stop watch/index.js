const stop_watch = document.getElementById(`stop-watch`)
let count = 0
let ms;
let s;
let m;
let runnig = false
let TOI;


function set_display() {
    ms = count % 145 % 100
    s = Math.floor(count/145) % 60
    m = Math.floor(count/8700)%60
    
    ms = ms.toString().padStart(2,0)
    s = s.toString().padStart(2,0)
    m = m.toString().padStart(2,0)
    count+=1
}


function update_display() {
    set_display()
    stop_watch.textContent = `${m}:${s}:${ms}`
    
}

function start() {
    if(!runnig){
        runnig = true
        TOI=setInterval(update_display,1)
    }
}

function reset() {
    count = 0
    update_display()
}

function stop() {
    clearTimeout(TOI)
    runnig = false
}



