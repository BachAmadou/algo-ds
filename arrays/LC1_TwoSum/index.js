
function twoSum(arr, target) {
    // SOLUTION 1
    const numsVisited = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;

        if (complement in numsVisited) {
            return [i, numsVisited[complement]];
        } else {
            numsVisited[num] = i;
        }
    }
}

module.exports = twoSum;
