gaslightExit = document.querySelector('.gaslight-exit');

gaslightExit.addEventListener("mouseover", function() {

  let x = Math.random() * 300;
  let y = Math.random() * 300;

  this.style.transform = 'translateX('+ x + 'px) translateY(' + y + 'px)';
})

gaslightExit.addEventListener("click", function() {
  model.style.display = 'none';
})
