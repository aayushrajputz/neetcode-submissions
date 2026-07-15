class SquareHole {
    private sideLength: number;
    /**
     * @param {number} sideLength
     */
    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }

    /**
     * @param {Square} square
     * @return {boolean}
     */
    canFit(square: Square): boolean {
        return this.sideLength >= square.getSideLength();
    }
}

class Square {
    private sideLength: number;
    /**
     * @param {number} sideLength
     */
    constructor(sideLength = 0) {
        this.sideLength = sideLength;
    }

    /**
     * @return {number}
     */
    getSideLength(): number {
        return this.sideLength;
    }
}

class Circle {
    private radius: number;
    /**
     * @param {number} radius
     */
    constructor(radius: number) {
        this.radius = radius;
    }

    /**
     * @return {number}
     */
    getRadius(): number {
        return this.radius;
    }
}

class CircleToSquareAdapter extends Square {
    private circle: Circle; // Circle ko wrap kiya (Composition)

    constructor(circle: Circle) {
        super(); // 👈 JavaScript rule: Parent class (Square) ka constructor call karna padega pehle
        this.circle = circle;
    }

    getSideLength(): number {
        // Circle ka diameter = Square ki side length
        return this.circle.getRadius() * 2; 
    }
}