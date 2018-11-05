'use strict';

goog.provide('Blockly.Blocks.sensor');

goog.require('Blockly.Blocks');

Blockly.Blocks.sensor.HUE = 40//'#9e77c9'//40;

Blockly.Blocks['sensor_mixgo_button_is_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('btn')
            .appendField(Blockly.MIXLY_BUTTON)
            .setCheck(Number);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_IS_PRESSED);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_SENOR_IS_PRESSED);
    }
};

Blockly.Blocks['sensor_mixgo_button_was_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('btn')
            .appendField(Blockly.MIXLY_BUTTON)
            .setCheck(Number);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WAS_PRESSED);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_SENOR_WAS_PRESSED);
    }
};

Blockly.Blocks['sensor_mixgo_button_get_presses'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('btn')
            .appendField(Blockly.MIXLY_BUTTON)
            .setCheck(Number);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_GET_PRESSES);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN+Blockly.MIXLY_BUTTON+Blockly.MIXLY_GET_PRESSES);
    }
};

Blockly.Blocks.sensor_mpu9250_attachGestureInterrupt = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_MICROBIT_JS_CURRENT_GESTURE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_shake, "shake"], [Blockly.MIXLY_MICROBIT_up, "up"], [Blockly.MIXLY_MICROBIT_down, "down"], [Blockly.MIXLY_MICROBIT_left, "left"], [Blockly.MIXLY_MICROBIT_right, "right"], [Blockly.MIXLY_MICROBIT_face_up, "face up"], [Blockly.MIXLY_MICROBIT_face_down, "face down"], [Blockly.MIXLY_MICROBIT_freefall, "freefall"], ["3g", "3g"], ["6g", "6g"], ["8g", "8g"]]), "gesture");
        this.appendStatementInput('DO')
            .appendField(Blockly.MIXLY_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('gesture');
        var mode0 = Blockly.MIXLY_MICROBIT_JS_CURRENT;
        var mode1 = MSG.catSensor;
        var mode2 = Blockly.MIXLY_MICROBIT_JS_STATE;
        var mode3 = Blockly.MIXLY_MICROBIT_PERFORMANCE
        var TOOLTIPS = {
        'shake': Blockly.MIXLY_MICROBIT_shake,
        'up': Blockly.MIXLY_MICROBIT_up,
        'down':Blockly.MIXLY_MICROBIT_down,
        'left':Blockly.MIXLY_MICROBIT_left,
        'right':Blockly.MIXLY_MICROBIT_right,
        'face up': Blockly.MIXLY_MICROBIT_face_up,
        'face down': Blockly.MIXLY_MICROBIT_face_down,
        'freefall':Blockly.MIXLY_MICROBIT_freefall,
        '3g': '3g',
        '6g': '6g',
        '8g': '8g'
      };
      return mode0 +mode1+mode2+ TOOLTIPS[mode]+mode3;
    });
    }
};

Blockly.Blocks['sensor_mpu9250_get_acceleration'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .setCheck("var");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_JS_ACCELERATION)
            .appendField(new Blockly.FieldDropdown([
                ["x", "x"],
                ["y", "y"],
                ["z", "z"],
                ["(x,y,z)", "values"]
            ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_ACCELERATION);
        var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('key');
        var mode0 = Blockly.MIXLY_MICROBIT_PY_STORAGE_GET;
        var mode1 = Blockly.MIXLY_MICROBIT_Direction;
        var mode2 = Blockly.MIXLY_MICROBIT_JS_ACCELERATION1;
        var TOOLTIPS = {
        'x': 'x',
        'y': 'y',
        'z': 'z',
        '(x,y,z)':Blockly.MIXLY_MICROBIT_Shiliang_Direction,
      };
      return mode0 +TOOLTIPS[mode]+mode1+mode2;
    });
    }
};


Blockly.Blocks['sensor_light_level'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_JS_LIGHT_LEVEL)
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};
/*
Blockly.Blocks['sensor_mpu9250_calibrate_compass'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .setCheck("var");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_JS_CALIBRATE_COMPASS)
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_CALIBRATE_COMPASS);
    }
};
Blockly.Blocks['sensor_mpu9250_is_compass_calibrated'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .setCheck("var");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_JS_IS_COMPASS_CALIBRATED)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_IS_COMPASS_CALIBRATED1);
    }
};
Blockly.Blocks['sensor_mpu9250_compass_heading'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .setCheck("var");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_JS_COMPASS_HEADING)
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};
*/
Blockly.Blocks['sensor_mpu9250_temperature'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .setCheck("var");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_GETTEMPERATUE)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_GETTEMPERATUE);
    }
};


