<?php
  $msg = '';
  session_start();
  $msg = $_SESSION['err'];
  $_SESSION['err'] = '';
?>
<!doctype html>
<html lang="en">

<!-- Head Tag with different Link tag -->

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/css/cart.css?v=1">
</head>

<body>

  <!-- Navbar of page -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="#">
        <span class="text-uppercase ms-2">MyShop.com</span>
      </a>
      <div class="order-lg-1">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse order-lg-1" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item px-2 py-2">
            <a class="nav-link" aria-current="page" href="/index.html">Home</a>
          </li>
          <li class="nav-item px-2 py-2">
            <a class="nav-link" aria-current="page" href="#">Collections</a>
          </li>
          <li class="nav-item px-2 py-2">
            <div class="dropdown d-inline-block justify-content-center align-items-center">
              <a class="btn btn-muted dropdown-toggle text-muted" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Shop Now
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/views/kids.html">Kids</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/views/women.html">Women</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/views/men.html">Men</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item px-2 py-2">
            <a class="nav-link" aria-current="page">Contact-Us</a>
          </li>
        </ul>
        <div class="d-block me-auto mb-2 mb-lg-0 text-center">
          <button type="button" class="btn">
            <a href="/view/logincustomer.php"><i class="fa fa-user fa-x font"></i></a>
          </button>
        </div>
        <div class="d-block me-auto mb-2 mb-lg-0 text-center">
          <a href="/view/cart.php">
            <i class="fa fa-shopping-cart fa-x font"></i>
          </a>
          <span id="lblCartCount"></span>
        </div>
        <form class="d-flex ms-2" role="search">
          <input class="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-sm btn-outline-muted" type="submit">
            <i class="fa fa-search font"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>

  <!-- Item from Local Storage with Dyanmic Function of size, price and quantity -->
  <div id="imgcont">
  </div>

  <div class="container">
    <h1 class="mb-3 text-center fw-lighter">
      Shopping Cart
    </h1>
    <table class="table table-striped">
      <thead class="fw-light text-muted">
        <tr>
          <th class="scope">Product</th>
          <th class="scope">Name</th>
          <th class="scope">Size</th>
          <th class="scope">Quantity</th>
          <th class="scope">Price</th>
          <th class="text-right scope">
            <span id="amount" class="amount">
              Amount
            </span>
          </th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody id="tablebody">

      </tbody>
      <tfoot>
        <td colspan="6"></td>
        <td text-align="right">
          <strong>Total = $<span id="total" class="total"></span></strong>
        </td>
      </tfoot>
    </table>
  </div>

  <!-- Fill Details of user -->
  <section class="form my-4 mx-5">
    <div class="container mt-5">
      <div class="row row-no-gutters">
        <div class="col-lg-1">
        </div>
        <div class="col-12 col-lg-10 px-5">
          <h1 class="mt-2 fw-light justify-content-center">Fill Details</h1>
          <form action="/register.php" method="post" id="form" name="form">

            <div class="row">
              <div class="col-12 col-lg-6">
                <input type="text" placeholder="First-Name" class="form-control my-2 p-2 formelement" id="first_name"
                  name="first_name" data-validate="required|isAlpha|min:3|max:20">
                <span class="error text-danger" name="error" id="error-first_name"></span>
              </div>
              <div class="col-12 col-lg-6">
                <input type="text" placeholder="Last-Name" class="form-control my-2 p-2 formelement" id="last_name"
                  name="last_name" data-validate="required|isAlpha|min:3|max:20">
                <span class="error text-danger" name="error" id="error-last_name"></span>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-6">
                <input type="text" placeholder="email@xyz.com" class="form-control my-2 p-2 formelement" id="email"
                  name="email" data-validate="required|emailCheck|min:10|max:40">
                <span class="error text-danger" name="error" id="error-email"></span>
              </div>
              <div class="col-12 col-lg-6">
                <input type="text" placeholder="********" class="form-control my-2 p-2 formelement" id="password"
                  name="password" data-validate="required|passwordCheck|min:8|max:25">
                <span class="error text-danger" name="error" id="error-password"></span>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-6">
                <textarea type="text" placeholder="Full Address" class="form-control my-2 p-2 formelement" id="address"
                  name="address" data-validate="required|max:50"></textarea>
                <span class="error text-danger" name="error" id="error-address"></span>
              </div>
              <div class="col-12 col-lg-6">
                <input type="text" placeholder="pincode" class="form-control my-2 p-2 formelement" id="pincode"
                  name="pincode" data-validate="required">
                <span class="error text-danger" name="error" id="error-pincode"></span>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-2">
              </div>
              <div class="col-lg-8">
                <span id="buttonError"></span>
                <button type="submit" id="btn" name="checkOut"
                  class="btn btn-outline-primary my-2 p-2 form-control">Check-Out</button>
              </div>
          </div class="col-lg-2">
          <?php if($msg != NULL ) echo $msg . "<br>" ?>
          </div>
        </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  </section>

  <!-- Script tags -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
    crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <!-- <script src="/js/cart.js?v=2"></script> -->
  <script src="/jquery/cartjquery.js?v=1"></script>
  <script src="/jquery/formvalidationquery.js"></script>
  <!-- <script src="/js/formvalidation.js"></script> -->
</body>

</html>