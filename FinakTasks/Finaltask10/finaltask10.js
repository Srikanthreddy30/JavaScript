// 🔥 Task 10 — Complete Product Card ⭐
// This is the best practice task based on your current code.
// Fetch:
// https://fakestoreapi.com/products
// For every product, display:
// --------------------------------

// [ IMAGE ]

// Title: Fjallraven - Foldsack No. 1 Backpack

// Category: men's clothing

// Description:
// Your perfect pack for everyday use...

// Price: $109.95

// Rating: 3.9
// Reviews: 120

// [ BUY NOW ]

// --------------------------------
// Conditions
// You must use:
// fetch()
// .then()
// response.json()
// .then()
// forEach()
// querySelector()
// createElement()
// innerHTML
// append()
// And access:
// c.title
// c.image
// c.description
// c.category
// c.price
// c.rating.rate
// c.rating.count

let container7=document.querySelector(".container7")
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data=>{
    data.forEach(product=>{
        let card=document.createElement("div")
        card.classList.add("card");
        card.innerHTML=`
        <img src="${product.image}" alt="${product.title}">
        <h3>Title: ${product.title}</h3>
        <p>Category: ${product.category}</p>
        <p>Description: ${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
        <button>Buy Now</button>
        `;
        container7.appendChild(card);
    })
})


