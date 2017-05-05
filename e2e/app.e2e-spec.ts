import { AngularDoisPage } from './app.po';

describe('angular-dois App', function() {
  let page: AngularDoisPage;

  beforeEach(() => {
    page = new AngularDoisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
