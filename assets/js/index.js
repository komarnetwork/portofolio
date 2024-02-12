const nav = document.getElementById("nav");
const navMenu = document.getElementById("navMenu");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content");
const modalViews = document.querySelectorAll(".modal");
const triggerBtn = document.querySelectorAll(".trigger");
const closeButton = document.querySelectorAll(".close-button");

// box shadow navigation aktiv pada saat window di scroll
window.onscroll = function () {
  let scrollOn = window.pageYOffset;
  if (scrollOn > 20) {
    nav.style.backgroundColor = "var(--white)";
    nav.style.boxShadow = "0 4px 20px rgb(0, 0, 0, 0.2)";
    nav.style.transition = "200ms";
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
  }
};

// navigation dan hamburger menu untuk mobile
hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburgerMenuActive");
  navMenu.classList.toggle("navMenuActive");
});

// tabs
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // hapus class active dari sebelumnya di klik
    tabs.forEach((tab) => tab.classList.remove("active"));

    tab.classList.add("active");

    // hide dari content sebelumnya
    contents.forEach((c) => c.classList.remove("active"));

    // menampilkan content dari tab yang terseleksi
    contents[index].classList.add("active");
  });
});

tabs[0].click();

// portofolio modal/popup
var modal = function (modalClick) {
  modalViews[modalClick].classList.add("active");
};

triggerBtn.forEach((triggerBtn, i) => {
  triggerBtn.addEventListener("click", () => {
    modal(i);
  });
});

closeButton.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});
