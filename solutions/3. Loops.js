function evenNumbers(n) {
    var ans = [];
    ans.push(0);
    for(let i=2;i<=n;i++){
        if(i%2===0){
            ans.push(i);
        }
    }
    return ans;
}
//console.log(evenNumbers(10));
module.exports = evenNumbers;
