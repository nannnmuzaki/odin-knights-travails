import "../css/style.css";
import { knightMoves } from "./knights-travails/knight-travails.js";

function printKnightPath(start, target) {
  const path = knightMoves(start, target);

  if (!path) {
    console.log("No path found.");
    return;
  }

  console.log(`=> You made it in ${path.length - 1} moves!  Here's your path:`);
  path.forEach((square) => console.log(`  [${square[0]},${square[1]}]`));
}

printKnightPath([0, 0], [1, 2]);
console.log("-------------------");
printKnightPath([0, 0], [3, 3]);
console.log("-------------------");
printKnightPath([3, 3], [4, 3]);
