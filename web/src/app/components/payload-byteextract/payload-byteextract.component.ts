import { MaterializeDirective } from 'angular2-materialize';
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-payload-byteextract',
  templateUrl: 'payload-byteextract.component.html',
  styleUrls: ['payload-byteextract.component.css'],
  directives: [MaterializeDirective]
})
export class PayloadByteextractComponent {
  @Input() bit: any;
  @Input() i: number;
}
