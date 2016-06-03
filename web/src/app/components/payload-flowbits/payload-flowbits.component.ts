import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';

@Component({
  moduleId: module.id,
  selector: 'app-payload-flowbits',
  templateUrl: 'payload-flowbits.component.html',
  styleUrls: ['payload-flowbits.component.css'],
  directives: [MaterializeDirective]
})
export class PayloadFlowbitsComponent {
  @Input() bit: any;
  @Input() i: number;
}
