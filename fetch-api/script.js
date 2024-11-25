const postsList = document.getElementById("posts-list");

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  postsList.innerHTML = posts
    .slice(0, 5) // Limit to 5 posts
    .map(post => `<li><strong>${post.title}</strong><p>${post.body}</p></li>`)
    .join("");
}

fetchPosts();
