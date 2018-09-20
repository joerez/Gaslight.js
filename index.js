const bringNeverClickModel = document.querySelector('.bring-neverclick-model');
const bringSwapClickModel = document.querySelector('.bring-swapclick-model');

const neverClickModel = document.querySelector('.never-click-model');
const swapClickModel = document.querySelector('.swap-click-model');

const donate = document.querySelector('#donate');

gaslightExit = document.querySelector('.gaslight-exit');
submitBtn = document.querySelector('.submit-btn');

bringNeverClickModel.addEventListener("click", function() {
  neverClickModel.style.display = "flex";
})

bringSwapClickModel.addEventListener("click", function() {
  swapClickModel.style.display = "flex";
})


submitBtn.addEventListener("click", function() {
  neverClickModel.style.display = 'none';
})

donate.addEventListener("click", function() {
  swapClickModel.style.display = 'none';
})


neverClick('.gaslight-exit')
swapClick('#cancel', '#donate')
