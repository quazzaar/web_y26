function handleFormSubmit() {
    const reviewText = document.getElementById('reviewText').value;

    if (reviewText) {
        const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        savedReviews.push(reviewText);

        localStorage.setItem('reviews', JSON.stringify(savedReviews));
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.textContent = reviewText;

        document.getElementById('submittedReviews').appendChild(reviewElement);
        document.getElementById('reviewText').value = '';
    }
}

function loadReviews() {
    const savedReviews = JSON.parse(localStorage.getItem('reviews'));
    const reviewsContainer = document.getElementById('submittedReviews');

    if (savedReviews) {
        savedReviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.textContent = review;
            reviewsContainer.appendChild(reviewElement);
        });
    }
}

document.getElementById('feedbackForm').addEventListener('submit', handleFormSubmit);
window.addEventListener('DOMContentLoaded', loadReviews);