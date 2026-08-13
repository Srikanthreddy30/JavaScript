// 🚀 Bonus Challenge
// After completing Task 10, try to make the card without copying your existing code.
// Your goal should be to understand this flow:
// API
//  ↓
// fetch()
//  ↓
// Promise
//  ↓
// response.json()
//  ↓
// JavaScript Array
//  ↓
// forEach()
//  ↓
// Each Product Object
//  ↓
// createElement()
//  ↓
// innerHTML
//  ↓
// append()
//  ↓
// UI
// This is exactly the kind of small project that will strengthen your understanding of Fetch API + Promises + JSON + Arrays + Objects + DOM.

let container9=document.querySelector(".container9")
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    data.forEach(product=>{
        let card=document.createElement("div")
        card.innerHTML=`
        <img src="${product.image}" alt="${product.title}">
        <h3>Title: ${product.title}</h3>
        <p>Category: ${product.category}</p>
        <p>Description: ${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
        <button>Buy Now</button>
        `;
        container9.append(card);

    })
})
