import FavoriteRestaurantIdb from '../../data/favoriteRestoIdb';
import { RestaurantItemTemplate } from '../templates/templateRestaurant';

const Favorite = {
  async render() {
    return `
      <div id='explore-restaurant'>
        <h3 id='explore-restaurant__title'>Favorite Restaurant</h3>
        <div id='explore-restaurant__list' class='explore-restaurant__list'>
          <span class='loader' style='display: none;'></span>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#explore-restaurant__list');
    const loader = document.querySelector('.loader');
    try {
      loader.style.display = 'block';
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      loader.style.display = 'none';
      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = '<p style=\'color: black;\'>No restaurants available</p>';
        return;
      }
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += RestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      loader.style.display = 'none';
      restaurantsContainer.innerHTML = error;
      console.error('Error fetching data:', error);
    }
  },
};

export default Favorite;
