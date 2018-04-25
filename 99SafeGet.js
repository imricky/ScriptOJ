// 请你完成一个 safeGet 函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，例如：

// var data = { a: { b: { c: 'ScriptOJ' } } }
// safeGet(data, 'a.b.c') // => scriptoj
// safeGet(data, 'a.b.c.d') // => 返回 undefined
// safeGet(data, 'a.b.c.d.e.f.g') // => 返回 undefined
// console.log('ScriptOJ') // => 打印 ScriptOJ

var data = { a: { b: { c: 'ScriptOJ' } } }
const safeGet = (data, path) => {

    var pathArr = [];

    // if(path.indexOf())
     path.split('.').slice(0).map(item=>{
         item = '.'+item
         pathArr.push(item)
     }); //解析path，放到一个数组里
     console.log(pathArr)

  }

safeGet(data,'a.b.c')