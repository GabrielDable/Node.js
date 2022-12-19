

let x = 50
let y = 70

const p = function() {
    return x + y
}


class Opus {
    constructor(x) {

        this.x=x


    }

    loger() {
        console.log(x)
    }

    adde() {
        x += 1 
    }
}


o = new Opus

console.log(p())

o.loger();

module.exports = {Opus, o, p}