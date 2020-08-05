// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} string1
 * @param {string} string2
 * @return {string}
 */

//  Since you have to find the minimum window in S which has all the characters from T, you need to expand and contract the window using the two pointers and keep checking the window for all the characters. This approach is also called Sliding Window Approach.

// L ------------------------ R , Suppose this is the window that contains all characters of T

//         L----------------- R , this is the contracted window. We found a smaller window that still contains all the characters in T

// When the window is no longer valid, start expanding again using the right pointer.

var minWindow = function(string1, string2) {
	let sharedChars = []
	let window = []
	let string1Copy = string1
	let currentWindowLength = string1.length

	findWindow = () => {
		if (string1Copy) {
			for (let i = 0; i < string1Copy.length; i++) {
				const currentChar = string1Copy[i]

				if (
					string2.indexOf(currentChar) >= 0 &&
					sharedChars.indexOf(currentChar) <= -1
				) {
					sharedChars.push(currentChar)
				}
				console.log(sharedChars.length)
				console.log(string2.length)

				if (sharedChars.length <= string2.length) {
					window.push(currentChar)
				}

				if (sharedChars.length === string2.length) {
					if (currentWindowLength > window.length) {
						currentWindowLength = window.length
						window = []
						sharedChars = []
						string1Copy
						console.log(string1Copy.slice(i + 1))

					} else {
						break
					}
				}
			}
		}
	}


	console.log(sharedChars)
	console.log(window)
};

minWindow('ADOBECODEBANC', 'ABC')