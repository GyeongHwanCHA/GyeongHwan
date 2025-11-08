// 현재 연도 자동 표시
document.getElementById("year").textContent = new Date().getFullYear();

// 부드러운 스크롤
document.querySelectorAll(".nav-list a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// 프로젝트 필터 기능
const buttons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tag = btn.dataset.tag;
    projects.forEach(card => {
      card.style.display = (tag === "all" || card.dataset.tag === tag) ? "block" : "none";
    });
  });
});

// 스크롤 애니메이션 효과
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});
