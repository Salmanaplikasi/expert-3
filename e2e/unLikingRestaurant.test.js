/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unlike Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
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
  const unlikedRestaurantName = await I.grabTextFrom('.restaurant-card');

  assert.strictEqual(firstRestaurantName, unlikedRestaurantName);

  I.seeElement('.restaurant-card');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
