import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-flags-piece',
  templateUrl: 'flags-piece.component.html',
  styleUrls: ['flags-piece.component.css'],
  directives: [MaterializeDirective]
})
export class FlagsPieceComponent {
  @Input() rule: Rule;
}
