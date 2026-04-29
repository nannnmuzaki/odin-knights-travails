import { knightMoves } from "../knights-travails/knight-travails.js";

test("return a valid path", () => {
  expect(knightMoves([3, 3], [6, 6])).toEqual([
    [3, 3],
    [4, 5],
    [6, 6],
  ]);
});
