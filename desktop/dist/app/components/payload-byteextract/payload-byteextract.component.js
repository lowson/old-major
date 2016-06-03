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
var angular2_materialize_1 = require('angular2-materialize');
var core_1 = require('@angular/core');
var PayloadByteextractComponent = (function () {
    function PayloadByteextractComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PayloadByteextractComponent.prototype, "bit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PayloadByteextractComponent.prototype, "i", void 0);
    PayloadByteextractComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-payload-byteextract',
            templateUrl: 'payload-byteextract.component.html',
            styleUrls: ['payload-byteextract.component.css'],
            directives: [angular2_materialize_1.MaterializeDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], PayloadByteextractComponent);
    return PayloadByteextractComponent;
}());
exports.PayloadByteextractComponent = PayloadByteextractComponent;
//# sourceMappingURL=/home/agignac/Projects/old-major-2/old-major/tmp/broccoli_type_script_compiler-input_base_path-LdGsmNED.tmp/0/app/components/payload-byteextract/payload-byteextract.component.js.map