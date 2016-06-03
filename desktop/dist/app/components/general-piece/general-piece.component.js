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
var rule_1 = require('../../shared/rule');
var GeneralPieceComponent = (function () {
    function GeneralPieceComponent() {
    }
    GeneralPieceComponent.prototype.addReference = function () {
        this.rule.references.push({
            type: 'url',
            value: ''
        });
    };
    GeneralPieceComponent.prototype.addMetadata = function () {
        this.rule.metadata.push({
            k: '',
            v: ''
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', rule_1.Rule)
    ], GeneralPieceComponent.prototype, "rule", void 0);
    GeneralPieceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-general-piece',
            templateUrl: 'general-piece.component.html',
            styleUrls: ['general-piece.component.css'],
            directives: [angular2_materialize_1.MaterializeDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], GeneralPieceComponent);
    return GeneralPieceComponent;
}());
exports.GeneralPieceComponent = GeneralPieceComponent;
//# sourceMappingURL=/home/agignac/Projects/old-major-2/old-major/tmp/broccoli_type_script_compiler-input_base_path-LdGsmNED.tmp/0/app/components/general-piece/general-piece.component.js.map