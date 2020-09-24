function containsDuplicate(nums) {

    // Solution 1
    const visitedNums = {};

    for(const num of nums) {
        if( num in visitedNums) {
            return true;
        } else {
            visitedNums[num] = true;
        }
    }
return false;


//Solution 2
// let numbers = new Set();

// for(let num of nums) {
//     if(!numbers.has(num)) {
//         numbers.add(num);
//     } else {
//         return true;
//     }
// }
// return false;

}

module.exports = containsDuplicate;


// Time complexity O(n) we go through every element in input Array.
// Space complexity O(n) the number of keys in the object is equal to the number 
// of unique values in the input array