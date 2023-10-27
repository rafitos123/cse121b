export default function getYear(year){
  let lastModified = document.querySelector('#lastModified');
  lastModified.textContent = document.lastModified;
  year.textContent = `${new Date().getFullYear()}`;
  }
  
  
  document.querySelector("#newButton").onclick = function () {
     
      const scheduleArray = []
  
      let mySchedule = {}
      
  
  
  
      const nameOfSchedule = document.getElementById("schedule").value;
      const timeOfSchedule = document.getElementById("appt").value;
  
      if(nameOfSchedule === ''){
      alert("Please, add name info.")
      } else if (timeOfSchedule === '') {
      alert("Please, add time info!")
      } else {
          mySchedule.name = nameOfSchedule;
          mySchedule.time = timeOfSchedule;
          scheduleArray.push(mySchedule)
          console.log(scheduleArray);
  
      }
  
      scheduleArray.forEach((element) => {
          const time = document.querySelector("#time");
          time.innerHTML = `${element.name} - ${element.time} `;
  
  
         
          })
  
  };
  
  
  
  
  
  
            
  
      
  