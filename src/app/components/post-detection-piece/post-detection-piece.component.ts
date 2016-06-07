import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-post-detection-piece',
  templateUrl: 'post-detection-piece.component.html',
  styleUrls: ['post-detection-piece.component.css'],
  directives: [MaterializeDirective]
})
export class PostDetectionPieceComponent {
  @Input() rule: Rule;
}
