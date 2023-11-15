// 여기에 1번 문제의 답을 작성하세요.
const post = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const res = await res.json();
  return data;
};
// 여기에 2번 문제의 답을 작성하세요.
const getPost = async () => {
  const resoponse = await fetch("https://dummyjson.com/products/add");
  const data = await res.json();
  return data;
};
const makeHtml = async () => {
  const data = await getPost;
};
