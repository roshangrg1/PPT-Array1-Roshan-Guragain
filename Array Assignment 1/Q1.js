
// 💡 **Q1.** Given an array of integers nums and an integer target,
//  return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
//  and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][

// BRUTE FORCE.
    var twoSum= function(num,target){
        let output=[]
        for (let i = 0; i < num.length; i++) {
            for(let j=i+1; j<num.length; j++) {
                if(num[i]+num[j]==target){
                    output.push(i)
                    output.push(j)
                    return output;
                }
            }
            
        }
        
    }

console.log(twoSum([10,3,7,7,10], 10))

// Optimized Way
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([8,2, 6,7,7, 11, 15], 8));