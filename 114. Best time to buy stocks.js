/* Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not 7-1 = 6, as selling price needs to be larger than buying price. */

var maxProfit = function (prices) {
  let result = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    result = Math.max(result, prices[i] - min);
  }
  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));