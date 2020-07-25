// https://www.interviewcake.com/question/javascript/nth-fibonacci?course=fc1&amp;section=dynamic-programming-recursion

const fibSequence = [0, 1]

function fib(n) {
  // Loop through the whole series till you reach the given index number?
  console.log(n)
  if (n > 1 || fibSequence[n] === 'undefined') {
    for (let i = 1; i < n; i++) {
      console.log(fibSequence[n - 1] + fibSequence[n - 2])
      fibSequence.push(fibSequence[n - 1] + fibSequence[n - 2])
    }
  }

  console.log(fibSequence)

  return fibSequence[n]
}

// Test
let desc = 'zeroth fibonacci'
let actual = fib(0)
let expected = 0
assertEqual(actual, expected, desc)

desc = 'first fibonacci'
actual = fib(1)
expected = 1
assertEqual(actual, expected, desc)

desc = 'second fibonacci'
actual = fib(2)
expected = 1
assertEqual(actual, expected, desc)

desc = 'third fibonacci'
actual = fib(3)
expected = 2
assertEqual(actual, expected, desc)

desc = 'fifth fibonacci'
actual = fib(5)
expected = 5
assertEqual(actual, expected, desc)

desc = 'tenth fibonacci'
actual = fib(10)
expected = 55
assertEqual(actual, expected, desc)

desc = 'negative fibonacci'
const negativeFib = () => fib(-1)
assertThrowsError(negativeFib, desc)

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func()
    console.log(`${desc} ... FAIL`)
  } catch (e) {
    console.log(`${desc} ... PASS`)
  }
}