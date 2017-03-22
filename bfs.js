Array.prototype.contains = function (element) {
  for (var i=0; i < this.length; i++)
    if (element === this[i]) return true;

  return false;
};

var matrix = [[0,1,0,0,0,1,1,0,1,0,0,0],
              [1,0,1,0,1,0,0,0,0,0,0,0],
              [0,1,0,1,0,0,1,0,0,0,0,0],
              [0,0,1,0,0,0,0,0,0,0,0,0],
              [0,1,0,0,0,1,0,0,0,0,0,0],
              [1,0,0,0,1,0,0,1,0,0,0,0],
              [1,0,1,0,0,0,0,0,0,0,0,1],
              [0,0,0,0,0,1,0,0,0,1,0,0],
              [1,0,0,0,0,0,0,0,0,1,1,1],
              [0,0,0,0,0,0,0,1,1,1,0,0],
              [0,0,0,0,0,0,0,0,1,1,0,1],
              [0,0,0,0,0,0,1,0,1,0,1,0]];

var breadthFirstSearch = function breadthFirstSearch(matrix, start, destiny) {

  var queue = [],
      viewed = [],
      current;

  queue.push(start);

  while (queue.length > 0) {
    current = queue.shift();
    viewed.push(current);

    for (var i=0; i < matrix.length; i++) {

      if (matrix[current][i] == 1) {

        if (i == destiny) {
          viewed.push(i);

          return {
            viewed: viewed,
            start: start,
            destiny: destiny
          };

        } else {

          if (!viewed.contains(i))
            if (!queue.contains(i))
              queue.push(i);

        }
      }
    }
  }
};

breadthFirstSearch(matrix, 0, 3);