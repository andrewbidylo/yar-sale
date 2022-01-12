// Client facing scripts here

// $(document).ready(()=>{


//     let url = "/items";
//     console.log('Im inside getAllItems');
//     return $.ajax({
//       url,
//     }).done( data => {
//       console.log(data);
//     })

    // let url = "/favourites";
    // console.log('Im inside favs');
    // return $.ajax({
    //   url,
    // }).done( data => {
    //   console.log(data);
    // })

  // getAllItems()
  //     .then(function(json) {
  //     itemListings.addItems(json);
  //     views_manager.show('listings');
  //     console.log('THIS IS HOME', json);

//})

// });






























/*
// Create an Item
*/
// const createNewItems = (userData) => {
//   const titile = userData.user.name;

//   const $newTweet = $(`<article class='posted-tweet'>
//   <header>
//     <div class='left-side'>
//       <span>
//       ${title}
//       </span>
//     </div>
//   </header>
// </article>`);
//   return $newTweet;
// };


// /*
// // renderTweets
// */

// const createAndAddTheTweet = (userData) => {
//   let getUserData = createTweetElement(userData);
//   $('.tweet-container').prepend(getUserData);
// };

// const renderItems = function(userData) {
//   if (Array.isArray(userData)) {
//     for (let item of userData) {
//       createAndAddTheTweet(item);
//     }
//   } else {
//     createAndAddTheTweet(userData);
//   }
// };


// const loadTweets = function(isOneTweet) {
//   $.ajax('/', { method: 'GET' })
//     .then(function(data) {
//       if (isOneTweet) {
//         renderTweets(data[data.length - 1]);
//       } else {
//         renderTweets(data);
//       }
//     });
// };

// loadTweets();
