import { Component, Input } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

import { PayloadByteextractComponent } from '../payload-byteextract';
import { PayloadBytejumpComponent } from '../payload-bytejump';
import { PayloadBytetestComponent } from '../payload-bytetest';
import { PayloadContentComponent } from '../payload-content';
import { PayloadFlowbitsComponent } from '../payload-flowbits';
import { PayloadModifierComponent } from '../payload-modifier';
import { PayloadRegexComponent } from '../payload-regex';

import { Rule } from '../../shared/rule';

@Component({
  moduleId: module.id,
  selector: 'app-rule-patterns',
  templateUrl: 'rule-patterns.component.html',
  styleUrls: ['rule-patterns.component.css'],
  directives: [MaterializeDirective,
                Dragula,
                PayloadByteextractComponent,
                PayloadBytejumpComponent,
                PayloadBytetestComponent,
                PayloadContentComponent,
                PayloadFlowbitsComponent,
                PayloadModifierComponent,
                PayloadRegexComponent],
  providers: [DragulaService]
})
export class RulePatternsComponent {
  @Input() rule: Rule;
  byteExtracts: number;
  input: string;
  output: string;

  constructor(private drag: DragulaService) {
    this.byteExtracts = 0;
    drag.setOptions('rule-patterns', {
      moves: function (el, container, handle) {
        return handle.className === 'material-icons';
      }
    });
  }

  add(payloadType: string) {
    if (payloadType != 'byteextract' || this.byteExtracts < 2) {
      this.rule.payloads.push({t: payloadType});
    }
    if (payloadType == 'byteextract') {
      this.byteExtracts += 1;
    }
  }

  remove(id: number) {
    if (this.rule.payloads[id].t == 'byteextract') {
      this.byteExtracts -= 1;
    }
    this.rule.payloads.splice(id, 1);
  }

  to_ascii() {
    this.output = '';
    if (!this.input) {
      return;
    }
    let str = this.input.replace(/ /g, '');
    for (let c = 0; c < str.length; c += 2) {
      this.output += String.fromCharCode(parseInt(str.substr(c, 2), 16));
    }
  }

  to_hex() {
    this.output = '';
    if (!this.input) {
      return;
    }
    let o = [];
    for (let c = 0; c < this.input.length; c++) {
      o.push(this.input.charCodeAt(c).toString(16));
    }
    this.output = o.join(' ');
  }

}
