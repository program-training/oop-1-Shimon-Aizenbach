"use strict";
// את הקוד שלכם תכתבו כאן
Object.defineProperty(exports, "__esModule", { value: true });
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
// class Shape {
//   info(): string {
//     return `This is a Shape`;
//   }
// }
// class Rectangle extends Shape {
//   hight: number;
//   width: number;
//   constructor(hight: number, width: number) {
//     this.hight = hight;
//     this.width = width;
//   }
//   area(): number {
//     return this.hight * this.width;
//   }
//   info(): string {
//     return `This is a Rectangle`;
//   }
// }
// class ColoredRectangle extends Rectangle {
//   color: string;
//   constructor(hight: number, width: number, color: string) {
//     super(hight, width);
//     this.color = color;
//   }
//   info(): string {
//       return `This is a ${this.color} Rectangle`
//   }
// }
// const shape1 = new Shape
// console.log(shape1.info());
// const rectangle1 = new Rectangle(8, 4)
// console.log(rectangle1.info());
// const rectangle2 = new ColoredRectangle(8, 4, `red`)
// console.log(rectangle2.info());
// 4. Method Chaining
var Rectangle = /** @class */ (function () {
    function Rectangle(hight, width) {
        this.hight = hight;
        this.width = width;
    }
    Rectangle.prototype.area = function () {
        return this.hight * this.width;
    };
    Rectangle.prototype.info = function () {
        return "This is a Rectangle";
    };
    Rectangle.prototype.scale = function (coefficient) {
        this.hight *= coefficient;
        this.width *= coefficient;
        return this;
    };
    Rectangle.prototype.areaAddition = function (rectangle1, rectangle2) {
        var newRectangle = new Rectangle(rectangle1.hight + rectangle2.hight, rectangle1.width + rectangle2.width);
        return newRectangle;
    };
    return Rectangle;
}());
var rectangle1 = new Rectangle(8, 4);
rectangle1.scale(2).scale(2);
console.log(rectangle1.area());
var rectangle2 = new Rectangle(2, 1);
var rectangle3 = rectangle2.areaAddition(rectangle1, rectangle2);
console.log(rectangle3);
// 5. Shape with draw method
