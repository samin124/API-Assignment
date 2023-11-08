function fetchProducts() {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => showData(data.products));
  }
  
  function showData(response) {
    const productInfoContainer = document.getElementById(
      "product-info-container"
    );
    console.log(response);
  
    response.forEach((singleProduct) => {
      productInfoContainer.innerHTML += `
          <div class="card bg-primary text-primary-content">
    <div class="card-body">
      <h2 class="card-title">${singleProduct.title}</h2>
      <img class="w-56 h-56" src=${singleProduct.thumbnail}>
      <div class="card-actions justify-end">
        <button onclick="fetchSingleData('${singleProduct.id}')" class="btn">Buy Now at ${singleProduct.price}$</button>
      </div>
    </div>
  </div>
          `;
    });
  }
  fetchProducts();
  
  function fetchSingleData(id) {
    fetch(`http://localhost:5000/single-product/${id}`)
      .then((res) => res.json())
      .then((data) => showDetails(data));
  }
  function showDetails(product){
    const detailContainer =document.getElementById("single-product-container");
    detailContainer.innerHTML = `
    <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5">
    <figure><img src="${product.thumbnail}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${title.description}</h2>
      <p>${product.description}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now at ${product.price}</button>
      </div>
    </div>
  </div>
    `
  }