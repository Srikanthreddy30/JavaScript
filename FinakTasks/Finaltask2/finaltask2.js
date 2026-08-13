
// ....................................................................
// 🔥 Task 2 — Product Description
// Fetch all products.
// For every product, display:
// Title: ...
// Description: ...
// Price: ...
// But show only the first 50 characters of the description.
// Use:
// slice()

let container2=document.querySelector(".container2")
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    data.forEach(product=>{
        let card=document.createElement("div")
        card.innerHTML=`
        <h3>Title:${product.title} </h3>
        <P>Description:${product.description.slice(0, 50)}</P>
        <p>Price: ${product.price}</p>
        `;
         container2.append(card);
        })
})