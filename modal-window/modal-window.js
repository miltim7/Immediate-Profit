document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("signup-modal");
  const closeButton = document.querySelector(".close-button");
  const openButtons = document.querySelectorAll(".open-modal-btn");

  function showModal() {
    if (!modal.classList.contains("active")) {
      modal.classList.add("active");
    }
  }

  openButtons.forEach(button => {
    button.addEventListener("click", () => {
      showModal();
    });
  });

  document.addEventListener("mouseout", (e) => {
    if (!e.relatedTarget && e.clientY <= 0 && !modal.classList.contains("active")) {
      showModal();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !modal.classList.contains("active")) {
      showModal();
    }
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  const form = document.getElementById("signup-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Form submitted!");
    modal.classList.remove("active");
  });
});
