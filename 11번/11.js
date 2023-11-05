const now = new Date();
const nowHour = now.getHours();

if (nowHour < 10) {
  console.log("good morning");
} else if (nowHour >= 10 && nowHour < 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}

// 현재시각이 잘 나오는지 테스트하기위한 콘솔입니다
console.log(nowHour);
