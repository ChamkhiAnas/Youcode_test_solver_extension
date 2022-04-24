// Coomuncation with ports from devtools to the background 
// PS the devtools must be opened in order to send message 
// var port = chrome.runtime.connect({name: "knockknock"});
// port.postMessage({joke: "Knock knock"});
// port.onMessage.addListener(function(msg) {
//     console.log("message",msg)
//   if (msg.question === "Who's there?")
//     port.postMessage({answer: "Madame"});
//   else if (msg.question === "Madame who?")
//     port.postMessage({answer: "Madame... Bovary"});
// });