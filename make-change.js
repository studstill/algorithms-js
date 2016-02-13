// Figure out your cases.

// To make 10 out of these denominations [1, 5, 10];


numWays = 0
numWay += makeChange(10 - 1)


function makeChange(amount, denominations,) {
  // Base Cases:
  // If we have gone too far
  if (amount < 0) return 0;
  // If we hit a valid way to make change
  if (amount === 0) return 1;

  return denominations.map(function(denom) {
    makeChange((amount - denom), denominations);
  }).reduce(function(total, current) {
    return total += current
  });
}
