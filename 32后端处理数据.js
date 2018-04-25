/*
从某数据库接口得到如下值：
{
  rows: [
    ["Lisa", 16, "Female", "2000-12-01"],
    ["Bob", 22, "Male", "1996-01-21"]
  ],
  metaData: [
    { name: "name", note: '' },
    { name: "age", note: '' },
    { name: "gender", note: '' },
    { name: "birthday", note: '' }
  ]
}

rows 是数据，metaData 是对数据的说明。现写一个函数 parseData，将上面的对象转化为期望的数组：
[
  { name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01" },
  { name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21" },
]
 */

let data = {
  rows: [
    ["Lisa", 16, "Female", "2000-12-01"],
    ["Bob", 22, "Male", "1996-01-21"],
    ["Alice", 23, "Male", "1996-01-23"]
  ],
  metaData: [
    { name: "name", note: '' },
    { name: "age", note: '' },
    { name: "gender", note: '' },
    { name: "birthday", note: '' },
    {name: "asd",note:''}
  ]
};

/*我的解答
* 第一次提交的时候忘记了判断undefined的情况，导致提交出错
* */
const parseData = (data) => {
  let finalArr = [];
  let metaArr = [];
  let obj1 = {};
  data.metaData.map((i) => {
    metaArr.push(i.name);
  });
  for(let i= 0;i<data.rows.length;i++){
    for(let j =0;j<metaArr.length;j++){
      obj1[metaArr[j]] = data.rows[i][j];
      if(obj1[metaArr[j]] === void 0){
        delete obj1[metaArr[j]]
      }
    }
    finalArr.push(obj1);
  }
  console.log(finalArr);
  return finalArr;

};

parseData(data);

/*参考答案*/
function parseData (data){
  var metas = data.metaData.map(ele=>ele.name);
  return data.rows.map(ele=>{
    var obj = {};
    metas.forEach((meta,index)=>{
      obj[meta] = ele[index];
    });
    return obj;
  });
}
