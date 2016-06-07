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
import { PayloadFlowbitsComponent } from './payload-flowbits.component';

describe('Component: PayloadFlowbits', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PayloadFlowbitsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PayloadFlowbitsComponent],
      (component: PayloadFlowbitsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PayloadFlowbitsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PayloadFlowbitsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-payload-flowbits></app-payload-flowbits>
  `,
  directives: [PayloadFlowbitsComponent]
})
class PayloadFlowbitsComponentTestController {
}

