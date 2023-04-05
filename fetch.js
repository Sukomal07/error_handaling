const fetchData = async(req, res) =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(await data.json())
}
fetchData()