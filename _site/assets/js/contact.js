$(document).ready(function () {
    $('#btnSend').click(btnSend_Click);
    $('#txtName').on('input', function() {formControlChange('Name')});
    $('#txtEmail').on('input', function() {formControlChange('Email')});
    $('#txtMessage').on('input', function() {formControlChange('Message')});
});

function formControlChange(controlName) {
    $(`#rfv${controlName}`).addClass('hidden');
}

function hideErrorMessages() {
    $('#rfvName').addClass('hidden');
    $('#rfvEmail').addClass('hidden');
    $('#rfvMessage').addClass('hidden');
}

function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

function validateContactForm(event) {
    let valid = true;
    if ($('#txtName').val() === "") {
        $('#rfvName').removeClass('hidden');
        valid = false;
    }

    if (!validateEmail($('#txtEmail').val())) {
        $('#rfvEmail').removeClass('hidden');
        valid = false;
    }

    if ($('#txtMessage').val() === "") {
        $('#rfvMessage').removeClass('hidden');
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
}

function clearForm() {
    $('#txtName').val('');
    $('#txtEmail').val('');
    $('#txtMessage').val('');
    $('#successMessage').removeClass('hidden');
}

function btnSend_Click(event) {
    hideErrorMessages();
    let valid = validateContactForm(event);
    if (valid) {
        clearContactForm();
    }
}