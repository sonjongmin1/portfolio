document.addEventListener("DOMContentLoaded", function () {
  const mockups = document.querySelectorAll(".mockup");

  mockups.forEach((mockup) => {
    const scrollContainer = mockup.querySelector(".scroll-container");

    mockup.addEventListener("mouseenter", () => {
      const scrollHeight = scrollContainer.scrollHeight - mockup.clientHeight;
      scrollContainer.style.transform = `translateY(-${scrollHeight}px)`;
    });

    mockup.addEventListener("mouseleave", () => {
      scrollContainer.style.transform = `translateY(0)`;
    });
  });
});
