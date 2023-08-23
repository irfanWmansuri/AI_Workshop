let countDownDate = new Date("dec 31, 2023 23:59:59").getTime()
// console.log(countDownDate)

let counter = setInterval(function(){
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;
   let days = Math.floor( dateDiff/ (1000 *60 *60 *24))
   let hours = Math.floor(( dateDiff% (1000 *60 *60 *24)) /(1000 *60* 60))
   let minutes = Math.floor(( dateDiff% (1000 *60 *60)) /(1000 * 60))
   let seconds = Math.floor(( dateDiff% (1000 *60 )) /(1000))
    
//    document.querySelector("").innerHTML = days< 10 ?`0${days}` :days ;
   document.querySelector(".counthour").innerHTML = hours< 10 ?`0${hours}` :hours ;
   document.querySelector(".countminute").innerHTML = minutes< 10 ? `0${minutes}` :minutes ;
   document.querySelector(".countsecond").innerHTML = seconds< 10 ?`0${seconds}` :seconds ;

   if(dateDiff < 0){
    clearInterval(counter)
   }
},1000)


 const accordionItems = document.querySelectorAll('.contentBx');

accordionItems.forEach(item => {
  const title = item.querySelector('.listcntnt');
  const content = item.querySelector('.contenthide');

  title.addEventListener('click', () => {
    for (i = 0; i < accordionItems.length; i++) {
      if(accordionItems[i] != item){
        accordionItems[i].classList.remove('active');
      }else{
        // toggle the accordion item
        item.classList.toggle('active');
      }
    }

  });
});
        
   