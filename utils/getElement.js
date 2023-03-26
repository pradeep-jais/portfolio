const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
    throw new Error(
      `There is no element selected, please check the selector : ${selector}`
    );
  }
  return element;
};

export default getElement;
