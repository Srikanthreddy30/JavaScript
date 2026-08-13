
// ......................................................................
// 🔥 Task 3 — Product List
// Create a <div class="api"></div> in HTML.
// Fetch the products and display them like:
// Product: Fjallraven Backpack
// Price: $109.95
// Category: men's clothing
// [Product Image]
// Each product should be inside its own <div>.

let api=document.querySelector(".api");
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    data.forEach(product=>{
      let card =document.createElement("div")
      card.innerHTML=`
      <h3>Product: ${product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Category:  ${product.category}</p>
      <img src="${product.image}" alt="${product.title}" width="100px" height="100px">
      `;
      api.append(card)

    })
})

