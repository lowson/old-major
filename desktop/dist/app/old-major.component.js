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
var rule_output_1 = require('./components/rule-output');
var rule_form_1 = require('./components/rule-form');
var angular2_materialize_1 = require('angular2-materialize');
var rule_1 = require('./shared/rule');
var OldMajorAppComponent = (function () {
    function OldMajorAppComponent(el) {
        this.el = el;
        this.rule = new rule_1.Rule();
        this.invalidFieldsCollection = this.el.nativeElement.getElementsByClassName('invalid');
        // Disable header/footer if loaded through Electron/locally
        this.webApp = window.location.protocol != 'file:';
    }
    Object.defineProperty(OldMajorAppComponent.prototype, "invalidFields", {
        get: function () {
            return [].slice.call(this.invalidFieldsCollection);
        },
        enumerable: true,
        configurable: true
    });
    OldMajorAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'old-major-app',
            templateUrl: 'old-major.component.html',
            styleUrls: ['old-major.component.css'],
            directives: [rule_output_1.RuleOutputComponent, rule_form_1.RuleFormComponent, angular2_materialize_1.MaterializeDirective]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OldMajorAppComponent);
    return OldMajorAppComponent;
}());
exports.OldMajorAppComponent = OldMajorAppComponent;
//# sourceMappingURL=/home/agignac/Projects/old-major-2/old-major/tmp/broccoli_type_script_compiler-input_base_path-LdGsmNED.tmp/0/app/old-major.component.js.map