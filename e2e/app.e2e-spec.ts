import { AnimalEncyclopediaPage } from './app.po';

describe('animal-encyclopedia App', function() {
  let page: AnimalEncyclopediaPage;

  beforeEach(() => {
    page = new AnimalEncyclopediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
