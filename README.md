# ts-css-selector &middot; [![npm](https://img.shields.io/npm/v/ts-css-selector.svg?style=flat)](https://www.npmjs.com/package/ts-css-selector) [![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

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

This utility function takes two DOM elements (`target` and `root`, in this order) and returns a valid CSS selector.

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

It can also be invoked in `async` mode. For that, you need to provide a thrid parameter as the example below:

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

await cssSelectorGenerator(target, root, true); // 'div > #container > button'
```

## License

[MIT](./LICENSE)
