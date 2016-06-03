import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-protocol-piece',
  templateUrl: 'protocol-piece.component.html',
  styleUrls: ['protocol-piece.component.css'],
  directives: [MaterializeDirective]
})
export class ProtocolPieceComponent {
  @Input() rule: Rule;
}
