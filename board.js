module.exports = class Board {

    constructor() {
        this.board = new Array(10).fill('X')
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
    placeMarker(marker, position) {
        this.board[position] = marker;
    }

    // A method to check if a position is empty => return true if empty
    positionIsEmpty(position) {
        return this.board[position] == " ";
    }

    // A method to check win condition => returns true if win
    checkWinCondition(marker) {
        return (this.board[1] == marker && this.board[2] == marker && this.board[3] == marker) ||
            (this.board[4] == marker && this.board[5] == marker && this.board[6] == marker) ||
            (this.board[7] == marker && this.board[8] == marker && this.board[9] == marker) ||
            (this.board[7] == marker && this.board[5] == marker && this.board[3] == marker) ||
            (this.board[1] == marker && this.board[5] == marker && this.board[9] == marker) ||
            (this.board[7] == marker && this.board[4] == marker && this.board[1] == marker) ||
            (this.board[8] == marker && this.board[5] == marker && this.board[2] == marker) ||
            (this.board[9] == marker && this.board[6] == marker && this.board[3] == marker)
    }

    // A method to check if there's a tie => returns true if it is a tie
    checkTie() {
        var isEmpty = false;
        for(var i = 1;i<=9;i++) {
            if(this.board[i] == " ") {
                isEmpty = true;
            }
        }
        // if isEmpty is true , means theres some positions that have not been played, else the board is filled.
        return !isEmpty
    }

    
}
