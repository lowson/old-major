import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-header-piece',
  templateUrl: 'header-piece.component.html',
  styleUrls: ['header-piece.component.css'],
  directives: [MaterializeDirective]
})
export class HeaderPieceComponent {
  @Input() rule: Rule;

  hostVariables: Array<string>;
  portVariables: Array<string>;

  constructor() {
    this.hostVariables = ['any', '$HOME_NET', '$EXTERNAL_NET'];
    this.portVariables = ['any', '$HTTP_PORTS'];
  }

  toggleDir() {
    if (this.rule.dir == '->') {
      this.rule.dir = '<->';
    } else {
      this.rule.dir = '->';
    }
  }

}
