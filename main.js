
// Extract price values from Array.
var item_prices = items.map( function(x) { return x.price; });

// Get total price.
var acc_prices = item_prices.reduce( function(acc, x) {
  return acc + x;
});
var avg = acc_prices / items.length;
// Expect decimal to two places.
avg = avg.toFixed(2);

// Output
console.log("The average price is " + avg);




var items_filtered = items.filter( function(x) {
  return x.price > 14 && x.price < 18;
});

console.log("Items that cost between $14.00 USD and $18.00 USD:", items_filtered);