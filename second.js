// Add interactive behavior for dynamic content display
document.addEventListener("DOMContentLoaded", () => {
    // Toggle visibility for hidden content
    const toggleButtons = document.querySelectorAll(".toggle-content");
  
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const isHidden = targetElement.style.display === "none" || !targetElement.style.display;
          targetElement.style.display = isHidden ? "block" : "none";
          button.textContent = isHidden ? "Hide Details" : "Show Details";
        }
      });
    });
  });