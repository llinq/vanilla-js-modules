import { Canvas } from './modules/canvas.js';


let myCanvas = new Canvas('myCanvas', document.body, 480, 320);
myCanvas.create();
myCanvas.createReportList();

///////////////////////// Basic examples /////////////////////////////////
// import { Square, Circle, Triangle } from './modules/shapes.js';

// // draw a square
// let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
// square1.draw();
// square1.reportArea();
// square1.reportPerimeter();

// // draw a circle
// let circle1 = new Circle(myCanvas.ctx, myCanvas.listId, 75, 200, 100, 'green');
// circle1.draw();
// circle1.reportArea();
// circle1.reportPerimeter();

// // draw a triangle
// let triangle1 = new Triangle(myCanvas.ctx, myCanvas.listId, 100, 75, 190, 'yellow');
// triangle1.draw();
// triangle1.reportArea();
// triangle1.reportPerimeter();
///////////////////////// Basic examples /////////////////////////////////

///////////////////////// Dynamic examples /////////////////////////////////
const squareBtn = document.querySelector('.square');
squareBtn.addEventListener('click', () => {
  import('./modules/shapes/square.js').then((Module) => {
    const square1 = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  });
})

const triangleBtn = document.querySelector('.triangle');
const circleBtn = document.querySelector('.circle');
///////////////////////// Dynamic examples /////////////////////////////////
