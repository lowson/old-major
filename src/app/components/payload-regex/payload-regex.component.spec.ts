import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PayloadRegexComponent } from './payload-regex.component';

describe('Component: PayloadRegex', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PayloadRegexComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PayloadRegexComponent],
      (component: PayloadRegexComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PayloadRegexComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PayloadRegexComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-payload-regex></app-payload-regex>
  `,
  directives: [PayloadRegexComponent]
})
class PayloadRegexComponentTestController {
}

