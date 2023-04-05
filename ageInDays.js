const person = {
    firstName: "sukomal",
    lastName: "dutta",
    age: 22
}
function ageInDay(personObj , callback){
    const fullName = `${personObj.firstName} ${personObj.lastName}`
    const ageInDays = personObj.age * 365
    callback(fullName, ageInDays)
}
function result(fullName, ageInDays){
    console.log(`The person fullName is ${fullName} and his age in days ${ageInDays}`)
}
ageInDay(person, result)