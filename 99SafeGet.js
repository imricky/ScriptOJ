/*
* 请你完成一个 safeGet 函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，例如：

  var data = { a: { b: { c: 'ScriptOJ' } } }
  safeGet(data, 'a.b.c') // => scriptoj
  safeGet(data, 'a.b.c.d') // => 返回 undefined
  safeGet(data, 'a.b.c.d.e.f.g') // => 返回 undefined
  console.log('ScriptOJ') // => 打印 ScriptOJ
*
* */

/*我的答案*/
const safeGet = (data, path) => {
  let arr = [];
  for (let i = 0; i < path.split('.').length; i++) {
    arr.push(path.split('.')[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (data[arr[i]]) {
      data = data[arr[i]];
    } else {
      return void 0;
    }

  }
  return data;

};

/*参考答案*/
/*d=====(￣▽￣*)b厉害*/
const safeGet = (o, path) => {
  try {
    return path.split('.').reduce((o, k) => o[k], o)
  } catch (e) {
    return void 666
  }
};


const data = {a: {b: {c: 'ScriptOJ'}}};
safeGet(data, 'a.b.c.d');
