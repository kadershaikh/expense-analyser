
# Expense Analyzer - Node.js Assignment

## Project Overview

This project is a simple Expense Analyzer built using Node.js.
It reads expenses from a text file, calculates total spending,
filters large expenses, adds delivery fees, and generates
category-wise spending summaries.

It also demonstrates JavaScript concepts such as closures,
higher-order functions, callbacks, and synchronous and
asynchronous file handling.

## Requirements

- Node.js (current LTS version)
- npm

## Installation

1. Clone or download the project.
2. Open the project directory in the terminal.
3. Install dependencies:

   npm install

4. Run the expense analyzer:

   node analyser.js

5. Run the warm-up exercises:

   node Warmup.js

## Deliverables and Questions

### 1. What did you predict for Warmup.js, and what did it print?
Explain the first line and the error from Part B.

I predicted that the first line would print undefined because
var declarations are hoisted but their assigned values are not.
The output was undefined, followed by 99 1 and 3. When I
uncommented console.log(b), JavaScript threw a ReferenceError
because let variables cannot be accessed before initialization
due to the Temporal Dead Zone.

### 2. Why did Loop finished print before Async read finished?
Who did the reading while your loop was running?

Loop finished printed first because fs.readFile() is asynchronous
and does not block the main JavaScript execution thread while
waiting for the file operation to complete. Node.js handles
the file I/O through its underlying runtime and operating system,
allowing the JavaScript loop to execute before the callback runs.

### 3. How does tracker remember spent after createBudgetTracker
has returned?

The tracker remembers the spent variable because of closures.
The inner function retains access to variables declared in its
outer function even after the outer function has completed.
Every call to tracker updates the same spent variable.

### 4. What does the ^ in front of the lodash version in
package.json mean, and why is package-lock.json created?

The ^ symbol allows npm to install compatible minor and patch
updates within the same major version of the package.
The package-lock.json file records the exact installed
dependency versions and dependency tree to ensure consistent
installations across different environments.

## Concepts Covered

- Synchronous file reading using fs.readFileSync()
- Asynchronous file reading using fs.readFile()
- Array methods: map(), filter(), reduce()
- Spread operator
- for...of loop and forEach()
- switch statements and ternary operators
- Closures
- Variable hoisting and Temporal Dead Zone
- NPM package management
