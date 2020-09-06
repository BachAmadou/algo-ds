// Given a string, determine if it is a palindrom, considering only alphanumeric characters
// and ignoring cases.

function isPalindrome(s) {
    //keep only alphanumeric characters
    s = s.toLowerCase().replace(/[\W_]/g, "");

    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

module.exports = isPalindrome;
