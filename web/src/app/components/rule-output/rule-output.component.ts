import { Component, Input } from '@angular/core';
import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-rule-output',
  templateUrl: 'rule-output.component.html',
  styleUrls: ['rule-output.component.css']
})
export class RuleOutputComponent {
  @Input() rule: Rule;
  @Input() invalidFields: any;
}
