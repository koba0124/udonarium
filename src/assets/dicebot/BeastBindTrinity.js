/* Generated by Opal 1.0.3 */
Opal.modules["utils/ArithmeticEvaluator"] = function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$tokenize', '$expr', '$private', '$split', '$gsub', '$mul', '$loop', '$consume', '$+', '$-', '$unary', '$*', '$div', '$zero?', '$===', '$ceil', '$/', '$to_f', '$round', '$floor', '$-@', '$term', '$expect', '$expect_number', '$!=', '$[]', '$integer?', '$to_i', '$!', '$nil?', '$match']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'ArithmeticEvaluator');

    var $nesting = [self].concat($parent_nesting), $ArithmeticEvaluator_eval$1, $ArithmeticEvaluator_tokenize$2, $ArithmeticEvaluator_add$4, $ArithmeticEvaluator_mul$6, $ArithmeticEvaluator_div$8, $ArithmeticEvaluator_unary$9, $ArithmeticEvaluator_term$10, $ArithmeticEvaluator_consume$11, $ArithmeticEvaluator_expect$12, $ArithmeticEvaluator_expect_number$13, $ArithmeticEvaluator_integer$ques$14;

    self.$$prototype.error = self.$$prototype.round_type = self.$$prototype.tokens = self.$$prototype.idx = nil;
    
    
    Opal.def(self, '$eval', $ArithmeticEvaluator_eval$1 = function(expr, round_type) {
      var self = this, ret = nil;

      
      
      if (round_type == null) {
        round_type = "omit";
      };
      self.tokens = self.$tokenize(expr);
      self.idx = 0;
      self.error = false;
      self.round_type = round_type;
      ret = self.$expr();
      if ($truthy(self.error)) {
        return 0
      } else {
        return ret
      };
    }, $ArithmeticEvaluator_eval$1.$$arity = -2);
    self.$private();
    
    Opal.def(self, '$tokenize', $ArithmeticEvaluator_tokenize$2 = function $$tokenize(expr) {
      var $$3, self = this;

      return $send(expr, 'gsub', [/[\(\)\+\-\*\/]/], ($$3 = function(e){var self = $$3.$$s || this;

      
        
        if (e == null) {
          e = nil;
        };
        return "" + " " + (e) + " ";}, $$3.$$s = self, $$3.$$arity = 1, $$3)).$split(" ")
    }, $ArithmeticEvaluator_tokenize$2.$$arity = 1);
    
    Opal.def(self, '$add', $ArithmeticEvaluator_add$4 = function $$add() {
      var $$5, self = this, ret = nil;

      
      ret = self.$mul();
      (function(){var $brk = Opal.new_brk(); try {return $send(self, 'loop', [], ($$5 = function(){var self = $$5.$$s || this;

      if ($truthy(self.$consume("+"))) {
          return (ret = $rb_plus(ret, self.$mul()))
        } else if ($truthy(self.$consume("-"))) {
          return (ret = $rb_minus(ret, self.$mul()))
        } else {
          
          Opal.brk(nil, $brk)
        }}, $$5.$$s = self, $$5.$$brk = $brk, $$5.$$arity = 0, $$5))
      } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
      return ret;
    }, $ArithmeticEvaluator_add$4.$$arity = 0);
    Opal.alias(self, "expr", "add");
    
    Opal.def(self, '$mul', $ArithmeticEvaluator_mul$6 = function $$mul() {
      var $$7, self = this, ret = nil;

      
      ret = self.$unary();
      (function(){var $brk = Opal.new_brk(); try {return $send(self, 'loop', [], ($$7 = function(){var self = $$7.$$s || this;

      if ($truthy(self.$consume("*"))) {
          return (ret = $rb_times(ret, self.$unary()))
        } else if ($truthy(self.$consume("/"))) {
          return (ret = self.$div(ret, self.$unary()))
        } else {
          
          Opal.brk(nil, $brk)
        }}, $$7.$$s = self, $$7.$$brk = $brk, $$7.$$arity = 0, $$7))
      } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
      return ret;
    }, $ArithmeticEvaluator_mul$6.$$arity = 0);
    
    Opal.def(self, '$div', $ArithmeticEvaluator_div$8 = function $$div(left, right) {
      var self = this, $case = nil;

      
      if ($truthy(right['$zero?']())) {
        
        self.error = true;
        return 0;};
      return (function() {$case = self.round_type;
      if ("roundUp"['$===']($case)) {return $rb_divide(left.$to_f(), right).$ceil()}
      else if ("roundOff"['$===']($case)) {return $rb_divide(left.$to_f(), right).$round()}
      else {return $rb_divide(left, right).$floor()}})();
    }, $ArithmeticEvaluator_div$8.$$arity = 2);
    
    Opal.def(self, '$unary', $ArithmeticEvaluator_unary$9 = function $$unary() {
      var self = this;

      if ($truthy(self.$consume("+"))) {
        return self.$unary()
      } else if ($truthy(self.$consume("-"))) {
        return self.$unary()['$-@']()
      } else {
        return self.$term()
      }
    }, $ArithmeticEvaluator_unary$9.$$arity = 0);
    
    Opal.def(self, '$term', $ArithmeticEvaluator_term$10 = function $$term() {
      var self = this, ret = nil;

      if ($truthy(self.$consume("("))) {
        
        ret = self.$expr();
        self.$expect(")");
        return ret;
      } else {
        return self.$expect_number()
      }
    }, $ArithmeticEvaluator_term$10.$$arity = 0);
    
    Opal.def(self, '$consume', $ArithmeticEvaluator_consume$11 = function $$consume(str) {
      var self = this;

      
      if ($truthy(self.tokens['$[]'](self.idx)['$!='](str))) {
        return false};
      self.idx = $rb_plus(self.idx, 1);
      return true;
    }, $ArithmeticEvaluator_consume$11.$$arity = 1);
    
    Opal.def(self, '$expect', $ArithmeticEvaluator_expect$12 = function $$expect(str) {
      var self = this;

      
      if ($truthy(self.tokens['$[]'](self.idx)['$!='](str))) {
        self.error = true};
      return (self.idx = $rb_plus(self.idx, 1));
    }, $ArithmeticEvaluator_expect$12.$$arity = 1);
    
    Opal.def(self, '$expect_number', $ArithmeticEvaluator_expect_number$13 = function $$expect_number() {
      var self = this, ret = nil;

      
      if ($truthy(self['$integer?'](self.tokens['$[]'](self.idx)))) {
      } else {
        
        self.error = true;
        self.idx = $rb_plus(self.idx, 1);
        return 0;
      };
      ret = self.tokens['$[]'](self.idx).$to_i();
      self.idx = $rb_plus(self.idx, 1);
      return ret;
    }, $ArithmeticEvaluator_expect_number$13.$$arity = 0);
    return (Opal.def(self, '$integer?', $ArithmeticEvaluator_integer$ques$14 = function(str) {
      var self = this;

      return /^\d+$/.$match(str)['$nil?']()['$!']()
    }, $ArithmeticEvaluator_integer$ques$14.$$arity = 1), nil) && 'integer?';
  })($nesting[0], null, $nesting)
};

/* Generated by Opal 1.0.3 */
Opal.modules["utils/format"] = function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $truthy = Opal.truthy;

  Opal.add_stubs(['$module_function', '$===', '$to_s', '$==', '$>']);
  return (function($base, $parent_nesting) {
    var self = $module($base, 'Format');

    var $nesting = [self].concat($parent_nesting), $Format_comparison_operator$1, $Format_modifier$2;

    
    self.$module_function();
    
    Opal.def(self, '$comparison_operator', $Format_comparison_operator$1 = function $$comparison_operator(op) {
      var self = this, $case = nil;

      return (function() {$case = op;
      if ("=="['$===']($case)) {return "="}
      else if ("!="['$===']($case)) {return "<>"}
      else if ($$($nesting, 'Symbol')['$===']($case)) {return op.$to_s()}
      else { return nil }})()
    }, $Format_comparison_operator$1.$$arity = 1);
    
    Opal.def(self, '$modifier', $Format_modifier$2 = function $$modifier(number) {
      var self = this;

      if (number['$=='](0)) {
        return ""
      } else if ($truthy($rb_gt(number, 0))) {
        return "" + "+" + (number)
      } else {
        return number.$to_s()
      }
    }, $Format_modifier$2.$$arity = 1);
  })($nesting[0], $nesting)
};

