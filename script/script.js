//efef
function getCurrentDate() {
  const today1 = new Date();
  const year1 = today1.getFullYear();
  const month1 = String(today1.getMonth() + 1).padStart(2, '0');
  const day1 = String(today1.getDate()).padStart(2, '0');
  
  const currentDate = `${year1}-${month1}-${day1}`;
  return currentDate;
}

const currentYearMonthDate = getCurrentDate();

window.addEventListener('load', function() {
  
  this.document.getElementById("selectDate").setAttribute('min',currentYearMonthDate );
});



//js for the time selection
let checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}



//rates (updates the values here to change prices) #price #rates #charges #fee
const localAdultNormal = 4;
const localAdultPeak = 6;
const localChildNormal = 2;
const localChildPeak = 3;
const foreignAdultNormal=10;
const foreignAdultPeak=13;
const foreignChildNormal=5;
const foreignChildPeak=8;
const infant=0;

//Static Price Table
document.getElementById("localAdultNormalRate").innerHTML = localAdultNormal ;
document.getElementById("localAdultPeakRate").innerHTML = localAdultPeak ;
document.getElementById("localChildNormalRate").innerHTML= localChildNormal;
document.getElementById("localChildPeaklRate").innerHTML= localChildPeak;
document.getElementById("foreignAdultNormalRate").innerHTML= foreignAdultNormal ;
document.getElementById("foreignAdultPeakRate").innerHTML= foreignAdultPeak;
document.getElementById("foreignChildNormalRate").innerHTML= foreignChildNormal;
document.getElementById("foreignChildPeakRate").innerHTML= foreignChildPeak;
document.getElementById("infantNormalRate").innerHTML= infant || "Free";
document.getElementById("infantPeakRate").innerHTML= infant || "Free";

//Assigning default value of 0 to the gloabl variable for each group + Working variables
let localAdults=0;
let localChilds=0;
let foreignAdults=0;
let foreignChilds=0;
let infants=0;

let localAdultPayable= 0;
let localChildPayable= 0;
let foreignAdultPayable= 0;
let foreignChildPayable= 0;
let totalPayable= 0;

let dateString ="Please select a date";



//Making the variable values get stored inside the html element 
document.getElementById("localAdultNumber").innerHTML= localAdults;
document.getElementById("localChildNumber").innerHTML= localChilds;
document.getElementById("foreignAdultNumber").innerHTML= foreignAdults;
document.getElementById("foreignChildNumber").innerHTML= foreignChilds;
document.getElementById("infantNumber").innerHTML= infants;




//Increment Decrement of Guest Number

document.getElementById('addLocalAdult').addEventListener('click', function() {
  localAdults++
  document.getElementById('localAdultNumber').innerHTML = localAdults; 
});
document.getElementById('removeLocalAdult').addEventListener('click', function() {
  if(document.getElementById("localAdultNumber").innerHTML!=='0'){localAdults--
  document.getElementById('localAdultNumber').innerHTML = localAdults; }
});

document.getElementById('addLocalChild').addEventListener('click', function() {
  localChilds++
  document.getElementById('localChildNumber').innerHTML = localChilds; 
});
document.getElementById('removeLocalChild').addEventListener('click', function() {
  if(document.getElementById("localChildNumber").innerHTML!=='0'){localChilds--
  document.getElementById('localChildNumber').innerHTML = localChilds; } 
});

document.getElementById('addForeignAdult').addEventListener('click', function() {
  foreignAdults++
  document.getElementById('foreignAdultNumber').innerHTML = foreignAdults; 
});
document.getElementById('removeForeignAdult').addEventListener('click', function() {
  if(document.getElementById("foreignAdultNumber").innerHTML!=='0'){foreignAdults--
    document.getElementById('foreignAdultNumber').innerHTML = foreignAdults; } 
});

document.getElementById('addForeignChild').addEventListener('click', function() {
  foreignChilds++
  document.getElementById('foreignChildNumber').innerHTML = foreignChilds; 
});
document.getElementById('removeForeignChild').addEventListener('click', function() {
  if(document.getElementById("foreignChildNumber").innerHTML!=='0'){foreignChilds--
    document.getElementById('foreignChildNumber').innerHTML = foreignChilds; }  
});

