Blockly.Blocks['workout'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck("var")
        .appendField("Workout");
    this.appendValueInput("EXPR")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(130);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['exercise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Exercise")
        .appendField(new Blockly.FieldTextInput("Exercise Name"));
    this.appendValueInput("EXPR1")
        .setCheck(["var", "var1", "var2", "exp", "Number"])
    this.appendValueInput("EXPR2")
        .setCheck(["var", "var1", "var2", "exp", "Number"]);
    this.appendValueInput("EXPR3")
        .setCheck(["var", "var1", "var2", "exp", "Number"]);
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
    this.setOutput(true, "var");
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
    this.setOutput(true, "var1");
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
    this.setOutput(true, "var2");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript.forBlock['workout'] = function(block) {
  var var_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_NONE);
  var expr_code = Blockly.JavaScript.valueToCode(block, 'EXPR', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + var_name + ' => ' + expr_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.forBlock['exercise'] = function(block) {
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_NONE);
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_NONE);
  var expr3_code = Blockly.JavaScript.valueToCode(block, 'EXPR3', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + expr1_code + ')(' + expr2_code + ')(' + expr3_code + ')';
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

Blockly.Blocks['math_arithmetic'] = {
  /**
   * Block for arithmetic operations.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.setOutput(true, 'Number');
    this.appendValueInput('A')
        .setCheck(['Number', 'var', 'exp']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ['+', 'ADD'],
            ['-', 'MINUS'],
            ['\u00D7', 'MULTIPLY'],
            ['\u00F7', 'DIVIDE'],
            ['^', 'POWER']]), 'OP');
    this.appendValueInput('B')
        .setCheck(['Number', 'var', 'exp']);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_ARITHMETIC_TOOLTIP);
  }
};