Blockly.Blocks['sensor_mpu9250_field_strength'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .setCheck("var");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_JS_GET_COMPASS)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_JS_FIELD_STRENGTH,'strength'],[Blockly.MIXLY_MICROBIT_JS_COMPASS_HEADING,'heading']]),'compass');
        this.setOutput(true, Number);
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('compass');
        var mode0 = Blockly.MIXLY_MICROBIT_JS_GET_COMPASS;
        var TOOLTIPS = {
        'strength':Blockly.MIXLY_MICROBIT_JS_FIELD_STRENGTH,
        'heading':Blockly.MIXLY_MICROBIT_JS_COMPASS_HEADING
      };
      return mode0 +TOOLTIPS[mode];
    });
    }
};


Blockly.Blocks['sensor_rotation'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .setCheck("var");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_JS_ROTATION)
            .appendField(new Blockly.FieldDropdown([
                ["pitch", "Rotation.Pitch"],
                ["roll", "Rotation.Roll"]
            ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};
Blockly.Blocks['sensor_magnetic'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_JS_MAGETIC_FORCE)
            .appendField(new Blockly.FieldDropdown([
                ["x", "Dimension.X"],
                ["y", "Dimension.Y"],
                ["z", "Dimension.Z"],
                ["strength", "Dimension.Strength"]
            ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['sensor_distance_hrsc04'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_CHAOSHENGBO)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_CHAOSHENGBO);
    }
};

Blockly.Blocks.DS1307_init = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("").appendField(Blockly.MIXLY_RTCINIT);
        //this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTCTypeList), 'RTCType');
        this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField('myRTC');
        this.appendValueInput("SDA")
            .appendField("SDA#")
            .setCheck(Number);
        this.appendValueInput("SCL")
            .appendField("SCL#")
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_RTCINIT);
    },
    //mutation有问题，暂时弃用
    /*mutationToDom: function() {
        var container = document.createElement('mutation');
        var RTCType = (this.getFieldValue('RTCType') == 'DS1302');
        console.log('======change in mutationToDom==========')
        console.log(RTCType);
        container.setAttribute('RTCType', RTCType);
        return container;
    },
    domToMutation: function(xmlElement) {
        var type = (xmlElement.getAttribute('RTCType') == 'true');
        console.log('======change in domToMutation==========')
        console.log(type);
        this.updateShape_(type);
    },
    updateShape_: function(type) {
    // Add or remove reset pin.
    console.log('======change in updateShape_==========')
    console.log(type);
    if (type) {
        console.log('why not me?')
        this.appendValueInput("RST")
            .appendField("RST#")
            .setCheck(Number);
    } else{
      /*if (this.childBlocks_.length > 0) {
         if (this.childBlocks_[length-1].type == 'Number') {
            this.childBlocks_[length-1].unplug();
            break;
          }
      }
      this.removeInput('RST');
    }
  }*/

};

var RTC_TIME_TYPE = [
  [Blockly.MIXLY_YEAR, "Year"],
  [Blockly.MIXLY_MONTH, "Month"],
  [Blockly.MIXLY_DAY, "Day"],
  [Blockly.MIXLY_HOUR, "Hour"],
  [Blockly.MIXLY_MINUTE, "Minute"],
  [Blockly.MIXLY_SECOND, "Second"],
  [Blockly.MIXLY_WEEK, "Week"],
  [Blockly.MIXLY_MIX1, "Mix1"],
  [Blockly.MIXLY_MIX2, "Mix2"],
];


