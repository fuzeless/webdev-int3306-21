var makeMultiFilter = (originalArray) => {
  let currentArray = originalArray;

  return (function filterCriteria(filter, callback) {
    if (!filter && !callback) return currentArray;
    if (filter) {
      let tempArray = [];
      currentArray.forEach((element) => {
        if (filter(element)) tempArray.push(element);
      });
      currentArray = tempArray;
    } else return currentArray;
    if (callback) callback.call(originalArray, currentArray);
    return filterCriteria;
  })
}
// var arrayFilterer1 = MakeMultiFilter([1,2,3,4,5,6]);
// function filterTwos(elem) { return elem !== 2; }
// function filterThrees(elem) { return elem !== 3; }

// console.log(arrayFilterer1(filterThrees)());