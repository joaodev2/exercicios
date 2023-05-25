//   Travesing ::

  const element = document.body;

  console.log(
      element.parentElement,
      element.previousElementSibling,
      element.nextElementSibling,
      element.children,
      element.children[0],
      element.firstChild,
      element.childNodes,
      element.children[--element.children.length],
    );

