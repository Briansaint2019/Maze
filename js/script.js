let labryinth = null;

let coordinates = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 1, 1, 0, 0, 0, 1, 1, 1, 0],

    [0, 0, 1, 1, 0, 0, 1, 0, 1, 0],

    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],

    [0, 0, 1, 1, 1, 1, 0, 0, 1, 1],

    [1, 1, 1, 0, 0, 1, 0, 0, 0, 1],

    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1,],

    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 1, 1, 1, 1, 1, 2]
];



let ms = new MazeSolver(coordinates)
ms.movement(0, 0);

function MazeSolver(maze) {
let canvasBody = document.getElementById('MazeGame');
canvasBody.innerHTML="";
    this.maze = maze;

    this.movement = function (column, row) {
        if (this.maze[column][row] === 2) {
            console.log("We Did it (" + column + ", " + row + ")");
        } else if (this.maze[column][row] === 1) {
            console.log("Waldo is that you? (" + column + ", " + row + ")");
            this.maze[column][row] = 9;
            if (column < this.maze.length - 1) {
                this.movement(column + 1, row);
            }
            if (row < this.maze[column].length - 1) {
                this.movement(column, row + 1);
            }
            if (column > 0) {
                this.movement(column - 1, row);
            }
            if (row > 0) {
                this.movement(column, row - 1);
            }
        }
    };

};

window.onload = function () {
    labryinth = document.getElementById('MazeGame');
    labryinth.innerHTML="";
}