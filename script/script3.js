const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 to get correct month (0-indexed)
const formattedDate = `${year}-${month}`;

const currentYearMonth = formattedDate;


let dateString = localStorage.getItem("dateString");
  let firstHourString = localStorage.getItem("firstHourString");
  let lastHourString = localStorage.getItem("lastHourString");
  let localAdults = parseInt(localStorage.getItem("localAdults"));
  let localChilds = parseInt(localStorage.getItem("localChilds"));
  let foreignAdults = parseInt(localStorage.getItem("foreignAdults"));
  let foreignChilds = parseInt(localStorage.getItem("foreignChilds"));
  let infants = parseInt(localStorage.getItem("infants"));
  let localAdultPayable = parseInt(localStorage.getItem("localAdultPayable"));
  let localChildPayable = parseInt(localStorage.getItem("localChildPayable"));
  let foreignAdultPayable = parseInt(localStorage.getItem("foreignAdultPayable"));
  let foreignChildPayable = parseInt(localStorage.getItem("foreignChildPayable"));
  let totalPayable = parseInt(localStorage.getItem("totalPayable"));
  let normalHours = parseInt(localStorage.getItem("normalHours"));
  let peakHours = parseInt(localStorage.getItem("peakHours"));
  let totalHours = parseInt(localStorage.getItem("totalHours"));


window.addEventListener('load', function () {
  document.getElementById("expiryInput").setAttribute('min', currentYearMonth);

});

let validCardNumber = false;
let validExpiry = false;
let validCVV = false;
let validNameOnCard = false;
let validCardInfo = false;

// Card number Validation
document.getElementById('cardNumber').onblur = function () {
  if (cardNumber.value !== ''&& cardNumber.value.length>=16) {
    validCardNumber = true;
  } else {
    validCardNumber = false;
  }
  checkCardInfo();
}

// Expiry date validation
document.getElementById('expiryInput').onblur = function () {
  if (expiryInput.value !== '') {
    validExpiry = true;
  } else {
    validExpiry = false;
  }
  checkCardInfo();
}

// CVV validation
document.getElementById('cvvInput').onblur = function () {
  if (cvvInput.value !== '' && !isNaN(cvvInput.value) && cvvInput.value.length>= 3 ) {
    validCVV = true;
  } else {
    validCVV = false;
  }
  checkCardInfo();
}

// Name on Card validation
document.getElementById('cardNameInput').onblur = function () {
  if (cardNameInput.value !== '') {
    validNameOnCard = true;
  } else {
    validNameOnCard = false;
  }
  checkCardInfo();
}

let checkCardInfo = () => {
  if (validCardNumber && validExpiry && validCVV && validNameOnCard) {
    validCardInfo = true;
    document.getElementById("paymentSubmitButton").removeAttribute('disabled');
    document.getElementById("notice").innerHTML = `Click "Continue With Purchase " to proceed. `;
  } else {
    validCardInfo = false;
    document.getElementById("paymentSubmitButton").setAttribute('disabled', '');

    let incorrectCardNumber='';
    let incorrectExpiry='';
    let incorrectCVV='';
    let incorrectCardName='';
      if(validCardNumber===false){
        incorrectCardNumber="∙ Card Number";
      }
      if(validExpiry===false){
        incorrectExpiry="∙ Expiry Date";
      }
      if(validCVV===false){
        incorrectCVV="∙ CVV/ CVC";
      }
      if(validNameOnCard===false){
        incorrectCardName="∙ Cardholder Name";
      }
    document.getElementById("notice").innerHTML = `Please Re-check the fields: ${incorrectCardNumber} ${incorrectExpiry} ${incorrectCVV} ${incorrectCardName} `;
    
  }
}
// Listen for changes on any input field
document.addEventListener('change', checkCardInfo);



document.getElementById("summaryTableDate").innerHTML = dateString;
    document.getElementById("summaryTableStartTime").innerHTML = firstHourString;
    document.getElementById("summaryTableEndTime").innerHTML = lastHourString;
    document.getElementById("summaryTotalHours").innerHTML = totalHours;
    document.getElementById("summaryNormalHours").innerHTML = "Normal Hours: " + normalHours;
    document.getElementById("summaryPeakHours").innerHTML = "Peak Hours: " + peakHours;
    document.getElementById("localAdultNumberSummary").innerHTML = "Local Adults: " + localAdults ;
    document.getElementById("localChildNumberSummary").innerHTML = "Local Child: " +localChilds;
    document.getElementById("foreignAdultNumberSummary").innerHTML = "Foreign Adults: " + foreignAdults;
    document.getElementById("foreignChildNumberSummary").innerHTML = "Foreign Child: " + foreignChilds;
    document.getElementById("infantNumberSummary").innerHTML = "Infants: " + infants;
    document.getElementById("totalPayableSummary").innerHTML = "Total Payable: " + totalPayable;
    document.getElementById("localAdultSummary").innerHTML = "Local Adult Payable: " + localAdultPayable;
    document.getElementById("localChildSummary").innerHTML = "Local Child Payable: " + localChildPayable;
    document.getElementById("foreignAdultSummary").innerHTML = "Foreign Adult Payable: " + foreignAdultPayable;
    document.getElementById("foreignChildSummary").innerHTML = "Foreign Child Payable: " + foreignChildPayable;


    document.getElementById("paymentSubmitButton").addEventListener("click", function() {
      window.location.href = "confirmation.html" ; 
    });