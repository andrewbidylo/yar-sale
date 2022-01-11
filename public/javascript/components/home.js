$(document).ready(()=>{

  getAllItems()
      .then(function(json) {
       console.log('THIS IS', json)
})});
