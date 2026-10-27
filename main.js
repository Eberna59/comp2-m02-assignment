// This file starts unfinished. Record the first call before implementing your design.
// Read the complete contract and evidence directions in README.md.

function calculateTicketTotal(priceText, quantityText, hasDiscount = false) {

  if (priceText.trim() === '') {
    return 'Enter a price';
  }

  if (quantityText.trim() === '') {
    return 'Enter a quantity';

  const price = Number(priceText);
  const quantity = Number(quantityText);

  if (!Number.isFinite(price)) {
    return 'Enter a finite price';
  }

  if (!Number.isFinite(quantity)){
    return ' Enter a finite quantity';
  }

  if (price < 0) {
    return 'Price cant be negative';
  }

  if (quantity < 0 || !Number.isInteger(quantity)) {
    return 'Quantity has to be a non negative number';
  }

  const ticketSubtotal = price * quantity;

  if (hasDiscount === true) {
    return ticketSubtotal * 0.75;
  }

  return ticketSubtotal;
}




// Baseline: this unfinished call returns undefined because the stub has no return.
// When your complete ordinary path works, this call should return numeric 7.5.
console.log(calculateTicketTotal('2.50', '3'));

console.log(calculateTicketTotal('2.50', '3', true));

console.log(calculateTicketTotal('2.50', '3', false));


