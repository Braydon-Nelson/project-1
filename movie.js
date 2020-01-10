$(document).ready(function () {


    function searchMovie(movie) {


        var movie = "up"

        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy&"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response.Title)
            $("#movieTitle").text(response.Title)
            $("#movieYear").text("Release Year: " + response.Year)
            $("#movieRated").text("Rated: " + response.Rated)
            $("#movieGenre").text("Genre: " + response.Genre)
            $("#movieActors").text("Actors: " + response.Actors)
            $("#moviePlot").text("Plot: " + response.Plot)
            $("#movieCover").attr("src", response.Poster)

        })


    }
    searchMovie();
})