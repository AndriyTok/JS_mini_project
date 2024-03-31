const container = document.createElement('div');
container.classList.add('container')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then((users) => {
        users.forEach(user => {
            const user_div = document.createElement('div');
            user_div.classList.add('user')
            user_div.innerHTML = `<p> ID: ${user.id}<br> Name: ${user.name}</p>`;

            const button = document.createElement('button');
            button.classList.add('reddit-mono')
            button.innerText = 'More';
            button.addEventListener('click', ()=> {
                localStorage.setItem('selected_user', JSON.stringify(user));
                window.open('../user-details/user-details.html', '_blank');
            })

            user_div.appendChild(button);
            container.appendChild(user_div);
            }
        )
    });
document.body.appendChild(container);