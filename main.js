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

// Task 3: Display Product Details Dynamically

        .then(products => 
        {
            products.forEach(product => 
            {
                const listItem = document.createElement('li');
                listItem.innerHTML = '
                <img src = "${product.fields.image[0].url}" alt="{product.fields.name}">
                <p>Name: ${product.fields.name}</p>;
                <p>Company: ${product.fields.comapny}</p>;
                <p>Price: ${product.fields.price}' </p>;

                productList.appendChicld(listItem);
                console.log(product);
            });
        }
        )
  
// Task 4: Handle Errors Gracefully

.catch(error => 
    {
        console.error('Error: Failed to load Products. Please refresh page or try again later.');
    });