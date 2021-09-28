const getIdx = (arr, sum) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return [i, j];
    }
  }
};
console.log(getIdx([2, 6, 16, 19], 8));
