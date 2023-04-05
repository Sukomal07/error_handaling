function greet(name){
    return new Promise((resolve) =>{
        const greeting = `heloo ${name}`
        resolve(greeting)
    })
}
greet("sukomal").then((message) => console.log(message))
.catch((error) => console.log(error))