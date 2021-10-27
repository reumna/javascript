const countDown = document.querySelector("#countdown")


 const aSec = 1000;
 const aMin = aSec * 60;
 const aHour= aMin *60;
 const aDay= aHour*24; 


function countDownForXmas() {
    const christmas = new Date(2021, 11, 25); 
    const nowDate = new Date();
    const remain = christmas-nowDate; 
    const remainDay = String(Math.floor(remain/aDay)).padStart(2,"0");
    const remainHour = String(Math.floor((remain%aDay)/aHour)).padStart(2,"0");
    const remainMin = String(Math.floor((remain%aHour)/aMin)).padStart(2,"0");
    const remainsec = String(Math.floor((remain%aMin)/aSec)).padStart(2,"0");

    
    countDown.innerText = `${remainDay}d ${remainHour}h ${remainMin}m ${remainsec}s`

}

countDownForXmas()
setInterval(countDownForXmas, 1000);