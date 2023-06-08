# DSA String 2nd Assignment

## Q1


💡 **Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true


### Answer -


```javascript
const isIsomorphic = (s, t) => {
    if (s.length !== t.length) return false;
  
    const sToT = new Map();
    const tToS = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if (
        (sToT.has(charS) && sToT.get(charS) !== charT) ||
        (tToS.has(charT) && tToS.get(charT) !== charS)
      ) {
        return false;
      }
  
      sToT.set(charS, charT);
      tToS.set(charT, charS);
    }
  
    return true;
  };
  
  const s = "egg";
  const t = "add";
  console.log(isIsomorphic(s, t));
```



## Q2

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true



####

```javascript

const isStrobogrammatic = (num) => {
    const strobogrammaticPairs = new Map([
      ["0", "0"],
      ["1", "1"],
      ["8", "8"],
      ["6", "9"],
      ["9", "6"],
    ]);
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const leftChar = num[left];
      const rightChar = num[right];
  
      if (
        !strobogrammaticPairs.has(leftChar) ||
        strobogrammaticPairs.get(leftChar) !== rightChar
      ) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  };
  
  const num = "69";
  console.log(isStrobogrammatic(num));
```

## Q3

Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

**Example 1:**

**Input:** num1 = "11", num2 = "123"

**Output:**

"134"

### Answer -

```javascript
  const addStrings = (num1, num2) => {
    return (BigInt(num1) + BigInt(num2)).toString();
  };
  
  console.log(addStrings("11", "123"));
```

## Q4

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

### Answer -

```javascript
  const reverseWords = (s) => {
    const arr = s.trim().split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("").reverse().join("");
    }
    return arr.join(" ");
  };
  
  console.log(reverseWords("Let's take LeetCode contest"));
```

## Q5

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"

### Answer -

```javascript
  const reverseStr = (S, k) => {
    const arr = s.split("");
  
    for (let i = 0; i < arr.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, arr.length - 1);
  
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    return arr.join("");
  };
  
  const s = "abcdefg";
  const k = 2;
  console.log(reverseStr(s, k));
```

## Q6

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example 1:**

**Input:** s = "abcde", goal = "cdeab"

**Output:**

true

### Answer -

```javascript
  const rotateString = (s, goal) => {
    if (s.length !== goal.length) return false;
  
    const concatenated = s + s;
    return concatenated.includes(goal);
  };
  
  const s = "abcde";
  const goal = "cdeab";
  console.log(rotateString(s, goal));
```

## Q7

  Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac".

### Answer -

```javascript
  const buildString = (str) => {
    const stack = [];
  
    for (const c of str) {
      if (c !== "#") {
        stack.push(c);
      } else if (stack.length > 0) {
        stack.pop();
      }
    }
  
    return stack.join("");
  };
  
  const backspaceCompare = (s, t) => {
    const processedS = buildString(s);
    const processedT = buildString(t);
  
    return processedS === processedT;
  };
  
  const s = "ab#c";
  const t = "ad#c";
  console.log(backspaceCompare(s, t));
```

## Q8

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

**Example 1:**

**Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true

### Answer -

```javascript
  const checkStraightLine = (coordinates) => {
    coordLen = coordinates.length;
  
    if (coordLen <= 2) return true;
  
    function calculateSlope(x1, y1, x2, y2, x, y) {
      return (y2 - y1) * (x - x1) - (y - y1) * (x2 - x1);
    }
  
    let [x1, y1] = coordinates[0];
    let [x2, y2] = coordinates[1];
  
    for (let i = 2; i < coordinates.length; i++) {
      let [x, y] = coordinates[i];
      if (calculateSlope(x1, y1, x2, y2, x, y) !== 0) {
        return false;
      }
    }
  
    return true;
  };
  
  const coordinates = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ];
  console.log(checkStraightLine(coordinates));
  
```