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
var Rectangle = /** @class */ (function () {
    function Rectangle(hight, width) {
        this.hight = hight;
        this.width = width;
    }
    Rectangle.prototype.area = function () {
        return this.hight * this.width;
    };
    return Rectangle;
}());
var rectangle1 = new Rectangle(10, 5);
console.log(rectangle1);
console.log(rectangle1.area());
//  2. Square - ריבוע
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(rib) {
        return _super.call(this, rib, rib) || this;
    }
    Square.prototype.area = function () {
        return this.hight * this.width;
    };
    return Square;
}(Rectangle));
var square1 = new Square(10);
console.log(square1);
console.log(square1.area());
// 3. Shape - צורה
// 4. Method Chaining
// 5. Shape with draw method
