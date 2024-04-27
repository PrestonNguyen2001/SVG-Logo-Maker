const { Shape, Circle, Triangle, Square } = require("./shapes");

describe("Shape", () => {
  it("should set the color property", () => {
    const shape = new Shape();
    shape.setColor("red");
    expect(shape.color).toEqual("red");
  });
});

describe("Triangle", () => {
  it("should render a triangle", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    const expected = '<polygon points="150,50 50,150 250,150" fill="blue" />';
    expect(triangle.render()).toEqual(expected);
  });
});

describe("Circle", () => {
  it("should render a circle", () => {
    const circle = new Circle();
    circle.setColor("green");
    const expected = '<circle cx="150" cy="150" r="75" fill="green" />';
    expect(circle.render()).toEqual(expected);
  });
});

describe("Square", () => {
  it("should render a square", () => {
    const square = new Square();
    square.setColor("yellow");
    const expected =
      '<rect x="50" y="50" width="200" height="200" fill="yellow" />';
    expect(square.render()).toEqual(expected);
  });
});
