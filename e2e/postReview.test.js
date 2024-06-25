/* eslint-disable no-undef */

Feature('Posting Review');

Scenario('posting a review', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-card a', 5);
  I.seeElement('.restaurant-card a');
  I.click(locate('.restaurant-card').first());

  I.fillField('#input-name', 'John Doe');
  I.fillField('#input-review', 'This restaurant is awesome!');

  I.click('#btn-submit-review');
});
