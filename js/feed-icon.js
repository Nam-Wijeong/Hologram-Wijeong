const CLICKED = 'clicked';

// 좋아요 버튼
const likeBtn = document.querySelector('.like-button');
const likeNum = document.querySelector('.like-num');

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle(CLICKED);
    likeBtn.style.transition = '0.5s';
})

// 찬성, 반대 
const thumbsUpBtn = document.querySelector('.thumbs-up-button');
const thumbsDownBtn = document.querySelector('.thumbs-down-button');

thumbsUpBtn.addEventListener('click', () => {
  thumbsDownBtn.classList.remove(CLICKED);
  thumbsUpBtn.classList.toggle(CLICKED);
  thumbsUpBtn.style.transition = '0.5s';
})

thumbsDownBtn.addEventListener('click', () => {
  thumbsUpBtn.classList.remove(CLICKED);
  thumbsDownBtn.classList.toggle(CLICKED);
  thumbsDownBtn.style.transition = '0.5s';
})