// document.addEventListener('DOMContentLoaded', function() {
//   let checkPageButton = document.getElementById('click');
//   checkPageButton.addEventListener('click', function(){
//     chrome.tabs.getSelected(null, function(tab){
//       alert("Hello")
//     });

//   }, false)

//}, false);

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}