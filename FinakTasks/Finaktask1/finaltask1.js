// 🔥 Task 1 — Product Cards
// Use:
// https://fakestoreapi.com/products
// Display every product as a card containing:
// Product title
// Product image
// Price
// Category
// Rating

let container=document.querySelector(".container");
fetch("https://fakestoreapi.com/products")
.then(response=> response.json())
.then((data) => {
    data.forEach((product)=>{
        let card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`
        <h3>Title:${product.title}</h3>
        <p>Description: ${product.description.slice(0, 20)}</p>
        <p>Price: ${product.price}</p>
        <p>Category: ${product.category}</p>
         <p>Rating: ${product.rating.rate}</p>
        <img src="${product.image}" alt="${product.title}" width="100px" height="100px">
        `;
        container.appendChild(card);
    })
    
})