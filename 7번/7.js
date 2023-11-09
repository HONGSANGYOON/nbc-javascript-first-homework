const time = document.querySelector(".timer");
const container = document.querySelector(".container");

let timenumber = Number(timer.context);

const int = setInterval(() => {
  if (
    timenumber <= 10
    //timer가 10보자 작으면
  ) {
    //원래 숫자에서 +1을 해주고 출력한다.

    timenumber = timenumber + 1;
    time.innerHTML = timenumber;
  } else {
    container.style.display = "none";
    clearInterval(int);
  }
}, 1000);
