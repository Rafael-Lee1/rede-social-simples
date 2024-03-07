// script.js
function addPost() {
    const username = document.getElementById('username').value;
    const postContent = document.getElementById('postContent').value;
    if (username.trim() !== '' && postContent.trim() !== '') {
        const postsContainer = document.getElementById('posts');
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <strong>${username}:</strong>
            <p>${postContent}</p>
        `;
        postsContainer.appendChild(postDiv);
        document.getElementById('username').value = '';
        document.getElementById('postContent').value = '';
    }
}
