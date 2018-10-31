/* jshint esversion: 6 */
window.onload = function () {
  // Get game board dimensions (size width and height of content area)
  gameBoard.initialize('gameArea', window.innerWidth, window.innerHeight);
};

window.onresize = function () {
  gameBoard.initialize('gameArea', window.innerWidth, window.innerHeight);
};

let gameBoard = {
  width: 0,
  height: 0,
  initialize: function (canvas, w, h) {
    this.canvas = document.getElementById(canvas);
    this.context = this.canvas.getContext('2d');
    this.canvas.width = w;
    this.canvas.height = h;
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, w, h);
  },
  canvas: {},
  context: {}
};