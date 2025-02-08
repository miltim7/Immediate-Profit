document.addEventListener("DOMContentLoaded", () => {
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const predefButtons = document.querySelectorAll(".predef-btn");
    const closeChatBtn = document.querySelector(".close-chat");
  
    const scrollAnchor = document.createElement("div");
    scrollAnchor.id = "scroll-anchor";
    scrollAnchor.style.height = "100px";
    chatBody.appendChild(scrollAnchor);
  
    function scrollToBottom() {
      scrollAnchor.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  
    function appendMessage(content, className) {
      const msgDiv = document.createElement("div");
      msgDiv.className = "message " + className;
      msgDiv.innerHTML = content;
      chatBody.insertBefore(msgDiv, scrollAnchor);
      scrollToBottom();
    }
  
    function botRespondWithForm() {
      appendMessage('<span style="color: gray; font-size: 12px;">Please introduce yourself</span>', "bot-message");
      const formHtml = `
        <form id="bot-form" class="bot-form">
          <input type="text" name="firstName" placeholder="First Name" required>
          <input type="text" name="lastName" placeholder="Last Name" required>
          <input type="email" name="email" placeholder="Email" required>
          <input type="tel" name="phone" placeholder="Phone Number" required>
          <button type="submit">Submit</button>
        </form>
      `;
      appendMessage(formHtml, "bot-message");
      const botForm = document.getElementById("bot-form");
      botForm.addEventListener("submit", (e) => {
        e.preventDefault();
        appendMessage("Form submitted!", "bot-message");
        botForm.reset();
      });
    }
  
    sendBtn.addEventListener("click", () => {
      const text = chatInput.value.trim();
      if (text) {
        appendMessage(text, "user-message");
        chatInput.value = "";
        botRespondWithForm();
      }
    });
  
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendBtn.click();
      }
    });
  
    predefButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const question = btn.textContent;
        const answer = btn.getAttribute("data-answer");
        appendMessage(question, "user-message");
        appendMessage(answer, "bot-message");
      });
    });
  
    closeChatBtn.addEventListener("click", () => {
      window.parent.postMessage({ type: "closeChat" }, "*");
    });
  });
  