$(document).ready(function() {
    showText();
    projectImageOnHover();
});

function showText() {
    setTimeout(function () {
        $("#hiImRyan").removeClass('invisible');
    }, 500);

    setTimeout(function () {
        $("#shortDescription").removeClass('invisible');
    }, 1000);

    setTimeout(function () {
        $("#scrollDown").removeClass('invisible');
        $("#imgDownArrow").removeClass('invisible');
    }, 1500)
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