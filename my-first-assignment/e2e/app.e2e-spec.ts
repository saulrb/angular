import { MyFirstAssignmentPage } from './app.po';

describe('my-first-assignment App', () => {
  let page: MyFirstAssignmentPage;

  beforeEach(() => {
    page = new MyFirstAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
