// form Validation Through JavaScript
var msg = {};
var valid = true;
$(document).ready(function () {
  $('#form').off().on('submit', function (e) {
    e.preventDefault();
    $('.formelement').each(function () {
      msg[$(this).attr('name')] = new Array();
      var splitString = ($(this).data('validate')).split('|');
      for (let j in splitString) {
        var arraydisplay = splitString[j].split(':');
        if (arraydisplay.length == 1) {
          eval(arraydisplay[0])($(this).attr('name'), $(this).val());
          //Function(arraydisplay[0])($(this).attr('name'), $(this).val());
        }
        else {
          eval(arraydisplay[0])($(this).attr('name'), $(this).val(), arraydisplay[1]);
          // Function(arraydisplay[0])($(this).attr('name'), $(this).val(), arraydisplay[1]);
        }
      }
    });
    displayError();
    if (valid) {
      $('#form')[0].submit();
    }
  });
});

// Displaying Error
function displayError() {
  valid = true;
  $.each(msg, function (key, value) {
    $('#error-' + key).html(value.join(" "));
    if (value.length > 0) {
      valid = false;
    }
  });
}

// required()- to check fields are filled or empty
function required(name, item) {
  if (item == "") {
    msg[name].push("**Data Is Empty <br>");
  }
}

// isAlpha()- to check inputs have Alphabetic Character Only
function isAlpha(name, item) {
  var alpha = /^[A-Za-z]{1,}$/;
  if (!(alpha.test(item))) {
    msg[name].push("**Should have Alphabetic Character <br>");
  }
}

// min()- Dynamically Check minimum length of fields
function min(name, item, len) {
  if (item.length < len) {
    msg[name].push("**Min Length should be " + len + "<br>");
  }
}

// max()- Dynamically Check max length Of fields
function max(name, item, len) {
  if (item.length > len) {
    msg[name].push("**Max Length Should be " + len + "<br>");
  }
}

// emailCheck()- To check format for email
function emailCheck(name, item) {
  var emailCheck = /^[A-Za-z_0-9]{4,}@[a-z]{5,}[.]{1}[a-z.]{2,}$/;
  if (!(emailCheck.test(item))) {
    msg[name].push("**Email is not in Proper format <br>");
  }
}

// numeric()- To check fields have numerics value only
function numeric(name, item) {
  var numeric = /^[0-9]{0,}$/;
  if (!(numeric.test(item))) {
    msg[name].push("**only Numeric Value is allowed <br>");
  }
}

// passwordCheck()- To check Specific format in password entered by user
function passwordCheck(name, item) {
  var passwordcheck = /^\b[A-Z][A-Za-z0-9!@#$%&*?]{3,}$/;
  if (!(passwordcheck.test(item))) {
    msg[name].push("**must have atleast 1 Capital Letter & 1 Special Character and a number <br>");
  }
}