document.getElementById('addInfant').addEventListener('click', function() {
  infants++
  document.getElementById('infantNumber').innerHTML = infants; 
});
document.getElementById('removeInfant').addEventListener('click', function() {
  if(document.getElementById("infantNumber").innerHTML!=='0'){ 
    infants--
    document.getElementById('infantNumber').innerHTML = infants; } 
});



//try and find if we can set limitations, like min max etc for all these variables at once perhaps using objects???/




//Variables for each number that ought to be stored in localStorage

document.getElementById('selectDate').addEventListener('input', function() {
  dateString= selectDate.value;
 })

//Check out the object and function part again and attempt

/*document.getElementById("localAdultNumber").value.onchange= function(){
  console.log(document.getElementById("localAdultNumber").value);
}*/

//select time





//dropdown for time, list

        let times = ["08.00am-09.00am", "09.00am-10.00am", "10.00am-11.00am (Peak)", "11.00am-12.00pm (Peak)","12.00pm-01.00pm (Peak)","01.00pm-02.00pm","02.00pm-03.00pm","03.00pm-04.00pm (Peak)","04.00pm-05.00pm (Peak)", "05.00pm-06.00pm (Peak)"];
        let list = document.getElementById("timeSlotList");
        for (let i = 0; i < times.length; ++i) {
            let li = document.createElement('li');
            
            
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            // Id for the checkbox
            checkbox.id = 'checkbox' + i;
            
            // add the check box to the list item
            li.appendChild(checkbox);
            
            // lables for the timeslots
            let label = document.createElement('label');
            label.setAttribute('for', 'checkbox' + i);
            
            // Set the label's text to the corresponding date string
            label.innerText = times[i];
            
            // Append the label to the list item
            li.appendChild(label);
            
            // Append the list item to the list
            list.appendChild(li);
        }
        

    
    

//function to store in local storage 
function storeData(){

  localStorage.setItem("dateString", dateString);
  localStorage.setItem("firstHourString", firstHourString);
  localStorage.setItem("lastHourString", lastHourString);
  localStorage.setItem("localAdults", localAdults);
  localStorage.setItem("localChilds", localChilds);
  localStorage.setItem("foreignAdults", foreignAdults);
  localStorage.setItem("foreignChilds", foreignChilds);
  localStorage.setItem("infants", infants);
  localStorage.setItem("localAdultPayable", localAdultPayable);
  localStorage.setItem("localChildPayable", localChildPayable);
  localStorage.setItem("foreignAdultPayable", foreignAdultPayable);
  localStorage.setItem("foreignChildPayable", foreignChildPayable);
  localStorage.setItem("totalPayable", totalPayable);
  localStorage.setItem("normalHours", normalHours);
  localStorage.setItem("peakHours", peakHours);
  localStorage.setItem("totalHours", totalHours);


}

















//variable to store checked time slots

let checkedItems = [];


let normalHourSlots=[];
let peakHourSlots=[];

let normalHours=0;
let peakHours=0;
let totalHours=0;

let firstHourString="Time";
let lastHourString="Time";

const hideRow =()=>{
  if (totalHours === 0) {
    document.getElementById("DurationRow").style.display = "none";
  }
  if (localAdults === 0) {
    document.getElementById("localAdultRow").style.display = "none";
  }
  if (localChilds === 0) {
    document.getElementById("localChildRow").style.display = "none";
  }
  if (foreignAdults === 0) {
    document.getElementById("foreignAdultRow").style.display = "none";
  }
  if (foreignChilds === 0) {
    document.getElementById("foreignChildRow").style.display = "none";
  }
  if (infants === 0) {
    document.getElementById("infantRow").style.display = "none";
  }
}



