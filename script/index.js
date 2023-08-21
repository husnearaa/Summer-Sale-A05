let totalPrice = 0;
function handleDivClick(target){
  
   const selectedItemsContainer = document.getElementById("selected-items")
   const itemName = target.parentNode.childNodes[5].innerText;
   const li = document.createElement('li');
   li.innerText = itemName;
   selectedItemsContainer.appendChild(li);

   const price = target.parentNode.childNodes[6].innerText.split(" ")[0];
   totalPrice = parseInt(totalPrice) + parseInt(price);
   document.getElementById("total-price").innerText= totalPrice;


   if(totalPrice >= 200){
      let applyBtn = document.getElementById('apply-btn');

      applyBtn.disabled = false;
      applyBtn.style.backgroundColor = '#E527B2';
   }


   if(totalPrice > 0){  
      let purchaseBtn = document.getElementById('purchase-btn');

      purchaseBtn.disabled = false;
      purchaseBtn.style.backgroundColor = '#E527B2';
   }

}


function discountBtnClick(){
    const couponField = document.getElementById('input-cp');
    const couponInput = couponField.value; 
    const getCouponCode = couponInput;
   

    const discount = (totalPrice/100)*20;
     remainTotal = discount;
     finalTotal = totalPrice - discount; 
    document.getElementById("display-discount").innerText = remainTotal.toFixed(2);
    

    total = finalTotal;
    document.getElementById("total").innerText= finalTotal;
  


   }

 
   