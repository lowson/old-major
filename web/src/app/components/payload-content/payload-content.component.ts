import { MaterializeDirective } from 'angular2-materialize';
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-payload-content',
  templateUrl: 'payload-content.component.html',
  styleUrls: ['payload-content.component.css'],
  directives: [MaterializeDirective]
})
export class PayloadContentComponent {
  @Input() bit: any;
  @Input() i: number;
}
