/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-card a', 5);
  I.seeElement('.restaurant-card a');
  const firstRestaurant = locate('.restaurant-card').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#explore-restaurant');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-card');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
