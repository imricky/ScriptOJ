
// 完成一个 extractStr 函数，可以把一个字符串中所有的 : 到 . 的子串解析出来并且存放到一个数组当中，例如：

// extractStr('My name is:Jerry. My age is:12.') // => ['Jerry', '12']
// 注意，: 和 . 之间不包含 : 和 .。也即是说，如果 ::abc..，则返回 ['abc']。

//extractStr('My name is:J) // => []
//extractStr('PvpKAj.PqQFoY:UuQkMG') // => []
// （本题来源：《JavaScript Cookbook》）

const extractStr = (str) => {
    var result = [];
    var temp = '';
    var state = 0;
    for(var i=0;i<str.length;i++){
        var curChar = str[i];
        if(curChar == ':'){
            state = 1;
            temp = ''
        }else if(curChar == '.'){
            if(state == 1){
                result.push(temp);
                state = 0;
                temp = ''
            }
        }else{
            if(state == 1){
                temp += curChar;
            }
        }
    }
    console.log(result)
    return result
}

//【测试用例】:
// extractStr('My name is:Jerry. My age is:12.')
// extractStr('PvpKAj.PqQFoY:UuQkMG')
// extractStr('::abc..')
// extractStr('My name is:J')
// extractStr('')
// extractStr('rfjcBC.wsSSZe:oMwgEeXUmlIe.')
