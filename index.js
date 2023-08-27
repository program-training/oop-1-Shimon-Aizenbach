"use strict";
// את הקוד שלכם תכתבו כאן
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//   info(): string {
//     return `This is a Rectangle`;
//   }
//   scale(coefficient: number): Rectangle {
//     this.hight *= coefficient;
//     this.width *= coefficient;
//     return this;
//   }
//   static areaAddition(rectangle1: Rectangle, rectangle2: Rectangle): Rectangle {
//     const newRectangle = new Rectangle(
//       rectangle1.hight + rectangle2.hight,
//       rectangle1.width + rectangle2.width
//     );
//     return newRectangle;
//   }
// }
// const rectangle1 = new Rectangle(8, 4);
// rectangle1.scale(2).scale(2);
// console.log(rectangle1.area());
// const rectangle2 = new Rectangle(2, 1);
// const rectangle3 = Rectangle.areaAddition(rectangle1, rectangle2);
// console.log(rectangle3);
// 5. Shape with draw method
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log("drawing a Shape");
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.draw = function () {
        console.log("drawing a Triangle");
    };
    return Triangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.draw = function () {
        console.log("drawing a Circle");
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.draw = function () {
        console.log("drawing a Square");
    };
    return Square;
}(Shape));
function renderShapes(arr) {
    arr.forEach(function (shape) { return shape.draw(); });
}
var arrayOfShapes = [
    new Triangle(),
    new Circle(),
    new Square(),
    new Triangle(),
];
renderShapes(arrayOfShapes);
