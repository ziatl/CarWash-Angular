import { CarWashAngularPage } from './app.po';

describe('car-wash-angular App', function() {
  let page: CarWashAngularPage;

  beforeEach(() => {
    page = new CarWashAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
