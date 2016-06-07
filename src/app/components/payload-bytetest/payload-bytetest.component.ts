import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';

@Component({
  moduleId: module.id,
  selector: 'app-payload-bytetest',
  templateUrl: 'payload-bytetest.component.html',
  styleUrls: ['payload-bytetest.component.css'],
  directives: [MaterializeDirective]
})
export class PayloadBytetestComponent {
  @Input() bit: any;
  @Input() i: number;
}
