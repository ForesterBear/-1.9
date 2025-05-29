
function Board(rowsCount, colsCount) {
    this.r = rowsCount;
    this.c = colsCount;
}

Board.prototype.print = function() {
    for (let row = this.r; row > 0; row--) {
        let str = row + ' ';
        for (let col = 1; col <= this.c; col++) {
            str += ((row + col) % 2 === 0 ? '* ' : '+ ');
        }
        console.log(str);
    }
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let footer = '  ';
    for (let i = 0; i < this.c; i++) {
        footer += abc[i] + ' ';
    }
    console.log(footer);
};

const myBoard = new Board(5, 8);
myBoard.print();