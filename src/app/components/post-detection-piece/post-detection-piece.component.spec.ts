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
import { PostDetectionPieceComponent } from './post-detection-piece.component';

describe('Component: PostDetectionPiece', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PostDetectionPieceComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PostDetectionPieceComponent],
      (component: PostDetectionPieceComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PostDetectionPieceComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PostDetectionPieceComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-post-detection-piece></app-post-detection-piece>
  `,
  directives: [PostDetectionPieceComponent]
})
class PostDetectionPieceComponentTestController {
}

