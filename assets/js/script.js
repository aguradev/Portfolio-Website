const btnNavToggle = document.getElementById("btn_toggle");
const NavbarSec = document.querySelector(".navlist");
const btnImgToggle = document.querySelector(".btn-toggle .img-toggle");
const year = document.querySelector(".years");
const header = document.querySelector("header");
const navBar = header.querySelector(".navbar");
const article = document.querySelectorAll("main #content article");

if (navBar.classList.contains("nav-fixed")) {
  btnImgToggle.setAttribute("src", "gambar/white-icon-menu.png");
}

window.addEventListener("scroll", () => {
  const scrollDetected = this.pageYOffset;
  if (scrollDetected > 0) {
    navBar.classList.add("nav-fixed");
    btnImgToggle.setAttribute("src", "assets/gambar/white-icon-menu.png");
  } else {
    navBar.classList.remove("nav-fixed");
    btnImgToggle.setAttribute("src", "assets/gambar/default-icon-menu.png");
  }

  article.forEach((content) => {
    const contentTop = content.offsetTop - 150;
    const contentHeight = content.offsetHeight;
    const contentID = content.getAttribute("id");
    const navItem = navBar.querySelector(
      `.navlist .nav-item a[href*=${contentID}]`
    );

    if (
      scrollDetected > contentTop &&
      scrollDetected <= contentTop + contentHeight
    ) {
      navItem.classList.add("active");
    } else {
      navItem.classList.remove("active");
    }
  });
});

const date = new Date();
const Age = date.getFullYear() - 2001;

year.innerText = `${Age} Years`;

btnNavToggle.addEventListener("click", () => {
  NavbarSec.classList.toggle("active");

  if (NavbarSec.classList.contains("active")) {
    if (navBar.classList.contains("nav-fixed")) {
      btnImgToggle.setAttribute("src", "assets/gambar/white-icon-x.png");
    } else {
      document.body.style.paddingTop = "300px";
      btnImgToggle.setAttribute("src", "assets/gambar/x-regular-36.png");
    }
  } else {
    if (navBar.classList.contains("nav-fixed")) {
      btnImgToggle.setAttribute("src", "assets/gambar/white-icon-menu.png");
    } else {
      document.body.style.paddingTop = "180px";
      btnImgToggle.setAttribute("src", "assets/gambar/default-icon-menu.png");
    }
  }
});
