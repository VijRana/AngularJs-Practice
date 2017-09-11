import { EventemitterPage } from './app.po';

describe('eventemitter App', function() {
  let page: EventemitterPage;

  beforeEach(() => {
    page = new EventemitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
