# DSA Recursion 1st Assignment

## Q1

Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.

**Example 1:**

```
Input: n = 27
Output: true
Explanation: 27 = 33
```

**Example 2:**

```
Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

```

**Example 3:**

```
Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).
```

### Answer -


```javascript
const isPowerOfThree = (n) => {
  if (n === 1) return true;

  if (n <= 0 || n % 3 !== 0) return false;

  return isPowerOfThree(n / 3);
};

console.log(isPowerOfThree(27));
// Output: true
console.log(isPowerOfThree(0));
// Output: false
console.log(isPowerOfThree(-1));
// Output: false
```




## Q2

You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer `n`, return *the last number that remains in* `arr`.

**Example 1:**

```
Input: n = 9
Output: 6
Explanation:
arr = [1, 2,3, 4,5, 6,7, 8,9]
arr = [2,4, 6,8]
arr = [2, 6]
arr = [6]

```

**Example 2:**
```
Input: n = 1
Output: 1
```
## Answer

```javascript
const lastRemaining = (n) => {
    return findLastRemaining(n, true);
  };
  
  const findLastRemaining = (n, isLeftToRight) => {
    if (n === 1) {
      return 1;
    }
  
    if (isLeftToRight) {
      return 2 * findLastRemaining(Math.floor(n / 2), false);
    } else {
      if (n % 2 === 0) {
        return 2 * findLastRemaining(Math.floor(n / 2), true) - 1;
      } else {
        return 2 * findLastRemaining(Math.floor(n / 2), true);
      }
    }
  };
  
  console.log(lastRemaining(9));
  // Output: 6
  console.log(lastRemaining(1));
  // Output: 1

```

## Q3

Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

**Example 1:**

Input :  set = “abc”

Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

**Example 2:**

Input : set = “abcd”

Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }


### Answer -

```javascript
const printSubsets = (set, currentSubset = "", index = 0) => {
    if (index === set.length) {
      console.log(currentSubset);
      return;
    }
  
    printSubsets(set, currentSubset, index + 1);
    printSubsets(set, currentSubset + set[index], index + 1);
  };
  
  printSubsets("abc");
  // Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

```

## Q4

Given a string calculate length of the string using recursion.

** Examples:**

Input : str = "abcd"
Output :4

Input : str = "GEEKSFORGEEKS"
Output :13

### Answer -

```javascript
  const calculateLength = (str) => {
    if (str === "") {
      return 0;
    }
  
    return 1 + calculateLength(str.slice(1));
  };
  
  console.log(calculateLength("abcd"));
  // Output: 4
  console.log(calculateLength("GEEKSFORGEEKS"));
  // Output: 13
```

## Q5

We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

**Examples :**

Input  : S = "abcab"
Output : 7
There are 15 substrings of "abcab"
a, ab, abc, abca, abcab, b, bc, bca
bcab, c, ca, cab, a, ab, b
Out of the above substrings, there
are 7 substrings : a, abca, b, bcab,
c, a and b.

Input  : S = "aba"
Output : 4
The substrings are a, b, a and aba

### Answer -

```javascript
  
function checkEquality(s)
{
	return (s.charAt(0) == s.charAt(s.length - 1));
}

function countSubstringWithEqualEnds(s)
{
	var result = 0;
	var n = s.length;

	// Starting point of substring
	for (var i = 0; i < n; i++)

	// Length of substring
	for (var len = 1; len <= n-i; len++)

		// Check if current substring has same
		// starting and ending characters.
		if (checkEquality(s.substring(i, i + len)))
			result++;

	return result;
}


	var s = "aba";
	console.log(countSubstringWithEqualEnds(s));


```

## Q6
The tower of Hanoi is a famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

**Example 1:**

Input:
N = 2
Output:
move disk 1 from rod 1 to rod 2
move disk 2 from rod 1 to rod 3
move disk 1 from rod 2 to rod 3
3
Explanation:For N=2 , steps will be
as follows in the example and total
3 steps will be taken.

### Answer -

```javascript

const towerOfHanoi = (n, source, destination, auxiliary) => {
    if (n === 1) {
      console.log(`move disk 1 from rod ${source} to rod ${destination}`);
      return 1;
    } else {
      let moves = 0;
      moves += towerOfHanoi(n - 1, source, auxiliary, destination);
      console.log(`move disk ${n} from rod ${source} to rod ${destination}`);
      moves += 1;
      moves += towerOfHanoi(n - 1, auxiliary, destination, source);
      return moves;
    }
  };
  
  const N = 3;
  const totalMoves = towerOfHanoi(N, 1, 3, 2);
  console.log("Total moves are:", totalMoves);

```

## Q7

Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

**Examples:**

Input: str = “cd”

**Output:** cd dc

**Input:** str = “abb”

**Output:** abb abb bab bba bab bba

### Answer -

```javascript

const swap = (str, i, j) => {
    let charArray = str.split("");
    let temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
  };
  
  const permutations = (str, left, right, result) => {
    if (left === right) {
      result.push(str);
    } else {
      for (let i = left; i <= right; i++) {
        str = swap(str, left, i);
        permutations(str, left + 1, right, result);
        str = swap(str, left, i); 
      }
    }
  };
  
  const printPermutations = (str) => {
    const result = [];
    const n = str.length;
    permutations(str, 0, n - 1, result);
    return result;
  };
  
  const input = "abb";
  const permutationsList = printPermutations(input);
  console.log(permutationsList.join(" "));

```

## Q8

Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

** Examples :**

Input : abc de
Output : 3
There are three consonants b, c and d.

Input : geeksforgeeks portal
Output : 12

### Answer -

```javascript

const isConsonant = (char) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return !vowels.includes(char.toLowerCase());
  };
  
  const countConsonants = (str, index = 0) => {
    if (index === str.length - 1) {
      return 0;
    }
  
    const currentChar = str[index];
    const count = countConsonants(str, index + 1);
  
    return isConsonant(currentChar) ? count + 1 : count;
  };
  
  const input = "geeksforgeeks portal";
  const consonantCount = countConsonants(input);
  console.log(consonantCount);
  
```