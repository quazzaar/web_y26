async function loadComments() {
    const commentContainer = document.getElementById('commentContainer');
    const preloader = document.getElementById('preloader');
    const errorMessage = document.getElementById('errorMessage');

    preloader.style.display = 'block';
    commentContainer.innerHTML = '';

    try {
        const randomId = Math.random() < 0.5 ? 10 : 20;
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${randomId}`;

        const response = await fetch(url);
        const comments = await response.json();

        preloader.style.display = 'none';

        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                    <h3>${comment.id}</h3>
                    <h3>${comment.email}</h3>
                    <p>${comment.body}</p>
                `;
            commentContainer.appendChild(commentElement);
        });
    } catch (error) {
        preloader.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}

window.addEventListener('load', loadComments);