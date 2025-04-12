function toggleNavbar() {
  document.getElementById("navbarLinks").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");
    const icon = item.querySelector(".toggle-icon");

    btn.addEventListener("click", () => {
      item.classList.toggle("active");

      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          other.querySelector(".toggle-icon").classList.remove("fa-minus");
          other.querySelector(".toggle-icon").classList.add("fa-plus");
        }
      });

      if (item.classList.contains("active")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      } else {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      }
    });
  });
});