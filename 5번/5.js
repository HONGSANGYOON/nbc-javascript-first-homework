const num = document.querySelectorAll(".number");

for (let i = 0; i < num.length; i++) {
  //10을 더 한 수의 값을 도출
  newnum = 1 + num[i].textContent;
  //도출한 값을 div에 적용할 수 있도록 div값과 for문의 값을 일치시켜준다.
  num[i].textContent = newnum;
}

// 문제점 : 10을 더한값이라기보단 div의 나온 1,2,3을 string 타입으로 불러들여
// 1 + string타입의 값이 된거기에 문자열을 숫자열로 변환 후 합연산에 적용 그후 div창에 적용시키는 법 물어보기
