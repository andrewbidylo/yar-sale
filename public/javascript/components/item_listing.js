$(() => {
  window.itemListing = {};

  function createListing(item) {
    return `
    <article class="item-listing">
        <section class="item-listing__preview-image">
          <img src="${item.thumbnail_photo_url}" alt="house">
        </section>
        <section class="item-listing__details">
          <h3 class="item-listing__title">${item.title}</h3>
          <ul class="item-listing__details">
            <li>location: ${item.location}</li>
            <li>description: ${item.description}</li>
            <li>date_posted: ${item.date_posted}</li>
            <li>date_sold: ${item.date_sold ?
            `<p>SOLD!</p>`
            : ``}
            </li>
          </ul>
          <footer class="item-listing__footer">
          <li>price: ${item.price}</li>
          </footer>
        </section>
      </article>
    `
  }
// adding key/value pair
  window.itemListing.createListing = createListing;

});


// ${isReservation ?
//   `<p>${moment(property.start_date).format('ll')} - ${moment(property.end_date).format('ll')}</p>`
//   : ``}