/* Generated by Opal 1.0.3 */
Opal.modules["utils/normalize"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$module_function', '$===', '$==', '$to_i']);
  return (function($base, $parent_nesting) {
    var self = $module($base, 'Normalize');

    var $nesting = [self].concat($parent_nesting), $Normalize_comparison_operator$1, $Normalize_target_number$2;

    
    self.$module_function();
    
    Opal.def(self, '$comparison_operator', $Normalize_comparison_operator$1 = function $$comparison_operator(op) {
      var self = this, $case = nil;

      return (function() {$case = op;
      if (/<=|=</['$===']($case)) {return "<="}
      else if (/>=|=>/['$===']($case)) {return ">="}
      else if (/<>|!=|=!/['$===']($case)) {return "!="}
      else if (/</['$===']($case)) {return "<"}
      else if (/>/['$===']($case)) {return ">"}
      else if (/\=/['$===']($case)) {return "=="}
      else { return nil }})()
    }, $Normalize_comparison_operator$1.$$arity = 1);
    
    Opal.def(self, '$target_number', $Normalize_target_number$2 = function $$target_number(val) {
      var self = this;

      if (val['$==']("?")) {
        return val
      } else {
        return val.$to_i()
      }
    }, $Normalize_target_number$2.$$arity = 1);
  })($nesting[0], $nesting)
};

