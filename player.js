module.exports = class Player {

    constructor(marker) {
        this.marker = marker
        this.points = 0;
    }

    toString() {
        return `Player ${this.marker}`
    }
}