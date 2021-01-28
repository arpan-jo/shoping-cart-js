function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + '-count');
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  let productTotal = 0;
  if (product == 'phone') {
    productTotal = productNewCount * 1219;
  }
  if (product == 'case') {
    productTotal = productNewCount * 59;
  }
  document.getElementById(product + '-total').innerText = '$' + productTotal;
  calculateTotal();
}

function calculateTotal() {
  totalPrice = getInputValue('phone') * 1219 + getInputValue('case') * 59;
  document.getElementById('total-price').innerText = '$' + totalPrice;
  const tax = Math.round(totalPrice * 0.1);
  document.getElementById('tax-amount').innerText = '$' + tax;
  const grandTotal = totalPrice + tax;
  document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + '-count').value;
  const productCount = parseFloat(productInput);
  return productCount;
}

document.getElementById('check-out').addEventListener('click', function () {
  document.getElementById('welcome-section').style.display = 'block';
  document.getElementById('calculate-section').style.display = 'none';
});

document.getElementById('phone-remove').addEventListener('click', function () {
  document.getElementById('phone').style.display = 'none';
});

document.getElementById('case-remove').addEventListener('click', function () {
  document.getElementById('case').style.display = 'none';
});
// document
//   .getElementById('phone-decrease')
//   .addEventListener('click', function () {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
//   });
