// Find the hight of a binary tree (un-balanced)

function height(tree, height) {

  if (!height)
    var height = 0;
  if (!tree)
    return height;

  var left = height(tree.left, height + 1);
  var right = height(tree.right, height + 1);

  // Return the larger of the two heights
  return Math.max(left, right) - 1;
}
