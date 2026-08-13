

// 🔥 Task 8 — First 20 Characters
// Fetch all products.
// Display:
// Title: ...
// Description: [first 20 characters]
// Use:
// slice(0, 20)

let container5=document.querySelector(".container5")
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data=>{
    data.forEach(product=>{
        let card=document.createElement("div")
        card.innerHTML=`
        <h3>Title: ${product.title}</h3>
        <p>Description: ${product.description.slice(0, 20)}</p>
        `;
        container5.append(card);
    })
})