//
// programming exercise
// 2014-12-15
// description:
// Please find the number of subsets of an array where the greatest number
// is the sum of the remaining numbers. 
// For example, for an input of: 1, 2, 3, 4, 6
// the subsets would be:
// 1 + 2 = 3
// 1 + 3 = 4
// 2 + 4 = 6
// 1 + 2 + 3 = 6
//
// Here is the list of numbers you should run your code on. In the above
// case the answer would be 4.
// 3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81,
// 92, 95, 97, 99
//
//var theSet = [3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81, 92, 95, 97, 99];
var theSet = [1,2,3,4,6];
var subsetCount = 0;
var sumArray = [];
// iterate through the set left to right, assuming sorted positive integers
for (ii = 0, len = theSet.length; ii < len; ii++) {
  for (jj = 0, slen = sumArray.length; jj < slen; jj++) {
    if (sumArray[jj] == theSet[ii]) {
      console.log('Found new subset: ', sumArray[jj]);
      subsetCount++;
    }
  }
  for (jj = 0; jj < slen; jj++) {
    if (sumArray[jj]+theSet[ii] <= theSet[len-1]) { // add this combination to the sums that we check for
      sumArray.push(sumArray[jj]+theSet[ii]);
      console.log('Added new sumArray1: ', sumArray[jj]+theSet[ii]);
    }
  }
  sumArray.push(theSet[ii]); // add each item in the array for comparison purposes
  console.log('Added new sumArray2: ', theSet[ii]);

}
console.log('The answer is: ', subsetCount);
