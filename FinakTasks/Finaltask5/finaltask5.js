// 🔥 Task 5 — Category Display
// Fetch all products.
// Display:
// Title: ...
// Category: ...
// Price: ...
// Example:
// Title: Fjallraven - Foldsack No. 1 Backpack
// Category: men's clothing
// Price: $109.95

let container3=document.querySelector(".container3")
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    data.forEach(product=>{
        let card=document.createElement("div")
        card.innerHTML=`
        <h3>Title:${product.title} </h3>
        <p>Category: ${product.category}</p>
        <p>Price: ${product.price}</p>
        `;
         container3.append(card);

    })
    
})