document.addEventListener("DOMContentLoaded", () => {
    // Add "Show More" functionality to sections with long content
    const sections = document.querySelectorAll(".section");
  
    sections.forEach((section) => {
      const content = section.querySelector("ul, p");
      if (content && content.scrollHeight > 150) {
        // Limit the content's height
        content.style.maxHeight = "150px";
        content.style.overflow = "hidden";
        content.style.transition = "max-height 0.3s ease";
  
        // Create a "Show More" button
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Show More";
        section.appendChild(toggleButton);
  
        // Add event listener for toggle functionality
        toggleButton.addEventListener("click", () => {
          if (content.style.maxHeight === "150px") {
            content.style.maxHeight = "none";
            toggleButton.textContent = "Show Less";
          } else {
            content.style.maxHeight = "150px";
            toggleButton.textContent = "Show More";
          }
        });
      }
    });
  });