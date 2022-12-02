// To represent Stored cart item
function cartitem() {
  const tablebody = document.getElementById("tablebody");
  const total = document.getElementById("total");
  const localItems = JSON.parse(localStorage.getItem("items"));
  let tableData = "";
  let sum = 0;
  tablebody.innerHTML = tableData;
  total.innerHTML = sum;
  localItems.map((data) => {
    tableData +=
      "<tr>" +
      "<td>" +
      '<div class="product-img">' +
      '<div class="img-prod">' +
      '<img src="' +
      data.itemSrc +
      '">' +
      "</div>" +
      "</div>" +
      "</td>" +
      "<td>" +
      "<p>" +
      data.itemName +
      "</p>" +
      "</td>" +
      "<td>" +
      "<p>" +
      data.itemSize +
      "</p>" +
      "</td>" +
      "<td >" +
      '<div class="display">' +
      '<button class="btn btn-danger" data-size="' +
      data.itemSize +
      '" data-quantity="' +
      data.no +
      '" data-src="' +
      data.itemSrc +
      '" onclick="quantitydecrease(this)">' +
      "-" +
      "</button>" +
      '<p class="size text-center">' +
      data.no +
      "</p>" +
      '<button class="btn btn-primary"  data-size="' +
      data.itemSize +
      '" data-quantity="' +
      data.no +
      '" data-src="' +
      data.itemSrc +
      '" onclick="quantityincrease(this)">' +
      "+" +
      "</button>" +
      "</div>" +
      "</td>" +
      "<td>" +
      "<p>" +
      data.itemPrice +
      "</p>" +
      "</td>" +
      "<td>" +
      "<p>" +
      data.no * data.itemPrice +
      "</p>" +
      "</td>" +
      "<td>" +
      '<button class="btn btn-sm btn-danger"  data-size="' +
      data.itemSize +
      '" data-quantity="' +
      data.no +
      '" data-src="' +
      data.itemSrc +
      '" onclick="Delete(this);">' +
      '<i class="fa fa-trash delete">' +
      "&nbsp;" +
      "</i>" +
      "Remove" +
      "</button>" +
      "</td>" +
      "</tr>";
    sum = sum + parseInt(data.no * data.itemPrice);
    tablebody.innerHTML = tableData;
    total.innerHTML = sum;
  });
}

cartitem();

// to delete an item
function Delete(item) {
  var c = JSON.parse(localStorage.getItem("items")).filter(
    (Product) => Product.itemSrc != item.dataset.src
  );
  localStorage.setItem("items", JSON.stringify(c));
  cartitem();
}

// to increase quantity of item
function quantityincrease(item) {
  var local = JSON.parse(localStorage.getItem("items"));
  local.map((data) => {
    if (
      data.itemSrc == item.dataset.src &&
      data.itemSize == item.dataset.size
    ) {
      data.no = data.no + 1;
    }
  });
  localStorage.setItem("items", JSON.stringify(local));
  cartitem();
}

// to decrease quantity of item
function quantitydecrease(item) {
  var local = JSON.parse(localStorage.getItem("items"));
  local.map((data) => {
    if (
      data.itemSrc == item.dataset.src &&
      data.no > 1 &&
      data.itemSize == item.dataset.size
    ) {
      data.no = data.no - 1;
    }
  });
  localStorage.setItem("items", JSON.stringify(local));
  cartitem();
}

// // Customer Details validation
// document.getElementById('form').addEventListener('submit', function validation(event) {
//   event.preventDefault();
//   const form = event.target;
//   const formData = new FormData(form);
//   for (item of formData) {
//     switch (item[0]) {
//       case 'firstName':
//         var check = checkName(item[1]);
//         if (check == false) {
//           document.getElementById('firstNameError').innerHTML = "**Invalid First-Name";
//         }
//         else {
//           document.getElementById('firstNameError').innerHTML = "";
//         }
//         break;
//       case 'lastName':
//         var check = checkName(item[1]);
//         if (check == false) {
//           document.getElementById('lastNameError').innerHTML = "**Invalid Last-Name";
//         }
//         else {
//           document.getElementById('lastNameError').innerHTML = "";
//         }
//         break;
//       case 'email':
//         var check = checkEmail(item[1]);
//         if (check == false) {
//           document.getElementById('emailError').innerHTML = "**Invalid EmailId";
//         }
//         else {
//           document.getElementById('emailError').innerHTML = "";
//         }
//         break;
//       case 'password':
//         var check = checkPassword(item[1]);
//         if (check == false) {
//           document.getElementById('passwordError').innerHTML = "**Invalid password (must contain atleast One uppercase, One Special Character and 1 digit and should have atleast 8-16 character)";
//         }
//         else {
//           document.getElementById('passwordError').innerHTML = "";
//         }
//         break;
//       case 'address':
//         var check = checkAddress(item[1]);
//         if (check == false) {
//           document.getElementById('addressError').innerHTML = "**Invalid address(must be of atleast 10 characters)";
//         }
//         else {
//           document.getElementById('addressError').innerHTML = "";
//         }
//         break;
//       case 'pincode':
//         var check = checkPincode(item[1]);
//         if (check == false) {
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



// Customer Details validation
// function validation() {
//   const firstName = document.getElementById("First-Name").value;
//   const lastName = document.getElementById("Last-Name").value;
//   const email = document.getElementById("Email").value;
//   const password = document.getElementById("Password").value;
//   const address = document.getElementById("Address").value;
//   const pincode = document.getElementById("Pincode").value;

//   var firstnamecheck = /^[A-Za-z]{3,30}$/;
//   var lastnamecheck = /^[A-Za-z]{3,30}$/;
//   var emailcheck = /^[A-Za-z_0-9]{4,}@[a-z]{5,}[.]{1}[a-z.]{2,}$/;
//   var passwordcheck = /^\b[A-Z][A-Za-z0-9!@#$%&*?]{8,15}$/;
//   var addresscheck = /^[A-Za-z0-9-,;]{10,50}$/;
//   var pincodecheck = /^[0-9]{6}$/;

//   if (firstnamecheck.test(firstName)) {
//     document.getElementById('firstnameerror').innerHTML = "";
//   }
//   else {
//     document.getElementById('firstnameerror').innerHTML = "**Invalid First-Name";
//     return false;
//   }

//   if (lastnamecheck.test(lastName)) {
//     document.getElementById('lastnameerror').innerHTML = "";
//   }
//   else {
//     document.getElementById('lastnameerror').innerHTML = "**Invalid Last-Name";
//     return false;
//   }

//   if (emailcheck.test(email)) {
//     document.getElementById('emailerror').innerHTML = "";
//   }
//   else {
//     document.getElementById('emailerror').innerHTML = "**Invalid Email-ID";
//     return false;
//   }

//   if (passwordcheck.test(password)) {
//     document.getElementById('passworderror').innerHTML = "";
//   }
//   else {
//     document.getElementById('passworderror').innerHTML = "**Invalid password (must contain atleast One uppercase, One Special Character and 1 digit and should have atleast 8-16 character)";
//     return false;
//   }

//   if (addresscheck.test(address)) {
//     document.getElementById('addresserror').innerHTML = "";
//   }
//   else {
//     document.getElementById('addresserror').innerHTML = "**Invalid Address(must be of atleast 10 characters)";
//     return false;
//   }

//   if (pincodecheck.test(pincode)) {
//     document.getElementById('pincodeerror').innerHTML = "";
//   }
//   else {
//     document.getElementById('pincodeerror').innerHTML = "**Invalid Pincode(must be of 6 Digits)";
//     return false;
//   }
// }
