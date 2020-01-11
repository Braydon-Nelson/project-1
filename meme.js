function imageSelect(t) {
    $("#img-view").attr("src", $(t).attr("src"));
    var imgID = $(t).data("img-id")

}
$(document).ready(function () {

    function memeList() {
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


            for (let i = 0; i < memeArray.length; i++) {
                const element = memeArray[i];
                var codeBlock =
                    '<div class="column is-one-quarter">' +
                    '<img class="img-option" data-img-id="' + element.id + '" src="' + element.url + '" onclick="imageSelect(this)">' +
                    '</div>';

                document.getElementById("imgSection").innerHTML += codeBlock;
            }

        });


    }



    function memeGenerator() {

    }
    memeList();


})