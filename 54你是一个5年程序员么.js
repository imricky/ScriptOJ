/*
那么，为证明你的实力，请写出一个函数 initArray ，
接受两个参数 m 和 n，返回一个数组，它的长度是 m，每个值都是 n。
 */

const initArray = (m, n) => {
  //循环很简单，但是如果不用循环来做，应该怎么做啊...
  // let finalArr = [];
  // for (let i = 0; i < m; i++) {
  //   finalArr.push(n);
  // }
  // console.log(finalArr)

  //不用循环来做,真的6啊
  /*未通过测试，但能简单达到效果，应该有好多特殊情况*/
  let a = new Array(m).join(n).split('').map(n => +n);
  console.log(a); //[ '3', '3', '3', '3', '3', '3', '3', '3', '3' ]


  /*通过测试*/
  let b = [].fill.call(new Array(m), n);
  console.log(b);  //[ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ]

  /*参考答案*/
  const initArray = (m, n) => {
    if (m === 0) return [];
    return (n + ' ').repeat(m).trim().split(' ').map(n => +n)
  }

};


initArray(10, 3);
