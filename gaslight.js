// Never click makes things move before you can click on them.
let neverClick = function(element, xPixels = 300, yPixels = 300, speed = 400) {
  element = document.querySelector(element);
  element.addEventListener("mouseover", function() {

    let x = Math.random() * xPixels;
    let y = Math.random() * yPixels;

    this.style.transition = 'all ' + speed + 'ms';
    this.style.transform = 'translateX('+ x + 'px) translateY(' + y + 'px)';
  })
}


// swap click swaps two buttons around
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

let goBack = function(backbtn) {
  let backBtn = document.querySelector(backbtn);
  backBtn.addEventListener("click", function() {
    document.querySelector('body').classList.add('go-back');
    window.setTimeout(function() {
      document.querySelector('body').classList.remove('go-back');
    }, 2000)

  })
}
