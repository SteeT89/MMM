let text = document.getElementById('text');
let back = document.getElementById('back');
let other1 = document.getElementById('other1');
let other2 = document.getElementById('other2');
let other3 = document.getElementById('other3');

window.addEventListener('scroll', (e) => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  back.style.top = value * -1.5 + 'px';
  back.style.left = value * 1.5 + 'px';
  other1.style.left = value * 1.5 + 'px';
  other2.style.left = value * -1.5 + 'px';
  other3.style.top = value * -1.5 + 'px';
})
