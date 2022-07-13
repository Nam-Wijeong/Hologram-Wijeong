// 뒤로가기 버튼 - 이전 페이지로 넘어감
const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', () => { goBack() });

function goBack() {
  history.back();
}




