Blockly.Blocks['abs'] = {
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

Blockly.Blocks['app'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Exercise")
        .appendField(new Blockly.FieldTextInput("squats"));
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

Blockly.Blocks['var'] = {
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

Blockly.Blocks['var1'] = {
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

Blockly.Blocks['var2'] = {
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
// 
// Blockly.Blocks['math_number'] = {
//   /**
//    * Block for numeric value.
//    * @this {Blockly.Block}
//    */
//   init: function() {
//     this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
//     this.setColour(Blockly.Msg.MATH_HUE);
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldNumber('3'), 'NUM');
//     this.setOutput(true, 'Number');
//     this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
//   }
// };
Blockly.JavaScript['abs'] = function(block) {
  var var_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_NONE);
  var expr_code = Blockly.JavaScript.valueToCode(block, 'EXPR', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + var_name + ' => ' + expr_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['app'] = function(block) {
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_NONE);
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_NONE);
  var expr3_code = Blockly.JavaScript.valueToCode(block, 'EXPR3', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + expr1_code + ')(' + expr2_code + ')(' + expr3_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['var'] = function(block) {
  var var_name = block.getFieldValue('NUM');
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['var1'] = function(block) {
  var var_name = block.getFieldValue('NUM');
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['var2'] = function(block) {
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

Blockly.Blocks['workout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Workout");
    this.appendStatementInput("NAME")
        .setCheck("exercise");
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['exercise'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("Exercise")
        .appendField(new Blockly.FieldTextInput("squats"), "NAME");
    this.appendValueInput("REPS")
        .setCheck("Number");
    this.appendValueInput("SETS")
        .setCheck("Number");
    this.setPreviousStatement(true, "exercise");
    this.setNextStatement(true, "exercise");
    this.setColour(260);
   this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['workout'] = function(block) {
  var exercises = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = `function workout() {
    ${exercises}
  }`;
  return code;
};

Blockly.JavaScript['exercise'] = function(block) {
  var name = block.getFieldValue('NAME');
  var reps = Blockly.JavaScript.valueToCode(block, 'REPS', Blockly.JavaScript.ORDER_ATOMIC);
  var sets = Blockly.JavaScript.valueToCode(block, 'SETS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${name}(${reps}, ${sets});\n`;
  return code;
};
