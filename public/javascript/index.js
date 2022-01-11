$(() => {
  getAllListings().then(function( json ) {
    console.log('Hello')
    views_manager.show('listings');
  });
});
