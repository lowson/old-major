import { Component, ElementRef } from '@angular/core';
import { RuleOutputComponent } from './components/rule-output';
import { RuleFormComponent } from './components/rule-form';
import { MaterializeDirective } from 'angular2-materialize';
import { Rule } from './shared/rule';

@Component({
  moduleId: module.id,
  selector: 'old-major-app',
  templateUrl: 'old-major.component.html',
  styleUrls: ['old-major.component.css'],
  directives: [ RuleOutputComponent, RuleFormComponent, MaterializeDirective ]
})
export class OldMajorAppComponent {
    rule: Rule;
    invalidFieldsCollection: any[];
    input: string;
    output: string;
    webApp: boolean;

    constructor(private el: ElementRef) {
        this.rule = new Rule();
        this.invalidFieldsCollection = this.el.nativeElement.getElementsByClassName('invalid');
        // Disable header/footer if loaded through Electron/locally
        this.webApp = window.location.protocol != 'file:';
    }

    get invalidFields() {
        return [].slice.call(this.invalidFieldsCollection);
    }
}
