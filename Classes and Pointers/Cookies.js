class Cookies {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color
    }
}


let cookieOne = new Cookies('green');
cookieOne.setColor('yellow')
console.log(cookieOne.getColor());

let cookieTwo = new Cookies('blue');
console.log(cookieTwo.getColor());