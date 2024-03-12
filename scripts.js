/*
    External JavaScript source for rcdjames.github.io
    12/03/2024
*/

$(document).ready(function () {
    $("#joke").on("click", function () {
        $.get("https://official-joke-api.appspot.com/random_joke", function (joke) {
            $("#webcontent").append("<p>" + joke.setup + " - " + joke.punchline + "</p>");
        });
    });
    $("#catfact").on("click", function () {
        $.get("https://catfact.ninja/fact", function (catfact) {
            $("#webcontent").append("<p>" + catfact.fact + "</p>");
        });
    });
});
