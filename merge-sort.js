// This program implements merge sort

// Merge Helper
function merge(a, b) {
  var sorted = [];
  var i = 0,
      j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      sorted.push(a[i]);
      i++;
    } else {
      sorted.push(b[j]);
      j++;
    }
  }
  return sorted.concat(a.slice(i)).concat(b.slice(j));
}

function mergeSort(arr) {
  // 0 or 1 item arrays don't need sorting
  if (arr.length < 2) {
    return arr;
  }
  var midpoint = Math.floor(arr.length / 2);
  // merge the mergeSorted left array and the mergeSorted right array
  return merge(mergeSort(arr.slice(0, midpoint)),
               mergeSort(arr.slice(midpoint)));
}


// Goutham's solution

function mergeSort(arr) {
  if (arr.length == 1)
    return arr;
  var left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  var right = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));
  var mergedArr = [];
  while (left[0] || right[0]) {
    if ((left[0] < right[0]) || !right[0])
      mergedArr.push(left.shift());
    else
      mergedArr.push(right.shift());
  }
  return mergedArr;
}
