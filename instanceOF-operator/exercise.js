class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  constructor(area){
    this.area = area;
  }
  static calculate(geometricFig){
    if(geometricFig instanceof Square){
      return geometricFig.side * 4;
    } else if (geometricFig instanceof Rectangle){
      return geometricFig.height * geometricFig.width;
    }else if (geometricFig instanceof Circle){
      return Math.PI * (geometricFig.radius * geometricFig.radius);
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));