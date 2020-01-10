$(document).ready(function () {


    function searchMovie(movieInput) {




        var queryURL = "http://www.omdbapi.com/?t=" + movieInput + "&apikey=trilogy&"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {


            $("#movieTitle").text(response.Title)
            $("#movieYear").text("Release Year: " + response.Year)
            $("#movieRated").text("Rated: " + response.Rated)
            $("#movieGenre").text("Genre: " + response.Genre)
            $("#movieActors").text("Actors: " + response.Actors)
            $("#moviePlot").text("Plot: " + response.Plot)
            $("#movieCover").attr("src", response.Poster)

        })


    }

    var searchArray = []

    $(".movieSearch").click(function (event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the city
        var movieInput = $(".movieSearch").prev().val().trim();

        console.log(movieInput)

        var searchItem = $(this).prev().val()
        searchArray.push(searchItem)

        localStorage.setItem("search Item", searchArray)


        console.log(searchArray)

        var option = document.createElement("option");

        $(option).attr("class", "option1")
        // $(button).attr("type", "button")
        option.innerHTML = movieInput
        $(".formInput").append(option)

        searchMovie(movieInput)
    });

    function refreshSave() {

        var searchItem = $(this).prev().val()

        // grabbing string out of local storage
        var item = localStorage.getItem("search Item", searchItem)

        console.log(item)
        // turning the string of cities into an array
        var ar = item.split(',');



        // grabbing the last city searched out of an array no matter how big of array
        var movieInput = ar.slice(-1)[0]

        console.log(movieInput);
        searchMovie(movieInput)
    }

    $(".option1").on("click", function () {
        movieInput = $(".option1").val()
        console.log(movieInput)


    })

    refreshSave();
})