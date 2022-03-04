function cssSelectorGenerator(target: HTMLElement, root = document.body) {
  const output = [getNode(target)];
  let current: Element | null | undefined = target;

  while (current !== root) {
    current = current?.parentElement;

    if (current) {
      const node = getNode(current);
      output.push(node);
    } else {
      throw new Error('root node could not be reached out! :/');
    }
  }

  return output.reverse().join(' > ');
}

function getNode(element: Element) {
  if (element.hasAttribute('id')) {
    const id = element.getAttribute('id');
    return `#${id}`;
  }

  return element.tagName.toLowerCase();
}

export default cssSelectorGenerator;
