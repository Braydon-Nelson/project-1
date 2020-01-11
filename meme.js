var imgID = "";

function imageSelect(t) {
    $("#img-view").attr("src", $(t).attr("src"));
    imgID = $(t).data("img-id")

}
$(document).ready(function () {

    function memeList() {
        var queryURL = "https://api.imgflip.com/get_memes"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (imgResponse) {

            console.log(imgResponse.data.memes)


            var sortedArray = []


            for (let i = 0; i < imgResponse.data.memes.length; i++) {
                const element = imgResponse.data.memes[i];

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


    $("#searchMeme").on("click", function () {
        console.log("--------------------------------------------------");

        var text0 = $("#text0").val();
        var text1 = $("#text1").val();
        console.log(imgID);


        var memeURL = "https://api.imgflip.com/caption_image?username=the-cooler-ones&password=OnlyCoolPeople123&template_id=" + imgID + "&text0=" + text0 + "&text1=" + text1 + ""

        console.log(text0);
        console.log(text1);

        $.ajax({
            url: memeURL,
            method: "GET"
        }).then(function (memeResponse) {
            console.log(memeResponse.data.url);
            $("#img-view").attr("src", memeResponse.data.url);

        });
    });
    memeList();


})