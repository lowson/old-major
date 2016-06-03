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
var PayloadModifierComponent = (function () {
    function PayloadModifierComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PayloadModifierComponent.prototype, "bit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PayloadModifierComponent.prototype, "i", void 0);
    PayloadModifierComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-payload-modifier',
            templateUrl: 'payload-modifier.component.html',
            styleUrls: ['payload-modifier.component.css'],
            directives: [angular2_materialize_1.MaterializeDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], PayloadModifierComponent);
    return PayloadModifierComponent;
}());
exports.PayloadModifierComponent = PayloadModifierComponent;
//# sourceMappingURL=/home/agignac/Projects/old-major-2/old-major/tmp/broccoli_type_script_compiler-input_base_path-LdGsmNED.tmp/0/app/components/payload-modifier/payload-modifier.component.js.map