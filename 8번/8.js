const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const Input = prompt("입력하세요");
  if (Input !== null) {
    alert(Input);
  }
});
