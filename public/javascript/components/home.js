$(document).ready(()=>{

  getAllItems()
      .then(function(json) {
      itemListings.addItems(json);
      views_manager.show('listings');
      console.log('THIS IS HOME', json);
})});


// $("header").on("click", '.my_reservations_button', function() {
//   itemListings.clearListings();
//   getAllItems()
//     .then(function(json) {
//       itemListings.addItems(json.reservations, true);
//       views_manager.show('listings');
//     })
//     .catch(error => console.error(error));
// });
