const mockup = document.querySelector(".mockup");
const scrollContainer = document.querySelector(".scroll-container");

mockup.addEventListener("mouseenter", () => {
  const scrollHeight = scrollContainer.scrollHeight - mockup.clientHeight;
  scrollContainer.style.transform = `translateY(-${scrollHeight}px)`;
});

mockup.addEventListener("mouseleave", () => {
  scrollContainer.style.transform = `translateY(0)`;
});
