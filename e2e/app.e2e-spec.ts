import { GoogleAnalyticsSamplePage } from './app.po';

describe('google-analytics-sample App', function() {
  let page: GoogleAnalyticsSamplePage;

  beforeEach(() => {
    page = new GoogleAnalyticsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
