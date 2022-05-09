

var currentUrl=window.location.href
var qsObj;



 var s = document.createElement('script');
 s.src = chrome.runtime.getURL('injected.js');

 s.onload = function() {
     this.remove();
 };
 
 (document.head || document.documentElement).appendChild(s);


 window.addEventListener("getChromeData", async function(data) {
    // do Chrome things;
    // console.log("Inject js 1",data.detail)
    qsObj=data.detail
    // console.log("QsObj",qsObj)
 
  }, false);



var testObj={
  "Url":currentUrl,
}

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // console.log("Inject js 2",request)
      if( request.message === "isItQuizzPage" ) {
        sendResponse({currentUrl: testObj,questionObj:qsObj});
      }
     
    }
  );
 






















































  
// Console message for fun : 

console.log('%c ☭☭ Q U E  VIVA EL COMMUNISMO ☭☭!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');


console.warn('☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭');

console.log('Adelante Comandante Chavez :');

console.log('https://www.youtube.com/watch?v=-VQ2tVNN0lo')

console.warn(' ☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭☭');

