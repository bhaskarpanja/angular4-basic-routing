import { BasicRoutingPage } from './app.po';

describe('basic-routing App', () => {
  let page: BasicRoutingPage;

  beforeEach(() => {
    page = new BasicRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
