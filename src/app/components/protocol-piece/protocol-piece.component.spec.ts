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
import { ProtocolPieceComponent } from './protocol-piece.component';

describe('Component: ProtocolPiece', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ProtocolPieceComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ProtocolPieceComponent],
      (component: ProtocolPieceComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ProtocolPieceComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ProtocolPieceComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-protocol-piece></app-protocol-piece>
  `,
  directives: [ProtocolPieceComponent]
})
class ProtocolPieceComponentTestController {
}

