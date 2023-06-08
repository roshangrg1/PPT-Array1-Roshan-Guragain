# DSA String 1st Assignment

## Q1
Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example 1:**

**Input:** s1 = "sea", s2 = "eat"

**Output:** 231

**Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.



### Answer -


```javascript

var minimumDeleteSum = function(s1, s2) {
  const memo = {}
  const memo2 = {}

  function dfs(i, j) {
      if (i >= s1.length && j >= s2.length) return 0
      if (i >= s1.length) return getCharCode(s2.slice(j))
      if (j >= s2.length) return getCharCode(s1.slice(i))

      const memostr = `${i}, ${j}`
      if (memostr in memo) return memo[memostr]

      if (s1[i] === s2[j]) return memo[memostr] = dfs(i + 1, j + 1)

      const s1code = getCharCode(s1[i])
      const s2code = getCharCode(s2[j])

      memo[memostr] = Math.min(s1code + dfs(i + 1, j), s2code + dfs(i, j + 1))
      return memo[memostr]
  }

  function getCharCode(s1) {
      if (s1 in memo2) return memo2[s1]
      let sum = 0
      for (let i = 0; i < s1.length; i++) {
          sum += s1[i].charCodeAt()
      }
      return memo2[s1] = sum
  }

  return dfs(0, 0)
};

console.log(minimumDeleteSum("sea", "eat"))
```



## Q2

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true



## Answer

```javascript
 var checkValidString = function(s) {
  // Create two arrays to keep track of indices of open parentheses and stars respectively.
  let open=[]
  let star=[]

  // Get the length of the input string.
  let len = s.length

  // Iterate over each character in the input string.
  for(let i=0; i<len; i++){
      // If the current character is an open parenthesis, push its index onto the open array.
      if(s[i]=='(') open.push(i)

      // If the current character is a star, push its index onto the star array.
      else if(s[i]=='*') star.push(i)

      // If the current character is a closing parenthesis, try to match it with an open parenthesis or a star.
      else{
          // If there is an open parenthesis, use it to balance the closing parenthesis.
          if(open.length != 0) open.pop()

          // If there is a star, use it to balance the closing parenthesis.
          else if(star.length != 0) star.pop()

          // If there are no open parentheses or stars left, the string is invalid.
          else return false
      }
  }

  // Check if there are any open parentheses left that have not been closed.
  while(open.length !=0){

      // Try to use a star to balance the open parenthesis.
      if(star.length ==0) return false
      
      // If there is a star after the open parenthesis, use it to balance the parenthesis.
      else if(open[open.length-1] < star[star.length-1]){
          open.pop()
          star.pop()
      }

      // If there is no star to balance the open parenthesis, the string is invalid.
      else return false
  }
  // If all parentheses are balanced, the string is valid.
  return true
};

console.log(checkValidString('()'))

```

## Q3

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

### Answer -

```javascript
 var minDistance = function(word1, word2) {
  // Brute Force
  const lcs = (m, n) => {
      if (m === 0 || n === 0) {
          return 0;
      }
      const char1 = word1[m-1];
      const char2 = word2[n-1];
      if(char1 === char2) {
          return 1+lcs(m-1, n-1);
      } else {
          return Math.max(lcs(m, n-1), lcs(m-1, n));
      }
  }
  return word1.length + word2.length - 2* lcs(word1.length, word2.length)
}

console.log(minDistance("sea", "eat"))
```

## Q4

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.

**Input:** s = "4(2(3)(1))(6(5))"

**Output:** [4,2,6,3,1,5]

### Answer -

```javascript
  var tree2str = function(root) {
  if (!root) {
      return '';
  }
  if (!root.left && !root.right) {
      return root.val + '';
  }
  if (!root.right) {
      return root.val + '(' + tree2str(root.left) + ')';
  }
  return root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')';
};

console.log(tree2str())
```

## Q5

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.

The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done **modifying the input array,** return *the new length of the array*.

You must write an algorithm that uses only constant extra space.

