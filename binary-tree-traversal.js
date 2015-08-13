/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node, arr) {
  if (!arr) var arr = [];
  if (!node) return;
  arr.push(node.data);
  preOrder(node.left, arr);
  preOrder(node.right, arr);
  return arr;
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node, arr) {
  if (!arr) var arr = [];
  if (!node) return;
  inOrder(node.left, arr);
  arr.push(node.data);
  inOrder(node.right, arr);
  return arr
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node, arr) {
  if (!arr) var arr = [];
  if (!node) return;
  postOrder(node.left, arr);
  postOrder(node.right, arr);
  arr.push(node.data);
  return arr
}
