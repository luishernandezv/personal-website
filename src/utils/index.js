const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export { scrollTo };
