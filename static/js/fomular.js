
function Formular(ori){
  console.log('ori', ori)
  let str = {}
  if(ori.subjectId == 2 && ori.stage == 50){
    //高中数学
    str = this.highMath()
  }else if(ori.subjectId == 2 && ori.stage == 30){
    //小学数学
    str = this.primaryMath()
  }else if(ori.subjectId == 2 && ori.stage == 40){
    //初中数学
    str = this.midMath()
  }else if(ori.subjectId == 4 && ori.stage == 40){
    //初中物理
    str = this.midPhy()
  }else if(ori.subjectId == 5 && ori.stage == 40){
    //初中化学
    str = this.midChem()
  }
  return str
}
Formular.prototype.highMath = function(){
  console.log('高中数学')
  // return [
  //   'mix_fraction', 'superscript', 'subscript', 'super_subscript', 'pre_super_subscript', 'square_root', 'root',
  //   'round_brackets', 'braces', 'bracket', 'modulus', 'lefttmrights', 'lefttsrightm', 'leftrightbmidline', 'case',
  //   'case1', 'case2', 'case3', 'plus', 'reduce', 'multiplication', 'division', 'or', 'and', 'even', 'infty', 'equal',
  //   'neq', 'less_than', 'greater_than', 'less_equal', 'greater_equal', 'emptyset', 'in', 'notin', 'notni', 'subseteq',
  //   'supseteq', 'plus_minus', 'vec', 'mp', 'percent', 'pi', 'alpha', 'beta', 'gamma', 'Rightarrow',
  //   'lg', 'ln', 'Delta', 'theta', 'rho', 'sigma', 'varphi', 'omega', 'delta', 'epsilon', 'Omega', 'eta', 'lambda', 'mu',
  //   'Phi', 'xi', 'psi', 'tau', 'e', 'log', 'ni', 'supset', 'subset', 'notsubset', 'neg', 'cap', 'cup', 'wedge', 'vee',
  //   'equiv', 'approx', 'cong', 'sim', 'dotx', 'degree', 'compare', 'cu', 'c', 'psubsup', 'asubsup', 'csubsup', 'overline',
  //   'cdots', 'because', 'therefore', 'toarrow', 'leftarrow', 'leftrightarrow', 'angle', 'perp', 'parallel_to', 'nparallel',
  //   'triangle', 'square', 'bigodot', 'cdot', 'ast', 'otimes', 'oplus', 'forall', 'exists', 'hat', 'vec', 'indefiniteintegral',
  //   'differential', 'sum', 'prod', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 't1', 't2', 't3', 't4', 't5', 't6'
  // ]
  return [
    'alpha', 'beta', 'gamma', 'theta', 'pi', 'delta', 'phi', 'epsilon', 'rho', 'omega', 'Delta', 'Omega', 'Phi',
    "plus", "reduce", "multiplication",  "division", "plus_minus", "fraction", 'square_common', 'square_root_common',
    "r_superscript_common", "r_subscript_common", "r_sub_supscript_common", "percent",
    "infty",
    "compare",
    'pi_common',
    'modulus_common',
    "overrightarrow",
    'lefttsrightm', 'lefttmrights', 'leftrightm', 'leftrights',
    'equal', 'ne', 'less_than', 'greater_than', 'greater_equal', 'less_equal', 'approx',
    'degree', 'angle', 'perpendicular', 'parallel_to', 'triangle', 'parallelogram', 'bigcirc', 'wideparen',
    'round_brackets', 'bracket', 'braces', 'in', 'notin', 'supseteq', 'subseteq', 'supset', 'subset', 'cap', 'cup',
    "complement", "complementu", "emptyset", 'square', 'cube', 'sup', 'lg', 'ln', 'log', 'square_root', 'cube_root', 'root',
    "binary_equations", "ternary_equations"
  ]
}

Formular.prototype.primaryMath = function(){
  console.log('小学数学')
  return [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'alpha', 'beta', 'theta', 'pi', "plus", "reduce", "multiplication", "division", "fraction", "percent","dot",
    "comma", "dotx", "compare",
    'equal', 'ne', 'less_than', 'greater_than', 'greater_equal', 'less_equal', 'approx',
    'degree', 'angle', 'perpendicular', 'parallel_to', 'square', 'cube',
    'round_brackets', 'bracket'
  ]
}

Formular.prototype.midMath = function(){
  console.log('初中数学')
  return [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero",
    'alpha', 'beta', 'gamma', 'theta', 'pi', 'delta', 'phi', 'Delta', 'Phi',
    "plus", "reduce", "multiplication", "division", "cdot", "plus_minus", "fraction",
    "r_superscript_common", "r_subscript_common", "r_sub_supscript_common",
    "percent", "dotx", "dot", "compare", 'pi_common', 'modulus_common', "direc_num", "direc_duble_num",
    "overrightarrow", 'equal', 'ne', 'less_than', 'greater_than', 'greater_equal', 'less_equal', 'approx',
    'cong', 'sim', 'degree', 'angle', 'perpendicular', 'parallel_to', 'triangle', 'parallelogram',
    'bigcirc', 'wideparen', 'round_brackets', 'bracket', 'braces', 'square_root', 'cube_root',
    'root',  "binary_equations", "ternary_equations",
    'square', 'cube', 'sup',
  ]
}

Formular.prototype.midPhy = function(){
  console.log('初中物理')
  return [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero",
    'alpha', 'beta', 'gamma', 'theta', 'pi', 'rho', 'omega', 'Delta', 'Omega',
    "plus", "reduce", "multiplication", "division", "cdot", "xie", "plus_minus", "fraction", 'square_common',
    'square_root_common',
    "percent", "dot", "comma", "compare", "direc_num", "direc_duble_num",
    "overrightarrow", 'equal', 'ne', 'less_than', 'greater_than', 'greater_equal', 'less_equal', 'approx',
    'degree',
    'round_brackets', 'bracket', 'braces',
    "serial_one", "serial_two", "serial_three", "serial_four", "serial_five", "serial_six", "serial_seven", "serial_eight", "serial_nine",
    "centigrade", "fahrenheit", "r_superscript_common", "r_subscript_common", "r_sub_supscript_common",
    "r_superscript", "r_subscript", "r_sub_sup", "l_superscript", "l_subscript", "l_sub_sup"
  ]
}
Formular.prototype.midChem = function(){
  
  return [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero",
    'pi', 'rho', 'omega', 'Delta',
    "plus",
    "reduce",
    "multiplication",
    "division",
    "cdot",
    "fraction",
    'square_common',
    'square_root_common',
    "r_superscript_common",
    "r_subscript_common",
    "r_sub_supscript_common",
    "percent",
    "dot",
    // 'infty',
    "compare",
    "direc_num",
    'equal', 'ne', 'less_than', 'greater_than', 'greater_equal', 'less_equal', 'approx',
    'degree',
    'round_brackets', 'bracket', 'braces',
    'square_root',
    'root',
    "serial_one", "serial_two", "serial_three", "serial_four", "serial_five", "serial_six", "serial_seven", "serial_eight", "serial_nine",
    "centigrade", "fahrenheit",
    "toarrow",
    "leftarrow",
    "uparrow",
    "downarrow",
    "xrightarrow_chemical",
    "xlongequal_chemical",
    "xrightleftharpoons_chemical",
    "r_superscript", "r_subscript", "r_sub_sup", "l_superscript", "l_subscript", "l_sub_sup",
  ]
}

//   export default Formular
