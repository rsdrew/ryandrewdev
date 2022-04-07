$(document).ready(function () {
    $('#btnSend').click(btnSend_Click);
    $('#txtName').on('input', function() {formControlChange('Name')});
    $('#txtEmail').on('input', function() {formControlChange('Email')});
    $('#txtMessage').on('input', function() {formControlChange('Message')});
});

function formControlChange(controlName) {
    $(`#rfv${controlName}`).css({'animation':'fadeOut .25s ease-in-out',
                                 'animation-fill-mode':'forwards'});
}

function hideErrorMessages() {
    $('.rfv').each(function(i, obj) {
        obj.style.animation = 'fadeOut .25s ease-in-out';
        obj.style.animationFillMode = 'forwards';
    });
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

    $('.contactFormInput').each(function(i, obj) {
        if (obj.value === "") {
            let rfv = $(`#rfv${obj.id.substring(3)}`)
            rfv.css({'animation':'fadeIn .25s ease-in-out',
                     'animation-fill-mode':'forwards'});
            valid = false;
        }
    });

    if (!validateEmail($('#txtEmail').val())) {
        $('#rfvEmail').css({'animation':'fadeIn .25s ease-in-out',
                            'animation-fill-mode':'forwards'});
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
}

function btnSend_Click(event) {
    hideErrorMessages();
    let valid = validateContactForm(event);
    if (valid) {
        clearContactForm();
    }
}