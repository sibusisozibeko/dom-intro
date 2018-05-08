//Dom part
  var calculatebutton = document.querySelector('.calculateBtn');
  //get a reference to the billTotal element
  var   billTotalElement  = document.querySelector('.billTotal');
  //get a reference to the billString
  var billStringField  = document.querySelector('.billString');
  //create the function that will be called when the calculate button is pressed
  // get the string entered in the textArea

//logic function
function billCalc(billItems){
    var billTotal = 0;
    //loop over all the bill items
      var billItems = billItems.split(",");
    for (var i=0;i<billItems.length;i++){
        if (billItems[i] === "call"){
            billTotal += 2.75;
        }
        else if (billItems[i] === "sms"){
            billTotal += 0.75;
        }
      }
    return billTotal;
  }


// Dom function
  function calculateBtnClicked() {
    var billString =billStringField.value;
    //split the string
          var roundedBillTotal = billCalc(billString);
          billTotalElement.innerHTML = roundedBillTotal;

          if (roundedBillTotal >= 20){
              // adding the danger class will make the text red
                billTotalElement.classList.add("warning");
          }
        if (roundedBillTotal >= 30){
                billTotalElement.classList.add("danger");
          }

        if (roundedBillTotal <= 20){
          // adding the danger class will make the text red
            billTotalElement.classList.remove("warning");
        }
       if (roundedBillTotal <= 30){
            billTotalElement.classList.remove("danger");
        }

  }



calculatebutton.addEventListener('click', calculateBtnClicked);
