//your JS code here. If required.
const count = document.getElementById('counter');
const btnInc = document.getElementById('incrementBtn');


btnInc.addEventListener('click', () => {
  let currentValue = parseInt(count.innerText);
  count.innerText = currentValue + 1;
});