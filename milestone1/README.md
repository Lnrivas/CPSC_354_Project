Here is a README.md file for the milestone1 folder:

# Workout DSL Project - Milestone 1

This project allows creating and running simple workout programs using a block-based programming interface. 

## Contents

The milestone1 folder contains:

- index.html - The main HTML page that loads Blockly and the custom blocks
- custom_blocks.js - JavaScript code that defines the custom workout blocks
- styles.css - CSS styling for the page
- README.md - This file

## Usage

To test this milestone:

1. Clone the repository or download the milestone1 folder
2. Open index.html in a browser to load the page
3. Build a workout program using the custom blocks
4. Click "Generate JavaScript" to view the generated code
5. Click "Run JavaScript" to run the program and view the output
6. Try saving and loading programs using the save and load buttons

The workspace allows creating exercises, setting the number of sets, reps, and rest time. The generated code will print out the workout details.

Blocks can be stacked to create full workout programs with multiple exercises.

## Custom Blocks

The following custom blocks are defined:

- Workout - Container block for a full workout
- Exercise - Specifies an exercise name and sets/reps/rest
- Sets - Number of sets
- Reps - Number of reps 
- Rest - Rest time in minutes

The blocks generate JavaScript code to print the workout details.
