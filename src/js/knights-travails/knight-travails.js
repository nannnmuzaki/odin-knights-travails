import { Queue } from "../queue/Queue.js";

export function knightMoves(start, target) {
  if (start.length !== 2) {
    throw new Error(
      "Start position must be an array containing only the x and y coordinate of the board",
    );
  }

  if (target.length !== 2) {
    throw new Error(
      "Target position must be an array containing containing only the x and y coordinate of the board",
    );
  }

  if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
    throw new RangeError("X and Y start coordinates must be between 0 and 7");
  }

  if (target[0] < 0 || target[0] > 7 || target[1] < 0 || target[1] > 7) {
    throw new RangeError("X and Y target coordinates must be between 0 and 7");
  }

  const queue = new Queue();
  queue.enqueue(start);
  const visited = new Map();
  visited.set(JSON.stringify(start), [start]);

  while (queue.size > 0) {
    const current = queue.dequeue();

    if (current[0] === target[0] && current[1] === target[1]) {
      return visited.get(JSON.stringify(current));
    }

    const possibleMoves = [];
    if (
      current[0] + 1 >= 0 &&
      current[0] + 1 <= 7 &&
      current[1] + 2 >= 0 &&
      current[1] + 2 <= 7
    ) {
      possibleMoves.push([current[0] + 1, current[1] + 2]);
    }

    if (
      current[0] - 1 >= 0 &&
      current[0] - 1 <= 7 &&
      current[1] + 2 >= 0 &&
      current[1] + 2 <= 7
    ) {
      possibleMoves.push([current[0] - 1, current[1] + 2]);
    }

    if (
      current[0] + 2 >= 0 &&
      current[0] + 2 <= 7 &&
      current[1] + 1 >= 0 &&
      current[1] + 1 <= 7
    ) {
      possibleMoves.push([current[0] + 2, current[1] + 1]);
    }

    if (
      current[0] - 2 >= 0 &&
      current[0] - 2 <= 7 &&
      current[1] + 1 >= 0 &&
      current[1] + 1 <= 7
    ) {
      possibleMoves.push([current[0] - 2, current[1] + 1]);
    }

    if (
      current[0] + 1 >= 0 &&
      current[0] + 1 <= 7 &&
      current[1] - 2 >= 0 &&
      current[1] - 2 <= 7
    ) {
      possibleMoves.push([current[0] + 1, current[1] - 2]);
    }

    if (
      current[0] - 1 >= 0 &&
      current[0] - 1 <= 7 &&
      current[1] - 2 >= 0 &&
      current[1] - 2 <= 7
    ) {
      possibleMoves.push([current[0] - 1, current[1] - 2]);
    }

    if (
      current[0] + 2 >= 0 &&
      current[0] + 2 <= 7 &&
      current[1] - 1 >= 0 &&
      current[1] - 1 <= 7
    ) {
      possibleMoves.push([current[0] + 2, current[1] - 1]);
    }

    if (
      current[0] - 2 >= 0 &&
      current[0] - 2 <= 7 &&
      current[1] - 1 >= 0 &&
      current[1] - 1 <= 7
    ) {
      possibleMoves.push([current[0] - 2, current[1] - 1]);
    }

    for (const possibleMove of possibleMoves) {
      if (!visited.has(JSON.stringify(possibleMove))) {
        visited.set(JSON.stringify(possibleMove), [
          ...visited.get(JSON.stringify(current)),
          possibleMove,
        ]);

        queue.enqueue(possibleMove);
      }
    }
  }

  return undefined;
}

// Representation
// node/vertices
// [c, 3] -> [3, 3],
// edge
// [[3, 3], [4, 5]]
//
// Programatically representing next possible move for the knight
// x = [4, 5] -> y
// [4,5] -> [x[0] + 1, x[1] + 2]
// [4,5] -> [x[0] - 1, x[1] + 2]
// [4,5] -> [x[0] + 2, x[1] + 1]
// [4,5] -> [x[0] - 2, x[1] + 1]
// [4,5] -> [x[0] + 1, x[1] - 2]
// [4,5] -> [x[0] - 1, x[1] - 2]
// [4,5] -> [x[0] + 2, x[1] - 1]
// [4,5] -> [x[0] - 2, x[1] - 1]
// valid when new position/y y[0] >= 0 && y[0] <= 7 && y[1] >= 0 && y[1] <= 7
