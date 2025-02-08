document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.querySelector(".open-chat-btn");
  const chatPanel = document.getElementById("chat-panel");

  chatButton.addEventListener("click", () => {
    chatPanel.classList.add("active");
    chatButton.style.display = "none";
  });

  window.closeChatPanel = function () {
    chatPanel.classList.remove("active");
    chatButton.style.display = "block";
  };

  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "closeChat") {
      closeChatPanel();
    }
  });
});
