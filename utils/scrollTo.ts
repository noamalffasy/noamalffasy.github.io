const scrollTo = (id: string) => {
  const duration = 300;
  const elem = document.querySelector(id) as HTMLDivElement;
  const elementY = elem.offsetTop;
  const startingY = window.pageYOffset;
  const diff = elementY - startingY;
  let start: number;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed miliseconds since start of scrolling.
    const time = timestamp - start;
    // Get percent of completion in range [0, 1].
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};

export default scrollTo;
