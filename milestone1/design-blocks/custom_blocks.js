
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
        .setCheck(["rest"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(330);
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

Blockly.JavaScript.forBlock['exercise'] = function(block) {
  var exerciseName = block.getFieldValue('EXERCISE_NAME');
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_NONE);
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_NONE);
  var expr3_code = Blockly.JavaScript.valueToCode(block, 'EXPR3', Blockly.JavaScript.ORDER_NONE);
  var code = "console.log(\"Your exercise consists of " + expr1_code + " sets of " + expr2_code +
  " " + exerciseName + " with " + expr3_code + " minutes of rest time in between.\")";
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
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
