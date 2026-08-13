//  🔥 Task 7 — Rating Details
// Fetch all products.
// Display:
// Product: ...
// Rating: 3.9
// Reviews: 120
// Remember that rating is an object:
// rating: {
//     rate: 3.9,
//     count: 120
// }
// So access:
// c.rating.rate
// c.rating.count
 
let container4=document.querySelector(".container4")
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data=>{
    data.forEach(product=>{
        let card=document.createElement("div")
        card.classList.add("card");
        card.innerHTML=`
        <h3>Product: ${product.title}</h3>
        <p>Rating: ${product.rating.rate}</p>
        <p>Reviews: ${product.rating.count}</p>
        `;
        container4.appendChild(card);
    })
})
