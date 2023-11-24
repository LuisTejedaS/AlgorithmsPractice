function validator(board) {
    let matrix = new Set();

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (board[x][y] != '_') {
                let row = board[x][y] + " row: " + x;
                let column = board[x][y] + " col: " + y;
                let mat = board[x][y] + " mat: " + parseInt(x / 3) + '/' + parseInt(y / 3);

                if (matrix.has(row) || matrix.has(column) || matrix.has(mat)) {
                    return false;
                }
                matrix.add(row)
                matrix.add(column)
                matrix.add(mat)
            }
        }
    }
    return true;
}

let validSudoku = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['4', '5', '6', '_', '_', '_', '_', '_', '_'],
    ['7', '8', '1', '_', '_', '_', '_', '_', '_'],
    ['2', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['5', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['8', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['3', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['6', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['9', '_', '_', '_', '_', '_', '_', '_', '_']];

console.log(validator(validSudoku));