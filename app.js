

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const startBtn = document.querySelector(".startBtn");
const container = document.querySelector(".container");
const shower = document.querySelector(".shower");
const ma = document.querySelector(".ma");
const dhar = document.querySelector(".dhar");
const chod = document.querySelector(".chod");
const cancelBtn = document.querySelector(".cancelBtn");
const freezBtn = document.querySelector(".freezBtn");


function message(){
  setTimeout(()=>{
   container.style.display = "block";
   shower.style.display = "none";
   hours.value = "00";
   minutes.value = "00";
   seconds.value = "00";
   }, 1000);
   
}

const objects = {};

const timer = () => {
  
   let hoursVal = parseInt(hours.value);
   let minVal = parseInt(minutes.value);
   let secVal = parseInt(seconds.value);
   
     
     chod.textContent = seconds.value;
     dhar.textContent = minutes.value;
     ma.textContent = hours.value;
   
    let timeMin = minVal * 60;
    let timeHr = hoursVal * 3600;
    
    if((hoursVal == 0) && (minVal == 0) && (secVal == 0)){
      alert("Can't go beyond the time!");
    }
    
    if((hoursVal != 0) || (minVal != 0) || (secVal != 0)){
       container.style.display = "none";
       shower.style.display = "block";
    }
    
    
    if((secVal != 0) && (minVal == 0) && (hoursVal != 0)){
    timeMin = secVal;
    e = setInterval(()=>{
      objects.stoped = e;
      if(secVal == 0){
        secVal = 60;
      }
      
      if((secVal == 0) && (minVal == 0)){
        minVal = 60*60;
      }
      
      timeMin--;
      secVal--;
      sec = secVal % 60 ;
      min = Math.floor(timeMin / 60);
      sec = sec < 10 ? "0"+sec : sec;
      min = min < 10 ? "0"+ min : min;
      chod.textContent = sec; 
      dhar.textContent = min;
      
      if(timeMin == 3599){
          hoursVal = hoursVal-1;
          hoursVal = hoursVal < 10 ? "0"+hoursVal : hoursVal;
          ma.textContent = hoursVal;
        }
        
      if((timeMin == 0) && (secVal == -1) && (hoursVal == 0)){
         clearInterval(e);
         message();
      }
      
      if((timeMin == 0) && (secVal == 0)){
         timeMin = 60*60;
      }
     
      },1000)
    }
    
    
   
    
    if((secVal == 0) && (minVal == 0) && (hoursVal > 0)){
    h = setInterval(()=>{
       objects.stoped = h;
         
         if(timeMin == 0){
           timeMin = 60*60;
         }
         
         timeMin--;
         timeHr--;
        sec = timeMin % 60; 
        min = Math.floor(timeMin / 60);
        hr = Math.floor(timeHr/3600);
        sec = sec < 10 ? "0"+sec : sec;
        min = min < 10 ? "0"+min : min;
        hr = hr < 10 ? "0"+hr : hr;
        ma.textContent = hr;
        dhar.textContent = min;
        chod.textContent = sec;
        
        if((timeMin == 0) && (timeHr == 0)){
          clearInterval(h);
          message();
        }
        
        
      },1000);
    }
   
   
   
   if((secVal == 0) && (minVal != 0)){
     b = setInterval(()=>{
        objects.stoped = b;
       if(timeMin == 0){
          timeMin = 60*60;
          hoursVal = hoursVal-1;
          console.log(hoursVal)
          hoursVal = hoursVal < 10 ? "0"+hoursVal : hoursVal;
          ma.textContent = hoursVal;
        }
        
         timeMin--;
   
        sec = timeMin % 60; 
        min = Math.floor(timeMin / 60);  
        sec = sec < 10 ? "0"+sec :sec;
        min = min < 10 ? "0"+min : min;
        dhar.textContent = min;
        chod.textContent = sec;
        
        if((timeMin == 0) && (hoursVal == 0)){
            clearInterval(b);
            message();
          }
          
      },1000);
   }
   
   
   if((secVal != 0) && (minVal != 0) && (hoursVal != 0)){
     c = setInterval(()=>{
        objects.stoped = c;
       if((minVal == 0) && (secVal == 0)){
         minVal = 60;
       }
       
       
       if(secVal == 0){
         secVal = 60;
         minVal = minVal-1;
         minVal = minVal < 10 ? "0"+ minVal : minVal;
         dhar.textContent = minVal;
       }
       
       
        secVal--;
       
         if((hoursVal > 0) && (minVal == 59) && (secVal == 59)){
          hoursVal = hoursVal-1; 
          console.log(hoursVal)
          hoursVal = hoursVal < 10 ? "0"+hoursVal : hoursVal;
          ma.textContent = hoursVal;
        }
        
      
      sec = secVal % 60 ;
      sec = sec < 10 ? "0"+sec : sec;
      chod.textContent = sec; 
      
      
       if((minVal == 0) && (hoursVal == 0) && (secVal == 0)){
         clearInterval(c);
         message();
       }
       
      }, 1000);
   }
   
   
   
   
   
   
   if((secVal != 0) && (hoursVal == 0)){
    d = setInterval(()=>{
      objects.stoped = d;
      secVal--; 
      sec = secVal;
      sec = sec < 10 ? "0"+sec : sec;
      chod.textContent = sec; 
      if((secVal == 0) && (minVal == 0) && (hoursVal == 0)){
        clearInterval(d);
        message();
     }
     
     
     
     
     
     if((secVal == 0) && (timeMin != 0)){
       clearInterval(d);
       secVal = 59;
       f = setInterval(()=>{
          objects.stoped = f;
         if((hoursVal > 0) && (timeMin == 0)){
          timeMin = 60*60;
        }
        
         
        
        timeMin--;  
        sec = timeMin % 60; 
        min = Math.floor(timeMin / 60);  
        
        sec = sec < 10 ? "0"+sec :sec;
        min = min < 10 ? "0"+min : min;
        dhar.textContent = min;
        chod.textContent = sec;
      
       if((timeMin == 0) && (hoursVal == 0)){
         clearInterval(f);
         message();
       }
       
      }, 1000);
    }
  
   },1000);
  }
}


const cancelled = () => {
   container.style.display = "block";
   shower.style.display = "none";
   hours.value = "00";
   minutes.value = "00";
   seconds.value = "00";

  clearInterval(objects.stoped);
}


const freez = () => {
  if(freezBtn.classList.contains("pauseBtn")){
    clearInterval(objects.stoped);
    freezBtn.textContent = "Resume";
    freezBtn.classList.remove('pauseBtn');
    
  }else{
    hours.value = ma.textContent;
    minutes.value = dhar.textContent;
    seconds.value = chod.textContent;
    timer();
    freezBtn.classList.add('pauseBtn');
    freezBtn.textContent = "Pause";
  }
}





freezBtn.addEventListener('click',freez);
cancelBtn.addEventListener('click', cancelled);
startBtn.addEventListener('click', timer);