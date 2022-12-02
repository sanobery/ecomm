//Customer Details validation
// document.getElementById('form').addEventListener('submit', function validation(event) {
//   event.preventDefault();
//   const form = event.target;
//   const formData = new FormData(form);
//   for (item of formData) {
//     switch (item[0]) {
//       case 'firstName':
//         var check = checkName(item[1]);
//         if (!check) {
//           document.getElementById('firstNameError').innerHTML = "**Invalid First-Name";
//         }
//         else {
//           document.getElementById('firstNameError').innerHTML = "";
//         }
//         break;
//       case 'lastName':
//         var check = checkName(item[1]);
//         if (!check) {
//           document.getElementById('lastNameError').innerHTML = "**Invalid Last-Name";
//         }
//         else {
//           document.getElementById('lastNameError').innerHTML = "";
//         }
//         break;
//       case 'email':
//         var check = checkEmail(item[1]);
//         if (!check) {
//           document.getElementById('emailError').innerHTML = "**Invalid EmailId";
//         }
//         else {
//           document.getElementById('emailError').innerHTML = "";
//         }
//         break;
//       case 'password':
//         var check = checkPassword(item[1]);
//         if (!check) {
//           document.getElementById('passwordError').innerHTML = "**Invalid password (must contain atleast One uppercase, One Special Character and 1 digit and should have atleast 8-16 character)";
//         }
//         else {
//           document.getElementById('passwordError').innerHTML = "";
//         }
//         break;
//       case 'address':
//         var check = checkAddress(item[1]);
//         if (!check) {
//           document.getElementById('addressError').innerHTML = "**Invalid address(must be of atleast 10 characters)";
//         }
//         else {
//           document.getElementById('addressError').innerHTML = "";
//         }
//         break;
//       case 'pincode':
//         var check = checkPincode(item[1]);
//         if (!check) {
//           document.getElementById('pincodeError').innerHTML = "**Invalid Pincode(must be of 6 Digits)";
//         }
//         else {
//           document.getElementById('pincodeError').innerHTML = "";
//         }
//         break;
//       default:
//         document.getElementById('buttonError').innerHTML = "**Invalid Item";
//     }
//   }
//   // fetch()
// });
// // validate User-Name
// function checkName(name) {
//   var username = /^[A-Za-z]{3,30}$/;
//   if (!(username.test(name))) {
//     return false;
//   }
//   return true;
// }

// // validate Email
// function checkEmail(email) {
//   var emailCheck = /^[A-Za-z_0-9]{4,}@[a-z]{5,}[.]{1}[a-z.]{2,}$/;
//   if (!(emailCheck.test(email))) {
//     return false;
//   }
//   return true;
// }

// // validate Password
// function checkPassword(password) {
//   var passwordCheck = /^\b[A-Z][A-Za-z0-9!@#$%&*?]{8,15}$/;
//   if (!(passwordCheck.test(password))) {
//     return false;
//   }
//   return true;
// }

// // validate Address
// function checkAddress(address) {
//   var addressCheck = /^[A-Za-z0-9 ,-;]{10,50}$/;
//   if (!(addressCheck.test(address))) {
//     return false;
//   }
//   return true;
// }

// // validate Pincode
// function checkPincode(pincode) {
//   var pincodeCheck = /^[0-9]{6}$/;
//   if (!(pincodeCheck.test(pincode))) {
//     return false;
//   }
//   return true;
// }

document.getElementById('form').addEventListener('submit', function validate(event) {
  event.preventDefault();
  //var formdata = event.target;
  const formdata = document.getElementsByClassName('formelement');
  //console.log(formdata);
  const error = document.getElementsByName('error');
  //console.log(error);
  for (var i = 0; i < formdata.length; i++) {
    //console.log(formdata[i].name);
    //error[i].innerHTML = "error";
    var splitString = (formdata[i].dataset.validate).split('|');
    for (let j in splitString) {
      var arraydisplay = splitString[j].split(':');
      if (arraydisplay.length == 1) {
        var check = eval(arraydisplay[0])(formdata[i].value);
        if (!check) {
          error[i].innerHTML = formdata[i].name + " **error";
        }
        else {
          error[i].innerHTML = "";
        }
      }
      else {
        var check = eval(arraydisplay[0])(formdata[i].value, arraydisplay[1]);
        if (!check) {
          error[i].innerHTML = formdata[i].name + " **error";
        }
      }
    }
  }
});

function required(item) {
  if (item == "") {
    //alert(name + " Field is empty");
    return false;
  }
  return true;
}

function isAlpha(item) {
  var alpha = /^[A-Za-z]{0,}$/;
  if (!(alpha.test(item))) {
    //alert(name + " only Alphabets are allowed");
    return false;
  }
  return true;
}


function min(item, len) {
  if (item.length < len) {
    //alert(name + " Min Length Should be " + len);
    return false;
  }
  return true;
}

function max(item, len) {
  if (item.length > len) {
    //alert(name + " Max Length Should be " + len);
    return false;
  }
  return true;
}

function emailCheck(item) {
  var emailCheck = /^[A-Za-z_0-9]{4,}@[a-z]{5,}[.]{1}[a-z.]{2,}$/;
  if (!(emailCheck.test(item))) {
    //alert(name + " is not in Proper format");
    return false;
  }
  return true;
}

function numeric(item) {
  var numeric = /^[0-9]{0,}$/;
  if (!(numeric.test(item))) {
    //alert(name + " only Numeric Value is allowed");
    return false;
  }
  return true;
}


function passwordCheck(item) {
  var passwordcheck = /^[A-Za-z0-9!@#$%&*?]{6,}$/;
  if (!(passwordcheck.test(item))) {
    //alert(name + " must have atleast 1 Capital Letter & 1 Special Character and a number");
    return false;
  }
  return true;
}

