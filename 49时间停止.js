/*
pause 函数可以让一个函数暂停运行一段时间（ms）以后继续运行。例如：

async function run () {
  console.log('Hello')
  await pause(1000) // 续一秒
  console.log('World') // 一秒以后继续运行
}
请你完成 pause 函数的编写。
*/

/*我的答案*/
const pause = async (time) => {
  return new Promise((res, rej) => {
    setTimeout(res, time)
  })

};

/*参考答案*/
const pause = async (time) => new Promise((resolve) => {
  setTimeout(() => resolve(), time)
});

async function run() {
  console.log('Hello');
  await pause(1000); // 续一秒
  console.log('World'); // 一秒以后继续运行
}

run();