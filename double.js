function double(arr, callback){
    const doubleArr = arr.map((num) =>{
        return callback(num)
    })
    return doubleArr
}
function callback(num){
    return num *2
}
const arr = [1,2,3,4]
const doubleArray = double(arr, callback)
console.log(doubleArray)