import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { OldMajorAppComponent } from '../app/old-major.component';

beforeEachProviders(() => [OldMajorAppComponent]);

describe('App: OldMajor', () => {
  it('should create the app',
      inject([OldMajorAppComponent], (app: OldMajorAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
