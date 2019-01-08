import { AngularExercisesPage } from './app.po';

describe('angular-exercises App', function() {
  let page: AngularExercisesPage;

  beforeEach(() => {
    page = new AngularExercisesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
