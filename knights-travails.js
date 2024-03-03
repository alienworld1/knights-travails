function isValidChessSquare(x, y) {
    if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
        return true; 
    } else {
        return false; 
    }
}

function knightMoves(startX, startY, targetX, targetY) {
    // Define possible moves of a knight
    const knightMoves = [
        { dx: 2, dy: 1 },
        { dx: 2, dy: -1 },
        { dx: -2, dy: 1 },
        { dx: -2, dy: -1 },
        { dx: 1, dy: 2 },
        { dx: 1, dy: -2 },
        { dx: -1, dy: 2 },
        { dx: -1, dy: -2 }
    ];

    // Queue for BFS
    const queue = [{ x: startX, y: startY, moves: [] }];
    const visited = new Set();

    while (queue.length > 0) {
        const { x, y, moves } = queue.shift();

        if (x === targetX && y === targetY) {
            return moves.concat({ x, y }); // Found the target, return the moves
        }

        // Check all possible knight moves
        for (const move of knightMoves) {
            const newX = x + move.dx;
            const newY = y + move.dy;

            if (isValidChessSquare(newX, newY) && !visited.has(`${newX},${newY}`)) {
                visited.add(`${newX},${newY}`);
                queue.push({ x: newX, y: newY, moves: moves.concat({ x, y }) });
            }
        }
    }

    return [];
}

function printPath(path) {
    for (const square of path) {
        console.log(`[${square.x},${square.y}]`);
    }
}

const startX = 1;
const startY = 1;
const targetX = 8;
const targetY = 8;

const shortestPath = knightMoves(startX, startY, targetX, targetY);
if (shortestPath.length > 0) {
    console.log("Shortest path:");
    printPath(shortestPath);
} else {
    console.log("No valid path found.");
}
