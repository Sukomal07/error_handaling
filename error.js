fetch("https://jsonplaceholder.typicode.com/posts/123456789")
.then((res) =>{
    if(!res.ok){
        throw new Error("Network response not ok")
    }
    return res.json()
})