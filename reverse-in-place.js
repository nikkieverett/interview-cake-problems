// https://www.interviewcake.com/question/javascript/reverse-string-in-place?course=fc1&section=array-and-string-manipulation

function reverse(arrayOfChars) {
  let start = 0;
  let end = arrayOfChars.length - 1;

  while (start < end) {
    const startValue = arrayOfChars[start];

    arrayOfChars[start] = arrayOfChars[end];
    arrayOfChars[end] = startValue

    start++;
    end--;
  }
}

// Tests
let desc = 'empty string'
let input = ''.split('')
reverse(input)
let actual = input.join('')
let expected = ''
assertEqual(actual, expected, desc)

desc = 'single character string'
input = 'A'.split('')
reverse(input)
actual = input.join('')
expected = 'A'
assertEqual(actual, expected, desc)

desc = 'longer string'
input = 'ABCDE'.split('')
reverse(input)
actual = input.join('')
expected = 'EDCBA'
assertEqual(actual, expected, desc)

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}