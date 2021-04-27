var ans = [];
var values = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

process.argv.slice(2).forEach((val, index) => {
    var temp = "";
    for(var x = 0; x < val.length; x++) {
        temp += values[val.charAt(x) - '0'];
    }
    ans[index] = temp;
})

console.log(ans.toString());
