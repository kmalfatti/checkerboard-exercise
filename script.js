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
setInterval(cb, 2000);