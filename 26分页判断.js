/*
数据的分页在我们的业务当中非常常见，例如 ScriptOJ 的问题列表就有分页。

完成分页函数 getPages，接收两个参数：

getPages(total, itemsPerPage)
  total： 表示总共有多少条数据
  itemsPerPage：表示每页有多少条数据
getPages(total, itemsPerPage) 会返回一个数字告诉我们需要有多少页数据。例如，总共 101 条数据，每页有 10 条，就需要 11 页，那么就返回 11。

itemsPerPage 为 0 的时候返回 0。

你只需要完成 getPages 函数。
 */

/*我的答案*/
const getPages = (total, itemsPerPage) => {
  let count = 0;
  if (total < 0) return 0;
  if (itemsPerPage === 0) return 0;
  let a = total / itemsPerPage;  //十位
  if (a.toString().indexOf('.') > 0) {
    count = Math.floor(total / itemsPerPage) + 1;  //十位
  } else {
    count = total / itemsPerPage;  //十位
  }
  console.log(count);
  return count;
};

getPages(111,0);

/*参考答案*/
const getPages = (total, itemsPerPage) => {
  return itemsPerPage > 0 ? Math.ceil(total / itemsPerPage) : 0
}


