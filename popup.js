
import Answers from "/Answers.json" assert { type: "json" };


document.getElementById("btn").addEventListener("click", animateTheLoading);
let loadingRect=document.getElementsByClassName("loading-rect")

var parentofLoading=document.getElementsByClassName("loading")

var para=document.getElementById('para-annonce')

var currentUrl;
var question;
let indexOfTiming=0
var responseStatus=true;
const delay = ms => new Promise(res => setTimeout(res, ms));


 async function animateTheLoading(){
    indexOfTiming=0
    while (responseStatus) {
        if(indexOfTiming==5){
            for (let index = 0; index < loadingRect.length; index++) {
                loadingRect[index].style.opacity="1"
                await delay(300);
                communicateWithInject()

            }
        }
        await delay(300);
        loadingSkeleton()
    }
}



function loadingSkeleton(){
    if(responseStatus){
        loadingRect[indexOfTiming].style.opacity = "0";
         if(indexOfTiming!=5){
            indexOfTiming=indexOfTiming+1
        }
    }
}


// Function to communication with inject.js
function communicateWithInject(){
    //Testing to see if the user is in the youcode quizz page
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "isItQuizzPage"},function(response) {
    currentUrl=response.currentUrl.Url   
    question=response.questionObj
    validateUrl()
    // console.log("Response",response)
    })    
    })    
}

function validateUrl(){
    // console.log("currentUrl",currentUrl)
    if(currentUrl=="https://youcode.ma/quiz"){
    // console.log("Valid")
    let question_id=JSON.parse(question)
    let q_Id=parseInt(question_id.question.id)
    // console.log("question_id",q_Id)

    if (q_Id<=280 && q_Id>0 ){
        getAnswer(q_Id)
    }
    else {
        answerNotfound();
    }

    if(!question_id.question){
        answerNotfound();
    }
    }
    else {
    // console.log("Unvalid",parentofLoading)
    removeAnimation()
    responseStatus=false;
    }
}

function removeAnimation(){
    while(loadingRect.length > 0){
    loadingRect[0].parentNode.removeChild(loadingRect[0]);
    }
    para.innerHTML = "&#129488 This is not the Quizz page  &#129488";
}

function answerNotfound(){

    while(loadingRect.length > 0){
    loadingRect[0].parentNode.removeChild(loadingRect[0]);
    }
    para.innerHTML = "&#128546 Answer not found , try again .";

}


async function getAnswer(id){
    while(loadingRect.length > 0){
    loadingRect[0].parentNode.removeChild(loadingRect[0]);
    }

    let Answ= Answers.filter(answer => (answer.id==id));
    if(Answ!=""){
    para.innerHTML = " Answer :"+JSON.stringify(Answ[0].answer)
    // console.log("Answer found")
    }
    else if(Answ=="") {
    para.innerHTML = "&#128546 Answer not found &#128546"
    // console.log("Answer not found")
    }

}


