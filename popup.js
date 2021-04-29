document.addEventListener('DOMContentLoaded', function() {
  let snek = document.getElementById('snake');
  snek.addEventListener('click', function(){
    chrome.tabs.create({url:"https://www.google.com/search?q=snake+game&oq=snake+game&aqs=chrome..69i57j0i433j0i131i433j0i433j0j69i60j69i61j69i60.2365j0j7&sourceid=chrome&ie=UTF-8"});
  }, false)

  let click = document.getElementById('click');
  click.addEventListener('click', function(){
    chrome.tabs.create({url:"https://www.google.com/"});
  
  }, false);

  let background = document.getElementById('background');
  background.addEventListener('background', function(){
    
  }, false);
}, false);

document.write('<audio id="player" src="bruh.mp4" >');
document.getElementById('player').play();
