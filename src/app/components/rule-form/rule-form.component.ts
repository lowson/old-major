import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { HeaderPieceComponent } from '../header-piece';
import { GeneralPieceComponent } from '../general-piece';
import { PostDetectionPieceComponent } from '../post-detection-piece';
import { TagPieceComponent } from '../tag-piece';
import { ThresholdPieceComponent } from '../threshold-piece';
import { DetectionFilterPieceComponent } from '../detection-filter-piece';
import { RulePatternsComponent } from '../rule-patterns';
import { FlowPieceComponent } from '../flow-piece';
import { FragbitsPieceComponent } from '../fragbits-piece';
import { FlagsPieceComponent } from '../flags-piece';
import { ProtocolPieceComponent } from '../protocol-piece';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-rule-form',
  templateUrl: 'rule-form.component.html',
  styleUrls: ['rule-form.component.css'],
  directives: [
    MaterializeDirective,
    HeaderPieceComponent,
    GeneralPieceComponent,
    PostDetectionPieceComponent,
    TagPieceComponent,
    ThresholdPieceComponent,
    DetectionFilterPieceComponent,
    RulePatternsComponent,
    FlowPieceComponent,
    FragbitsPieceComponent,
    FlagsPieceComponent,
    ProtocolPieceComponent
  ]
})
export class RuleFormComponent {
  @Input() rule: Rule;
}
