import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-fragbits-piece',
  templateUrl: 'fragbits-piece.component.html',
  styleUrls: ['fragbits-piece.component.css'],
  directives: [MaterializeDirective]
})
export class FragbitsPieceComponent {
  @Input() rule: Rule;
}
