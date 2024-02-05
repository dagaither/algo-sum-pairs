function sumPairs(arr, num) {

    let pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < (arr.length); j++) {
            if (arr[i] + arr[j] == num) {
                pairs.push([arr[i], arr[j]]);
            }; 
        };
    };

    if (pairs.length == 0) {
        return "unable to find pairs";
    } else {
        return pairs;
    }; 
};

console.log(sumPairs([1, 2, 3, 4, 5], 7))
module.exports = sumPairs;