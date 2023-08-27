// את הקוד שלכם תכתבו כאן

import { log } from "console";

//  1. Rectangle - מלבן
// class Rectangle {
//   hight: number;
//   width: number;

//   constructor(hight: number, width: number) {
//     this.hight = hight;
//     this.width = width;
//   }

//   area(): number {
//     return this.hight * this.width;
//   }
// }

// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1);
// console.log(rectangle1.area());

//  2. Square - ריבוע
// class Square extends Rectangle {
//   constructor(rib: number) {
//     super(rib, rib);
//   }

//   area(): number {
//     return this.hight * this.width;
//   }
// }

// const square1 = new Square(10);
// console.log(square1);
// console.log(square1.area());

// 3. Shape - צורה
class Shape {
  info(): string {
    return `This is a Shape`;
  }
}

class Rectangle extends Shape {
  hight: number;
  width: number;

  constructor(hight: number, width: number) {
    this.hight = hight;
    this.width = width;
  }

  area(): number {
    return this.hight * this.width;
  }

  info(): string {
    return `This is a Rectangle`;
  }
}

class ColoredRectangle extends Rectangle {
  color: string;

  constructor(hight: number, width: number, color: string) {
    super(hight, width);
    this.color = color;
  }

  info(): string {
      return `This is a ${this.color} Rectangle`
  }
}

const shape1 = new Shape
console.log(shape1.info());

const rectangle1 = new Rectangle(8, 4)
console.log(rectangle1.info());

const rectangle2 = new ColoredRectangle(8, 4, `red`)
console.log(rectangle2.info());

// 4. Method Chaining

// 5. Shape with draw method
