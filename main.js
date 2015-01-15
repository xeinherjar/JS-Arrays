
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



// Find items above $14 but less than $18
var items_filtered = items.filter( function(x) {
  return x.price > 14 && x.price < 18;
});

console.log("Items that cost between $14.00 USD and $18.00 USD:", items_filtered);



// Filter GBP
var gbp_item = items.filter ( function(x) {
  return x.currency_code === "GBP";
});
// Output, only one item
// but doing it in a loop becase in the future maybe there will be more
gbp_item.forEach ( function(x) { console.log(x.title); });


// Filter for wood
// Check the materials array under each object for wood.
var wood_items = items.filter ( function(x) {
    return x.materials.indexOf("wood") > -1;
});

wood_items.forEach( 
    function(x) { console.log(x.title + " is made of wood."); 
});


// Filter for more than 8 materials
// Same as above, only checking length.
var eight_mat_items = items.filter( function(x) {
  return x.materials.length >= 8;
});

eight_mat_items.forEach (
    function(x) { 
      console.log(x.title);
      x.materials.forEach( function(x) {
        console.log(x); 
      });
    });


// Who made, more filtering.
var seller_made_items = items.filter( function(x) {
  return x.who_made === "i_did";
});

console.log(seller_made_items.length + " were made by their sellers");





