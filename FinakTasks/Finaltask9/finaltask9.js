

// 🔥 Task 9 — Change Button Content
// Create a product card.
// Instead of:
// <button>price : $109.95</button>
// Display:
// <button>Buy for $109.95</button>
// Use template literals.

let container6=document.querySelector(".container6")
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data=>{
    data.forEach(product=>{
        let card=document.createElement("div")
        card.classList.add("card");
        card.innerHTML=`
        <h3>Title: ${product.title}</h3>
        <p>Price: $${product.price}</p>
        <button>Buy for $${product.price}</button>
        `;
        container6.appendChild(card);
    })
})