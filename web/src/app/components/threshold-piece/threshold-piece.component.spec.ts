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
import { ThresholdPieceComponent } from './threshold-piece.component';

describe('Component: ThresholdPiece', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ThresholdPieceComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ThresholdPieceComponent],
      (component: ThresholdPieceComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ThresholdPieceComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ThresholdPieceComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-threshold-piece></app-threshold-piece>
  `,
  directives: [ThresholdPieceComponent]
})
class ThresholdPieceComponentTestController {
}

