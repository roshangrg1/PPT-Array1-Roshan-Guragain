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