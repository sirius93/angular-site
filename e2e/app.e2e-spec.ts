import { MysitePage } from './app.po';

describe('mysite App', () => {
  let page: MysitePage;

  beforeEach(() => {
    page = new MysitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
