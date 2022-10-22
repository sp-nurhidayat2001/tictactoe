module.exports = class Board {

    constructor() {
        this.board = new Array(10).fill(' ')
    }

    // A method that displays the board
    displayBoard() {
        console.log("   |   |   ")
        console.log(" " + this.board[7] + " |" + " " + this.board[8] + " | " + this.board[9])
        console.log("___|___|___")
        console.log("   |   |   ")
        console.log(" " + this.board[4] + " |" + " " + this.board[5] + " | " + this.board[6])
        console.log("___|___|___")
        console.log("   |   |   ")
        console.log(" " + this.board[1] + " |" + " " + this.board[2] + " | " + this.board[3])
        console.log("   |   |   ")
    }

    // A method to place a marker in the board
    placeMarker(marker,position) {
        this.board[position] = marker;
    }
}
