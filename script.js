//your JS code here. If required.
  window.addEventListener("DOMContentLoaded", () => {
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const checkbox = document.getElementById("checkbox");
      const existingBtn = document.getElementById("existing");
      const form = document.getElementById("loginForm");

      // Check if credentials exist
      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");

      if (savedUsername && savedPassword) {
        existingBtn.style.display = "block";
      }

      // Handle form submit
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        alert("Logged in as " + username);

        if (checkbox.checked) {
          // Save credentials
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
        } else {
          // Remove stored credentials
          localStorage.removeItem("username");
          localStorage.removeItem("password");
        }

        // Update visibility of "existing" button
        if (localStorage.getItem("username") && localStorage.getItem("password")) {
          existingBtn.style.display = "block";
        } else {
          existingBtn.style.display = "none";
        }
      });

      // Handle existing user login
      existingBtn.addEventListener("click", () => {
        const savedUser = localStorage.getItem("username");
        if (savedUser) {
          alert("Logged in as " + savedUser);
        }
      });
    });