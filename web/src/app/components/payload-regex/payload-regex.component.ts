import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';

@Component({
  moduleId: module.id,
  selector: 'app-payload-regex',
  templateUrl: 'payload-regex.component.html',
  styleUrls: ['payload-regex.component.css'],
  directives: [MaterializeDirective]
})
export class PayloadRegexComponent {
  @Input() bit: any;
  @Input() i: number;
}
