var set = [3, 4, 5]

// 1. Remove an arbitrary element
// 2. Compute powerset of the remaining set
// 3. Create another set by adding removed element to each set inside the
// power set as computed in step two.
// 4. Take the union of those two


function powerset(set) {
  if (set.length <= 1) {
    return set + new Set();
  }
  // BELOW IS PSUEDO CODE
  var head = set[0];
  var tail = set - head;
  var set1 = powerset(tail);
  var set2 = set1.map(function(set) {
    return set + head;
  });

  return set1 + set2;
}
