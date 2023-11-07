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
    this.appendDummyInput()
        .appendField("Exercise")
        .appendField(new Blockly.FieldTextInput("Exercise Name"), "EXERCISE_NAME");
    this.appendValueInput("EXPR1")
        .setCheck(["sets"]);
    this.appendValueInput("EXPR2")
        .setCheck(["reps"]);
    this.appendValueInput("EXPR3")
        .setCheck(["weight"]);
    this.appendValueInput("EXPR4")
        .setCheck(["rest"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setPreviousStatement(true);  // Allow blocks to be stacked on top
    this.setNextStatement(true);  // Allow blocks to be stacked below
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

Blockly.JavaScript.forBlock['workout'] = function(block) {
  var workoutName = block.getFieldValue('WORKOUT_NAME');
  var exercises = Blockly.JavaScript.statementToCode(block, 'EXERCISES');
  var code = 'console.log("' + workoutName + ' workout consists of ' + exercises.split('\n').filter(Boolean).join(', ') + '.");\n';
  return code;
};

Blockly.JavaScript.forBlock['exercise'] = function(block) {
  var exerciseName = block.getFieldValue('EXERCISE_NAME');
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_NONE);
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_NONE);
  var expr3_code = Blockly.JavaScript.valueToCode(block, 'EXPR3', Blockly.JavaScript.ORDER_NONE);
  var expr4_code = Blockly.JavaScript.valueToCode(block, 'EXPR4', Blockly.JavaScript.ORDER_NONE);
  var code = exerciseName + ' (' + expr1_code + ' sets, ' + expr2_code + ' reps, ' + expr3_code + ' pound weights, ' + expr4_code + ' minutes rest)';
  return code + '\n';
};


Blockly.JavaScript.forBlock['sets'] = function(block) {
  var var_name = block.getFieldValue('NUM');
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.forBlock['reps'] = function(block) {
  var var_name = block.getFieldValue('NUM');
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.forBlock['rest'] = function(block) {
  var var_name = block.getFieldValue('NUM');
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.forBlock['weight'] = function(block) {
  var var_name = block.getFieldValue('NUM');
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
