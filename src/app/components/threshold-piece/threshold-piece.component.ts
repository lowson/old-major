import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-threshold-piece',
  templateUrl: 'threshold-piece.component.html',
  styleUrls: ['threshold-piece.component.css'],
  directives: [MaterializeDirective]
})
export class ThresholdPieceComponent {
  @Input() rule: Rule;
}
