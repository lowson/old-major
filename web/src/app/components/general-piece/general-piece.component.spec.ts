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
import { GeneralPieceComponent } from './general-piece.component';

describe('Component: GeneralPiece', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [GeneralPieceComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([GeneralPieceComponent],
      (component: GeneralPieceComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(GeneralPieceComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(GeneralPieceComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-general-piece></app-general-piece>
  `,
  directives: [GeneralPieceComponent]
})
class GeneralPieceComponentTestController {
}

