$(document).ready(function () {


    function searchMovie(movie) {


        var movie = "Space Jam"

        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy&"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response.Title)
            // $(".has-background-info").text("Movie Title: " + response.Title)

        })


    }
    searchMovie();
})