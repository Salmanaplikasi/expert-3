import API_CONFIG from '../../globals/apiConfig';

const RestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-card"> 
    <a href="/#/detail/${restaurant.id}">
      <div class="restaurant-card__image">
      <img class="restaurant-card__image__item" alt="${restaurant.name}" src="${API_CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" loading="lazy"/>
      <span class="restaurant-card__image__rating">
          <span>${restaurant.rating}</span>
        </span>
      </div>
      <div class="restaurant-card__content">
        <p class="restaurant-card__content__title">${restaurant.name} - ${restaurant.city}</p>
        <p class="restaurant-card__content__description">${restaurant.description}</p>
      </div>
    </a>
  </div>
`;

const RestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <div class="restaurant-detail__hero">
      <img class="restaurant-detail__hero-img" src="${API_CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="restaurant-detail__hero-info">
        <h2>${restaurant.name}</h2>
        <p class="restaurant-detail__hero-address">${restaurant.city}, ${restaurant.address}</p>
        <div class="restaurant-detail__hero-rating">
          <svg id='Star_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
          </svg>
          <p>${restaurant.rating}</p>
        </div>
      </div>
    </div>
    <div class="restaurant-detail__content">
    <div class="restaurant-detail__about">
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant-detail__menu">
      <table>
        <thead>
          <tr>
            <th>Food</th>
          </tr>
        </thead>
        <tbody>
          ${restaurant.menus.foods.map((food) => `<tr><td>${food.name}</td></tr>`).join('')}
        </tbody>
      </table>      <table>
        <thead>
          <tr>
            <th>Drink</th>
          </tr>
        </thead>
        <tbody>
          ${restaurant.menus.drinks.map((drink) => `<tr><td>${drink.name}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="restaurant-detail__reviews">
      <h3>Review</h3>
      <div class="review-container">
        ${restaurant.customerReviews.map((review) => `
          <div class="review">
            <p class="reviewer-name">${review.name} •</p>
            <p class="review-date">${review.date}</p>
            <p class="reviewer-review">${review.review}</p>
          </div>
          <div class="detail-review"></div> 
        `).join('')}
      </div>
    </div>
  </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestaurantItemTemplate,
  RestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikedButtonTemplate,
};
