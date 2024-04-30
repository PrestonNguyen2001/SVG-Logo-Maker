# Object-oriented Programming Challenge: SVG Logo Maker
This repository contains the solution to Object-oriented Programming Challenge: SVG Logo Maker challenge, where the task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

# Table of Contents
- Description
- Elements
- Installation
- Usage
- Test
- License
- Contributing
- Questions

## Challenge Description
The goal of this challenge was to build an application that prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

## Challenge Elements

### User Story
```markdown
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

### Acceptance Criteria
```markdown
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation Instructions
To install this SVG-Logo-Maker application, follow these steps:

1. Enter `git clone https://github.com/PrestonNguyen2001/SVG-Logo-Maker.git` to clone the repository to your local machine.
2. Type `SVG-Logo-Maker` to navigate to the project directory.
3. Install dependencies by running `npm install`.

## Usage Instructions
To use this SVG-Logo-Maker application, follow these steps:
1. Run the application by executing `node index.js`.
2. Follow the prompts to input information about your logo (text, text color, shape, and shape color).
3. Once you've completed all the prompts, the application will generate a logo based on your inputs and save it as `logo.svg`.

## Test Instructions
To test this SVG-Logo-Maker application, follow these steps:
1. Enter `npm test` into your command line.
2. This will run the `setcolor.test.js, shapes.test.js, and svg.test.js`files.
3. After the tests have been run, the results will be printed to the command line. 
4. To view the test files, open the application in Visual Studio Code, then navigate to the `lib` folder. 

To view a video on how to install, use, and test this application, click here: [Demo](https://youtu.be/Jkm5LkNqAss)

## Contributing
You can contribute to this project in various ways:

- **Code Contributions**: If you find a bug or have an enhancement in mind, feel free to fork the repository, make your changes, and submit a pull request. Please ensure that your code follows the project's coding conventions and that you include appropriate tests.

- **Bug Reports**: If you encounter any issues with the application, please open a new issue on the GitHub repository. Provide detailed information about the problem, including steps to reproduce it, and we'll do our best to address it promptly.

- **Feature Requests**: If you have ideas for new features or improvements, you can also open an issue to discuss them. We're always interested in hearing feedback from the community.

## Questions 
- If you have any questions, feel free to reach out via: https://github.com/PrestonNguyen2001
- For additional questions or support, contact me at prestonnguyen2001@gmail.com