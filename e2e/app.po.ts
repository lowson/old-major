export class OldMajorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('old-major-app h1')).getText();
  }
}
