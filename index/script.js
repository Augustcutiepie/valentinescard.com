const images = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

// Open Lightbox with Different Image
images.forEach(img => {
    img.addEventListener("click", () => {
        const fullImageSrc = img.getAttribute("data-full"); // Get different image
        lightbox.style.display = "flex";
        lightboxImg.src = fullImageSrc;
    });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
