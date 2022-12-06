//Customer Details validation
var msg = {};
document.getElementById('form').addEventListener('submit', function validate(event) {
  //event.preventDefault();
  const formdata = document.getElementsByClassName('formelement');
  const error = document.getElementsByName('error');
  for (var i = 0; i < formdata.length; i++) {
    msg[formdata[i].name] = new Array();
    var splitString = (formdata[i].dataset.validate).split('|');
    for (let j in splitString) {
      var arraydisplay = splitString[j].split(':');
      if (arraydisplay.length == 1) {
        var check = eval(arraydisplay[0])(formdata[i].name, formdata[i].value);
        if (!check) {
          console.log(msg, msg[formdata[i].name]);
          error[i].innerHTML = msg[formdata[i].name].join(" ");
        }
        else {
          error[i].innerHTML = "";
        }
      }
      else {
        var check = eval(arraydisplay[0])(formdata[i].name, formdata[i].value, arraydisplay[1]);
        if (!check) {

          error[i].innerHTML = msg[formdata[i].name].join(" ");
        }
      }
    }
  }
});

// required()- to check fields are filled or empty
function required(name, item) {
  if (item == "") {
    msg[name].push("**Data Is Empty <br>");
    return false;
  }
  return true;
}

// isAlpha()- to check inputs have Alphabetic Character Only
function isAlpha(name, item) {
  var alpha = /^[A-Za-z]{0,}$/;
  if (!(alpha.test(item))) {
    msg[name].push("**Should have Alphabetic Character <br>");
    return false;
  }
  return true;
}

// min()- Dynamically Check minimum length of fields
function min(name, item, len) {
  if (item.length < len) {
    msg[name].push("**Min Length should be " + len + "<br>");
    return false;
  }
  return true;
}

// max()- Dynamically Check max length Of fields
function max(name, item, len) {
  if (item.length > len) {
    msg[name].push("**Max Length Should be " + len + "<br>");
    return false;
  }
  return true;
}

// emailCheck()- To check format for email
function emailCheck(name, item) {
  var emailCheck = /^[A-Za-z_0-9]{4,}@[a-z]{5,}[.]{1}[a-z.]{2,}$/;
  if (!(emailCheck.test(item))) {
    msg[name].push("**Email is not in Proper format <br>");
    return false;
  }
  return true;
}

// numeric()- To check fields have numerics value only
function numeric(name, item) {
  var numeric = /^[0-9]{0,}$/;
  if (!(numeric.test(item))) {
    msg[name].push("**only Numeric Value is allowed <br>");
    return false;
  }
  return true;
}

// passwordCheck()- To check Specific format in password entered by user
function passwordCheck(name, item) {
  var passwordcheck = /^\b[A-Z][A-Za-z0-9!@#$%&*?]{8,}$/;
  if (!(passwordcheck.test(item))) {
    msg[name].push("**must have atleast 1 Capital Letter & 1 Special Character and a number <br>");
    return false;
  }
  return true;
}

