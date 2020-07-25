// https://www.interviewcake.com/question/javascript/bracket-validator?course=fc1&section=queues-stacks

function isValid(code) {
  let charList = []
  let isValid = true

  // Determine if the input code is valid
  for (a = 0; a < code.length; a++) {
    let currentChar = code.charAt(a)

    // Use a hash map instead
    // hashMap = {
    // '{': '}'
    // '[' : ']'
    // '(' : ')'
    // }

    let isOpener =
      currentChar === '(' || currentChar === '{' || currentChar === '['
    let isCloser =
      currentChar === ')' || currentChar === '}' || currentChar === ']'

    if (isOpener) {
      charList.push(currentChar)
    }

    if (isCloser) {
      let lastChar = charList[charList.length - 1]

      if (
        (currentChar === ')' && lastChar !== '(') ||
        (currentChar === '}' && lastChar !== '{') ||
        (currentChar === ']' && lastChar !== '[')
      ) {
        isValid = false
      } else {
        charList.pop()
      }
    }
  }

  if (charList.length > 0) {
    isValid = false
  }

  return isValid
}

// Tests
let desc = 'valid short code'
assertEqual(isValid('()'), true, desc)

desc = 'valid longer code'
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc)

desc = 'mismatched opener and closer'
assertEqual(isValid('([][]}'), false, desc)

desc = 'missing closer'
assertEqual(isValid('[[]()'), false, desc)

desc = 'extra closer'
assertEqual(isValid('[[]]())'), false, desc)

desc = 'empty string'
assertEqual(isValid(''), true, desc)

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}


function isValid(code) {
  let charList = []
  let isValid = true

  // Determine if the input code is valid
  for (a = 0; a < code.length; a++) {
    let currentChar = code.charAt(a)
    let isOpener =
      currentChar === '(' || currentChar === '{' || currentChar === '['
    let isCloser =
      currentChar === ')' || currentChar === '}' || currentChar === ']'

    if (isOpener) {
      charList.push(currentChar)
    }

    if (isCloser) {
      let lastChar = charList[charList.length - 1]

      if (
        (currentChar === ')' && lastChar !== '(') ||
        (currentChar === '}' && lastChar !== '{') ||
        (currentChar === ']' && lastChar !== '[')
      ) {
        isValid = false
      } else {
        charList.pop()
      }
    }
  }

  if (charList.length > 0) {
    isValid = false
  }

  return isValid
}

// Tests
let desc = 'valid short code'
assertEqual(isValid('()'), true, desc)

desc = 'valid longer code'
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc)

desc = 'mismatched opener and closer'
assertEqual(isValid('([][]}'), false, desc)

desc = 'missing closer'
assertEqual(isValid('[[]()'), false, desc)

desc = 'extra closer'
assertEqual(isValid('[[]]())'), false, desc)

desc = 'empty string'
assertEqual(isValid(''), true, desc)

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}