/* Generated by Opal 1.0.3 */
Opal.modules["utils/table"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$freeze', '$match', '$raise', '$to_i', '$[]', '$roll', '$-']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Table');

    var $nesting = [self].concat($parent_nesting), $Table_initialize$1, $Table_roll$2;

    self.$$prototype.times = self.$$prototype.sides = self.$$prototype.name = self.$$prototype.items = nil;
    
    
    Opal.def(self, '$initialize', $Table_initialize$1 = function $$initialize(name, type, items) {
      var self = this, m = nil;

      
      self.name = name;
      self.items = items.$freeze();
      m = /(\d+)D(\d+)/i.$match(type);
      if ($truthy(m)) {
      } else {
        self.$raise($$($nesting, 'ArgumentError'), "" + "Unexpected table type: " + (type))
      };
      self.times = m['$[]'](1).$to_i();
      return (self.sides = m['$[]'](2).$to_i());
    }, $Table_initialize$1.$$arity = 3);
    return (Opal.def(self, '$roll', $Table_roll$2 = function $$roll(bcdice) {
      var $a, $b, self = this, value = nil, index = nil;

      
      $b = bcdice.$roll(self.times, self.sides), $a = Opal.to_ary($b), (value = ($a[0] == null ? nil : $a[0])), $b;
      index = $rb_minus(value, self.times);
      return "" + (self.name) + "(" + (value) + ") ＞ " + (self.items['$[]'](index));
    }, $Table_roll$2.$$arity = 1), nil) && 'roll';
  })($nesting[0], null, $nesting)
};

