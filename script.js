function replace() {
  const links = document.querySelectorAll("a[href^='https://img.shields.io']:not([data-shield-replaced])");
  let replaced = 0;
  for (const link of links) {
    if(link.querySelector("img[src^='https://img.shields.io']")) { continue; }
    const url = link.getAttribute("href");
    link.innerHTML = `<img src="${url}" />`;
    link.setAttribute("data-shield-replaced", true);
    ++replaced;
  }
  if(replaced > 0) {
    console.debug(`Replaced ${replaced} link${replaced === 1 ? "" : "s"} to 'img.shields.io'.`);
  }
}

(function() {
    replace();
    setInterval(replace, 3 * 1000);
})();
