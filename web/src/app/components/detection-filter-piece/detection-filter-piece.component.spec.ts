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
import { DetectionFilterPieceComponent } from './detection-filter-piece.component';

describe('Component: DetectionFilterPiece', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DetectionFilterPieceComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DetectionFilterPieceComponent],
      (component: DetectionFilterPieceComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DetectionFilterPieceComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DetectionFilterPieceComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-detection-filter-piece></app-detection-filter-piece>
  `,
  directives: [DetectionFilterPieceComponent]
})
class DetectionFilterPieceComponentTestController {
}

