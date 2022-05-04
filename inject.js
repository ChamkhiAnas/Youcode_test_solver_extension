

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
      console.log("Inject js 2",request)
      if( request.message === "isItQuizzPage" ) {
        sendResponse({currentUrl: testObj,questionObj:qsObj});
      }
     
    }
  );
 


//   function getInputsByValue(value){
//     console.log("Hahiya value wast inject",value)
//     var allInputs = document.getElementsByClassName("next");
//     console.log("AllInputs",allInputs)
//     var results = [];
//     console.log("AllInputs",allInputs)
//     console.log("value",value)
//     for(var x=0;x<allInputs.length;x++)
//         if(allInputs[x].value == value)
//             results.push(allInputs[x]);
//     console.log("Results",results)
//     return results;
// }
