import RestoDbSource from '../data/restodbSource';

const PostReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.detail-review');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="review-container">
      <div class="review">
        <p class="reviewer-name">${name}</p>
        <p class="review-date">${date}</p>
        <div class="reviewer-review">
        ${review}
      </div>
      </div>
    </div>
  `;

  try {
    const reviewResponse = await RestoDbSource.addRestoReview(dataInput);
    console.log(
      reviewResponse,
    );

    if (reviewContainer) {
      reviewContainer.innerHTML += newReview;
    } else {
      throw new Error('Review container not found');
    }
  } catch (error) {
    console.error('Error posting review:', error);
    throw error;
  }
};

export default PostReview;
