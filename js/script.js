let items_container = document.querySelector(".items_container")
let item_object =
 {
    item_image : 'images/1.jpg',
    rating: {
        stars : 4.5 ,
        noOfReviews : 1400
            },
    company_name : "  Carlton london",
    item_name : "  Rhodium-plated CZ Floral studs",
     current_price : 506,
     original_price : 1400,
     discount_percentage  : 42,
}

items_container.innerHTML = `       
           <div class="item_container">
                <img src="${item_object.item_image}" alt="item image" class="item_image  ">
                <div class="rating">${item_object.rating.stars}⭐| ${item_object.rating.noOfReviews}</div>
                <div class="company_name">
                  ${item_object.company_name}
                </div>
                <div class="item_name">
                  ${item_object.item_name}
                </div>
                <div class="price">
                    <span class="current_price">Rs ${item_object.current_price}</span><span class="original_price">Rs ${item_object.original_price}</span><span class="discount">(${item_object.discount_percentage}% off)</span>
                </div>
                <button class="AddBtn">Add To Button</button>
            </div>
        `;