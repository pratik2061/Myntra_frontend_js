let BagItems;


onload();

 function onload(){
   let BagItemsString = localStorage.getItem('BagItems');
   BagItems = BagItemsString ? JSON.parse(BagItemsString) : [] ;
  display_items_on_Home_page();
  DisplayBagIcon();
 }

function display_items_on_Home_page(){
  let items_container = document.querySelector(".items_container")
  if(!items_container){
    return;
  }
  let innerHTML = "" 
  items.forEach(item => {
    innerHTML += `
                <div class="item_container">
                  <img src="${item.image}" alt="item image" class="item_image  ">
                  <div class="rating">${item.rating.stars}⭐| ${item.rating.count}</div>
                  <div class="company_name">
                    ${item.company}
                  </div>
                  <div class="item_name">
                    ${item.item_name}
                  </div>
                  <div class="price">
                      <span class="current_price">Rs ${item.current_price}</span><span class="original_price">Rs ${item.original_price}</span><span class="discount">(${item.discount_percentage}% off)</span>
                  </div>
                  <button class="AddBtn" onclick = "AddToBag(${item.id})">Add To Button</button>
              </div>`
   })
  items_container.innerHTML = innerHTML;
}


function AddToBag(itemId){
  BagItems.push(itemId)
  localStorage.setItem('BagItems' , JSON.stringify(BagItems))
  DisplayBagIcon();
  
}
function DisplayBagIcon(){
  let BagItemCountElement = document.querySelector(".BagItemCount")
    if(BagItems.length > 0){
      BagItemCountElement.innerText = BagItems.length
      BagItemCountElement.style.visibility = "visible"
    }  
    else{
          BagItemCountElement.style.visibility = 'hidden'
    } 
}