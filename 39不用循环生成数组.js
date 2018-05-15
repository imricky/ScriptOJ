/*
完成 arrWithoutLoop 函数，它会被传入一个整数 n 作为参数，返回一个长度为 n 的数组，数组中每个元素的值等于它的下标。
arrWithoutLoop 中不能使用循环控制结构。

（本题来源：UC 国际前端笔试题）
 */

/*我的答案*/
const arrWithoutLoop = (n) => {
  let res = Array(n).fill().map((i, e) => e);
  console.log(res)
};

arrWithoutLoop(10);

/*参考答案1*/
//震惊
const arrWithoutLoop = (n) => [...Array(n).keys()];// 还有这种操作？

/*参考答案2*/
const arrWithoutLoop = (n2) => {
  let arr = [];
  ~function (n) {
    if (n < n2) {
      arr.push(n);
      arguments.callee(arr.length);
    }
  }(0);
  console.log(arr);
  return arr
};

