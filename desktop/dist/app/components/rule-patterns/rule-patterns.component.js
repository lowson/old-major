"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_materialize_1 = require('angular2-materialize');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var payload_byteextract_1 = require('../payload-byteextract');
var payload_bytejump_1 = require('../payload-bytejump');
var payload_bytetest_1 = require('../payload-bytetest');
var payload_content_1 = require('../payload-content');
var payload_flowbits_1 = require('../payload-flowbits');
var payload_modifier_1 = require('../payload-modifier');
var payload_regex_1 = require('../payload-regex');
var rule_1 = require('../../shared/rule');
var RulePatternsComponent = (function () {
    function RulePatternsComponent(drag) {
        this.drag = drag;
        this.byteExtracts = 0;
        drag.setOptions('rule-patterns', {
            moves: function (el, container, handle) {
                return handle.className === 'material-icons';
            }
        });
    }
    RulePatternsComponent.prototype.add = function (payloadType) {
        if (payloadType != 'byteextract' || this.byteExtracts < 2) {
            this.rule.payloads.push({ t: payloadType });
        }
        if (payloadType == 'byteextract') {
            this.byteExtracts += 1;
        }
    };
    RulePatternsComponent.prototype.remove = function (id) {
        if (this.rule.payloads[id].t == 'byteextract') {
            this.byteExtracts -= 1;
        }
        this.rule.payloads.splice(id, 1);
    };
    RulePatternsComponent.prototype.to_ascii = function () {
        this.output = '';
        if (!this.input) {
            return;
        }
        var str = this.input.replace(/ /g, '');
        for (var c = 0; c < str.length; c += 2) {
            this.output += String.fromCharCode(parseInt(str.substr(c, 2), 16));
        }
    };
    RulePatternsComponent.prototype.to_hex = function () {
        this.output = '';
        if (!this.input) {
            return;
        }
        var o = [];
        for (var c = 0; c < this.input.length; c++) {
            o.push(this.input.charCodeAt(c).toString(16));
        }
        this.output = o.join(' ');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', rule_1.Rule)
    ], RulePatternsComponent.prototype, "rule", void 0);
    RulePatternsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-rule-patterns',
            templateUrl: 'rule-patterns.component.html',
            styleUrls: ['rule-patterns.component.css'],
            directives: [angular2_materialize_1.MaterializeDirective,
                ng2_dragula_1.Dragula,
                payload_byteextract_1.PayloadByteextractComponent,
                payload_bytejump_1.PayloadBytejumpComponent,
                payload_bytetest_1.PayloadBytetestComponent,
                payload_content_1.PayloadContentComponent,
                payload_flowbits_1.PayloadFlowbitsComponent,
                payload_modifier_1.PayloadModifierComponent,
                payload_regex_1.PayloadRegexComponent],
            providers: [ng2_dragula_1.DragulaService]
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], RulePatternsComponent);
    return RulePatternsComponent;
}());
exports.RulePatternsComponent = RulePatternsComponent;
//# sourceMappingURL=/home/agignac/Projects/old-major-2/old-major/tmp/broccoli_type_script_compiler-input_base_path-LdGsmNED.tmp/0/app/components/rule-patterns/rule-patterns.component.js.map