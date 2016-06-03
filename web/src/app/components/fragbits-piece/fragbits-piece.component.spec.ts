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
import { FragbitsPieceComponent } from './fragbits-piece.component';

describe('Component: FragbitsPiece', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [FragbitsPieceComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FragbitsPieceComponent],
      (component: FragbitsPieceComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FragbitsPieceComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FragbitsPieceComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-fragbits-piece></app-fragbits-piece>
  `,
  directives: [FragbitsPieceComponent]
})
class FragbitsPieceComponentTestController {
}

