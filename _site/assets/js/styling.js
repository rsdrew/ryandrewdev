$(document).ready(function() {
    showText();
    projectImageOnHover();
});

function showText() {
    setTimeout(function () {
        $("#h1HiImRyan").removeClass('hide');
    }, 500);

    setTimeout(function () {
        $("#h2ShortDescription").removeClass('hide');
    }, 1000);

    setTimeout(function () {
        $("#h3ScrollDown").removeClass('hide');
        $("#imgDownArrow").removeClass('hide');
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
                overlay.removeClass('hide');
                btnViewProject.removeClass('hide');
            },
            () => { // out
                overlay.addClass('hide');
                btnViewProject.addClass('hide');
            }
        )
    }
}