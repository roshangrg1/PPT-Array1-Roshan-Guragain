// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. 

//  Example 1:
// Input: x = 4 Output: 2 Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

function sqrt(x) {
 // if the number is 0 or 1, we can return the input x, 
 // since the square of 0 and 1 is the same as the input. 
 if (x == 0 || x == 1) {
  return x;
 }

 // perform binary search to find the sqrt of the input number
 let start = 1, end = x, ans;

 while (start <= end) {
  // find the mid-point of the number range
  let mid = Math.floor((start + end) / 2);

  // check if mid^2 is the same as x. If it is, we have found the sqrt.
  if (mid * mid == x) {
   return mid;
  }

  // move the range of search towards the smallest numbers if mid^2 > x.
  if (mid * mid < x) {
   start = mid + 1;
   ans = mid;
  } else { // move the range of search towards the largest numbers if mid^2 < x.
   end = mid - 1;
  }
 }
 // return the largest integer value of sqrt
 return ans;
}

console.log(sqrt(8))