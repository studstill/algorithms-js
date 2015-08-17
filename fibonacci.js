// n represents the nth number in the fibonacci sequence
function fib(n) {
  if (n == 2) return 1;
  if (n == 1) return 0;

  // recursive case
  return fib(n - 1) + fib(n - 2);
}

memoization

function fib(n, cache) {
  if (!cache) var cache = {};
  if (n == 2) return 1;
  if (n == 1) return 0;
  // Now, if our values are in the cache, grab them from there, otherwise
  // we want to save them to the cache

  // if n -1 is in our cache, then grab it.
  if (cache[n - 1]) {
    var n1 = cache[n - 1];
  } else {
    // if it's not there, calculate it, then store it in the cache, then assign it to n1
    var n1 = cache[n - 1] = fib(n - 1, cache);
    // Then we do the same as before for n2
    var n2 = cache[n - 2] = fib(n - 2, cache);
  }
  return n1 + n2;
}

