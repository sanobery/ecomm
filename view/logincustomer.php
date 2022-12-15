<?php 
  $msg = '';
  session_start();
  $msg = $_SESSION['err'];
  $_SESSION['err'] = '';
?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/css/login.css?v=1">
</head>

<body>

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
            <a class="nav-link " aria-current="page" href="/index.html">Home</a>
          </li>
          <li class="nav-item px-2 py-2">
            <a class="nav-link" aria-current="page" href="/views/women.html">Collections</a>
          </li>
          <li class="nav-item px-2 py-2">
            <div class="dropdown d-inline-block justify-content-center align-items-center">
              <a class="btn btn-muted dropdown-toggle text-muted" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Shop Now
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/views/kids.html">Kids</a></li>
                <li><a class="dropdown-item" href="/views/women.html">Women</a></li>
                <li><a class="dropdown-item" href="/views/men.html">Men</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item px-2 py-2">
            <a class="nav-link" aria-current="page">Contact-Us</a>
          </li>
        </ul>
        <div class="d-block me-auto mb-2 mb-lg-0 text-center">
          <button type="button" class="btn">
          <a href="/view/logincustomer.php"><i class="fa fa-user"></i></a>
          </button>
        </div>
        <div class="d-block me-auto mb-2 mb-lg-0 text-center">
          <button type="button" class="btn">
            <a href="/view/cart.php"><i class="fa fa-shopping-cart fa-x"></i></a>
          </button>
        </div>
        <form class="d-flex ms-2" role="search">
          <input class="form-control  form-control-sm me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-sm btn-outline-muted" type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </div>
  </nav>

  <section class="form my-4 mx-5">
    <div class="container mt-5">
      <div class="row row-no-gutters">
        <div class="col-lg-5">
          <img src="/assets/login.jpg" class="img-fluid" alt="" height="100%">
        </div>
        <div class="col-lg-7 px-5">
          <h1 class="mt-2 fw-light">LOG-IN</h1>
          <h6 class="py-1">Sign into Your Account</h6>
          <form action="/login.php" method="post" id="form">
            <div class="form-row">
              <div class="col-lg-7">
                <input type="text" placeholder="email@xyz.com" class="form-control my-2 p-2 formelement"
                  data-validate="required|emailCheck|min:10|max:40" name="email" id="email">
                <span class="error text-danger" name="error" id="error-email">
                </span>
              </div>
            </div>
            <div class="form-row">
              <div class="col-lg-7">
                <input type="text" placeholder="********" class="form-control my-2 p-2 formelement"
                  data-validate="required|passwordCheck|min:8|max:25" name="password" id="password">
                <span class="error text-danger" name="error" id="error-password">
                </span>
              </div>
            </div>

            <?php if($msg != NULL ) echo $msg . "<br>" ?>

            <div class="form-row">
              <div class="col-lg-7">
                <button type="submit" id="btn" class="btn btn-dark my-2 p-2 form-control">LOG-IN</button>
              </div>
            </div>

            <a href="#" class="px-2"><em>Forgot Password</a></em>

            <em class="px-2">Don't Have an Account?
              <a href="/views/signup.html">&nbsp;Sign-Up</a>
            </em>
          </form>
        </div>
      </div>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
    crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <script src="/jquery/formvalidationquery.js"></script>
  <!-- <script src="/js/formvalidation.js"></script>-->
</body>

</html>