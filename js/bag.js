
let BagItemObject ;
onload()
function onload(){
    LoadBagItemsObject();
    displayBagItems();
}
function LoadBagItemsObject(){
    BagItemObject = BagItems.map(ItemId => {
        for(let i = 0 ; i < items.length ; i++){
            if (ItemId == items[i].id) {
                return items[i] ;
            }
        }
    });
}
function displayBagItems (){
    let bagContainerElement = document.querySelector(".bag-items-container")
    let innerHTML = "";
    BagItemObject.forEach(BagItem => {
        innerHTML += GenerateItemHtml(BagItem)
    });
    bagContainerElement.innerHTML = innerHTML
}

function GenerateItemHtml(item){
    return `
             <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_price}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart">X</div>
           </div>
    `;
}
let removeBtn = document.querySelector(".remove-from-cart")
removeBtn.addEventListener("click" , ()=>{
    
})