function fizzBuzz(limit) {
  for (var i = 1; i < limit + 1; ++i)
    console.log(i % 3 ? i % 5 ? i : 'Buzz' : i % 5 ? 'Fizz' : 'FizzBuzz');
}

// The Explaination:
// if i is not divisible by 15, then:
//  if i is not divisible by 3, then:
//    if i is not divisible by 5, then:
//      return i
//    return 'Buzz'
//  return 'Fizz'
// return 'FizzBuzz'
