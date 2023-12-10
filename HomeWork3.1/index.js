const photoContainer = document.getElementById('photo-container');
const numberPage = document.querySelector('#number-page');
const quantityPhotos = document.querySelector('#quantity-photos');
const btnLike = document.querySelectorAll('.btn-like');
let page = Math.floor(Math.random() * 50) + 1;
let likeCount = 0;



const quantity = 10;

async function fetchPhotos () {
try {
const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=${quantity}&client_id=q-IxvbzxnTW-Q5DLILjuVgnb7QDo6ft1CUuYf3VHESQ`);
const photos = await response.json();
console.log(photos);
return photos;
} catch (error) {
console.error('Ошибка при загрузке фотографий:', error);
return [];
}
}

async function loadMorePhotos () {
fetchPhotos().then(elem => {
elem.forEach(element => {
photoContainer.innerHTML += `
<div class="img-container">
<img src="${element.urls.small}">
<div class="img__info">
<h3 class="img__title">Фотограф: ${element.user.username}</h3>
<p class="img__txt">Биография: ${element.user.bio}</p>
<p class="img__likes">Лайков:<span class="likecount">${element.likes}</span></p>
<button class="btn-like">Лайк</button>
</div>
</div>
`
});
});
}
// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();


function handleLikeButtonClick() {
    likeCount++;
    const likeCountElement = event.target.parentNode.querySelector('.likecount');
    const count = parseInt(likeCountElement.textContent);
    likeCountElement.textContent = count + likeCount;
    localStorage.setItem('likeCountElement', likeCount.toString());
  }

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-like')) {
      handleLikeButtonClick();
    }
  });

window.addEventListener('scroll', () => {
if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
loadMorePhotos();
}
});



