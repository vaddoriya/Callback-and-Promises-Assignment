async function fetchDataFromMultipleEndpoints() {
  try {
    const [todoResponse, postResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1'),
      fetch('https://jsonplaceholder.typicode.com/posts/1'),
    ]);

    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    const combinedData = {
      todo: todoData,
      post: postData,
    };

    console.log(combinedData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Example usage:
fetchDataFromMultipleEndpoints();
