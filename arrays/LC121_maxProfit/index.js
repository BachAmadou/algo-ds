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


    // SOLUTION 2
    // let maxProfit = 0;
    // let minBuyPrice = infinity // because any number is less than infinity

    // for (let price of prices) {
    //     if (price < minBuyPrice) {
    //         minBuyPrice = price;
    //     } else if (price - minBuyPrice > maxProfit) {
    //         maxProfit = price - minBuyPrice;
    //     }
    // }
    // return maxProfit;
}

module.exports = maxProfit;
