const selected_user = JSON.parse(localStorage.getItem('selected_user'));
const user_div = document.createElement('div');
user_div.innerHTML = `
        <h2>Name: ${selected_user.name}<br>ID:${selected_user.id}</h2>
        <p>Username: ${selected_user.username}</p>
        <p>Email: ${selected_user.email}</p>
        <p>Address:</p>
        <p>Street: ${selected_user.address.street}</p>
        <p>Suite: ${selected_user.address.suite}</p>
        <p>City: ${selected_user.address.city}</p>
        <p>Zipcode: ${selected_user.address.zipcode}</p>
        <p>Geo:</p>
        <p>Lat: ${selected_user.address.geo.lat}</p>
        <p>Lng: ${selected_user.address.geo.lng}</p>
        <p>Phone: ${selected_user.phone}</p>
        <p>Website: ${selected_user.website}</p>
        <p>Company:</p>
        <p>Company's name: ${selected_user.company.name}</p>
        <p>Company's catchphrase: ${selected_user.company.catchPhrase}</p>
        <p>Company's bs: ${selected_user.company.bs}</p>
`;
document.body.appendChild(user_div);

const user_posts_button = document.createElement('button');
user_posts_button.innerText = 'Posts of current user';
user_posts_button.addEventListener('click', async()=> {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selected_user.id}/posts`);
        const posts = await response.json();
        const div_for_posts = document.createElement('div');
        div_for_posts.innerHTML = `<h3>Posts of ${selected_user.name}</h3>`
        posts.forEach(post => {
            const postLink = document.createElement('a');
            postLink.addEventListener('click', ()=>{
                localStorage.setItem('selected_post', JSON.stringify(post));
                window.open(`../post-details/post-details.html?postId=${post.id}`, '_blank');
            })
            postLink.innerText = post.title;
            postLink.style.display='block';
            div_for_posts.appendChild(postLink)
        });
        document.body.appendChild(div_for_posts);
    }catch (error){
        console.error('Error fetching posts:', error);
    }
})
user_div.appendChild(user_posts_button)