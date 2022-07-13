// 페이지 하단
const postMenuBtn = document.querySelector('.post-menu-button');
const modalBg = document.querySelector('.modal-bg');
const modalBottom = document.querySelector('.modal-window-bottom');
const modalClose = document.querySelector('.modal-close-bar');
const deleteBtn = document.querySelector('#delete-post');
const modifyBtn = document.querySelector('#modify-post');

// 페이지 중앙
const modalCenter = document.querySelector('.modal-window-center');
const cancelBtn = document.querySelector('#cancel-btn');
const logoutBtn = document.querySelector('#logout-btn');

function showModalBottom() {
    modalBottom.classList.remove('hidden');
    modalBg.classList.remove('hidden');
}

function hiddenModalBottom() {
  modalBottom.classList.add('hidden');
  modalBg.classList.add('hidden');
}

postMenuBtn.addEventListener('click', showModalBottom);

function showModalCenter() {
  modalCenter.classList.remove('hidden');
}

function hiddenModalCenter() {
  modalCenter.classList.add('hidden');
}

deleteBtn.addEventListener('click', showModalCenter);
cancelBtn.addEventListener('click', () => {
  hiddenModalCenter();
  hiddenModalBottom();
} );



