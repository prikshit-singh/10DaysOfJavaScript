var nums=[2,3,6,6,5]

function getSecondLargest(nums) {
    // Complete the function
     let first = nums[0]; 
   let sec = -1;
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
        sec = first;
        first = nums[i]
    }

    if (nums[i] > sec && nums[i] < first) {
        sec = nums[i];
    }
}


return sec;
}

console.log(getSecondLargest(nums))