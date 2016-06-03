import { OldMajorPage } from './app.po';

describe('old-major App', function() {
  let page: OldMajorPage;

  beforeEach(() => {
    page = new OldMajorPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('old-major works!');
  });
});
