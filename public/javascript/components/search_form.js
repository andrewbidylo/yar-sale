$(() => {

  const $searchPropertyForm = $(`

  `)
  window.$searchPropertyForm = $searchPropertyForm;

  $searchPropertyForm.on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();

    getAllListings(data).then(function( json ) {
      itemListings.addItems(json.properties);
      views_manager.show('listings');
    });
  });

  $('body').on('click', '#search-property-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });

});
