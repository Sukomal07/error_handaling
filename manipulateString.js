function manipulateString(str , callback){
    const upperCase = str.toUpperCase()
    callback(upperCase)
}
function logString(upperCase){
    console.log(`The manipulatedString is: ${upperCase}`)
}

manipulateString("sukomal", logString)