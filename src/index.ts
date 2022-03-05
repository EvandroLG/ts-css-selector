/*
 * Generates a valid CSS selector using a given target node
 * @param {HTMLElement} target
 * @param {HTMLElement} [document.body] root
 * @returns {Promise<string> | string}
 */
function cssSelectorGenerator(
  target: HTMLElement,
  root = document.body,
  isAsync = false
): Promise<string> | string {
  if (isAsync) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = cssSelectorHelper(target, root);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      }, 10);
    });
  }

  return cssSelectorHelper(target, root);
}

/*
 * Traverses DOM tree starting from `target` to `root` and returns a valid path
 * @param {HTMLElement} target
 * @param {HTMLElement} root
 * @returns {Promise<string> | string}
 */
function cssSelectorHelper(target: HTMLElement, root: HTMLElement) {
  const output = [getReference(target)];
  let current: HTMLElement | null = target;

  while (current !== root) {
    current = current?.parentElement;

    if (current) {
      const reference = getReference(current);
      output.push(reference);
    } else {
      throw new Error('root node can not be reached out! :/');
    }
  }

  return output.reverse().join(' > ');
}

/*
 * Returns the element id and in case it is not possible then returns its tag name
 * @param {HTMLElement} target
 * @returns {string}
 */
function getReference(element: HTMLElement) {
  if (element.hasAttribute('id')) {
    const id = element.getAttribute('id');
    return `#${id}`;
  }

  return element.tagName.toLowerCase();
}

export default cssSelectorGenerator;
