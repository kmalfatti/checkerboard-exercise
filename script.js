function rand() {
  return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}
function cb(){
for(var i = 0; i < 81; i++) {
if (document.querySelectorAll('div')[i]){
  document.querySelectorAll('div')[i].remove();
}
var square = document.createElement('div');
var black = document.querySelector('body').appendChild(square).style;
black.backgroundColor = rand();
black.width = "11.1%";
black.paddingBottom = "11.1%";
black.float = "left";
}
}

//Bonus Audio
//Is there a way to use audio from soundcloud or a similar website?
//I tried hotlinking from different places but failed,
//so I had to use my own file I downloaded for the music.
//slack - kmalfatti 
//Thanks!
var audio = document.createElement('audio');
audio.setAttribute('autoplay', "");
var source = document.createElement('source');
source.setAttribute('src', '/Users/kmalfatti/Music/iTunes/iTunes Media/Music/Unknown Artist/Unknown Album/Goldeneye 007 (Music) - Facility.mp3');
audio.appendChild(source);
document.querySelector('body').appendChild(audio);

setInterval(cb, 2000);
