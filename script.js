var taxAmount = document.getElementById("tax").innerText;
      taxAmount = 5;
      document.getElementById("tax").innerText = taxAmount;

      var addAmount = document.getElementById("addAmount");
      addAmount.addEventListener("click", function(){
      var amountNumber = document.getElementById("amountNumber").value;
      var amountNumberFloat = parseFloat(amountNumber);
      var totalAmount = amountNumberFloat + 1;
      document.getElementById("amountNumber").value = totalAmount;
      const fixedPhonePrice = 1219;
      var phonePrice = document.getElementById("phonePrice").innerText;
      var phonePriceNumber = parseFloat(phonePrice);
      var totalPrice = phonePriceNumber + fixedPhonePrice;
      document.getElementById("phonePrice").innerText = totalPrice;

      subTotalMore(1219)
      allTotalMore()
})

var removeAmount = document.getElementById("removeAmount");
removeAmount.addEventListener("click", function(){
   var amountNumber = document.getElementById("amountNumber").value;
   var amountNumberFloat = parseFloat(amountNumber);
   var removeAmount = amountNumberFloat - 1;
   const fixedPhonePrice = 1219;
   document.getElementById("amountNumber").value = removeAmount;
   var phonePrice = document.getElementById("phonePrice").innerText;
   var phonePriceNumber = parseFloat(phonePrice);
   var removeAmountLess = removeAmount + 1;
   var removePrice = phonePriceNumber - fixedPhonePrice;
   document.getElementById("phonePrice").innerText = removePrice;

   if(removePrice < 0){
      document.getElementById("amountNumber").value = 0;
      removePrice = 0;
      document.getElementById("phonePrice").innerText = 0;
      subTotalLess(0)
   }
   else{
      subTotalLess(1219)
   }
   allTotalLess()
})

   var remove = document.getElementById("removePhoneAll");
   remove.addEventListener("click", function(){
      var amountNumber = document.getElementById("amountNumber").value;
      var amountNumberFloat = parseFloat(amountNumber);
      document.getElementById("amountNumber").value = 1;
      var phonePrice = document.getElementById("phonePrice").innerText;
      var phonePriceNumber = parseFloat(phonePrice);
      document.getElementById("phonePrice").innerText = 1219;

      subTotalRemove()
      allTotalMore()
   })

   var casePriceIncrease = document.getElementById("casePriceIncrease");
   casePriceIncrease.addEventListener("click", function(){
      var caseAmount = document.getElementById("caseAmount").value;
      var caseAmountNumber = parseFloat(caseAmount);
      var caseAmountIncrease = caseAmountNumber + 1;
      document.getElementById("caseAmount").value = caseAmountIncrease;
      const fixedPriceCase = 59;
      var casePrice = document.getElementById("casePrice").innerText;
      var casePriceAmount = parseFloat(casePrice);
      var casePriceTotal = casePriceAmount + fixedPriceCase;
      document.getElementById("casePrice").innerText = casePriceTotal;

      subTotalMore(59)
      allTotalMore()
   })

   var casePriceDecrease = document.getElementById("casePriceDecrease");
   casePriceDecrease.addEventListener("click", function(){
      var caseAmount = document.getElementById("caseAmount").value;
      var caseAmountNumber = parseFloat(caseAmount);
      var caseAmountIncrease = caseAmountNumber - 1;
      document.getElementById("caseAmount").value = caseAmountIncrease;
      const fixedPriceCase = 59;
      var casePrice = document.getElementById("casePrice").innerText;
      var casePriceAmount = parseFloat(casePrice);
      var casePriceNumber = caseAmountIncrease + 1;
      var casePriceTotal = casePriceAmount - fixedPriceCase;
      document.getElementById("casePrice").innerText = casePriceTotal;

      if(caseAmount < 1){
      document.getElementById("caseAmount").value = 0;
      casePriceAmount = 0;
      document.getElementById("casePrice").innerText = casePriceAmount;
      subTotalLess(0)
      }
      else{
         subTotalLess(59)
      }
      allTotalLess()
   })

   var remove = document.getElementById("removeCaseAll");
   remove.addEventListener("click", function(){
      var amountNumber = document.getElementById("caseAmount").value;  
      var amountNumberFloat = parseFloat(amountNumber);
      document.getElementById("caseAmount").value = 1;
      var casePrice = document.getElementById("casePrice").innerText;
      var casePriceNumber = parseFloat(casePrice);
      document.getElementById("casePrice").innerText = 59;

      subTotalRemove()
      allTotalMore()
   })

   var subTotal = document.getElementById("subTotal").innerText;
   var subTotalNumber = parseFloat(subTotal);
   var tax = document.getElementById("tax").innerText;
   var taxNumber = parseFloat(tax);
   var totalSubTotal = subTotalNumber + taxNumber;
   document.getElementById("allTotal").innerText = totalSubTotal;
   
   subTotalRemove()
   allTotalMore()

   var checkOut = document.getElementById("checkOut");
   checkOut.addEventListener("click", function(){
      var count = document.getElementById("count");
      count.style.display = "none";
      var result = document.getElementById("result");
      result.style.display = "block";
      var phoneName = document.getElementById("phoneName").innerText;
      document.getElementById("phoneNameNext").innerText = phoneName;
      var amountNumber = document.getElementById("amountNumber").value;
      document.getElementById("phoneAmount").innerText = amountNumber;
      var caseAmount = document.getElementById("caseAmount").value;
      document.getElementById("caseAmountNext").innerText = caseAmount;
      var casName = document.getElementById("casName").innerText;
      document.getElementById("caseNameNext").innerText = phoneName;
   })

   function subTotalMore(fixedPrice){
      var subTotal = document.getElementById("subTotal").innerText;
      var subTotalNumber = parseFloat(subTotal);
      var TotalSubTotal = subTotalNumber + fixedPrice;
      document.getElementById("subTotal").innerText = TotalSubTotal;
   }

   function subTotalLess(fixedPrice){
      var subTotal = document.getElementById("subTotal").innerText;
      var subTotalNumber = parseFloat(subTotal);
      var TotalSubTotal = subTotalNumber - fixedPrice;
      document.getElementById("subTotal").innerText = TotalSubTotal;
      var phonePrice = document.getElementById("phonePrice").innerText;
      var phonePriceNumber = parseFloat(phonePrice);
   }

   function subTotalRemove(){
      var phonePrice = document.getElementById("phonePrice").innerText;
      var phonePriceNumber = parseFloat(phonePrice);
      var casePrice = document.getElementById("casePrice").innerText;
      var casePriceAmount = parseFloat(casePrice);
      subTotal = phonePriceNumber + casePriceAmount;
      document.getElementById("subTotal").innerText = subTotal;
   }

   function allTotalMore(){
      var subTotal = document.getElementById("subTotal").innerText;
      var subTotalNumber = parseFloat(subTotal);
      var tax = document.getElementById("tax").innerText;
      var taxNumber = parseFloat(tax);
      var allTotal = document.getElementById("allTotal").innerText;
      var allTotalNumber = parseFloat(allTotal);
      if(subTotalNumber > 0){
         var tax = document.getElementById("tax").innerText;
         var taxNumber = parseFloat(tax);
         var taxAmount = document.getElementById("tax").innerText;
         taxAmount = 5;
         document.getElementById("tax").innerText = taxAmount;
      }
      allTotalNumber = subTotalNumber + taxAmount;
      document.getElementById("allTotal").innerText = allTotalNumber;
   }

   function allTotalLess(){
      var phonePrice = document.getElementById("phonePrice").innerText;
      var phonePriceNumber = parseFloat(phonePrice);
      var subTotal = document.getElementById("subTotal").innerText;
      var subTotalNumber = parseFloat(subTotal);
      var tax = document.getElementById("tax").innerText;
      var taxNumber = parseFloat(tax);
      var allTotal = document.getElementById("allTotal").innerText;
      var allTotalNumber = parseFloat(allTotal);
      allTotalNumber = subTotalNumber + taxNumber;
      document.getElementById("allTotal").innerText = allTotalNumber;

      if(subTotalNumber == 0){
      taxNumber = 0;
      document.getElementById("tax").innerText = taxNumber;
      allTotalNumber = subTotalNumber + taxNumber;
      document.getElementById("allTotal").innerText = allTotalNumber;
      console.log(allTotalNumber);
      }
   }