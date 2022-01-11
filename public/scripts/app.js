// Client facing scripts here

/*
// Create an Item
*/
const createNewItems = (userData) => {
  const titile = userData.user.name;

  const $newTweet = $(`<article class='posted-tweet'>
  <header>
    <div class='left-side'>
      <span>
      ${title}
      </span>
    </div>
  </header>
</article>`);
  return $newTweet;
};


/*
// renderTweets
*/

const createAndAddTheTweet = (userData) => {
  let getUserData = createTweetElement(userData);
  $('.tweet-container').prepend(getUserData);
};

const renderItems = function(userData) {
  if (Array.isArray(userData)) {
    for (let item of userData) {
      createAndAddTheTweet(item);
    }
  } else {
    createAndAddTheTweet(userData);
  }
};


const loadTweets = function(isOneTweet) {
  $.ajax('/', { method: 'GET' })
    .then(function(data) {
      if (isOneTweet) {
        renderTweets(data[data.length - 1]);
      } else {
        renderTweets(data);
      }
    });
};

loadTweets();
