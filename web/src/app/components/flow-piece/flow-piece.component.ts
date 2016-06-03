import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-flow-piece',
  templateUrl: 'flow-piece.component.html',
  styleUrls: ['flow-piece.component.css'],
  directives: [MaterializeDirective]
})
export class FlowPieceComponent {
  @Input() rule: Rule;
}
