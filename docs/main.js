document.addEventListener("DOMContentLoaded", () => {
  const clockEl = document.getElementById("clock");
  if (clockEl) {
    function updateClock() {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString("pl-PL");
    }
    setInterval(updateClock, 1000);
    updateClock();
  }

  const filterContainer = document.querySelector(".filter-btns");
  if (filterContainer) {
    const filterBtns = filterContainer.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const filterableVideos = document.querySelectorAll(".filterable-video");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-category");

        filterBtns.forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");

        galleryItems.forEach((item) => {
          if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });

        filterableVideos.forEach((videoSec) => {
          if (videoSec.classList.contains(category)) {
            videoSec.style.display = "block";
          } else {
            videoSec.style.display = "none";
          }
        });
      });
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      const email = document.getElementById("email");
      const topic = document.getElementById("topic");
      const message = document.getElementById("message");

      const emailError = document.getElementById("emailError");
      const topicError = document.getElementById("topicError");
      const messageError = document.getElementById("messageError");
      const successBox = document.getElementById("successBox");

      // Walidacja pola E-mail (regex)
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
      if (!email.value.trim().match(emailPattern)) {
        emailError.style.display = "block";
        isValid = false;
      } else {
        emailError.style.display = "none";
      }

      // Walidacja Tematu (select)
      if (!topic.value) {
        topicError.style.display = "block";
        isValid = false;
      } else {
        topicError.style.display = "none";
      }

      // Walidacja Wiadomości (textarea)
      if (message.value.trim().length < 10) {
        messageError.style.display = "block";
        isValid = false;
      } else {
        messageError.style.display = "none";
      }

      // Poprawne wysłanie
      if (isValid) {
        successBox.style.display = "block";
        this.reset();
        setTimeout(() => {
          successBox.style.display = "none";
        }, 5000);
      }
    });
  }
});