//传感器-实时时钟块_获取时间
Blockly.Blocks.RTC_get_time = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendValueInput('SUB')
        .setCheck("var");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_RTCGETTIME);
    // this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField('myRTC');
    // this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    // var thisBlock = this;
    //     this.setTooltip(function() {
    //     var mode = thisBlock.getFieldValue('TIME_TYPE');
    //     var mode0 = Blockly.MIXLY_RTCGETTIME;
    //     var TOOLTIPS = {
    //     'Year':Blockly.MIXLY_YEAR,
    //     'Month':Blockly.MIXLY_MONTH,
    //     'Day':Blockly.MIXLY_DAY,
    //     'Hour':Blockly.MIXLY_HOUR,
    //     'Minute':Blockly.MIXLY_MINUTE,
    //     'Second':Blockly.MIXLY_SECOND,
    //     'Week':Blockly.MIXLY_WEEK,
    //     'Mix1':Blockly.MIXLY_MIX1,
    //     'Mix2':Blockly.MIXLY_MIX2
    //   };
      // return mode0 +TOOLTIPS[mode];
    // });
  }
};

Blockly.Blocks.RTC_set_time = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_RTCSETTIME).appendField('myRTC');
    this.appendValueInput("hour").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.MIXLY_HOUR);
    this.appendValueInput("minute").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.MIXLY_MINUTE);
    this.appendValueInput("second").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.MIXLY_SECOND);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.MIXLY_RTCSETTIME+Blockly.MIXLY_MIX2);
   }
};

Blockly.Blocks.RTC_set_date = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_RTCSETDATE).appendField('myRTC');
    this.appendValueInput("year").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.MIXLY_YEAR);
    this.appendValueInput("month").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.MIXLY_MONTH);
    this.appendValueInput("day").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("  "+Blockly.MIXLY_DAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_RTCSETDATE+Blockly.MIXLY_MIX1);
  }
};

Blockly.Blocks['sensor_compass_reset'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.sensor.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset",
      "message0" : Blockly.MIXLY_MICROBIT_Reset_COMPASS
    });
    this.setTooltip(Blockly.MIXLY_MICROBIT_Reset_COMPASS);
  }
};

Blockly.Blocks.HCSR04 = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_CHAOSHENGBO);
        this.appendValueInput("PIN1", Number)
            .appendField('Trig #')
            .setCheck(Number);
        this.appendValueInput("PIN2", Number)
            .appendField('Echo #')
            .setCheck(Number);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    }

};

Blockly.Blocks.sensor_dht11 = {
    init: function () {
        var WHAT = [[Blockly.MIXLY_DHT11_T, 'temperature'], [Blockly.MIXLY_DHT11_H, 'relative_humidity'], [Blockly.MIXLY_DHT11_T_H, 'tempandhum']];
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new Blockly.FieldDropdown([['DHT11', 'dht11']
                , ['DHT22', 'dht22']//, ['DHT21', '21'], ['DHT33', '33'], ['DHT44', '44']
                ]), 'TYPE')
            .appendField(Blockly.MIXLY_PIN + " #")
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('WHAT');
            var TOOLTIPS = {
                'temperature': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
                'humidity': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM,
                'all': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM_HUM
            };
            return TOOLTIPS[op];
        });
    }
};



Blockly.Blocks['sensor_mixgo_light'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_LIGHT);
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['sensor_mixgo_sound'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_SOUND);
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['number1'] = {
   init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([["1", "touch1"], ["2", "touch2"],["3", "touch3"],["4", "touch4"]]), 'op')
    this.setOutput(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_HIGHLOW);
  }
};

Blockly.Blocks['sensor_mixgo_pin_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("button")
            .appendField(Blockly.MIXLY_ESP32_TOUCH_SENSOR)
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_IS_TOUCHED);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_sensor_pin_pressed);
    }
};

// Blockly.Blocks.controls_attachInterrupt = {
//   init: function() {
//     this.setColour(Blockly.Blocks.sensor.HUE);
//     this.appendDummyInput("")
//         .appendField(Blockly.MIXLY_MICROBIT_JS_INTERRUPT_BTN)
//         .appendField(new Blockly.FieldDropdown([["A", "A"],["B","A"]]), "button");
//     this.appendDummyInput("")
//         .appendField(Blockly.MIXLY_MODE)
//         .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_RISING, "Pin.IRQ_RISING"], [Blockly.MIXLY_FALLING, "Pin.IRQ_FALLING"], [Blockly.MIXLY_CHANGE, "(Pin.IRQ_RISING or Pin.IRQ_FALLING)"]]), "mode");
//     this.appendStatementInput('DO')
//         .appendField(Blockly.MIXLY_DO);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setInputsInline(true);
//     this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ATTACHINTERRUPT);
//   }
// };

