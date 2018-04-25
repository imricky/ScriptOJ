/*
完成一个生成计数器的函数 plusFor，调用它会返回一个计数器。计数器本身也是一个函数，每次调用会返回一个字符串。
达到以下的效果：

const counter1 = plusFor('小明')
counter1() // => 为小明+1s
counter1() // => 为小明+2s
counter1() // => 为小明+3s
...

const counter2 = plusFor('李梅')
counter2() // => 为李梅+1s
counter2() // => 为李梅+2s
counter2() // => 为李梅+3s
...

*注意你只需要完成 plusFor 函数，不要使用额外的全局变量
*/

/*我的第一种解答*/
/* 不知道为什么不通过 */
// const plusFor = (name) =>{
//   let i = 0;
//   let fname = name;
//   return ()=>{
//     console.log(`为${fname}+${++i}s`);
//     //`为${fname}+${++i}s`
//   }
// };

/*第二次解答（通过了）*/
const plusFor = function (name) {
  let i = 0;
  return function () {
    return `为${name}+${++i}s`
  }
};

/*参考答案*/
const plusFor = (name) => {
  let i = 0;
  return () => `为${name}+${++i}s`
};


const counter2 = plusFor('李梅');
counter2();
counter2();
counter2();
counter2();
