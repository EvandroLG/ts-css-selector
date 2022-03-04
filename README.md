# ts-css-selector &middot; [![npm](https://img.shields.io/npm/v/the-storage.svg?style=flat)](https://www.npmjs.com/package/the-storage) [![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

A CSS Selector generator.

## Installation

To install `ts-css-selector`, execute:

```shell
  npm install ts-css-selector
```

or

```shell
  yarn add ts-css-selector
```

## Usage

```js
/*
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
*/

import cssSelectorGenerator from 'ts-css-selector';

const target = document.querySelector('button');
const root = document.querySelector('div');

cssSelectorGenerator(target, root); // 'div > #container > button'
```

## License

[MIT](./LICENSE)
