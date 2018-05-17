/*
请你给字符串都添加上原型方法 spacify，可以让一个字符串的每个字母都多出一个空格的间隔：

  "ScriptOJ".spacify() // => "S c r i p t O J"
（本题来源：http://blog.sourcing.io/interview-questions）
 */

/*我的答案*/
String.prototype.spacify = function () {
  let a = [];
  let b = this.split('')
  for (let i = 0; i < b.length; i++) {
    a.push(b[i])
  }
  return a.join(' ')
};

/*参考答案*/
String.prototype.spacify = function () {
  return this.split('').join(' ')
}

console.log("ScriptOJ".spacify());
