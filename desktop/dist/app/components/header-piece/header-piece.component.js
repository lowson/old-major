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
var HeaderPieceComponent = (function () {
    function HeaderPieceComponent() {
        this.hostVariables = ['any', '$HOME_NET', '$EXTERNAL_NET'];
        this.portVariables = ['any', '$HTTP_PORTS'];
    }
    HeaderPieceComponent.prototype.toggleDir = function () {
        if (this.rule.dir == '->') {
            this.rule.dir = '<->';
        }
        else {
            this.rule.dir = '->';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', rule_1.Rule)
    ], HeaderPieceComponent.prototype, "rule", void 0);
    HeaderPieceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header-piece',
            templateUrl: 'header-piece.component.html',
            styleUrls: ['header-piece.component.css'],
            directives: [angular2_materialize_1.MaterializeDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderPieceComponent);
    return HeaderPieceComponent;
}());
exports.HeaderPieceComponent = HeaderPieceComponent;
//# sourceMappingURL=/home/agignac/Projects/old-major-2/old-major/tmp/broccoli_type_script_compiler-input_base_path-LdGsmNED.tmp/0/app/components/header-piece/header-piece.component.js.map