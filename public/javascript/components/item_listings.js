$(() => {

  const $itemListings = $(`
  <section class="property-listings" id="property-listings">
      <p>Loading...</p>
    </section>
  `);
  window.$itemListings = $itemListings;

  window.itemListings = {};

  function addListing(listing) {
    $itemListings.append(listing);
  }
  function clearListings() {
    $itemListings.empty();
  }
  window.itemListings.clearListings = clearListings;

  function addItems(items) {
    clearListings();
    for (const itemId in items) {
      const item = items[itemId];
      const listing = itemListing.createListing(item);
      addListing(listing);
    }
  }
  window.itemListings.addItems = addItems;

});

//will use isReservation as isHearted function to make an onclick event where the heart color changes to red
// function addItems(properties, isReservation = false) {
//   clearListings();
//   for (const propertyId in properties) {
//     const property = properties[propertyId];
//     const listing = propertyListing.createListing(property, isReservation);
//     addListing(listing);
//   }
// }
// window.itemListings.addItems = addItems;
