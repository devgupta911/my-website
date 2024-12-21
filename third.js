document.addEventListener("DOMContentLoaded", () => {
    // Add "Show More" functionality
    const sections = document.querySelectorAll(".section");
    
    sections.forEach((section) => {
      // Find all the content within the section
      const content = section.querySelector("ul, p");
      if (content && content.scrollHeight > 100) { // Add Show More if content is too long
        // Limit the height initially
        content.style.maxHeight = "100px";
        content.style.overflow = "hidden";
  
        // Add a Show More button
        const showMoreBtn = document.createElement("button");
        showMoreBtn.textContent = "Show More";
        showMoreBtn.style.display = "block";
        showMoreBtn.style.margin = "10px auto";
  
        section.appendChild(showMoreBtn);
  
        // Toggle content on button click
        showMoreBtn.addEventListener("click", () => {
          if (content.style.maxHeight === "100px") {
            content.style.maxHeight = "none";
            content.style.overflow = "visible";
            showMoreBtn.textContent = "Show Less";
          } else {
            content.style.maxHeight = "100px";
            content.style.overflow = "hidden";
            showMoreBtn.textContent = "Show More";
          }
        });
      }
    });
  });