/* Generated by Opal 1.0.3 */
Opal.modules["utils/d66_grid_table"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$freeze', '$roll', '$-', '$[]']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'D66GridTable');

    var $nesting = [self].concat($parent_nesting), $D66GridTable_initialize$1, $D66GridTable_roll$2;

    self.$$prototype.name = self.$$prototype.items = nil;
    
    
    Opal.def(self, '$initialize', $D66GridTable_initialize$1 = function $$initialize(name, items) {
      var self = this;

      
      self.name = name;
      return (self.items = items.$freeze());
    }, $D66GridTable_initialize$1.$$arity = 2);
    return (Opal.def(self, '$roll', $D66GridTable_roll$2 = function $$roll(bcdice) {
      var $a, $b, self = this, dice1 = nil, dice2 = nil, index1 = nil, index2 = nil;

      
      $b = bcdice.$roll(1, 6), $a = Opal.to_ary($b), (dice1 = ($a[0] == null ? nil : $a[0])), $b;
      $b = bcdice.$roll(1, 6), $a = Opal.to_ary($b), (dice2 = ($a[0] == null ? nil : $a[0])), $b;
      index1 = $rb_minus(dice1, 1);
      index2 = $rb_minus(dice2, 1);
      return "" + (self.name) + "(" + (dice1) + (dice2) + ") ＞ " + (self.items['$[]'](index1)['$[]'](index2));
    }, $D66GridTable_roll$2.$$arity = 1), nil) && 'roll';
  })($nesting[0], null, $nesting)
};

