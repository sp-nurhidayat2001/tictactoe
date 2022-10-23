const input = require('readline-sync')
module.exports = class Board {

    constructor() {
        this.board = new Array(10).fill(' ')
        this.current_marker = Math.floor(Math.random() * 2) ? "X" : "O"
        console.log("\nPlayer " + this.current_marker + " goes first!.")
    }

    // A method that displays the board
    displayBoard(player1,player2) {
        console.log("")
        console.log(" " + player1 + " |" + "   | " + player2)
        console.log("")
        console.log("     |   |   ")
        console.log("   " + this.board[7] + " |" + " " + this.board[8] + " | " + this.board[9])
        console.log("  ___|___|___")
        console.log("     |   |   ")
        console.log("   " + this.board[4] + " |" + " " + this.board[5] + " | " + this.board[6])
        console.log("  ___|___|___")
        console.log("     |   |   ")
        console.log("   " + this.board[1] + " |" + " " + this.board[2] + " | " + this.board[3])
        console.log("     |   |   ")
        console.log("")
    }

    // A method to place a marker in the board
    placeMarker(position) {
        this.board[position] = this.current_marker;
    }

    // A method to check if a position is empty => return true if empty
    positionIsEmpty(position) {
        return this.board[position] == " ";
    }

    // A method that gets user position and place a marker in that position
    getPosition() {

        while (true) {
            var position = input.questionInt("\nPlayer " + this.current_marker + " enter a position 1 to 9: ")
            if (position > 9 || position < 1) {
                console.log("Position out of bounds!.")
            } else if (!this.positionIsEmpty(position)) {
                console.log("Position unavailable!.")
            } else {
                this.placeMarker(position)
                break;
            }
        }
    }

    // A method to check win condition => returns true if win
    checkWinCondition() {
        return (this.board[1] == this.current_marker && this.board[2] == this.current_marker && this.board[3] == this.current_marker) ||
            (this.board[4] == this.current_marker && this.board[5] == this.current_marker && this.board[6] == this.current_marker) ||
            (this.board[7] == this.current_marker && this.board[8] == this.current_marker && this.board[9] == this.current_marker) ||
            (this.board[7] == this.current_marker && this.board[5] == this.current_marker && this.board[3] == this.current_marker) ||
            (this.board[1] == this.current_marker && this.board[5] == this.current_marker && this.board[9] == this.current_marker) ||
            (this.board[7] == this.current_marker && this.board[4] == this.current_marker && this.board[1] == this.current_marker) ||
            (this.board[8] == this.current_marker && this.board[5] == this.current_marker && this.board[2] == this.current_marker) ||
            (this.board[9] == this.current_marker && this.board[6] == this.current_marker && this.board[3] == this.current_marker)
    }
}