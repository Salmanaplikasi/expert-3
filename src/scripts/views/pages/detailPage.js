import UrlParser from '../../routes/urlParser';
import RestoDbSource from '../../data/restodbSource';
import { RestaurantDetailTemplate } from '../templates/templateRestaurant';
import LikeButtonInitiator from '../../utils/likeButtonInitiator';
import PostReview from '../../utils/postReview';

const Detail = {
  async render() {
    return `
      <div id='restaurant' class='restaurant'>
        <span class='loader' style='display: none;'></span>
      </div>
      <custom-form-review></custom-form-review>
      <div id='likeButtonContainer'></div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant');
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurant = await RestoDbSource.detailResto(url.id);
      loader.style.display = 'none';
      restaurantContainer.innerHTML = RestaurantDetailTemplate(restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city,
        },
      });

      const btnSubmitReview = document.querySelector('#btn-submit-review');
      const nameInput = document.querySelector('#input-name');
      const reviewInput = document.querySelector('#input-review');

      btnSubmitReview.addEventListener('click', async (e) => {
        e.preventDefault();

        await PostReview(url, nameInput.value, reviewInput.value);

        nameInput.value = '';
        reviewInput.value = '';
      });
    } catch (error) {
      loader.style.display = 'none';
      restaurantContainer.innerHTML = error;
      console.error('Error fetching data:', error);
    }
    const skipToContentLink = document.querySelector('.skip-to__content');
    skipToContentLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#restaurant');
      target.tabIndex = -1;
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  },
};

export default Detail;
