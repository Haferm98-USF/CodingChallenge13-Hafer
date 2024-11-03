// Task 2: Fetch Products from the API using Fetch and Promises

const productList = document.getElementById('productList');
    fetch('https://www.course-api.com/javascript-store-products');
        .then(response => 
        {
            if (!response.ok)
            {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
        )