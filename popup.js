document.addEventListener('DOMContentLoaded', function() {

  //click button go to snake game
  let snek = document.getElementById('snake');
  snek.addEventListener('click', function(){
    chrome.tabs.create({url:"https://www.google.com/search?q=snake+game&oq=snake+game&aqs=chrome..69i57j0i433j0i131i433j0i433j0j69i60j69i61j69i60.2365j0j7&sourceid=chrome&ie=UTF-8"});
  }, false)

  //click button change images
  let click = document.getElementById('click');

  click.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
          response.farewell()
      });
  });
  };
  
  //click button change background color
  let randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  let changeColor = document.getElementById('changeColor');
  chrome.storage.sync.get('color', function() {
    changeColor.style.backgroundColor = randomColor;
    changeColor.setAttribute('value', randomColor);
  });

  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
  

}, false);


document.write('<audio id="player" src="bruh.mp4" >');
document.getElementById('player').play();
