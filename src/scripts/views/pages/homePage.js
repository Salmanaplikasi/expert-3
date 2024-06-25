import RestoDbSource from '../../data/restodbSource';
import { RestaurantItemTemplate } from '../templates/templateRestaurant';

const Home = {
  async render() {
    return `
      <div id="content">
        <custom-hero></custom-hero>
      </div>
      <div id="explore-restaurant"> 
        <h3 class="explore-restaurant__title" tabindex="0">Explore Restaurant</h3>
        <div id="explore-restaurant__list" class="explore-restaurant__list">
          <span class="loader"></span>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#explore-restaurant__list');
    const loader = document.querySelector('.loader');
    try {
      loader.style.display = 'block';
      const restaurant = await RestoDbSource.homeResto();
      loader.style.display = 'none';
      if (restaurant.length === 0) {
        restaurantContainer.innerHTML = "<p style='color: black;'>No restaurants available</p>";
        return;
      }
      restaurant.forEach((restaurants) => {
        restaurantContainer.innerHTML += RestaurantItemTemplate(restaurants);
      });
    } catch (error) {
      loader.style.display = 'none';
      restaurantContainer.innerHTML = error;
      console.error('Error fetching data:', error);
    }
  },
};

export default Home;
