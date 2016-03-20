// Your JS goes here

function rand() {
  return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}
for(var i = 0; i < 81; i++) {
var square = document.createElement('div');
var black = document.querySelector('body').appendChild(square).style;
black.backgroundColor = rand();
black.width = "11.1%";
black.paddingBottom = "11.1%";
black.float = "left";
}
