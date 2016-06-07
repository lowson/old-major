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
import { PayloadBytetestComponent } from './payload-bytetest.component';

describe('Component: PayloadBytetest', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PayloadBytetestComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PayloadBytetestComponent],
      (component: PayloadBytetestComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PayloadBytetestComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PayloadBytetestComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-payload-bytetest></app-payload-bytetest>
  `,
  directives: [PayloadBytetestComponent]
})
class PayloadBytetestComponentTestController {
}

