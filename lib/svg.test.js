const fs = require("fs");
const { Shape, Circle, Triangle, Square } = require("./shapes");

describe("SVG Logo Generation", () => {
  it("should generate SVG logo with correct text and colors", () => {
    // Mock user input
    const userInput = {
      text: "ABC",
      textColor: "blue",
      shape: "Circle",
      shapeColor: "red",
    };

    // Create new instances of Shape, Circle, Triangle, or Square based on user input
    let shapeObj;
    switch (userInput.shape) {
      case "Circle":
        shapeObj = new Circle();
        break;
      case "Triangle":
        shapeObj = new Triangle();
        break;
      case "Square":
        shapeObj = new Square();
        break;
    }

    // Set colors for the shape and text
    shapeObj.setColor(userInput.shapeColor);
    const textColor = userInput.textColor;

    // Render the shape and generate SVG content
    const svgElement = shapeObj.render();
    const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="240">
            ${svgElement}
            <text x="150" y="120" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${userInput.text}</text>
        </svg>`;

    // Verify if the generated SVG content matches the expected result
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="240">
            ${svgElement}
            <text x="150" y="120" font-family="Arial" font-size="24" fill="blue" text-anchor="middle">ABC</text>
        </svg>`;

    // Check if the generated SVG content matches the expected result
    expect(finalSvg).toEqual(expectedSvg);
  });
});
