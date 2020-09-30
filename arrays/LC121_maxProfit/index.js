function maxProfit(prices) {

    // SOLUTION 1:
    let maxProfit = 0;
    let cheapestPrice = prices[0];

    for(const currentPrice of prices) {
        if(currentPrice < cheapestPrice) {
            cheapestPrice = currentPrice;
        }

        const currentProfit = currentPrice - cheapestPrice;
        maxProfit = Math.max(currentProfit, maxProfit);
    }

    return maxProfit;
}

module.exports = maxProfit;
