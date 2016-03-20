for(var i = 0; i < 40; i++) {
var square = document.createElement('div');
var black = document.querySelector('body').appendChild(square).style;
black.backgroundColor = "black";
black.width = "11.1%";
black.paddingBottom = "11.1%";
black.float = "left";
var square = document.createElement('div');
var red = document.querySelector('body').appendChild(square).style;
red.backgroundColor = "red";
red.width = "11.1%";
red.paddingBottom = "11.1%";
red.float = "left";
}
// Uneven board. Necessary for last black square
var square = document.createElement('div');
var black = document.querySelector('body').appendChild(square).style;
black.backgroundColor = "black";
black.width = "11.1%";
black.paddingBottom = "11.1%";
black.float = "left";
