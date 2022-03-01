$(document).ready(function() {
    showText();
});

function showText() {
    setTimeout(function () {
        $("#h1HiImRyan").removeClass('invisible');
    }, 500);

    setTimeout(function () {
        $("#h2ShortDescription").removeClass('invisible');
    }, 1000);

    setTimeout(function () {
        $("#h3ScrollDown").removeClass('invisible');
        $("#imgDownArrow").removeClass('invisible');
    }, 1000)
}