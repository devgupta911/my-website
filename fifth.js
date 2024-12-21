// Highlight navigation links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.backgroundColor = "#f0f8ff";
        link.style.color = "#333";
    });

    link.addEventListener("mouseleave", () => {
        link.style.backgroundColor = "transparent";
        link.style.color = "#007BFF";
    });
});

// Add an interactive alert for images
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
        alert(`You clicked on: ${img.alt}`);
    });
});