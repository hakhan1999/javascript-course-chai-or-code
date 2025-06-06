function digitalClock() {
    const clock = document.querySelector('#clock')
    let time = new Date().toLocaleTimeString()
    clock.innerHTML = `${time}`
}

setInterval(() => {
    digitalClock()
}, 1000)