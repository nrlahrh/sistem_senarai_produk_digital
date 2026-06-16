function fetchProducts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log("Data API:", data);
            paparanData(data);
        })
        .catch(error => {
            console.error("Error fetching produk:", error);
            
        });
}

function paparanData(products) {
    const container = document.getElementById("productList");

    container.innerHTML = "";

    products.forEach(product => {
        container.innerHTML += `
         <div style="border:1px solid #ccc; padding:10px; margin:10px;">
            <h2>${product.id}</h2>
                <h3>Title: ${product.title}</h3>
                <p><strong>Body:</strong> ${product.body}</p>
            </div>
        `;
    });
}