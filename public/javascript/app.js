// const addToFavourites = function(item) {
//   $.ajax('/tweets', { method: 'GET' })
//     .then(function(data) {
//       if (isOneTweet) {
//         renderTweets(data[data.length - 1]);
//       } else {
//         renderTweets(data);
//       }
//     });
// };



$('.heart').on('click', function(event) {
  event.preventDefault(); //prevents browser page refresh
  console.log(event)
  $.ajax('/favourites/:id', { method: 'POST', data: {itemId: id} })
    .then(function(res) {});

});



// $('.submit').click(function(e){
//   e.preventDefault();
//   $.ajax({
//     type: "POST",
//     url: 'yourscript.php',
//     data: {firstname: $('#firstname').val()},
//     success: function(data){
//       $('#firstname').html(data);
//     }
//   });
// })
// <form action="" method="POST">
//     <label for="firstname">First Name</label>
//     <input type="text" name="firstname" id="firstname">
//     <button type="submit" name="submit">Submit</button>
// </form>
