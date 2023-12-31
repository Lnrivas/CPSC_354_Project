Blockly.Blocks['workout'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Workout")
          .appendField(new Blockly.FieldTextInput("Workout Name"), "WORKOUT_NAME");
      this.appendStatementInput("EXERCISES")
          .setCheck("exp");
      this.setColour(130);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['exercise'] = {
  init: function() {
    this.appendValueInput("EXERCISE_NAME")
        .setCheck(["upper_body", "lower_body", "core_exercises"])
        .appendField("Exercise");
    this.appendValueInput("EXPR1")
        .setCheck(["sets"]);
    this.appendValueInput("EXPR2")
        .setCheck(["reps"]);
    this.appendValueInput("EXPR3")
        .setCheck(["weight"]);
    this.appendValueInput("EXPR4")
        .setCheck(["rest"]);
    this.setInputsInline(false); // Set to false to prevent stacking
    this.setOutput(true, "exp");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setPreviousStatement(true);  // Allow blocks to be stacked on top
    this.setNextStatement(true);  // Allow blocks to be stacked below
  }
};

Blockly.Blocks['upper_body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Upper Body")
        .appendField(new Blockly.FieldDropdown([
          ["Chest press", "CHEST_PRESS"],
          ["Cable rows", "CABLE_ROWS"],
          ["Shoulder press", "SHOULDER_PRESS"],
          ["Bicep curl", "BICEP_CURL"],
          ["Pull-ups", "PULL_UPS"],
          // Add more upper body options as needed
        ]), "UPPER_BODY_TYPE");
    this.setOutput(true, "upper_body");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['lower_body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lower Body")
        .appendField(new Blockly.FieldDropdown([
          ["Lunges", "LUNGES"],
          ["Squats", "SQUATS"],
          ["Hamstring curls", "HAMSTRINGS_CURLS"],
          ["Calve raises", "CALVES_RAISES"],
          // Add more lower body options as needed
        ]), "LOWER_BODY_TYPE");
    this.setOutput(true, "lower_body");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['core_exercises'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Core Exercises")
        .appendField(new Blockly.FieldDropdown([
          ["Crunches", "CRUNCHES"],
          ["Planks", "PLANKS"],
          ["Russian Twists", "RUSSIAN_TWISTS"],
          ["Leg Raises", "LEG_RAISES"],
          // Add more core exercise options as needed
        ]), "CORE_EXERCISE_TYPE");
    this.setOutput(true, "core_exercises");
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sets'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set(s)")
        .appendField(new Blockly.FieldNumber('3'), 'NUM');
    this.setOutput(true, "sets");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['reps'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rep(s)")
        .appendField(new Blockly.FieldNumber('3'), 'NUM');
    this.setOutput(true, "reps");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['weight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Weight(s)")
        .appendField(new Blockly.FieldTextInput('3'), 'NUM');
        this.setOutput(true, "weight");
        this.setColour(430);
        this.setTooltip("");
        this.setHelpUrl("");
  }
};

Blockly.Blocks['rest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rest")
        .appendField(new Blockly.FieldNumber('3'), 'NUM');
    this.setOutput(true, "rest");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.JavaScript.forBlock['workout'] = function(block) {
//   var workoutName = block.getFieldValue('WORKOUT_NAME');
//   var exercises = Blockly.JavaScript.statementToCode(block, 'EXERCISES');
//   var code = 'console.log("' + workoutName + ' workout consists of ' + exercises.split('\n').filter(Boolean).join(', ') + '.");\n';
//   return code;
// };

Blockly.JavaScript['workout'] = function (block) {
  var workoutName = block.getFieldValue('WORKOUT_NAME');
  var exercises = Blockly.JavaScript.statementToCode(block, 'EXERCISES').trim();

  // Splitting the exercises string into an array, trimming, and joining with a new line
  var exercisesArray = exercises.split('\n');
  var exercisesClean = exercisesArray.map(function (exercise) {
    return exercise.trim();
  }).filter(function (exercise) {
    return exercise.length > 0;
  }).join('\n');

  var code = 'console.log("' + workoutName + ' workout consists of:\\n' + exercisesClean + '\\n");';
  return code;
};



Blockly.JavaScript['exercise'] = function (block) {
  var exerciseName = Blockly.JavaScript.valueToCode(block, 'EXERCISE_NAME', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var expr3_code = Blockly.JavaScript.valueToCode(block, 'EXPR3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var expr4_code = Blockly.JavaScript.valueToCode(block, 'EXPR4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = exerciseName + ' for ' + expr1_code + ' sets of ' + expr2_code + ' reps each, using ' + expr3_code + ' pound weights, with ' + expr4_code + ' minutes of rest in between.';
  return code;
};

Blockly.JavaScript['upper_body'] = function (block) {
  var upperBodyType = block.getFieldValue('UPPER_BODY_TYPE');
  return [upperBodyType, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['lower_body'] = function (block) {
  var lowerBodyType = block.getFieldValue('LOWER_BODY_TYPE');
  return [lowerBodyType, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['core_exercises'] = function (block) {
  var coreExerciseType = block.getFieldValue('CORE_EXERCISE_TYPE');
  return [coreExerciseType, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sets'] = function (block) {
  var var_name = block.getFieldValue('NUM');
  return [var_name, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['reps'] = function (block) {
  var var_name = block.getFieldValue('NUM');
  return [var_name, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['weight'] = function (block) {
  var var_name = block.getFieldValue('NUM');
  return [var_name, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['rest'] = function (block) {
  var var_name = block.getFieldValue('NUM');
  return [var_name, Blockly.JavaScript.ORDER_ATOMIC];
};
