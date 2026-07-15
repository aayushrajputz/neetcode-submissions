interface Shape {
    clone(): Shape;
    getLength?(): number;
    getWidth?(): number;
    getHeight?(): number;
}

class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getWidth(): number { return this.width; }
    getHeight(): number { return this.height; }

    clone(): Shape {
        return new Rectangle(this.width, this.height);
    }
}

class Square implements Shape {
    private length: number;

    constructor(length: number) {
        this.length = length;
    }
    getLength(): number { return this.length; }

    clone(): Shape {
        return new Square(this.length);
    }
}

class Test {
    cloneShapes(shapes: Shape[]): Shape[] {
        return shapes.map(shape => shape.clone());
    }
}