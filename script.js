const text = "سلام! من یه توسعه‌دهنده‌ام که با عشق کد می‌زنم :)";

const typewriter = document.querySelector(".typewriter");

const cards = document.querySelectorAll(".card-item");

let index = 0;

function type() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // سرعت تایپ
  }
}

type();

cards.forEach((card, i) => {
  setTimeout(() => {
    card.classList.add("flipped");
  }, (8 + i * 4) * 1000);
});

// شبیه‌سازی پایان کارت‌ها بعد از چند ثانیه
setTimeout(() => {
  const outro = document.getElementById("outro");
  outro.classList.add("show");
}, 18000); // شروع بعد از ۱۲ ثانیه از لود شدن صفحه

const cta = document.getElementById("cta");
const finalText = document.getElementById("finalText");

cta.addEventListener("click", () => {
  cta.style.display = "none";
  finalText.classList.add("show");

  // محو شدن صحنه بعد از چند ثانیه
  setTimeout(() => {
    document.body.classList.add("fade-out");
  }, 3000);
});
