import { IHubPocCliPage } from './app.po';

describe('i-hub-poc-cli App', function() {
  let page: IHubPocCliPage;

  beforeEach(() => {
    page = new IHubPocCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
