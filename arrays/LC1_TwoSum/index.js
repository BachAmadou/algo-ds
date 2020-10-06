
function twoSum(arr, target) {
    // SOLUTION 1
    // const numsVisited = {};

    // for (let i = 0; i < arr.length; i++) {
    //     const num = arr[i];
    //     const complement = target - num;

    //     if (complement in numsVisited) {
    //         return [i, numsVisited[complement]];
    //     } else {
    //         numsVisited[num] = i;
    //     }
    // }


    // SOLUTION 2
    let numIndex = new Map();
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;
        
        if (numIndex.has(complement)) {
            result[0] = numIndex.get(complement);
            result[1] = i;
            return result;
        }
        numIndex.set(num, i);    
    }
    return result;
}

module.exports = twoSum;


// Time Complexity: O(n), we traverse the list containing n elements only once. Each
// look up in the Hash table costs only O(1) time.

// Space Complexity: O(n), number of key value pairs stored in hash table, stores
// stores at most n elements