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
import { PayloadByteextractComponent } from './payload-byteextract.component';

describe('Component: PayloadByteextract', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PayloadByteextractComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PayloadByteextractComponent],
      (component: PayloadByteextractComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PayloadByteextractComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PayloadByteextractComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-payload-byteextract></app-payload-byteextract>
  `,
  directives: [PayloadByteextractComponent]
})
class PayloadByteextractComponentTestController {
}

