import { FreedPage } from './app.po';

describe('freed App', () => {
  let page: FreedPage;

  beforeEach(() => {
    page = new FreedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
