document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const frontText = card.getAttribute("data-front");
    const backText = card.getAttribute("data-back");
    card.innerHTML = `<span class="front">${frontText}</span><span class="back">${backText}</span>`;

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-20px) scale(1.1)";
      card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mousedown", () => {
      card.style.transform = "rotateY(180deg)";
      card.style.transition = "transform 1.6s, background 1.6s";
    });

    card.addEventListener("mouseup", () => {
      card.style.background =
        "linear-gradient(270deg, #ff5f6d, #ffc371, #47b39c, #6a11cb, #2575fc)";
      card.style.backgroundSize = "800% 800%";
      card.style.animation = "rainbow 4s infinite";
    });
  });
});
