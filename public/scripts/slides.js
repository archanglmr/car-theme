function slide_show(id, timing) {
  let el = document.getElementById(id),
    slides = [],
    length = 0,
    current = 0,
    last = 0;
  timing = timing || 500;
  if (el) {
    for (let i = 0, c = el.children.length; i < c; i += 1) {
      slides.push(el.children.item(i));
    }
    length = slides.length;
  }

  if (length > 1) {
    slides[current].className = 'current';
    return setInterval(() => {
      slides[last].className = '';

      last = current;
      current += 1;
      if (current >= length) {
        current = 0;
      }
      slides[last].className = 'last';
      slides[current].className = 'current';
    }, timing);
  }
  return null;
}