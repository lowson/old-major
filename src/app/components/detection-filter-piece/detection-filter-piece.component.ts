import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-detection-filter-piece',
  templateUrl: 'detection-filter-piece.component.html',
  styleUrls: ['detection-filter-piece.component.css'],
  directives: [MaterializeDirective]
})
export class DetectionFilterPieceComponent {
  @Input() rule: Rule;
}
