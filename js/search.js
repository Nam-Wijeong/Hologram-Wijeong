// const token = localStorage.getItem('token');
// const accountName = localStorage.getItem('accountname');

// async function searchUser () {
//     const url = 'https://mandarin.api.weniv.co.kr';
//     try {
//       const res = await fetch(`${url}/user/searchuser/?keyword=`, {
//         method: 'GET',
//         headers: {
//         'Authorization' : `Bearer ${token}`,
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             _id: accountName,
//             username: accountName,
//             accountname: accountName,
//             following: [],
//             follower: [],
//             followerCount: 1,
//             followingCount: 1,
//         }),
//       });
//       const resJson = await res.json();
//       console.log(resJson);
  
//     //   if (resJson.status !== 422) {
//     //     location.href = './home.html';
//     //   } else {
//     //     errMsg.classList.add('error');
//     //     loginBtn.classList.remove('active');
//     //   }
      
//     } catch (err) {
//       console.error(err);
//     }
//   }



const searchInp = document.querySelector('.search-input');
const url = 'https://mandarin.api.weniv.co.kr'
const token = localStorage.getItem('token');
const searchMain = document.querySelector('.search-main');
const ul = document.querySelector('.user-list-wrap');

async function searchUser(e) {
  e.preventDefault();
  const searchValue = e.target.value;
  if(searchValue == '') {
    searchMain.innerHTML = '';
  } else {
    const res = await fetch(`${url}/user/searchuser/?keyword=${searchValue}`, {
        method: "GET",
        headers: {
          "Authorization" : `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });
    const json = await res.json();
    // console.log(json);
    
    searchMain.innerHTML = '';

    // const li = document.createElement('li');
    //   const link = document.createElement('a');
    //   const img = document.createElement('img');
    //   const div = document.createElement('div');
    //   const strong = document.createElement('strong');
    //   const span = document.createElement('span');

    //   ul.setAttribute('class', 'user-list-wrap');
    //   li.setAttribute('class', 'user-profile-li');
    //   link.setAttribute('class', 'search-a');
    //   img.setAttribute('class', 'user-img');
    //   strong.setAttribute('class', 'user-name');
    //   span.setAttribute('class', 'user-id');
    //   searchMain.insertAdjacentElement('beforeend', ul)
    //   ul.insertAdjacentElement('beforeend', li);
    //     li.insertAdjacentElement('beforeend', link)
    //     link.insertAdjacentElement('beforeend', img)
    //     link.insertAdjacentElement('beforeend', div)
    //     div.insertAdjacentElement('beforeend', strong)
    //     div.insertAdjacentElement('beforeend', span)
    //     link.href = `./profile.html?id=${accountName}`;
    //     img.src = `${image}`;
    //     img.alt = '프로필 이미지'
    //     strong.innerHTML = userName;
    //     span.innerHTML = accountName;

    // render 
    json.forEach(element => {
      const accountName = element.accountname;
      const userName = element.username;
      const image = element.image;
      
      searchMain.innerHTML += `
      <li class="user-profile-li">
        <a href='./profile.html?id=${accountName}' class='search-a'>
            <img src='${image}' alt='프로필 이미지' class='user-img'/>
            <div class='user-info'>
              <strong class='user-name'>${userName}</strong>          
              <span class='user-id'>${accountName}</span>
            </div
        </a>
      </li>                
        `
      }
    );
  }
}
searchInp.addEventListener('input', searchUser);
