const post = JSON.parse(localStorage.getItem('selected_post'));
const post_div = document.createElement('div');
post_div.classList.add('post');
post_div.innerHTML = `<h2>Post ${post.id} details:</h2>
                      <p>UserID:${post.userId}</p>
                      <p>Title:${post.title}</p>
                      <p>Body:${post.body}</p>`;
document.body.appendChild(post_div);
async function load_comments(){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
        const comments = await response.json();
        const div_for_comments = document.createElement('div');
        div_for_comments.classList.add('comments_container')
        div_for_comments.innerHTML = `<h3>Post ${post.id} comments:</h3>`;
        comments.forEach(comment => {
            const comment_div = document.createElement('div');
            comment_div.classList.add('comment');
            comment_div.innerHTML = `<p><b>Comment's id:</b> ${comment.id}</p>
                                     <p><b>Name:</b> ${comment.name}</p>
                                     <p><b>Email:</b> ${comment.email}</p>
                                     <p><b>Comment's text:</b> ${comment.body}</p>`;
            div_for_comments.appendChild(comment_div);
        });
        document.body.appendChild(div_for_comments);
    }catch(error){
        console.error(`Error fetching comments: `, error);
    }
}

load_comments();




