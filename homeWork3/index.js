// Урок 3. Промисы. Хранилище
// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. 
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в 
// LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о 
// которых были оставлены отзывы.
// При клике на название продукта отображается список всех 
// отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, 
// данный отзыв удаляется из LocalStorage).

document.addEventListener('DOMContentLoaded', () => {
    displayProductList();
  
    const addReviewBtn = document.getElementById('add-review-btn');
  
    addReviewBtn.addEventListener('click', () => {
      const productName = document.getElementById('product-name').value;
      const reviewText = document.getElementById('review-text').value;
  
      if (productName && reviewText) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
        if (!Array.isArray(reviews[productName])) {
          reviews[productName] = [];
        }
        reviews[productName].push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        displayProductList();
      }
    });
  
    function displayProductList() {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
      const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
      for (let product in reviews) {
        const li = document.createElement('li');
        li.textContent = product;
        li.addEventListener('click', () => {
          displayReviews(product, reviews[product]);
        });
        productList.appendChild(li);
      }
    }
  
    function displayReviews(product, productReviews) {
      const reviewsContainer = document.getElementById('reviews-container');
      reviewsContainer.innerHTML = `<h3>Отзывы о продукте "${product}"</h3>`;
      productReviews.forEach((review, index) => {
        const p = document.createElement('p');
        p.textContent = `${index + 1}. ${review}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', () => {
          productReviews.splice(index, 1);
          const reviews = JSON.parse(localStorage.getItem('reviews'));
          reviews[product] = productReviews;
          localStorage.setItem('reviews', JSON.stringify(reviews));
          displayReviews(product, productReviews);
        });
        p.appendChild(deleteBtn);
        reviewsContainer.appendChild(p);
      });
    }
    // localStorage.removeItem('name');
    // localStorage.removeItem('reviews');
  });