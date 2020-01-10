$(document).ready(function () {

    function memeGenerator() {




        var queryURL = "https://api.imgflip.com/get_memes"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response.data.memes)


            var sortedArray = []


            for (let i = 0; i < response.data.memes.length; i++) {
                const element = response.data.memes[i];

                if (element.box_count === 2) {

                    sortedArray.push(element)
                    console.log(sortedArray)

                }

            }
            var memeArray = sortedArray.slice(0, 20)
            console.log(memeArray)


        })


    }
    memeGenerator();


})