

// ......................................................................
// 🔥 Task 4 — Product Image Gallery
// Fetch the products.
// Display only the images.
// Each image should be created using:
// document.createElement("img")
// Use the API's image property.

let images =document.querySelector(".images");
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    data.forEach(product=>{
      let image =document.createElement("img");
      image.src = product.image;
      image.alt = product.title;
      image.width = 100;
      image.height = 100;
      images.append(image)

    })
})