const { Shape } = require("./shapes"); // Import the Shape class

describe("Shape", () => {
  it("should set the color property", () => {
    const shape = new Shape();
    shape.setColor("red");
    expect(shape.color).toEqual("red");
  });

  it("should update the color property", () => {
    const shape = new Shape();
    shape.setColor("blue");
    shape.setColor("green");
    expect(shape.color).toEqual("green");
  });
});
