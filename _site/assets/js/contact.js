$(document).ready(function () {
    $('#btnSend').click(clearForm);
})

function clearForm() {
    $('#txtName').val('');
    $('#txtEmail').val('');
    $('#txtMessage').val('');
    $('#successMessage').removeClass('hidden');
}