module.exports = class Player {

    constructor(marker) {
        this.marker = marker
        this.points = 0;
    }

    toString() {
        return `${this.marker}:${this.points}`
    }

    addPoints() {
        this.points++;
    }
}