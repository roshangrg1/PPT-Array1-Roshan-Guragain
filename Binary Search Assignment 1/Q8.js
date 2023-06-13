// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

// **Example 1:**

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

var intersection = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        if (!result.includes(nums1[i])) {
          result.push(nums1[i]);
        }
      }
    }
    return result;
  };

console.log(intersection([1,2,2,1],[2,2]))