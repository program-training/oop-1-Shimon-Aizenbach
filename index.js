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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.info = function () {
        return "This is a Shape";
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(hight, width) {
        var _this = this;
        _this.hight = hight;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.hight * this.width;
    };
    Rectangle.prototype.info = function () {
        return "This is a Rectangle";
    };
    return Rectangle;
}(Shape));
var ColoredRectangle = /** @class */ (function (_super) {
    __extends(ColoredRectangle, _super);
    function ColoredRectangle(hight, width, color) {
        var _this = _super.call(this, hight, width) || this;
        _this.color = color;
        return _this;
    }
    ColoredRectangle.prototype.info = function () {
        return "This is a ".concat(this.color, " Rectangle");
    };
    return ColoredRectangle;
}(Rectangle));
var shape1 = new Shape;
console.log(shape1.info());
var rectangle1 = new Rectangle(8, 4);
console.log(rectangle1.info());
var rectangle2 = new ColoredRectangle(8, 4, "red");
console.log(rectangle2.info());
// 4. Method Chaining
// 5. Shape with draw method
