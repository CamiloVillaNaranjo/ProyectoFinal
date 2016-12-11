import { TrainingFinalProjectPage } from './app.po';

describe('training-final-project App', function() {
  let page: TrainingFinalProjectPage;

  beforeEach(() => {
    page = new TrainingFinalProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