const dynamicChangeSummary = () => {

  
  if(localAdults){ document.getElementById("localAdultNumberSummary").innerHTML= `${localAdults} · SL Adult`;}
    else{document.getElementById("localAdultNumberSummary").innerHTML= "SL Adult" ;}
  if(localChilds){document.getElementById("localChildNumberSummary").innerHTML= `${localChilds} · SL Child`;}
    else{document.getElementById("localChildNumberSummary").innerHTML= "SL Child";}
  if(foreignAdults){document.getElementById("foreignAdultNumberSummary").innerHTML= `${foreignAdults} · Foreigner Adult`;}
    else{document.getElementById("foreignAdultNumberSummary").innerHTML= "Foreigner Adult";}
  if(foreignChilds){document.getElementById("foreignChildNumberSummary").innerHTML= `${foreignChilds} · Foreigner Child`;}
    else{document.getElementById("foreignChildNumberSummary").innerHTML= "Child";}
  if(infants){document.getElementById("infantNumberSummary").innerHTML= `${infants} · Infant`;}
    else{document.getElementById("infantNumberSummary").innerHTML= "Infant";}

    function checkSelected() {
      checkedItems = [];
      times.forEach((time, index) => {
          let checkbox = document.getElementById('checkbox' + index);
          if (checkbox.checked) {
              checkedItems.push(time);
          }
      });
  }
  

  checkSelected();

  if(checkedItems.length>0){
    firstHourString= checkedItems[0].slice(0,7) ;
    lastHourString= checkedItems[checkedItems.length-1].slice(8,15);
  }
    
  
  document.getElementById("summaryTableStartTime").innerHTML=firstHourString;
  document.getElementById("summaryTableEndTime").innerHTML=lastHourString;

   if(firstHourString!=="Time" && lastHourString!=="Time"){
    document.getElementById("indicateTime").innerHTML=`${firstHourString} to ${lastHourString}` ;
  }else{
    document.getElementById("indicateTime").innerHTML="Select a Valid Time Period" ;
  }

  
  function allocateHours(){
    normalHourSlots=[];
      peakHourSlots=[];
    for(i=0;i<checkedItems.length;i++){
  
      
      if(/Peak/.test(checkedItems[i])){
  
        peakHourSlots.push(checkedItems[i]);
  
      }else{
        normalHourSlots.push(checkedItems[i]);
    
      } 
    }
  }
  allocateHours();

  normalHours=normalHourSlots.length;
  peakHours=peakHourSlots.length;
  totalHours=normalHours+peakHours;

  document.getElementById("summaryTotalHours").innerHTML=totalHours;
  document.getElementById("summaryNormalHours").innerHTML=normalHours;
  document.getElementById("summaryPeakHours").innerHTML=peakHours;

  localAdultPayable= normalHours*localAdultNormal*localAdults+peakHours*localAdultPeak*localAdults;
  localChildPayable=localChildNormal*normalHours*localChilds+localChildPeak*peakHours*localChilds;
  foreignAdultPayable=foreignAdultNormal*normalHours*foreignAdults+foreignAdultPeak*peakHours*foreignAdults;
  foreignChildPayable=foreignChildNormal*normalHours*foreignChilds+foreignChildPeak*peakHours*foreignChilds;
  totalPayable= localAdultPayable+ localChildPayable+ foreignAdultPayable+ foreignChildPayable;


  document.getElementById("localAdultSummary").innerHTML=localAdultPayable;
  document.getElementById("localChildSummary").innerHTML=localChildPayable;
  document.getElementById("foreignAdultSummary").innerHTML=foreignAdultPayable;
  document.getElementById("foreignChildSummary").innerHTML=foreignChildPayable;
  document.getElementById("totalPayableSummary").innerHTML=totalPayable;
  document.getElementById("summaryTableDate").innerHTML=dateString;
  document.getElementById("infantSummary").innerHTML=infants;


 
  
  if(totalPayable>0 && selectDate.value!=='' && totalHours>0){
    document.getElementById("ticketSubmitButton").disabled=false;
    document.getElementById("ticketSubmitButton").addEventListener("click", function() {
      localStorage.clear();
      storeData(); 
      window.location.href = "details.html"; 
    });
  }else{
    document.getElementById("ticketSubmitButton").disabled=true;
    
  }

  
}



//Making The summary table update when any value of the tickets page is changed
window.addEventListener('change', dynamicChangeSummary);
document.getElementById('addLocalAdult').addEventListener('click', dynamicChangeSummary);
document.getElementById('removeLocalAdult').addEventListener('click', dynamicChangeSummary);
document.getElementById('addLocalChild').addEventListener('click', dynamicChangeSummary);
document.getElementById('removeLocalChild').addEventListener('click', dynamicChangeSummary)
document.getElementById('addForeignAdult').addEventListener('click', dynamicChangeSummary);
document.getElementById('removeForeignAdult').addEventListener('click', dynamicChangeSummary);
document.getElementById('addForeignChild').addEventListener('click', dynamicChangeSummary);
document.getElementById('removeForeignChild').addEventListener('click', dynamicChangeSummary);
document.getElementById('addInfant').addEventListener('click', dynamicChangeSummary);
document.getElementById('removeInfant').addEventListener('click', dynamicChangeSummary);