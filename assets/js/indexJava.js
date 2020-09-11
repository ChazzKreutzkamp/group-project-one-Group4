// $(document).ready(function(){
    console.log ("js file running")

    let apiKey = "j0LPAYTqCSdP1vTw9ZZCpA4Gtxf6Z0DGEnk2x0lc"
    
    function myFunction() {
        var searchTerm = document.querySelector('#searchTerm').value;
      
        fetch(
          "https://images-api.nasa.gov/search?q=" +
            searchTerm 
            // + "&api_key=" + apiKey
        )
        .then(function(response) {
            // console.log(response)
            return response.json();
        })
        .then(function(data) {
            console.log(data)
            console.log(data.collection.items[0].links[0].href);
    
            // Create a variable that will select the <div> where the GIF will be displayed
            var responseImgContainerEl = document.querySelector('#response-img-container');
        
            // Empty out the <div> before we append a GIF to it
            responseImgContainerEl.innerHTML = '';
        
            var searchImg = document.createElement('img');
            searchImg.setAttribute('src', data.collection.items[0].links[0].href);
        
            // Append 'searchImg' to the <div>
            responseImgContainerEl.appendChild(searchImg);
        })
    }

    function apodHero() {
        //load Astronomy Picture of the Day
        fetch("https://api.nasa.gov/planetary/apod?" + 
        "api_key=" + apiKey +
        "&date=" + moment().format("YYYY[-]MM[-]DD")
        )
        .then(function(response){
            return response.json()
        
        })

        .then(function(data) {
            console.log(data.url);
            var apodEl = document.querySelector('#apod-container');

            // Empty out the <div> before we append a GIF to it
            apodEl.innerHTML = '';
    
            var apodImg = document.createElement('img');
            apodImg.setAttribute('src', data.url);
    
            // Append 'gifImg' to the <div>
            apodEl.appendChild(apodImg);
        })
    }

    $( "#search" ).click(function(event) {
        event.preventDefault()
        myFunction()
    })
// })

// Make request to REST.api using search term
var articleSearch = function() {
    var searchTerm = document.querySelector('#searchTerm').value;

    fetch(
        'https://en.wikipedia.org/api/rest_v1/page/summary/'
        + searchTerm)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data.extract);
          // Create a variable that will select the <div> where the article will be displayed
          var articleContainerEl = document.querySelector('#article-response-container');
          // empty out div before we append it
          articleContainerEl.innerHTML = '';

          var searchArticle = document.createElement('article');
          searchArticle.innerHTML = (data.extract);
          articleContainerEl.appendChild(searchArticle);
        });
}
$( "#search" ).click(function(event) {
    event.preventDefault()
    articleSearch()
})