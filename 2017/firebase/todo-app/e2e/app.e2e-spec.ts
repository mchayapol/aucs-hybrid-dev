import { TodoAuthPage } from './app.po';

describe('todo-auth App', () => {
  let page: TodoAuthPage;

  beforeEach(() => {
    page = new TodoAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
