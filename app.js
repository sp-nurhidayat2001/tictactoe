// Imports
const input = require('readline-sync')
var Board = require('./board')
var Player = require('./player')

// Gameloop
function tictactoe() {
    const player1 = new Player('X'), player2 = new Player('O')
    while (true) {

        // Game setup
        const board = new Board()

        // Gameplay
        while (true) {

            // display board
            board.displayBoard(player1, player2)

            if (board.current_marker == "X") {
                board.getPosition()
                if (board.checkWinCondition()) {
                    board.displayBoard(player1, player2)
                    console.log("Player " + board.current_marker + " has won the game!.")
                    player1.addPoints()
                    break;
                }
                board.current_marker = "O"

            } else if (board.current_marker == "O") {
                board.getPosition()
                if (board.checkWinCondition()) {
                    board.displayBoard(player1, player2)
                    console.log("Player " + board.current_marker + " has won the game!.")
                    player2.addPoints()
                    break;
                }
                board.current_marker = "X"
            }
        }

        // Ask user if he/she wants to play again
        if (!restart()) {
            console.log("Goodbye!")
            break;
        }
    }
}

function restart() {
    var userInput = input.question("Do you want to play again? y / n: ")
    return (userInput == "Y" || userInput == "y")
}

tictactoe();