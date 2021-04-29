console.log("Background running");
chrome.browserAction.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
	let msg = {
		txt : "Hello"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}
// function injectedFunction() {
//     document.body.style.backgroundColor = 'orange';
//   }
  
//   chrome.runtime.onMessage.addListener((message, callback) => {
//     if (message == "changeColor"){
//       chrome.scripting.executeScript({
//         function: injectedFunction,
//         arguments: ['orange']
//       });
//     }
// });