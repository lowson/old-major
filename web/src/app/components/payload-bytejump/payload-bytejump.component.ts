import { MaterializeDirective } from 'angular2-materialize';
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-payload-bytejump',
  templateUrl: 'payload-bytejump.component.html',
  styleUrls: ['payload-bytejump.component.css'],
  directives: [MaterializeDirective]
})
export class PayloadBytejumpComponent {
  @Input() bit: any;
  @Input() i: number;
}
