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
import { PayloadModifierComponent } from './payload-modifier.component';

describe('Component: PayloadModifier', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PayloadModifierComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PayloadModifierComponent],
      (component: PayloadModifierComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PayloadModifierComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PayloadModifierComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-payload-modifier></app-payload-modifier>
  `,
  directives: [PayloadModifierComponent]
})
class PayloadModifierComponentTestController {
}

