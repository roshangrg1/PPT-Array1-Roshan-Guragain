/*
  Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example 1:**

**Input:** s1 = "sea", s2 = "eat"

**Output:** 231

**Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
*/

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