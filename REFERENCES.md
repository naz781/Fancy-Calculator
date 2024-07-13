# Simple Calculator Quick Reference

This document serves as a quick reference guide for important terms, functions, and uses in the Simple Calculator project. It's designed to help you understand and modify the calculator efficiently.

## HTML Terms and Elements

### `<!DOCTYPE html>`
Defines the document type and version of HTML.

### `<html>`
The root element of an HTML document.

### `<head>`
Contains metadata, including the document title and links to stylesheets.

### `<body>`
Contains the content of the HTML document, such as text, images, and other elements.

### `<div>`
Defines a division or a section in an HTML document.

### `<button>`
Creates a clickable button. In this project, buttons are used for numbers and operators.

### `onclick`
An HTML attribute that executes JavaScript code when an element is clicked.

## CSS Terms and Classes

### `body`
Defines global styles for the webpage body, including layout and background.

### `.calculator`
Styles the main container of the calculator.

### `.display`
Styles the display area of the calculator where the input and results are shown.

### `.buttons`
Styles the container for the calculator buttons, arranged in a grid layout.

### `.btn`
A general class for styling all buttons.

### `.btn-clear`
A specific class for styling the "C" button, making it green.

### `background-color`
Sets the background color of an element.

### `color`
Sets the text color of an element.

### `padding`
Defines the space between the content of an element and its border.

### `font-size`
Sets the size of the font.

### `border`
Defines the border properties of an element.

## JavaScript Functions and Concepts

### `let`
Declares a block-scoped variable.

### `const`
Declares a block-scoped, read-only named constant.

### `document.getElementById()`
Selects an HTML element by its ID.

### `innerText`
Sets or returns the text content of an element.

### `parseFloat()`
Parses a string and returns a floating-point number.

### `updateDisplay()`
Updates the calculator's display with the current value.

### `appendNumber(number)`
Appends a number to the current display value.

### `appendOperator(operator)`
Sets the current operator and prepares for the next number input.

### `calculate()`
Performs the arithmetic operation based on the current operator and updates the display.

### `clearDisplay()`
Resets the display value and clears any stored values and operators.

## Usage Ideas

### Adding Background Images
Enhance the calculator's look by adding a background image:
```css
body {
    background-image: url('your-image.jpg');
    background-size: cover;
}
```

### Custom Button Styles
Create custom styles for specific buttons:
```css
.btn-custom {
    background-color: #ff5722;
    color: #fff;
}

.btn-custom:hover {
    background-color: #e64a19;
}
```

### Adding New Functions
Expand the calculator's functionality, such as adding a square root function:
1. Add a button in `index.html`:
    ```html
    <button class="btn" onclick="calculateSquareRoot()">√</button>
    ```

2. Add the function logic in `script.js`:
    ```javascript
    function calculateSquareRoot() {
        displayValue = Math.sqrt(parseFloat(displayValue)).toString();
        updateDisplay();
    }
    ```

## Additional Tips
- Regularly commit your changes to keep track of your progress.
- Explore integrating other technologies like Firebase to save user data or Google Cloud Platform for hosting.

