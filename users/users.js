const container = document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then((users) => {
        users.forEach(user => {
            const user_div = document.createElement('div');
            user_div.innerHTML = `<p> ID: ${user.id}<br> Name: ${user.name}</p>`;

            const button = document.createElement('button');
            button.innerText = 'More';
            button.addEventListener('click', ()=> {
                localStorage.setItem('selected_user', JSON.stringify(user));
                window.open('user-details.html', '_blank');
            })

            user_div.appendChild(button);
            container.appendChild(user_div);
            }
        )
    });
document.body.appendChild(container);