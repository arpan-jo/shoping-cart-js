const mobilePrice = 1219;
const casingPrice = 59;

// increment button1 event handler
document.getElementById('incrementBtn').addEventListener('click', function () {
  increment('singlePrice', mobilePrice, 'itemNumber', 'subTotal');
});

// increment button2 event handler
document.getElementById('incrementBtn2').addEventListener('click', function () {
  increment('singlePrice2', casingPrice, 'itemNumber2');
});

// decrement button1 event handler
document.getElementById('decrementBtn').addEventListener('click', function () {
  decrement('singlePrice', mobilePrice, 'itemNumber');
});

// decremen button2 event handler
document.getElementById('decrementBtn2').addEventListener('click', function () {
  decrement('singlePrice2', casingPrice, 'itemNumber2');
});

function increment(id, perPrice, num, subA) {
  const priceNumber = document.getElementById(id).innerText;
  const price = parseFloat(priceNumber);
  document.getElementById(id).innerText = price + perPrice;
  const value = document.getElementById(num).value++;
  const number = parseFloat(value);
  const subTotal = document.getElementById(subA).innerText;
  const subAmount = parseFloat(subTotal);
  document.getElementById(subA).innerText = subAmount;
}

function decrement(id, perPrice2, decrementNum) {
  const priceNumber = document.getElementById(id).innerText;
  const price = parseFloat(priceNumber);
  document.getElementById(id).innerText = price - perPrice2;
  if (price === 0) {
    document.getElementById(id).innerText = 0;
  }
  const value = document.getElementById(decrementNum).value--;
  const number = parseFloat(value);
  if (number <= 0) {
    document.getElementById(decrementNum).value = 0;
  }
}

// function sub(subA) {
//   const subTotal = document.getElementById(subA).innerText;
//   const subAmount = parseFloat(subTotal);
//   document.getElementById(subA).innerText = subAmount;
// }
