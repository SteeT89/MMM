
let text = document.getElementById('text');
let levo = document.getElementById('other');
let pravo = document.getElementById('other2');

window.addEventListener('scroll', (e) => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  levo.style.left = value * -2.5 + 'px';
  pravo.style.left = value * 2.5 + 'px';
})
