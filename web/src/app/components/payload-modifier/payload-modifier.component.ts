import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';

@Component({
  moduleId: module.id,
  selector: 'app-payload-modifier',
  templateUrl: 'payload-modifier.component.html',
  styleUrls: ['payload-modifier.component.css'],
  directives: [MaterializeDirective]
})
export class PayloadModifierComponent {
  @Input() bit: any;
  @Input() i: number;
}
