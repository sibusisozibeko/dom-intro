function Texbill(){
var call=0;
var sms=0;
var total=0;
function textBillTotal(billTypeEntered){

    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){

        smsTotal += 0.75;
    }
  }


function calls(){
call.toFixed(2)
}

function smses() {
 sms.toFixed(2);
}

function totals() {
  total = call + sms;


}

  return {
  tex : textBillTotal,
  col : calls,
  mms : smses,
  bill : totals
  }
}
