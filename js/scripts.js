document.addEventListener("DOMContentLoaded", function () {
    const postContainer = document.querySelector('.post-container');

    // Función de ejemplo que simula datos de API para publicaciones recientes
    const fetchRecentPosts = async () => {
        const sampleData = [
            { platform: "Facebook", user: "cesfam.armandowilliams", text: "Publicación reciente en Facebook" },
            { platform: "Instagram", user: "tsuki5.a", text: "Publicación reciente en Instagram" },
            { platform: "Twitter", user: "User TW", text: "Publicación reciente en Twitter" }
        ];

        sampleData.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';

            postCard.innerHTML = `
                <div class="post-header">
                    <img src="icono_${post.platform.toLowerCase()}.png" alt="${post.platform}">
                    <div><strong>${post.user}</strong> - ${post.platform}</div>
                </div>
                <div class="post-content">${post.text}</div>
            `;

            postContainer.appendChild(postCard);
        });
    };

    fetchRecentPosts();
});


