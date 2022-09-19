function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

function sumWhile(nums) {
  let i = 0;
  let sum = 0;

  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

const theNums = [1, 2, 3];
console.log(sumFor(theNums));
console.log(sumWhile(theNums));
console.log(sumRecursion(theNums));
console.log(sumTheSimpleWay(theNums));
