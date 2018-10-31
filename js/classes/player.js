/* jshint esversion: 6 */
class player {
  constructor(context, startX, startY) {
    this.context = context;
    this.x = startX;
    this.y = startY;
  }

  moveLeft() {
    this.x -= 1;
  }

  moveRight() {
    this.x += 1;
  }

  moveUp() {
    this.y -= 1;
  }

  moveDown() {
    this.y += 1;
  }

  draw() {
    this.context.fillStyle = 'red';
    this.context.fillRect((this.x * 10),(this.y * 10),10 , 10);
  }
}