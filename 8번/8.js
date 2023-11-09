const upBtn = document.querySelector(".up-btn");

window.addEventListener("scroll", () => {
  console.log({ scrollY });
  if (scrollY > 100) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
});

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//버튼이 100vh 밑에서 보이는게 구현 안됬습니다. => 질문하기
