// console.log("Content Script is Running");

let imgs = document.getElementsByTagName('img');

let url = chrome.extension.getURL("images/doge.png");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        for (imgElt of imgs) {
            let file = 'images/doge.png';
            let url = chrome.extension.getURL(file);
            imgElt.src = url;
        }
        if (request.greeting == "hello")
            sendResponse({farewell: function (){
                for (imgElt of imgs) {
                    let file = 'images/doge.png';
                    let url = chrome.extension.getURL(file);
                    imgElt.src = url;
                }
            }});
});