**Example 1:**

**Input:** chars = ["a","a","b","b","c","c","c"]

**Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

**Explanation:**

The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".


### Answer -

```javascript

const compress = chars => {
  let count = 1
  let iterate = 0
  for (let i = 0; i < chars.length; i++) { 
      if (chars[i] === chars[i + 1]) { 
          count++
      }
      else if (count === 1) { 
          chars[iterate++] = chars[i]
      }
      else if (count < 10) { 
          chars[iterate++] = chars[i]
          chars[iterate++] = count.toString()
          count = 1
      }
      else { 
          const s = count.toString().split('')
          chars[iterate++] = chars[i]
          for (let j = 0; j < s.length; j++) { 
              chars[iterate++] = s[j]
          }
          count = 1
      }
  }
  return iterate 
};

console.log(compress(["a","a","b","b","c","c","c"]))
```

## Q6

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

**Input:** s = "cbaebabacd", p = "abc"

**Output:** [0,6]

**Explanation:**

The substring with start index = 0 is "cba", which is an anagram of "abc".

The substring with start index = 6 is "bac", which is an anagram of "abc".

### Answer -

```javascript

const findAnagrams = (s, p) => {
    
  // initialize output array to be returned at the end and neededChars object to store the chars in p.
  const output = [];
  const neededChars = {};
  
  // populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.
  for (let char of p) {
      if (char in neededChars) {
          neededChars[char]++
      } else neededChars[char] = 1
  }
  
  // initialize window pointers and the total number of chars needed to form an anagram.
  let left = 0;
  let right = 0; 
  let count = p.length 
  
  // start sliding the window
  while (right < s.length) {
      
      // if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0), 
      // then decrease the count which is the total number of chars that are needed and that still haven't been found.
      if (neededChars[s[right]] > 0) count--;
      
      // decrease the needed amount for the current char and move the window's right end one step forward.
      neededChars[s[right]]--;
      right++;
      
      // if the count is 0, this means that there is an anagram starting at the left index so push left into the output array.
      if (count === 0) output.push(left);
      
      // at first, the window will increase its length by taking steps forward with its right end.
      // after the window length reaches p's length for the first time,
  // the window will start moving forward like a caterpillar with the left end moving first. 
      if (right - left == p.length) {
          
          // if the char left behind was a needed char, increase the total number of chars currently needed to form an anagram.
          if (neededChars[s[left]] >= 0) count++;
          
          // the lines below are the most important to understand: 
          // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string, 
          // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
          neededChars[s[left]]++;
          left++;
      }
  }
  return output;
};

console.log(findAnagrams( "cbaebabacd","abc"))
```

## Q7
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

**Example 1:**

**Input:** s = "3[a]2[bc]"

**Output:** "aaabcbc"


### Answer -

```javascript

const decodeString = s => {
  if (s.length === 1) { 
      if (Number.isInteger(+s)) return ""
      else return s
  }
  const stack = []
  for (let i = 0; i < s.length; i++) { 
      if (s[i] === ']') { 
          let str = ''
          while (true) { 
              const char = stack.pop()
              if (char === '[') break 
              str = char + str
          }
          let n = ''
          while (Number.isInteger( +stack[stack.length - 1])) { 
              const number = stack.pop()
              n = number + n
          }
          stack.push(str.repeat(+n))
      } 
      else stack.push(s[i])
  }
  return stack.join('')
};

console.log(decodeString("3[a]2[bc]"))

```

## Q8

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

### Answer -

```javascript

var buddyStrings = function(A, B) {
  if(A.length != B.length) return false;
  const diff = [];
  
  for(let i = 0; i < A.length; i++) {
      if(A[i] != B[i]) diff.push(i);
      if(diff.length > 2) return false;
  }
  if(!diff.length) return A.length != [...new Set(A)].length;
  const [i, j] = diff; 
  return A[i] == B[j] && B[i] == A[j];
};

console.log(buddyStrings("ab" ,"ba"))
  
```