/*
编写一个函数 unique(arr)，返回一个去除数组内重复的元素的数组。例如：

unique([0, 1, 2, 2, 3, 3, 4]) // => [0, 1, 2, 3, 4]
unique([0, 1, '1', '1', 2]) // => [0, 1, '1', 2]

 */
/*我的答案*/
const unique = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  console.log(res);
  return res
};

unique([1, 2, 3, 4, 5, 1, 2, '1']);


/*参考答案*/
const unique1 = (arr) => [...new Set(arr)];


/*其他答案*/
function unique2(array) {
  let res = array.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
  return res;
}

console.log(unique([1, 2, 3, 4, 5, 1, 2, '1']));