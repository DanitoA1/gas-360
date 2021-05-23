<template>
  <div>
     <!-- Landing Page -->
    <div class="landing-page">
        <div class="container">
            <!-- Navbar -->
            <div class="kiakia-navbar py-4">
                <div class="logo">
                    <a href="/"> <img src="../assets/images1/Layer 6.svg" alt="KiaKia-Glogo">
                    </a>
                </div>
                <div class="tabs">
                    <div class="menu-bar" @click="menubar()">
                        <i class="fa fa-bars fa-2x"></i>
                    </div>
                    <div class="menu-list">
                        <ul class="my-auto">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/gaspreneur">Become a Gaspreneur</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#" class="text-white btn btn-primary">Download App</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="head">
                            BECOME A SUPPLIER
                        </h5>
                        <h1>
                            Be a Gaspreneur
                        </h1>
                    </div>
                    <div class="col-md-6 text-center gas360-circle">
                        <p> <img src="../assets/images1/Linked Path Group.svg" alt=""></p>
                    </div>

                </div>
            </div>
            <!-- E Content -->

        </div>
    </div>

    <!-- E Landing Page -->
    <!-- Body -->
    <div class="  container my-5 ">

        <div class="head my-2">
            DISTRIBUTION
        </div>
        <h3 style="color: #011230;">
            Join our Smart Distro Network
        </h3>
        <p style="color:  #333333;">
            Be part of our solution to expand access to clean cooking for households in under-served areas who earn
            between $1-$8 per day.
        </p>
    </div>

    <div class="  container my-5 ">
        <div class="row">
            <div class="col-md-6">
                <h4 style="color: #011230;">
                  Ready to get started?
                </h4>
                <p style="color:  #333333;">
                        Please fill out our contact form and our team would be in touch or email us directly at <span
                            style="color: #3789EC;"> support@gas360.io</span>
                </p>
            </div>
            <div class="col-md-6">
                <form>
                    <div class="position-relative">
                        <input required type="text" name="full-name" id="full-name" placeholder="Full name">
                        <img class="icon position-absolute" src="../assets/images1/Vector.svg" alt="name">
                    </div>

                    <div class="position-relative">
                        <input required type="phone" name="phone" id="phone" placeholder="Phone number">
                        <img class="icon position-absolute" src="../assets/images1/Vector-1.svg" alt="phone">
                    </div>

                    <div class="position-relative">
                        <input required type="email" name="email" id="email" placeholder="Email Address">
                        <img class="icon position-absolute" src="../assets/images1/Vector-2.svg" alt="maill">
                    </div>

                    <div class="position-relative">
                        <input required type="text" name="location" id="location" placeholder="Location">
                        <img class="icon position-absolute" src="../assets/images1/carbon_location.svg"
                            alt="location">
                    </div>
                    <div class="position-relative">
                        <input required type="text" name="company-name" id="company-name" placeholder="Company name">
                        <img class="icon position-absolute" src="../assets/images1/Vector-4.svg" alt="company">
                    </div>
                    <!-- type of business -->
                    <label class="mt-3 mb-1 label-head">Type of buisiness</label>
                    <p>
                        <input type="radio" id="micro" name="buisiness" value="micro">
                        <label for="micro">Micro retailer(&#60;500kg) </label><br>
                        <input type="radio" id="mini" name="buisiness" value="mini">
                        <label for="mini">Mini retailer (2-10mt)</label><br>
                        <input type="radio" id="setup" name="buisiness" value="setup">
                        <label for="setup">I would like to set up an LPG retail business</label>
                    </p>
                    <!-- cylinder inventory -->
                    <label class="mt-3 mb-1 label-head">Cylinder Inventory</label>
                    <p>
                        <input type="radio" id="no-cylinder" name="inventory" value="no-cylinder">
                        <label for="no-cylinder">I do not have cylinders </label><br>
                        <input type="radio" id="less-than-10" name="inventory" value="less-than-10">
                        <label for="less-than-10">&#60;10 cylinders</label><br>
                        <input type="radio" id="ten-to-fifty" name="inventory" value="ten-to-fifty">
                        <label for="ten-to-fifty">10-50cylinders</label><br>
                        <input type="radio" id="less-than-50" name="inventory" value="less-than-50">
                        <label for="less-than-50"> >50 cylinders</label>
                    </p>
                    <!-- how do you know us -->
                    <label class="mt-3 mb-1 label-head">How did you hear abour us?</label>
                    <p>
                        <input type="checkbox" id="gas360website" name="how-you-know-us" value="gas360website">
                        <label for="gas360website">Gas360 website</label><br>
                        <input type="checkbox" id="social-media" name="how-you-know-us" value="social-media">
                        <label for="social-media">Social media</label><br>
                        <input type="checkbox" id="friend" name="how-you-know-us" value="friend">
                        <label for="friend">A friend</label><br>
                        <input type="checkbox" id="outlets" name="how-you-know-us" value="outlets">
                        <label for="outlets">News outlets</label><br>
                        <input type="checkbox" id="event" name="how-you-know-us" value="event">
                        <label for="event">At a conference or event</label>
                    </p>
                    <button type="button" class="btn btn-primary">Submit Form</button>

                </form>
            </div>
        </div>
    </div>
    <!--  E body -->

    <!-- Upgrade -->
    <div class="upgrade text-white">
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-6 col-sm-12">
                    <h2>
                        Upgrade your cooking gas experience
                    </h2>
                    <p class="mb-4">
                        Download the app to keep track of your gas level, order gas from the comfort of your home,
                        subscribe for
                        refills.
                    </p>
                    <div class="download">
                        <div>Get the App</div>
                        <a href="#"> <img src="../assets/images1/Google Play Badge.png" alt="gplay">
                        </a>
                        <a class="me-3" href="#"> <img src="../assets/images1/App Store Badge.png" alt="apple">
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 cta mt-5">
                    <img src="../assets/images1/iPhone.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- E Upgrade -->

    <!-- footer -->
    <div class="container">
        <div class="footer ">
            <div class="footer-card">
                <img src="../assets/images1/Layer 6.svg" alt="logo">
            </div>
            <div class="footer-card">
                <div class="mb-1"><b>Company</b></div>
                <ul>
                    <li><a href="#">About US</a></li>
                    <li><a href="#">Become a Gaspreneur</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div class="footer-card">
                <div class="mb-1"><b>Support</b></div>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Privacy</a></li>
                </ul>
            </div>
            <div class="footer-card">
                <div class="mb-1"><b>Contact</b></div>
                <ul>
                    <li><a href="#">support@gas360.io</a></li>
                    <li><a href="#">+2348140005500</a></li>
                </ul>
            </div>
            <div class="footer-card">
                <div class="mb-1"><b>Follow us:</b></div>
                <ul>
                    <li><a href="#"><i class="fab fa-twitter"></i> @gas360tech</a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i> @gas360tech </a></li>

                </ul>
            </div>
        </div>
    </div>

    <!-- Mobile Footer -->
    <div class="container footer-mobile">
        <div class="footer-card my-5">
            <img src="../assets/images1/Layer 6.svg" alt="logo">
        </div>
        <section class="questions">
            <!-- questions -->

            <!-- single question -->
            <article class="question">
                <!-- question title -->
                <div class="question-title">
                    <p>Company</p>
                    <div class="question-btn" @click="showText()">
                        <span class="plus-icon">
                            <span class="mdi mdi-chevron-right mdi-24px"></span>
                        </span>
                        <span class="minus-icon">

                            <span class="mdi mdi-chevron-up mdi-24px"></span>
                        </span>
                    </div>
                </div>
                <!-- answer text -->
                <div class="question-text">
                    <p>
                    <ul>
                        <li><a href="#">About US</a></li>
                        <li><a href="#">Become a Gaspreneur</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>

                    </p>
                </div>
            </article>
            <!-- E single question -->

            <!-- single question -->
            <article class="question" @click="showText()">
                <!-- question title -->
                <div class="question-title">
                    <p>Support</p>
                    <div class="question-btn">
                        <span class="plus-icon">
                            <span class="mdi mdi-chevron-right mdi-24px"></span>
                        </span>
                        <span class="minus-icon">

                            <span class="mdi mdi-chevron-up mdi-24px"></span>
                        </span>
                    </div>
                </div>
                <!-- answer text -->
                <div class="question-text">
                    <p>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                    </p>
                </div>
            </article>
            <!-- E single question -->

            <!-- single question -->
            <article class="question" @click="showText()">
                <!-- question title -->
                <div class="question-title">
                    <p>Contact
                    </p>
                    <div class="question-btn">
                        <span class="plus-icon">
                            <span class="mdi mdi-chevron-right mdi-24px"></span>
                        </span>
                        <span class="minus-icon">

                            <span class="mdi mdi-chevron-up mdi-24px"></span>
                        </span>
                    </div>
                </div>
                <!-- answer text -->
                <div class="question-text">
                    <p>
                    <ul>
                        <li><a href="#">support@gas360.io</a></li>
                        <li><a href="#">+2348140005500</a></li>
                    </ul>
                    </p>
                </div>
            </article>
            <!-- E single question -->
            <!-- single question -->
            <article class="question" @click="showText()">
                <!-- question title -->
                <div class="question-title">
                    <p>Follow us:
                    </p>
                    <div class="question-btn">
                        <span class="plus-icon">
                            <span class="mdi mdi-chevron-right mdi-24px"></span>
                        </span>
                        <span class="minus-icon">

                            <span class="mdi mdi-chevron-up mdi-24px"></span>
                        </span>
                    </div>
                </div>
                <!-- answer text -->
                <div class="question-text">
                    <p>
                    <ul>
                        <li><a href="#"><i class="fab fa-twitter"></i> @gas360tech</a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i> @gas360tech </a></li>

                    </ul>
                    </p>
                </div>
            </article>
            <!-- E single question -->

        </section>
    </div>
    <!-- E Mobile Footer -->

    <!-- E footer -->
    <!-- copyright -->
    <div class="container mt-5 p-3" style="color: #969BAB;  border-top: 0.5px solid #888888;">
        &copy; Copyright, Gas360 {{ year }}. All right reserved
    </div>
    <!-- copyright -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      year: '',
      questions: '',
    };
  },
  mounted() {
    this.yearSet();
    this.questions = document.querySelectorAll('.question');
  },
  methods: {
    yearSet() {
      const date = new Date();
      this.year = date.getFullYear();
    },
    menubar() {
      const menuList = document.querySelector('.menu-list ');
      const menuBar = document.querySelector('.menu-bar i');

      menuList.classList.toggle('open');
      menuBar.classList.toggle('open');
    },
    showText() {
      this.questions.forEach((question) => {
        const btn = question.querySelector('.question-btn');
        // console.log(btn);

        btn.addEventListener('click', () => {
          // console.log(question);

          this.questions.forEach((item) => {
            if (item !== question) {
              item.classList.remove('show-text');
            }
          });

          question.classList.toggle('show-text');
        });
      });
    },
  },
};
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap");
  :root {
    --primary: #3789ec;
    --accent: #011230;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  ul {
    margin: 0 !important;
    padding: 0 !important;
  }
  li {
    list-style: none !important;
  }
  a {
    text-decoration: none !important;
    color: #000 !important;
  }
  body {
    background-color: #fffffa;
    font-family: "Manrope", sans-serif;
  }
  /* =============Deskstop view====================== */
  .landing-page {
    min-width: 100%;
    min-height: auto;

    background-image: url("../assets/images1/Rectangle.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  .kiakia-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: auto;
  }
  .tabs li {
    display: inline;
    margin: 0 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;

    color: #a58787;
  }
  .menu-bar {
    display: none;
  }

  .tabs a {
    color: #000;
  }
  /* ===========CONTENT ================= */
  .head {
    text-transform: uppercase;
    color: var(--primary);
  }

  /* ==============upgrade=========================== */
  .upgrade {
    background-color: var(--primary);
    padding: 50px 0;
  }
  .upgrade .download img {
    width: 100px;
  }
  .cta img {
    width: 450px;
  }
  /* =============== FAQ================== */
  .question {
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    padding: 10px 0;

    margin-bottom: 6px;
    border-bottom: 0.5px solid #4f4f4f;
    transition: all 0.5s ease-in-out;
  }
  .question-title {
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    padding-bottom: 5px;
    font-weight: 500;
  }
  .question:last-child {
    border-bottom: none;
  }
  .question-btn {
    margin-top: -5px;
  }
  .question-title p {
    margin-bottom: 0;
  }
  .question-btn {
    cursor: pointer;
  }

  .question-text {
    font-size: 15px;
    padding-bottom: 0.5rem;
  }
  .question-text p {
    color: #474a57;

    margin-bottom: 0;
  }
  /* hide text */
  .question-text {
    display: none;
  }
  .show-text .question-text {
    display: block;
  }
  .minus-icon {
    display: none;
  }
  .show-text .minus-icon {
    display: inline;
  }
  .show-text .plus-icon {
    display: none;
  }

  input[type="text"],
  input[type="phone"],
  input[type="email"] {
    width: 100%;
    border: none;
    padding: 10px 10px 10px 35px;
    border-bottom: 1px solid #555555;
  }
  input[type="radio"],
  input[type="checkbox"] {
    margin-right: 15px;
  }

  input[type="text"]:focus,
  input[type="phone"]:focus,
  input[type="email"]:focus {
    outline: none;
    border-bottom: 1.5px solid var(--primary);
    transition: all 0.5s ease-in-out;
  }

  .label-head {
    font-size: 25px;
  }
  .icon {
    top: 13px;
    left: 0;
  }
  p label {
    color: #474a57;
  }
  /* ==================footer===================== */
  .footer {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
    margin: 20px 0;
  }
  .footer .footer-card {
    width: 18%;
    margin: 10px;
  }
  .footer-card img {
    width: 100px;
  }
  .footer-card li {
    list-style-type: none;
    display: block;
    margin: 10px 0;
  }
  .footer a {
    color: #474a57 !important;
  }
  .footer-mobile {
    display: none;
  }

  @media screen and (max-width: 992px) {
    .tabs li {
      font-size: 15px;
    }
  }

  /* =========================== MOBILE VIEW========================== */
  @media screen and (max-width: 765px) {
    /* ===================== Menu bar Navigation ======================= */
    .menu-bar {
      display: block;
      position: absolute;
      cursor: pointer;
      top: 20px;
      right: 20px;
      z-index: 999;
    }
    .menu-list {
      height: 100vh;
      position: fixed;
      width: 100%;
      padding-top: 50px;
      background: #e5e5e5;
      left: 0;
      top: 0;
      clip-path: circle(10px at 90% -12%);
      -webkit-clip-path: circle(10px at 90% -12%);
      transition: all 1s ease-out;
    }
    .menu-list.open {
      clip-path: circle(1000px at 90% -12%);
      -webkit-clip-path: circle(1000px at 90% -12%);
    }
    .menu-bar i.open::before {
      content: "\f00d";
      transition: all 0.6s ease-in;
    }
    .menu-list li {
      display: block !important;
      margin: 50px 20px !important;
    }
    .menu-list li:last-child {
      display: none !important;
    }
    .menu-list a {
      font-size: 25px;
    }
    li a:hover {
      color: var(--primary) !important;
    }

    h5.head {
      font-size: 16px;
    }
    .gas360-circle {
      padding: 50px 0;
    }
    .label-head {
      font-size: 20px;
    }
    form button {
      width: 100%;
      background-color: var(--primary);
      margin-bottom: 50px;
    }
    /* ======================= Footer====================== */
    .footer .footer-card {
      width: 30%;
      margin: 5px;
    }
    .footer .footer-card {
      width: 100%;
      margin: 10px;
    }
    .footer {
      display: none;
    }
    .footer-mobile {
      display: block;
    }
    .footer-mobile a {
      color: #474a57 !important;
    }
    .footer-mobile a:hover {
      color: var(--primary) !important;
    }
  }

</style>
