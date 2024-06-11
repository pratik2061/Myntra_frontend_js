
let BagItemObject ;
onload()
function onload(){
    LoadBagItemsObject();
    displayBagItems();
    displayBagSummary();
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

            <div class="remove-from-cart" onclick="removefrombag(${item.id})">X</div>
           </div>
    `;
}
// let removeBtn = document.querySelector(".remove-from-cart")
// removeBtn.addEventListener("click" , ()=>{
    
// })

function removefrombag(ItemId){
BagItems = BagItems.filter(BagItemId =>BagItemId != ItemId )  
 localStorage.setItem('BagItems' , JSON.stringify(BagItems))
 LoadBagItemsObject();
 displayBagItems();
 DisplayBagIcon();
 displayBagSummary()
}
 function displayBagSummary(){
  let BagSummaryElement = document.querySelector(".bag-summary")
  let totalItems = BagItemObject.length
  let totalMrp = 0
  let totalDiscount = 0
  let finalPayment = 0 
  const Convenience_fee = 99

  BagItemObject.forEach(bagItem => {
    totalMrp += bagItem.original_price
    totalDiscount += bagItem.original_price - bagItem.current_price;    
  });
  finalPayment = totalMrp - totalDiscount + Convenience_fee
  BagSummaryElement.innerHTML = `
            <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems} items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">Rs ${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
   
   `
}