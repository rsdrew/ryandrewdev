$(document).ready(function() {
    showText();
    projectImageOnHover();
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
    }, 2000)
}

function projectImageOnHover() {
    var projectImgAndButtons = $(".projectImgAndButton");
    var overlays = $(".overlay");
    var btnViewProjects = $(".btnViewProject");

    for(let i=0; i < projectImgAndButtons.length; i++) {
        let projectImgAndButton = projectImgAndButtons.eq(i);
        let overlay = overlays.eq(i);
        let btnViewProject = btnViewProjects.eq(i);

        projectImgAndButton.hover(
            () => { // hover
                overlay.removeClass('invisible');
                btnViewProject.removeClass('invisible');
            },
            () => { // out
                overlay.addClass('invisible');
                btnViewProject.addClass('invisible');
            }
        )
    }
}