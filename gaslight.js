function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}


let neverClick = function(element, xPixels = 300, yPixels = 300, speed = 400) {
  element = document.querySelector(element);
  element.addEventListener("mouseover", function() {

    let x = Math.random() * xPixels;
    let y = Math.random() * yPixels;

    this.style.transition = 'all ' + speed + 'ms';
    this.style.transform = 'translateX('+ x + 'px) translateY(' + y + 'px)';
  })
}

let swapClick = function(expectedClick, swappedClick) {
  expectedClick = document.querySelector(expectedClick)
  swappedClick = document.querySelector(swappedClick)



  expectedClick.addEventListener("mousedown", function() {
    let aParent = expectedClick.parentNode;
    let bParent = swappedClick.parentNode;

    let aHolder = document.createElement("div");
    let bHolder = document.createElement("div");

    aParent.replaceChild(aHolder,expectedClick);
    bParent.replaceChild(bHolder,swappedClick);

    aParent.replaceChild(swappedClick,aHolder);
    bParent.replaceChild(expectedClick,bHolder);
  })

}