/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $hash2 = Opal.hash2;

  Opal.add_stubs(['$require', '$parse', '$roll_with_dice_pool', '$empty?', '$sort', '$map', '$max', '$inject', '$calc_total', '$!=', '$join', '$compact', '$command_expr', '$interim_expr', '$dice_status', '$to_s', '$result_compare', '$private', '$match', '$to_i', '$[]', '$eval', '$new', '$parse_critical', '$!', '$nil?', '$parse_fumble', '$split', '$to_proc', '$>', '$size', '$pop', '$-', '$comparison_operator', '$min', '$+', '$critical_from_humanity', '$<=', '$roll', '$modifier', '$critical?', '$fumble?', '$>=', '$<', '$send', '$roll_tables', '$freeze', '$setPrefixes', '$keys']);
  
  self.$require("utils/ArithmeticEvaluator");
  self.$require("utils/format");
  self.$require("utils/normalize");
  self.$require("utils/table");
  self.$require("utils/d66_grid_table");
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'BeastBindTrinity');

    var $nesting = [self].concat($parent_nesting), $BeastBindTrinity_initialize$1, $BeastBindTrinity_rollDiceCommand$18;

    
    Opal.const_set($nesting[0], 'ID', "BeastBindTrinity");
    Opal.const_set($nesting[0], 'NAME', "ビーストバインド トリニティ");
    Opal.const_set($nesting[0], 'SORT_KEY', "ひいすとはいんととりにてい");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定　(nBB+m%w@x#y$z&v)\n" + "　n個のD6を振り、出目の大きい2個から達成値を算出。修正mも可能。\n" + "\n" + "　%w、@x、#y、$z、&vはすべて省略可能。\n" + "＞%w：現在の人間性が w であるとして、クリティカル値(C値)を計算。\n" + "・省略した場合、C値=12として達成値を算出する。\n" + "＞@x：クリティカル値修正。（加減式でも入力可能）\n" + "・xに直接数字を書くと、C値をその数字に上書きする。\n" + "　「絶対にクリティカルしない」状態は、@13など xを13以上に指定すること。\n" + "・xの先頭が「+」か「-」なら、計算したC値にその値を加算。例）@-1、@+2\n" + "　この方法でC値をプラスする場合、上限は12となる。\n" + "＞#y、#Ay：ファンブル値修正。（加減式でも入力可能）\n" + "・yに直接数字を書くと、ファンブル値をその数字に設定。\n" + "・yの数字の先頭が「+」か「-」なら、ファンブル値=2にその数字を加算。例）#+2\n" + "・※#Ayとすると、ファンブルしても達成値を通常通り算出。　例）#A+1\n" + "＞$z：ダイスの出目をzに固定して判定する。複数指定可。\n" + "　　　《運命歪曲》など「ダイスの１個を振り直す」効果等に使用する。\n" + "　例）2BB$1 →ダイスを2個振る判定で、ダイス1個の出目を1で固定\n" + "　例）2BB$16→ダイスを2個振る判定で、ダイスの出目を1と6で固定\n" + "＞&v：出目がv未満のダイスがあれば、出目がvだったものとして達成値を計算する。\n" + "　例）2BB&3 →出目3未満（→出目1、2）を出目3だったものとして計算。\n" + "\n" + "・D66ダイスあり\n" + "・邂逅表：EMO\n" + "・暴露表：EXPO_A\n" + "・魔獣化暴露表：EXPO_B\n" + "・アイドル専用暴露表：EXPO_I\n" + "・アイドル専用魔獣化暴露表：EXPO_J\n" + "・正体判明チャートA～C：FACE_A, FACE_B, FACE_C\n");
    
    Opal.def(self, '$initialize', $BeastBindTrinity_initialize$1 = function $$initialize() {
      var $iter = $BeastBindTrinity_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $BeastBindTrinity_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $BeastBindTrinity_initialize$1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 0;
      return (self.d66Type = 2);
    }, $BeastBindTrinity_initialize$1.$$arity = 0);
    (function($base, $super, $parent_nesting) {
      var self = $klass($base, $super, 'BBCommand');

      var $nesting = [self].concat($parent_nesting), $BBCommand_initialize$2, $BBCommand_roll$3, $BBCommand_parse$5, $BBCommand_parse_critical$6, $BBCommand_critical_from_humanity$7, $BBCommand_parse_fumble$8, $BBCommand_roll_with_dice_pool$9, $BBCommand_command_expr$11, $BBCommand_interim_expr$12, $BBCommand_dice_status$13, $BBCommand_fumble$ques$14, $BBCommand_critical$ques$15, $BBCommand_calc_total$16, $BBCommand_result_compare$17;

      self.$$prototype.parse_error = self.$$prototype.command = self.$$prototype.dice_pool = self.$$prototype.dice_num = self.$$prototype.modify_number = self.$$prototype.critical = self.$$prototype.fumble = self.$$prototype.cmp_op = self.$$prototype.target_number = self.$$prototype.dice_total = self.$$prototype.keep_value_on_fumble = nil;
      
      
      Opal.def(self, '$initialize', $BBCommand_initialize$2 = function $$initialize(command) {
        var self = this;

        
        self.command = command;
        return self.$parse();
      }, $BBCommand_initialize$2.$$arity = 1);
      
      Opal.def(self, '$roll', $BBCommand_roll$3 = function $$roll(bot) {
        var $$4, self = this, dice_list_org = nil, dice_list_filtered = nil, total = nil, dice_list_org_str = nil, sequence = nil;

        
        if ($truthy(self.parse_error)) {
          return nil};
        self.bot = bot;
        dice_list_org = self.$roll_with_dice_pool();
        if ($truthy(dice_list_org['$empty?']())) {
          return "ERROR:振るダイスの数が0個です"};
        dice_list_filtered = $send(dice_list_org, 'map', [], ($$4 = function(dice){var self = $$4.$$s || this;
          if (self.dice_value_lower_limit == null) self.dice_value_lower_limit = nil;

        
          
          if (dice == null) {
            dice = nil;
          };
          return [dice, self.dice_value_lower_limit].$max();}, $$4.$$s = self, $$4.$$arity = 1, $$4)).$sort();
        self.dice_total = dice_list_filtered.$inject(0, "+");
        total = self.$calc_total();
        if ($truthy(dice_list_filtered['$!='](dice_list_org))) {
          dice_list_org_str = "" + "[" + (dice_list_org.$join(",")) + "]"};
        sequence = [self.$command_expr(), dice_list_org_str, self.$interim_expr(dice_list_filtered), self.$dice_status(), total.$to_s(), self.$result_compare(total)].$compact();
        return sequence.$join(" ＞ ");
      }, $BBCommand_roll$3.$$arity = 1);
      self.$private();
      
      Opal.def(self, '$parse', $BBCommand_parse$5 = function $$parse() {
        var $a, self = this, m = nil;

        
        m = /^(\d+)(?:R6|BB6?)((?:[\+\-]\d+)+)?(?:%(\-?\d+))?(?:@([\+\-\d]+))?(?:#(A)?([\+\-\d]+))?(?:\$([1-6]+))?(?:&([1-6]))?(?:([>=]+)(\d+))?$/.$match(self.command);
        if ($truthy(m)) {
        } else {
          
          self.parse_error = true;
          return nil;
        };
        self.dice_num = m['$[]'](1).$to_i();
        self.modify_number = (function() {if ($truthy(m['$[]'](2))) {
          return $$($nesting, 'ArithmeticEvaluator').$new().$eval(m['$[]'](2))
        } else {
          return 0
        }; return nil; })();
        self.critical = self.$parse_critical(m['$[]'](3), m['$[]'](4));
        self.keep_value_on_fumble = m['$[]'](5)['$nil?']()['$!']();
        self.fumble = self.$parse_fumble(m['$[]'](6));
        self.dice_pool = (function() {if ($truthy(m['$[]'](7))) {
          return $send(m['$[]'](7).$split(""), 'map', [], "to_i".$to_proc())
        } else {
          return []
        }; return nil; })();
        if ($truthy($rb_gt(self.dice_pool.$size(), self.dice_num))) {
          self.dice_pool.$pop($rb_minus(self.dice_pool.$size(), self.dice_num))};
        self.dice_value_lower_limit = m['$[]'](8).$to_i();
        self.cmp_op = $$($nesting, 'Normalize').$comparison_operator(m['$[]'](9));
        self.target_number = ($truthy($a = m['$[]'](10)) ? m['$[]'](10).$to_i() : $a);
        return (self.parse_error = false);
      }, $BBCommand_parse$5.$$arity = 0);
      
      Opal.def(self, '$parse_critical', $BBCommand_parse_critical$6 = function $$parse_critical(humanity, atmark) {
        var self = this, atmark_value = nil, critical = nil;

        
        humanity = (function() {if ($truthy(humanity)) {
          return humanity.$to_i()
        } else {
          return 99
        }; return nil; })();
        atmark_value = (function() {if ($truthy(atmark)) {
          return $$($nesting, 'ArithmeticEvaluator').$new().$eval(atmark)
        } else {
          return 0
        }; return nil; })();
        critical = (function() {if ($truthy(/^[+-]/.$match(atmark))) {
          return [$rb_plus(self.$critical_from_humanity(humanity), atmark_value), 12].$min()
        } else if ($truthy(atmark)) {
          return atmark_value
        } else {
          return self.$critical_from_humanity(humanity)
        }; return nil; })();
        return critical;
      }, $BBCommand_parse_critical$6.$$arity = 2);
      
      Opal.def(self, '$critical_from_humanity', $BBCommand_critical_from_humanity$7 = function $$critical_from_humanity(humanity) {
        var self = this;

        if ($truthy($rb_le(humanity, 0))) {
          return 9
        } else if ($truthy($rb_le(humanity, 20))) {
          return 10
        } else if ($truthy($rb_le(humanity, 40))) {
          return 11
        } else {
          return 12
        }
      }, $BBCommand_critical_from_humanity$7.$$arity = 1);
      
      Opal.def(self, '$parse_fumble', $BBCommand_parse_fumble$8 = function $$parse_fumble(sharp) {
        var self = this, sharp_value = nil;

        
        sharp_value = (function() {if ($truthy(sharp)) {
          return $$($nesting, 'ArithmeticEvaluator').$new().$eval(sharp)
        } else {
          return 0
        }; return nil; })();
        if ($truthy(/^[+-]/.$match(sharp))) {
          return $rb_plus(2, sharp_value)
        } else if ($truthy(sharp)) {
          return sharp_value
        } else {
          return 2
        };
      }, $BBCommand_parse_fumble$8.$$arity = 1);
      
      Opal.def(self, '$roll_with_dice_pool', $BBCommand_roll_with_dice_pool$9 = function $$roll_with_dice_pool() {
        var $$10, self = this, dice_times = nil, dice_list = nil;

        
        dice_times = $rb_minus(self.dice_num, self.dice_pool.$size());
        dice_list = $rb_plus($send($$($nesting, 'Array'), 'new', [dice_times], ($$10 = function(){var self = $$10.$$s || this;
          if (self.bot == null) self.bot = nil;

        return self.bot.$roll(1, 6)['$[]'](0)}, $$10.$$s = self, $$10.$$arity = 0, $$10)), self.dice_pool);
        return dice_list.$sort();
      }, $BBCommand_roll_with_dice_pool$9.$$arity = 0);
      
      Opal.def(self, '$command_expr', $BBCommand_command_expr$11 = function $$command_expr() {
        var self = this, modifier = nil;

        
        modifier = $$($nesting, 'Format').$modifier(self.modify_number);
        return "" + "(" + (self.dice_num) + "BB" + (modifier) + "@" + (self.critical) + "#" + (self.fumble) + (self.cmp_op) + (self.target_number) + ")";
      }, $BBCommand_command_expr$11.$$arity = 0);
      
      Opal.def(self, '$interim_expr', $BBCommand_interim_expr$12 = function $$interim_expr(dice_list) {
        var self = this, expr = nil;

        
        expr = "" + (self.dice_total) + "[" + (dice_list.$join(",")) + "]" + ($$($nesting, 'Format').$modifier(self.modify_number));
        if ($truthy(self['$critical?']())) {
          expr = $rb_plus(expr, "+20")};
        return expr;
      }, $BBCommand_interim_expr$12.$$arity = 1);
      
      Opal.def(self, '$dice_status', $BBCommand_dice_status$13 = function $$dice_status() {
        var self = this;

        if ($truthy(self['$fumble?']())) {
          return "ファンブル"
        } else if ($truthy(self['$critical?']())) {
          return "クリティカル"
        } else {
          return nil
        }
      }, $BBCommand_dice_status$13.$$arity = 0);
      
      Opal.def(self, '$fumble?', $BBCommand_fumble$ques$14 = function() {
        var self = this;

        return $rb_le(self.dice_total, self.fumble)
      }, $BBCommand_fumble$ques$14.$$arity = 0);
      
      Opal.def(self, '$critical?', $BBCommand_critical$ques$15 = function() {
        var self = this;

        return $rb_ge(self.dice_total, self.critical)
      }, $BBCommand_critical$ques$15.$$arity = 0);
      
      Opal.def(self, '$calc_total', $BBCommand_calc_total$16 = function $$calc_total() {
        var self = this, total = nil;

        
        total = $rb_plus(self.dice_total, self.modify_number);
        if ($truthy(self['$fumble?']())) {
          if ($truthy(self.keep_value_on_fumble)) {
          } else {
            total = 0
          }
        } else if ($truthy(self['$critical?']())) {
          total = $rb_plus(total, 20)};
        if ($truthy($rb_lt(total, 0))) {
          total = 0};
        return total;
      }, $BBCommand_calc_total$16.$$arity = 0);
      return (Opal.def(self, '$result_compare', $BBCommand_result_compare$17 = function $$result_compare(total) {
        var self = this;

        if ($truthy(self.cmp_op)) {
          if ($truthy(total.$send(self.cmp_op, self.target_number))) {
            return "成功"
          } else {
            return "失敗"
          }
        } else {
          return nil
        }
      }, $BBCommand_result_compare$17.$$arity = 1), nil) && 'result_compare';
    })($nesting[0], null, $nesting);
    
    Opal.def(self, '$rollDiceCommand', $BeastBindTrinity_rollDiceCommand$18 = function $$rollDiceCommand(command) {
      var self = this, ret = nil, bb = nil;

      
      if ($truthy((ret = self.$roll_tables(command, $$($nesting, 'TABLES'))))) {
        return ret};
      bb = $$($nesting, 'BBCommand').$new(command);
      return bb.$roll(self);
    }, $BeastBindTrinity_rollDiceCommand$18.$$arity = 1);
    Opal.const_set($nesting[0], 'TABLES', $hash2(["EMO", "EXPO_A", "EXPO_B", "EXPO_I", "EXPO_J", "FACE_A", "FACE_B", "FACE_C"], {"EMO": $$($nesting, 'D66GridTable').$new("邂逅表", [["家族", "家族", "信頼", "信頼", "忘却", "忘却"], ["慈愛", "慈愛", "憧憬", "憧憬", "感銘", "感銘"], ["同志", "同志", "幼子", "幼子", "興味", "興味"], ["ビジネス", "ビジネス", "師事", "師事", "好敵手", "好敵手"], ["友情", "友情", "忠誠", "忠誠", "恐怖", "恐怖"], ["執着", "執着", "軽蔑", "軽蔑", "憎悪", "憎悪"]]), "EXPO_A": $$($nesting, 'Table').$new("暴露表", "1D6", ["噂になるがすぐ忘れられる", "都市伝説として処理される", "ワイドショーをにぎわす", "シナリオ中［迫害状態］になる", "絆の対象ひとりに正体が知られる", "魔獣化暴露表へ"]), "EXPO_B": $$($nesting, 'Table').$new("魔獣化暴露表", "1D6", ["トンデモ業界の伝説になる", "シナリオ中［迫害状態］になる", "シナリオ中［迫害状態］になる", "絆の対象ひとりに正体が知られる", "絆の対象ひとりに正体が知られる", "自衛隊退魔部隊×2D6体の襲撃"]), "EXPO_I": $$($nesting, 'Table').$new("アイドル専用暴露表", "1D6", ["愉快な伝説として人気になる", "ワイドショーをにぎわす", "炎上。シナリオ中［迫害状態］", "所属事務所に2D6時間説教される", "絆の対象ひとりに正体が知られる", "アイドル専用魔獣化暴露表へ"]), "EXPO_J": $$($nesting, 'Table').$new("アイドル専用魔獣化暴露表", "1D6", ["シナリオ中［迫害状態］になる", "シナリオ中［迫害状態］になる", "絆の対象ひとりに正体が知られる", "事務所から契約を解除される", "絆の対象ひとりに正体が知られる", "1D6本のレギュラー番組を失う"]), "FACE_A": $$($nesting, 'Table').$new("正体判明チャートA", "1D6", ["あなたを受け入れてくれる", "あなたを受け入れてくれる", "絆が（拒絶）に書き換わる", "絆がエゴに書き換わる", "気絶しその事実を忘れる", "精神崩壊する"]), "FACE_B": $$($nesting, 'Table').$new("正体判明チャートB", "1D6", ["あなたを受け入れてくれる", "狂乱し攻撃してくる", "退場。その場から逃亡。暴露表へ", "絆がエゴに書き換わる", "精神崩壊する", "精神崩壊する"]), "FACE_C": $$($nesting, 'Table').$new("正体判明チャートC", "1D6", ["あなたを受け入れてくれる", "退場。その場から逃亡。暴露表へ", "退場。その場から逃亡。暴露表へ", "絆がエゴに書き換わる", "精神崩壊する", "精神崩壊する"])}).$freeze());
    return self.$setPrefixes($rb_plus(["\\d+BB.*", "\\d+R6.*"], $$($nesting, 'TABLES').$keys()));
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting);
})(Opal);
