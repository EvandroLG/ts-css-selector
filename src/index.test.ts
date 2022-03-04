import cssSelectorGenerator from '.';

const query = (s: string) => document.querySelector(s);

document.body.innerHTML = `
  <div>
    <div id="container">
      <a>Link</a>
      <button>My button</button>
    </div>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
    </div>
  </div>
`;

test('generates path using document.body as root', () => {
  const target = query('button') as HTMLElement;

  expect(cssSelectorGenerator(target)).toBe('body > div > #container > button');
});

test('generates path from root to target', () => {
  const root = query('div') as HTMLElement;
  const target = query('button') as HTMLElement;

  expect(cssSelectorGenerator(target, root)).toBe('div > #container > button');
});

test('throws an error in case root could not be reached', () => {
  const root = query('#list') as HTMLElement;
  const target = query('button') as HTMLElement;

  expect(() => cssSelectorGenerator(target, root)).toThrowError();
});
