"use strict";
// את הקוד שלכם תכתבו כאן
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
// 3. Shape - צורה
// 4. Method Chaining
// 5. Shape with draw method
