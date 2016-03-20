// Your JS goes here

for(var i = 0; i < 40; i++) {
var square = document.createElement('div');
var black = document.querySelector('body').appendChild(square).style;
black.backgroundColor = "black";
black.width = "11.1%";
black.paddingBottom = "11.1%";
black.float = "left";
black.opacity = 0.2;
var square = document.createElement('div');
var red = document.querySelector('body').appendChild(square).style;
red.backgroundColor = "red";
red.width = "11.1%";
red.paddingBottom = "11.1%";
red.float = "left";
red.opacity = 0.4;
}

var square = document.createElement('div');
var black = document.querySelector('body').appendChild(square).style;
black.backgroundColor = "black";
black.width = "11.1%";
black.paddingBottom = "11.1%";
black.float = "left";
black.opacity = 0.2;

document.querySelector('body').style.background = 'linear-gradient(135deg, blue, yellow)';
