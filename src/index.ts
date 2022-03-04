/*
 * Generates a valid CSS selector using a given target node
 * @param {HTMLElement} target
 * @param {HTMLElement} [document.body] root
 * @returns {string}
 */
function cssSelectorGenerator(target: HTMLElement, root = document.body) {
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
