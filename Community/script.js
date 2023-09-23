document.addEventListener("DOMContentLoaded", function() {
    const postContent = document.getElementById("post-content");
    const postButton = document.getElementById("post-button");
    const mediaUpload = document.getElementById("media-upload");
    const postContainer = document.getElementById("post-container");

    postButton.addEventListener("click", function() {
        const content = postContent.value.trim();
        if (content !== "") {
            createPost(content);
            postContent.value = "";
        }
    });

    mediaUpload.addEventListener("change", function() {
        const mediaFile = mediaUpload.files[0];
        if (mediaFile) {
            const mediaType = mediaFile.type.split("/")[0]; // Get the media type (audio or video)
            const mediaURL = URL.createObjectURL(mediaFile);
            createMediaPost(mediaType, mediaURL);
            mediaUpload.value = ""; // Clear the input field
        }
    });

    function createPost(content) {
        const post = document.createElement("div");
        post.className = "post";
        post.innerHTML = `
            <p>${content}</p>
            <button class="like-button">Like</button>
            <button class="comment-button">Comment</button>
        `;
        postContainer.insertBefore(post, postContainer.firstChild);
        attachLikeButtonEventListener(post);
        attachCommentButtonEventListener(post);
    }

    function createMediaPost(mediaType, mediaURL) {
        const post = document.createElement("div");
        post.className = "post";
        if (mediaType === "audio") {
            post.innerHTML = `
                <audio controls>
                    <source src="${mediaURL}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <button class="like-button">Like</button>
                <button class="comment-button">Comment</button>
            `;
        } else if (mediaType === "video") {
            post.innerHTML = `
                <video controls width="100%">
                    <source src="${mediaURL}" type="video/mp4">
                    Your browser does not support the video element.
                </video>
                <button class="like-button">Like</button>
                <button class="comment-button">Comment</button>
            `;
        }
        postContainer.insertBefore(post, postContainer.firstChild);
        attachLikeButtonEventListener(post);
        attachCommentButtonEventListener(post);
    }

    function attachLikeButtonEventListener(post) {
        const likeButton = post.querySelector(".like-button");
        likeButton.addEventListener("click", function() {
            // Implement your like functionality here
            // You can increment the like count and update the UI accordingly
            // Example: const likeCount = parseInt(likeButton.dataset.likes) || 0;
            // Example: likeButton.dataset.likes = likeCount + 1;
            // Example: likeButton.textContent = `Like (${likeCount + 1})`;
        });
    }

    function attachCommentButtonEventListener(post) {
        const commentButton = post.querySelector(".comment-button");
        commentButton.addEventListener("click", function() {
            // Implement your comment functionality here
            // You can open a modal or a comment section for this post
        });
    }
});
