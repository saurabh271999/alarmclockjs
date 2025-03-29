function gettime() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var second = date.getSeconds();
  
    let hourbox = document.querySelector(".span-hour");
    let minbox = document.querySelector(".span-min");
    let secondbox = document.querySelector(".span-second");
  
  
    let displayHours = hours > 12 ? hours - 12 : hours;
    displayHours = displayHours < 10 ? "0" + displayHours : displayHours;
  
    hourbox.innerHTML = displayHours;
    minbox.innerHTML = min < 10 ? "0" + min : min;
    secondbox.innerHTML = second < 10 ? "0" + second : second;
  }
  
  setInterval(gettime, 1000);
  
  function displayvalue() {
    var wakeup = document.getElementById("wakeup");
    var lunch = document.getElementById("lunch");
    var nap = document.getElementById("nap");
    var night = document.getElementById("night");
  
   
    var time1 = wakeup.options[wakeup.selectedIndex].text;
    var time2 = lunch.options[lunch.selectedIndex].text;
    var time3 = nap.options[nap.selectedIndex].text;
    var time4 = night.options[night.selectedIndex].text;
  

    var value1 = document.querySelector(".value1");
    var value2 = document.querySelector(".value2");
    var value3 = document.querySelector(".value3");
    var value4 = document.querySelector(".value4");
  
    value1.innerHTML = 'wakeup Time:' + time1;
    value2.innerHTML = 'lunch Time :' + time2;
    value3.innerHTML = 'nap Time:' + time3;
    value4.innerHTML = 'night Time' + time4;
   


    var date = new Date();
    var hours = date.getHours();


    var wakeupvalue = wakeup.value
    var lunchvalue = lunch.value 
    var napvalue = nap.value
    var nightvalue = night.value
    var pic = document.querySelector('.pic-div')
    if(wakeupvalue == hours){
        pic.style.backgroundImage = "url(./morning.jpg)"
        // pic.style.backgroundSize = 'cover'
        // pic.style.backgroundRepeat = "no-repeat";
        document.querySelector('.msg-div').innerHTML = 'Good morning'
    }
    else if(lunchvalue == hours){
       pic.style.backgroundImage = 'url(./images.jpg)'
        document.querySelector('.msg-div').innerHTML = 'Have a Lunch'
    }
    else if(napvalue == hours){
        pic.style.backgroundImage = 'url(./night.jpg)'
         document.querySelector('.msg-div').innerHTML = 'Have a Nap'
    }
    else if(nightvalue == hours){
        pic.style.backgroundImage = 'url(./night.jpg)'
         document.querySelector('.msg-div').innerHTML = 'Good Night'
    }
    else if(
        wakeupvalue === lunchvalue ||
        wakeupvalue === napvalue ||
        wakeupvalue === nightvalue ||
        lunchvalue === napvalue ||
        lunchvalue === nightvalue ||
        napvalue === nightvalue
    ){
        document.querySelector('.msg-div').innerHTML = 'please select different values'
        return ;
    }
  }
  

const btn = document.querySelector('.btn')  

btn.addEventListener('click', () =>{
    displayvalue()
})