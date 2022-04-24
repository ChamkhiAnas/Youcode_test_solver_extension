

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
    console.log("Inject js 1",data.detail)
    qsObj=data.detail
    console.log("QsObj",qsObj)
 
  }, false);



var testObj={
  "Url":currentUrl,
}

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log("Inject js 2")
      if( request.message === "isItQuizzPage" ) {
        sendResponse({currentUrl: testObj,questionObj:qsObj});
      }
    }
  );
 