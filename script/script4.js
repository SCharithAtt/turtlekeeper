const infant = 0;
let dateString;
let firstHourString;
let lastHourString;
let localAdults = 0;
let localChilds;
let foreignAdults;
let foreignChilds;
let infants;
let localAdultPayable;
let localChildPayable;
let foreignAdultPayable;
let foreignChildPayable;
let totalPayable;
let normalHours;
let peakHours;
let totalHours;
let nameFull;
let mobilePhone;
let gender;
let email;

window.addEventListener('load', function() {
  dateString = localStorage.getItem("dateString");
  firstHourString = localStorage.getItem("firstHourString");
  lastHourString = localStorage.getItem("lastHourString");
  localAdults = parseInt(localStorage.getItem("localAdults"));
  localChilds = parseInt(localStorage.getItem("localChilds"));
  foreignAdults = parseInt(localStorage.getItem("foreignAdults"));
  foreignChilds = parseInt(localStorage.getItem("foreignChilds"));
  infants = parseInt(localStorage.getItem("infants"));
  localAdultPayable = parseInt(localStorage.getItem("localAdultPayable"));
  localChildPayable = parseInt(localStorage.getItem("localChildPayable"));
  foreignAdultPayable = parseInt(localStorage.getItem("foreignAdultPayable"));
  foreignChildPayable = parseInt(localStorage.getItem("foreignChildPayable"));
  totalPayable = parseInt(localStorage.getItem("totalPayable"));
  normalHours = parseInt(localStorage.getItem("normalHours"));
  peakHours = parseInt(localStorage.getItem("peakHours"));
  totalHours = parseInt(localStorage.getItem("totalHours"));
  nameFull = localStorage.getItem("nameFull");
  mobilePhone = localStorage.getItem("mobilePhone");
  gender = localStorage.getItem("gender");
  email = localStorage.getItem("email");

  document.getElementById("summaryTotalHours").innerHTML = totalHours;
  document.getElementById("summaryNormalHours").innerHTML = normalHours;
  document.getElementById("summaryPeakHours").innerHTML = peakHours;
  document.getElementById("localAdultSummary").innerHTML = localAdultPayable + "$";
  document.getElementById("localChildSummary").innerHTML = localChildPayable + "$";
  document.getElementById("foreignAdultSummary").innerHTML = foreignAdultPayable + "$";
  document.getElementById("foreignChildSummary").innerHTML = foreignChildPayable + "$";
  document.getElementById("totalPayableSummary").innerHTML = totalPayable + "$";
  document.getElementById("summaryTableDate").innerHTML = dateString;
  document.getElementById("infantSummary").innerHTML = infant + "$";
  document.getElementById("localAdultNumberSummary").innerHTML = "Local Adults: " + localAdults;
  document.getElementById("localChildNumberSummary").innerHTML = "Local Child: " + localChilds;
  document.getElementById("foreignAdultNumberSummary").innerHTML = "Foreign Adults: " + foreignAdults;
  document.getElementById("foreignChildNumberSummary").innerHTML = "Foreign Child: " + foreignChilds;
  document.getElementById("infantNumberSummary").innerHTML = "Infants: " + infants;
  document.getElementById("summaryTableStartTime").innerHTML = firstHourString;
  document.getElementById("summaryTableEndTime").innerHTML = lastHourString;
  document.getElementById("summaryTableName").innerHTML = nameFull;
  document.getElementById("mobileSummary").innerHTML = mobilePhone;
  document.getElementById("emailSummary").innerHTML = email;
  document.getElementById("genderSummary").innerHTML = gender;

});

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const currentDate = getCurrentDate();
document.getElementById("dateNow").innerHTML = currentDate;


document.getElementById("printButton").addEventListener("click", function() {
  window.print();
});