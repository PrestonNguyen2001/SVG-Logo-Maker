const fs = require("fs");
const inquirer = require("inquirer");
const { Shape, Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter logo text (up to three characters):",
    validate: (input) => input.length <= 3,
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a text color (keyword or hex):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a logo shape:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a shape color (keyword or hex):",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shape, shapeColor } = answers;
  const shapeObj = new Shape();
  let svgElement = "";

  shapeObj.setColor(shapeColor);

  switch (shape) {
    case "Circle":
      const circle = new Circle();
      circle.setColor(shapeColor);
      svgElement = circle.render();
      break;
    case "Triangle":
      const triangle = new Triangle();
      triangle.setColor(shapeColor);
      svgElement = triangle.render();
      break;
    case "Square":
      const square = new Square();
      square.setColor(shapeColor);
      svgElement = square.render();
      break;
  }

  let x = 150,
    y = 120;
  if (shape === "Triangle") {
    y = 135;
  } else if (shape === "Square") {
    y = 145;
  }

  const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="240">
        ${svgElement}
        <text x="${x}" y="${y}" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;

  fs.writeFileSync("logo.svg", finalSvg);
  console.log("Logo created!");
});
