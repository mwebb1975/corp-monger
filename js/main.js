/* jshint esversion: 6 */
let lastRender = 0;

const gameBoard = {
  width: 0,
  height: 0,
  initialize: function (canvas, w, h) {
    this.canvas = document.getElementById(canvas);
    this.context = this.canvas.getContext('2d');
    this.width = w;
    this.height = h;
  },
};

let player1 = {};

window.onload = function () {
  // Get game board dimensions (size width and height of content area)
  gameBoard.initialize('gameArea', window.innerWidth, window.innerHeight);
  player1 = new player(gameBoard.context, 4, 5);
  window.requestAnimationFrame(loop);
};

window.onresize = function () {
  gameBoard.initialize('gameArea', window.innerWidth, window.innerHeight);
  window.requestAnimationFrame(loop);
};

window.addEventListener('keypress', function (event) {
  //alert('Key Press' + event.keyCode);
  window.console.log(event.key);
  switch(event.key) {
    case 'a':
      window.console.log('Move left');
      player1.moveLeft();
      break;
    case 'd':
      window.console.log('Move right');
      player1.moveRight();
      break;
    case 'w':
      window.console.log('Move up');
      player1.moveUp();
      break;
    case 's':
      window.console.log('Move down');
      player1.moveDown();
      break;
  }
});

function loop(timestamp) {
  let progress = timestamp - lastRender;

  update();
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

function update(progress) {

}

function draw() {
  gameBoard.context.clearRect(0, 0, gameBoard.width, gameBoard.height);
  gameBoard.context.beginPath();
  player1.draw();
}
