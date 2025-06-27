const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;


function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}


function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}


function addProduct() {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  
  if (!name || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  const listItem = document.createElement('li');
  listItem.className = 'cart-item';
  listItem.dataset.price = price;

  const span = document.createElement('span');
  span.textContent = `${name} - $${price.toFixed(2)}`;

  const button = document.createElement('button');
  button.textContent = 'Remove';
  button.addEventListener('click', removeItem);

  listItem.appendChild(span);
  listItem.appendChild(button);
  cart.appendChild(listItem);

  updateTotalPrice(price);

 
  productNameInput.value = '';
  productPriceInput.value = '';
}


addProductButton.addEventListener('click', addProduct);
