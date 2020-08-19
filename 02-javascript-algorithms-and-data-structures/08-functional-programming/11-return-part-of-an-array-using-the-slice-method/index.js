function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  if (beginSlice === undefined) beginSlice = 0;
  if (endSlice === undefined) endSlice = anim.length;
  return anim.slice(beginSlice, endSlice);

  // Only change code above this line
}
var inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
sliceArray(inputAnim, 1, 3);
