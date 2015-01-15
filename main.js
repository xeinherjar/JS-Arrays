
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
