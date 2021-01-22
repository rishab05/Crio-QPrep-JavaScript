function getLastNames(firstName, people) {
    return new Promise(( resolve, reject )=>{
        var arr = [];
        typeof people;

        people.map((item)=>{
            if (firstName == item.firstName ){
                arr.push(item.lastName)
            }
        })

        if (arr.length == 0 ){
            reject("Invalid")
        }else {
            resolve(arr.sort())
        }
    })
}
module.exports = getLastNames;
