const Square = (x, y) => {x, y};

const isValidSquare = square => (0 <= square.x <= 7 && 0 <= square.y <= 7);

const getKnightMoves = square => {
    const shift = [-2, -1, 1, 2];
    const moves = [];
}