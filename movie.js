function searchMovie(movieInput) {




    var queryURL = "https://www.omdbapi.com/?t=" + movieInput + "&apikey=trilogy&"

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

$(document).ready(function () {




    var searchArray = []

    $(".movieSearch").on("click", function (event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the city
        var movieInput = $(".movieSearchInput").val()

        console.log(movieInput)

        var searchItem = movieInput
        searchArray.push(searchItem)

        localStorage.setItem("search Item", searchArray)


        console.log(searchArray)

        // var option = document.createElement("option");

        // $(option).attr("class", "option1")
        // console.log("button being made");

        // $(button).attr("type", "button")
        // option.innerHTML = movieInput
        // $(".formInput").append(option)

        if (searchArray.length <= 4) {
            console.log(true)
        } else {
            searchArray = searchArray.slice(1)
        }

        $("#option1").text(searchArray[0])
        $("#option2").text(searchArray[1])
        $("#option3").text(searchArray[2])
        $("#option4").text(searchArray[3])

        // var formInput = document.getElementsByClassName("formInput")
        // var formInputText = formInput.options[formInput.selectedIndex].value;





        searchMovie(movieInput)
    });

    function refreshSave() {

        var searchItem = $(this).prev().val()

        // grabbing string out of local storage
        var item = localStorage.getItem("search Item", searchItem)


        // turning the string of cities into an array
        var ar = item.split(',');



        // grabbing the last city searched out of an array no matter how big of array
        var movieInput = ar.slice(-1)[0]


        searchMovie(movieInput)
    }

    // $(".option1").on("click", function () {
    //     console.log("click listener");

    //     movieInput = $(".option1").text()
    //     console.log(movieInput)


    // })

    $(".searchHistoryButton").on("click", function (event) {
        event.preventDefault()
        console.log("click listener");

        movieInput = $(".formInput").val();



        console.log(movieInput)

        searchMovie(movieInput)


    })

    refreshSave();
})