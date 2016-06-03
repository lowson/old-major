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
var header_piece_1 = require('../header-piece');
var general_piece_1 = require('../general-piece');
var post_detection_piece_1 = require('../post-detection-piece');
var tag_piece_1 = require('../tag-piece');
var threshold_piece_1 = require('../threshold-piece');
var detection_filter_piece_1 = require('../detection-filter-piece');
var rule_patterns_1 = require('../rule-patterns');
var flow_piece_1 = require('../flow-piece');
var fragbits_piece_1 = require('../fragbits-piece');
var flags_piece_1 = require('../flags-piece');
var protocol_piece_1 = require('../protocol-piece');
var rule_1 = require('../../shared/rule');
var RuleFormComponent = (function () {
    function RuleFormComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', rule_1.Rule)
    ], RuleFormComponent.prototype, "rule", void 0);
    RuleFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-rule-form',
            templateUrl: 'rule-form.component.html',
            styleUrls: ['rule-form.component.css'],
            directives: [
                angular2_materialize_1.MaterializeDirective,
                header_piece_1.HeaderPieceComponent,
                general_piece_1.GeneralPieceComponent,
                post_detection_piece_1.PostDetectionPieceComponent,
                tag_piece_1.TagPieceComponent,
                threshold_piece_1.ThresholdPieceComponent,
                detection_filter_piece_1.DetectionFilterPieceComponent,
                rule_patterns_1.RulePatternsComponent,
                flow_piece_1.FlowPieceComponent,
                fragbits_piece_1.FragbitsPieceComponent,
                flags_piece_1.FlagsPieceComponent,
                protocol_piece_1.ProtocolPieceComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RuleFormComponent);
    return RuleFormComponent;
}());
exports.RuleFormComponent = RuleFormComponent;
//# sourceMappingURL=/home/agignac/Projects/old-major-2/old-major/tmp/broccoli_type_script_compiler-input_base_path-LdGsmNED.tmp/0/app/components/rule-form/rule-form.component.js.map