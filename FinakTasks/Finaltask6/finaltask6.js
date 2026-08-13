
// 🔥 Task 6 — Product Details Card
// Create a card for every product containing:
// -----------------------------
// Product Title

// [ IMAGE ]

// Description: ...............

// Category: ...............

// Price: $109.95

// Rating: 3.9
// -----------------------------
// Use the object's nested property:
// c.rating.rate


let container3=document.querySelector(".container3")
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    data.forEach(product=>{
        let card=document.createElement("div")
        card.classList.add("card");
       card.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}">
            <p>Description: ${product.description} </p>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price} </p>
            <p>Rating: ${product.rating.rate}</p>
        `;
         container3.appendChild(card);

    });

});