import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-general-piece',
  templateUrl: 'general-piece.component.html',
  styleUrls: ['general-piece.component.css'],
  directives: [MaterializeDirective]
})
export class GeneralPieceComponent {
  @Input() rule: Rule;

  addReference() {
    this.rule.references.push({
      type: 'url',
      value: ''
    });
  }

  addMetadata() {
    this.rule.metadata.push({
      k: '',
      v: ''
    });
  }

}
