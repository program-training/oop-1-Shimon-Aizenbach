// את הקוד שלכם תכתבו כאן

import { log } from "console"

//  1. Rectangle - מלבן
class Rectangle {
    hight: number
    width: number

    constructor(hight: number, width: number) {
        this.hight = hight
        this.width = width
    }

    area():number {
      return this.hight * this.width
    }
}

const rectangle1 = new Rectangle(10, 5)
console.log(rectangle1);
console.log(rectangle1.area());

//  2. Square - ריבוע

// 3. Shape - צורה

// 4. Method Chaining

// 5. Shape with draw method
