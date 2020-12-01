"use strict";

var element = document.querySelector("#canvas");
var ctx = element.getContext('2d');
var width = document.body.clientWidth;
var height = document.body.clientHeight;
element.width = width;
element.height = height;
var position = Array(300).join(0).split('');

var initMatrix = function initMatrix() {
  ctx.fillStyle = 'rgba(0,25,2,0.05)';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#4caf50';
  ctx.font = '11pt';
  position.map(function (y, index) {
    var text = String.fromCharCode(1e5 + Math.random() * 30);
    var x = index * 15 + 15;
    canvas.getContext('2d').fillText(text, x, y);
    y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
  });
};

setInterval(initMatrix, 50);
