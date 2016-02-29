var input = [
  {"x": 5, "y": -3},
  {"x": -5, "y": 433},
  {"x": 65, "y": 53},
  {"x": 0, "y": 77},
  {"x": -95, "y": 0},
  {"x": 100, "y": -8},
  {"x": 6, "y": -9}
];

function negativeXValuesFirst(input) {
  // Iterate over the input array
  var i = 0;
  var j = input.length - 1;
  while (i < j) {
    while (input[i].x < 0) {
      i++;
    }
    while (input[j].x >= 0) {
      j--;
    }
    var tmp = input[i];
    input[i] = input[j];
    input[j] = tmp;
  }

  // return the mutated array
  return input;
}

console.log(negativeXValuesFirst(input));
