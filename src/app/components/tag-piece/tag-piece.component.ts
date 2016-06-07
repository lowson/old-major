import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-tag-piece',
  templateUrl: 'tag-piece.component.html',
  styleUrls: ['tag-piece.component.css'],
  directives: [MaterializeDirective]
})
export class TagPieceComponent {
  @Input() rule: Rule;
}
