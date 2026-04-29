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
// valid when new position/y y[0] <= 7 && y[1] <= 7
