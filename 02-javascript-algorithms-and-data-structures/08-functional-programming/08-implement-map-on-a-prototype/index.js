// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  let newArray = [];
  const sLength = this.length;
  // Only change code below this line
  for (let i = 0; i < sLength; i++) {
    const callBackVal = callback(this[i], i, this);
    newArray = [...newArray, callBackVal];
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