Blockly.Blocks['sensor_mixgo_pin_near'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TEXT_TRIM_LEFT, "left"], [Blockly.Msg.TEXT_TRIM_RIGHT, "right"]]), "direction")
            .appendField(Blockly.MIXLY_ESP32_NEAR);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_sensor_pin_pressed);
    }
};

Blockly.Blocks.RTC_set_datetime = {
 init: function() {    
    this.setColour(Blockly.Blocks.sensor.HUE);
    // this.appendDummyInput()
    this.appendValueInput('SUB')
        .appendField(Blockly.MIXLY_RTC_TIME)
        .setCheck("var");
    this.appendValueInput('year')
        .setCheck(Number)
        .appendField("         "+Blockly.MIXLY_YEAR);
    this.appendValueInput('month')
        .setCheck(Number)
        .appendField("         "+Blockly.MIXLY_MONTH);   
    this.appendValueInput('day')
        .setCheck(Number)
        .appendField("         "+Blockly.MIXLY_DAY);   
    this.appendValueInput('weekday')
        .setCheck(Number)
        .appendField("         "+Blockly.MIXLY_NOVA_RTC_WEEK);   
    this.appendValueInput('hour')
        .setCheck(Number)
        .appendField("         "+Blockly.MIXLY_HOUR);                       
    this.appendValueInput('minute')
        .setCheck(Number)
        .appendField("         "+Blockly.MIXLY_MINUTE);
    this.appendValueInput('second')
        .setCheck(Number)
        .appendField("         "+Blockly.MIXLY_SECOND);
    this.appendValueInput('millisecond')
        .setCheck(Number)
        .appendField("         "+Blockly.MIXLY_MILLISECOND);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
   //this.setTooltip(Blockly.Msg.TURTLE_WRITE_TOOLTIP);    
  }
};

Blockly.Blocks.sensor_rtc_init = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput("")
            .appendField("RTC")
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_SETUP)
            .setCheck("var");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip();
    }
};

Blockly.Blocks.sensor_use_i2c_init = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('I2CSUB')
            .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH+"I2C")
            .setCheck("var");
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_MAKE)
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_SETUP + Blockly.Msg.LISTS_SET_INDEX_INPUT_TO)
            .appendField(new Blockly.FieldDropdown([
                ["MPU9250", "MPU9250"],
                ["SHT20", "SHT20"],
                ["BMP280", "BMP280"]
                ]), "key");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip();
    }
};

Blockly.Blocks['sensor_bmp'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .appendField("BMP280")
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_GETTEMPERATUE, "get_BMP_temperature()"],
                [Blockly.MIXLY_GETPRESSURE, "get_BMP_pressure()"]
                ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_Board_temperature);
    }
};

Blockly.Blocks['sensor_sht'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .appendField("SHT20")
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_GETTEMPERATUE, "get_SHT_temperature()"],
                [Blockly.MIXLY_GETHUMIDITY, "get_SHT_relative_humidity()"]
                ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
     }
};

Blockly.Blocks.sensor_ds18x20 = {
     init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("PIN", Number)
            .appendField("DS18x20 "+Blockly.MIXLY_PIN + " #")
            .setCheck(Number);
		this.appendDummyInput("")
            .appendField(Blockly.MIXLY_GETTEMPERATUE);
        this.setInputsInline(true);
        this.setOutput(true, Number);
    }
};

Blockly.Blocks['sensor_button_is_pressed']=Blockly.Blocks['sensor_mixgo_button_is_pressed'];
Blockly.Blocks['sensor_button_was_pressed']=Blockly.Blocks['sensor_mixgo_button_was_pressed'];
Blockly.Blocks['sensor_button_get_presses']=Blockly.Blocks['sensor_mixgo_button_get_presses'];
Blockly.Blocks['sensor_pin_pressed']=Blockly.Blocks['sensor_mixgo_pin_pressed'];
Blockly.Blocks['sensor_pin_near']=Blockly.Blocks['sensor_mixgo_pin_near'];
Blockly.Blocks['sensor_light']=Blockly.Blocks['sensor_mixgo_light'];
Blockly.Blocks['sensor_sound']=Blockly.Blocks['sensor_mixgo_sound'];
Blockly.Blocks['sensor_get_acceleration']=Blockly.Blocks['sensor_mixgo_get_acceleration'];
Blockly.Blocks['dht11']=Blockly.Blocks['sensor_dht11']
