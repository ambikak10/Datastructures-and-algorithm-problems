var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = -Infinity;

  while (i < j) {
    const min = Math.min(height[i], height[j]);
    max = Math.max(max, min * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));