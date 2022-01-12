function getAllListings(params) {
  let url = "/api/properties";
  if (params) {
    url += "?" + params;
  }
  return $.ajax({
    url,
  });
}

// displays all items in the homepage
function getAllItems() {
  let url = "/items";
  console.log('Im inside getAllItems');
  return $.ajax({
    url,
  });
}

// const submitProperty = function(data) {
//   return $.ajax({
//     method: "POST",
//     url: "/api/properties",
//     data,
//   });
// }

// $.ajax({
//   url: 'test.html',
//   type: 'DELETE',
//   data: {},
//   success: function (result) {
//     // Do something with the result
//   }
// });
