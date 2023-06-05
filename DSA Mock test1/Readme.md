# DSA Mock Test

## Q1
   
   Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
a. 1 <= nums.length <= 10^4
b. -2^31 <= nums[i] <= 2^31 - 1

### Answer -

```javascript
  var moveZeroes = function(nums) {
    let size = nums.length;
     for (let i = 0; i < size; i++) {
         if (nums[i] === 0) {
             nums.splice(i, 1);
             nums.push(0);
             i--;
             size--;
         }
     }
    return nums;
}

console.log(moveZeroes([0,1,0,3,12]))
```

## Q2

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters.



####

```javascript
  const firstUniqChar = function (s) {
    const obj = {};
    const strArr = s.split('');
  
    for (let element of strArr) {
      obj[element] = (obj[element] || 0) + 1;
    }
  
    return strArr.findIndex((value) => obj[value] === 1);
  };

  console.log(firstUniqChar("loveleetcode"))
```
