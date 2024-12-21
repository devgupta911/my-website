document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on the second page
  if (window.location.pathname.includes("page2.html")) {
    // Show a sign-in form pop-up
    showSignInForm();
  }

  // Function to create and display a sign-in form pop-up
  function showSignInForm() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";

    const formContainer = document.createElement("div");
    formContainer.style.backgroundColor = "#fff";
    formContainer.style.padding = "20px";
    formContainer.style.borderRadius = "10px";
    formContainer.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    formContainer.style.maxWidth = "400px";
    formContainer.style.width = "100%";

    const formTitle = document.createElement("h2");
    formTitle.textContent = "Sign In";
    formTitle.style.color = "#121212";
    formContainer.appendChild(formTitle);

    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Username:";
    formContainer.appendChild(usernameLabel);
    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.placeholder = "Enter your username";
    usernameInput.style.width = "100%";
    usernameInput.style.padding = "10px";
    usernameInput.style.marginBottom = "10px";
    formContainer.appendChild(usernameInput);

    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password:";
    formContainer.appendChild(passwordLabel);
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "Enter your password";
    passwordInput.style.width = "100%";
    passwordInput.style.padding = "10px";
    passwordInput.style.marginBottom = "10px";
    formContainer.appendChild(passwordInput);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Sign In";
    submitButton.style.backgroundColor = "#FFD700";
    submitButton.style.color = "#121212";
    submitButton.style.padding = "10px 20px";
    submitButton.style.border = "none";
    submitButton.style.borderRadius = "5px";
    formContainer.appendChild(submitButton);

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.backgroundColor = "#FF5733";
    closeButton.style.color = "#fff";
    closeButton.style.padding = "10px 20px";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    formContainer.appendChild(closeButton);

    // Append the form to the overlay
    overlay.appendChild(formContainer);

    // Close the form when the close button is clicked
    closeButton.addEventListener("click", function () {
      document.body.removeChild(overlay);
    });

    // Append the overlay to the body
    document.body.appendChild(overlay);
  }

  // "Learn More" Button Functionality
  const learnMoreButton = document.getElementById("learnMoreButton");
  const additionalContent = document.getElementById("additionalContent");

  if (learnMoreButton && additionalContent) {
    learnMoreButton.addEventListener("click", () => {
      if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block"; // Show the hidden content
        learnMoreButton.textContent = "Show Less"; // Update button text
      } else {
        additionalContent.style.display = "none"; // Hide the content
        learnMoreButton.textContent = "Learn More"; // Reset button text
      }
    });
  }
});