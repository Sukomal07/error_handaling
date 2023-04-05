async function fetchData() {
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => 
            res.json()
            ),
            fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
            res.json()
            )
        ]);
        
        const data = { todo:todoResponse, post:postResponse };
        return data
    } catch (error) {
        console.error(error);
    }
}
fetchData().then((data) => console.log(data))
