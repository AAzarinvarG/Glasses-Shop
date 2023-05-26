alert('')

let placeUserInformation = document.querySelector('#place-userInformation');

fetch('https://user-information-2415b-default-rtdb.firebaseio.com/userInformation.json') // api firebase
    .then(res => res.json())
    .then(res => {
        let userData = Object.entries(res);
        console.log(userData);

        userData.forEach((item) => {
            placeUserInformation.insertAdjacentHTML('beforeend', `          <div id="userInformation">
                                                                            <div id="header-name-email-information">
                                                                                <h2 id="user-name"> ${item[1].userName} </h2>
                                                                                <h4 id="user-email"> ${item[1].userEmail} </h4>
                                                                            </div>
                                                                            <p id="user-description"> ${item[1].userDescription} </p>
                                                                        </div>`);
        });
    })
    .catch(err => console.log('Error for Get Information !'));